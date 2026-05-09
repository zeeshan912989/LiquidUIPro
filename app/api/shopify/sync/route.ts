import { NextResponse } from 'next/server';

let cachedToken: string | null = null;
let tokenExpiresAt: number = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiresAt - 60000) {
    return cachedToken;
  }

  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Client ID or Secret missing');
  }

  const response = await fetch(`https://${domain}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token request failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in || 3600) * 1000;
  return cachedToken;
}

export async function POST(req: Request) {
  try {
    const { fileName, content } = await req.json();
    const templateId = fileName.split('/').pop()?.replace('.liquid', '') || '';
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const themeId = process.env.SHOPIFY_THEME_ID;

    if (!themeId) {
      return NextResponse.json({ error: 'Theme ID not configured' }, { status: 400 });
    }

    const token = await getAccessToken();

    const url = `https://${domain}/admin/api/2024-01/themes/${themeId}/assets.json`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'X-Shopify-Access-Token': token!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        asset: {
          key: fileName,
          value: content,
        },
      }),
    });

    // Step 2: Update index.json to show this section
    const indexUrl = `https://${domain}/admin/api/2024-01/themes/${themeId}/assets.json`;
    await fetch(indexUrl, {
      method: 'PUT',
      headers: {
        'X-Shopify-Access-Token': token!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        asset: {
          key: 'templates/index.json',
          value: JSON.stringify({
            sections: {
              main: { type: templateId, settings: {} }
            },
            order: ["main"]
          })
        },
      }),
    });

    return NextResponse.json({ success: true, asset: data.asset });
  } catch (error: any) {
    console.error('Sync Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET to list themes
export async function GET() {
  try {
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const token = await getAccessToken();

    const url = `https://${domain}/admin/api/2024-01/themes.json`;

    const response = await fetch(url, {
      headers: { 'X-Shopify-Access-Token': token! },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
