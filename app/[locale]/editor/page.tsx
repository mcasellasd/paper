'use client';

import { useState, useEffect } from 'react';
import EditorBibliografia from '@/components/EditorBibliografia';
import { Download, Save, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function EditorPage() {
  const tNav = useTranslations('nav');
  const [contingut, setContingut] = useState('');
  const [guardat, setGuardat] = useState(false);
  const [mostrarConfirmacio, setMostrarConfirmacio] = useState(false);

  // Carregar contingut guardat al carregar la pàgina
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const contingutGuardat = localStorage.getItem('editor-contingut');
      if (contingutGuardat) {
        setContingut(contingutGuardat);
      }
    }
  }, []);

  const handleContentChange = (nouContingut: string) => {
    setContingut(nouContingut);
    setGuardat(false);
  };

  const guardarText = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('editor-contingut', contingut);
      setGuardat(true);
      setMostrarConfirmacio(true);
      setTimeout(() => {
        setGuardat(false);
        setMostrarConfirmacio(false);
      }, 3000);
    }
  };

  const descarregarText = () => {
    if (!contingut) return;
    
    const blob = new Blob([contingut], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `text-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const descarregarMarkdown = () => {
    if (!contingut) return;
    
    const blob = new Blob([contingut], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `text-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const netejarText = () => {
    if (window.confirm('Estàs segur que vols esborrar tot el contingut? Aquesta acció no es pot desfer.')) {
      setContingut('');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('editor-contingut');
      }
      setGuardat(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">Editor</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Editor de Text amb Bibliografia
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Escriu el teu text i obtén suggeriments automàtics de referències bibliogràfiques basades en el contingut que escrius
          </p>
        </div>

        {/* Barra d'eines */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={guardarText}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 rounded-md transition-colors"
            >
              <Save className="h-4 w-4" />
              {guardat ? 'Guardat!' : 'Guardar'}
            </button>
            {mostrarConfirmacio && (
              <span className="text-xs text-green-600">
                ✓ Guardat a localStorage
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={descarregarText}
              disabled={!contingut}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4" />
              TXT
            </button>
            <button
              onClick={descarregarMarkdown}
              disabled={!contingut}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileText className="h-4 w-4" />
              MD
            </button>
            {contingut && (
              <button
                onClick={netejarText}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 border border-red-200 rounded-md transition-colors"
              >
                Netejar
              </button>
            )}
          </div>
        </div>

        {/* Editor */}
        <EditorBibliografia
          initialContent={contingut}
          onContentChange={handleContentChange}
        />

        {/* Informació */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Com funciona?</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Escriu el teu text i l'editor analitzarà automàticament el contingut</li>
            <li>Quan detecti temes relacionats amb la bibliografia, mostrarà suggeriments de referències</li>
            <li>Fes clic a "Cita curta" o "Cita completa" per inserir cites al text</li>
            <li>El teu text es guarda automàticament a localStorage mentre escrius</li>
            <li>Pots descarregar el text en format TXT o Markdown</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {tNav('home')}
          </Link>
          <Link
            href="/bibliografia"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Veure bibliografia completa
            <FileText className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

