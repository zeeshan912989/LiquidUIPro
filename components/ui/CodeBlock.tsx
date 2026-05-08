"use client"

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'html' }: CodeBlockProps) {
  const [html, setHtml] = useState<string>('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const highlight = async () => {
      try {
        const out = await codeToHtml(code, {
          lang: language,
          theme: 'github-dark',
        })
        setHtml(out)
      } catch (e) {
        const escaped = code
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
        setHtml(`<pre><code>${escaped}</code></pre>`)
      }
    }
    highlight()
  }, [code, language])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative h-full">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 z-10 rounded-lg bg-white/10 p-2 text-white opacity-0 transition-opacity hover:bg-white/20 group-hover:opacity-100"
        title="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </button>
      
      <div 
        className="h-full overflow-auto rounded-xl bg-[#0d1117] p-6 text-sm [&>pre]:bg-transparent! [&>pre]:p-0!"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
