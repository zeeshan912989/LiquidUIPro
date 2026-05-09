'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Editor } from '@monaco-editor/react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Code2, 
  Eye, 
  Download, 
  Check, 
  ChevronLeft,
  Zap,
  Loader2,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import JSZip from 'jszip';
import { templateRegistry } from '../registry';

type ViewMode = 'desktop' | 'tablet' | 'mobile';
type TabMode = 'preview' | 'code' | 'live';
type CodeFormat = 'react' | 'liquid';

export default function TemplateViewer() {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [tabMode, setTabMode] = useState<TabMode>('preview');
  const [codeFormat, setCodeFormat] = useState<CodeFormat>('liquid');
  const [copied, setCopied] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  const template = templateRegistry.find(t => t.id === id);

  if (!template) return <div>Template not found</div>;

  const currentCode = codeFormat === 'liquid' ? template.liquid : template.react;

  const copyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadBundle = async () => {
    const zip = new JSZip();
    zip.file(`sections/${template.id}.liquid`, template.liquid);
    if (template.snippets) {
      Object.entries(template.snippets).forEach(([name, content]) => {
        zip.file(`snippets/${name}.liquid`, content as string);
      });
    }
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `liquidui-${template.id}.zip`;
    link.click();
  };

  const handleLiveSync = async () => {
    setSyncing(true);
    try {
      const response = await fetch('/api/shopify/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: `sections/${template.id}.liquid`,
          content: template.liquid
        })
      });

      if (!response.ok) throw new Error('Sync failed');
      
      // Refresh iframe
      setPreviewKey(prev => prev + 1);
    } catch (error) {
      console.error(error);
      alert('Sync failed. Check console.');
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col">
      {/* Top Header */}
      <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/templates" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="font-bold text-sm tracking-tight">{template.title}</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{template.category}</p>
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setTabMode('preview')}
            className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2", 
              tabMode === 'preview' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black")}
          >
            <Eye className="h-3.5 w-3.5" /> Preview
          </button>
          <button 
            onClick={() => setTabMode('live')}
            className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2", 
              tabMode === 'live' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black")}
          >
            <Zap className="h-3.5 w-3.5 text-amber-500" /> Live Editor
          </button>
          <button 
            onClick={() => setTabMode('code')}
            className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2", 
              tabMode === 'code' ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black")}
          >
            <Code2 className="h-3.5 w-3.5" /> Code
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={downloadBundle}
            className="px-4 py-2 bg-[#C9A96E] text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2"
          >
            <Download className="h-3.5 w-3.5" /> Download Zip
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {tabMode === 'preview' && (
          <div className="flex-1 flex flex-col bg-[#F3EFE9]">
            {/* View Mode Bar */}
            <div className="h-12 border-b bg-white flex items-center justify-center gap-2">
              <button 
                onClick={() => setViewMode('desktop')}
                className={cn("p-2 rounded-lg transition-all", viewMode === 'desktop' ? "bg-black text-white" : "hover:bg-gray-100 text-gray-400")}
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('tablet')}
                className={cn("p-2 rounded-lg transition-all", viewMode === 'tablet' ? "bg-black text-white" : "hover:bg-gray-100 text-gray-400")}
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('mobile')}
                className={cn("p-2 rounded-lg transition-all", viewMode === 'mobile' ? "bg-black text-white" : "hover:bg-gray-100 text-gray-400")}
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-8 flex justify-center items-start">
              <div 
                className={cn(
                  "bg-white shadow-2xl transition-all duration-500 overflow-hidden",
                  viewMode === 'desktop' ? "w-full" : 
                  viewMode === 'tablet' ? "w-[768px]" : "w-[375px]"
                )}
                style={{ minHeight: 'calc(100vh - 200px)' }}
              >
                {template.component && <template.component />}
              </div>
            </div>
          </div>
        )}

        {tabMode === 'live' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Editor Side */}
            <div className="w-1/2 flex flex-col border-r bg-[#1e1e1e]">
              <div className="h-12 border-b border-white/10 flex items-center justify-between px-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                   <Code2 className="h-3 w-3" /> {template.id}.liquid
                </span>
                <button 
                  onClick={handleLiveSync}
                  disabled={syncing}
                  className="flex items-center gap-2 px-3 py-1 bg-amber-500 text-black rounded text-[10px] font-black uppercase tracking-tighter hover:bg-white transition-all disabled:opacity-50"
                >
                  {syncing ? <Loader2 className="h-3 w-3 animate-spin" /> : <RefreshCw className="h-3 w-3" />}
                  {syncing ? 'Syncing...' : 'Sync to Shopify'}
                </button>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  defaultLanguage="html"
                  theme="vs-dark"
                  value={template.liquid}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    fontFamily: 'JetBrains Mono',
                    padding: { top: 20 }
                  }}
                />
              </div>
            </div>

            {/* Real Preview Side */}
            <div className="w-1/2 bg-[#F3EFE9] flex flex-col">
              <div className="h-12 border-b bg-white flex items-center justify-between px-4">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                   <Eye className="h-3 w-3" /> Real Shopify Preview
                 </span>
                 <a 
                   href={`http://localhost:9292/?section_id=${template.id}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-[10px] font-bold text-amber-500 hover:underline flex items-center gap-1"
                 >
                   Open in New Tab <ExternalLink className="h-3 w-3" />
                 </a>
              </div>
              <div className="flex-1 bg-white">
                <iframe 
                  key={previewKey}
                  src={`http://localhost:9292/?section_id=${template.id}`}
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        )}

        {tabMode === 'code' && (
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            <div className="h-12 border-b border-white/10 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCodeFormat('liquid')}
                  className={cn("text-[10px] font-black uppercase tracking-widest pb-4 pt-4 border-b-2 transition-all", 
                    codeFormat === 'liquid' ? "border-amber-500 text-white" : "border-transparent text-gray-500")}
                >
                  Shopify Liquid
                </button>
                <button 
                  onClick={() => setCodeFormat('react')}
                  className={cn("text-[10px] font-black uppercase tracking-widest pb-4 pt-4 border-b-2 transition-all", 
                    codeFormat === 'react' ? "border-amber-500 text-white" : "border-transparent text-gray-500")}
                >
                  React / Tailwind
                </button>
              </div>
              <button 
                onClick={copyCode}
                className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] font-bold text-white transition-all"
              >
                {copied ? <Check className="h-3 w-3 text-green-500" /> : <Code2 className="h-3 w-3" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="flex-1">
              <Editor
                height="100%"
                defaultLanguage={codeFormat === 'liquid' ? 'html' : 'typescript'}
                theme="vs-dark"
                value={currentCode}
                options={{
                  readOnly: true,
                  fontSize: 14,
                  minimap: { enabled: false },
                  fontFamily: 'JetBrains Mono',
                  padding: { top: 20 }
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
