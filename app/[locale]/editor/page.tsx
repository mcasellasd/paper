'use client';

import { useState, useEffect } from 'react';
import EditorBibliografia from '@/components/EditorBibliografia';
import { Download, Save, FileText, ArrowLeft, FolderOpen, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const paginesDisponibles = [
  { id: 'introduccio', nom: 'Introducció', ruta: '/introduccio' },
  { id: 'estat-art', nom: 'Estat de l\'Art', ruta: '/estat-art' },
  { id: 'marc-regulatori', nom: 'Marc Regulatori', ruta: '/marc-regulatori' },
  { id: 'ia-accessibilitat', nom: 'IA i Accessibilitat', ruta: '/ia-accessibilitat' },
  { id: 'casos-estudi', nom: 'Casos d\'Estudi', ruta: '/casos-estudi' },
  { id: 'beneficis-desafiaments', nom: 'Beneficis i Desafiaments', ruta: '/beneficis-desafiaments' },
  { id: 'conclusions', nom: 'Conclusions', ruta: '/conclusions' },
];

export default function EditorPage() {
  const tNav = useTranslations('nav');
  const [contingut, setContingut] = useState('');
  const [guardat, setGuardat] = useState(false);
  const [mostrarConfirmacio, setMostrarConfirmacio] = useState(false);
  const [paginaSeleccionada, setPaginaSeleccionada] = useState<string>('');
  const [carregant, setCarregant] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setPaginaSeleccionada('');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('editor-contingut');
        localStorage.removeItem('editor-pagina');
      }
      setGuardat(false);
    }
  };

  const carregarPagina = async (paginaId: string) => {
    setCarregant(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/contingut?pagina=${paginaId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error carregant la pàgina');
      }
      
      const data = await response.json();
      
      console.log('Dades rebudes de l\'API:', { 
        pagina: data.pagina, 
        tipus: data.tipus,
        longitud: data.contingut?.length || 0,
        mostra: data.contingut?.substring(0, 100) || 'buit'
      });
      
      // Carregar el contingut (markdown o text extret)
      const contingutACarregar = data.contingut || '';
      
      if (!contingutACarregar || contingutACarregar.trim().length === 0) {
        setError('El contingut està buit. Potser la pàgina no té contingut o hi ha hagut un error en extreure\'l.');
      } else {
        setError(null);
      }
      
      setContingut(contingutACarregar);
      setPaginaSeleccionada(paginaId);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('editor-contingut', contingutACarregar);
        localStorage.setItem('editor-pagina', paginaId);
      }
      
      // Si s'ha creat un nou fitxer markdown, mostrar un missatge informatiu
      if (data.creat) {
        // El missatge es mostrarà a través de la confirmació
      }
      
      setGuardat(false); // No marcar com guardat quan es carrega
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconegut');
      console.error('Error carregant pàgina:', err);
    } finally {
      setCarregant(false);
    }
  };

  const guardarPagina = async () => {
    if (!paginaSeleccionada) {
      // Si no hi ha pàgina seleccionada, guardar només a localStorage
      guardarText();
      return;
    }

    setCarregant(true);
    setError(null);

    try {
      const response = await fetch('/api/contingut', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pagina: paginaSeleccionada,
          contingut: contingut,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error guardant la pàgina');
      }

      const data = await response.json();
      setGuardat(true);
      setMostrarConfirmacio(true);
      setTimeout(() => {
        setGuardat(false);
        setMostrarConfirmacio(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconegut');
      console.error('Error guardant pàgina:', err);
    } finally {
      setCarregant(false);
    }
  };

  // Carregar pàgina guardada al carregar el component
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const paginaGuardada = localStorage.getItem('editor-pagina');
      const contingutGuardat = localStorage.getItem('editor-contingut');
      
      if (paginaGuardada && contingutGuardat) {
        setPaginaSeleccionada(paginaGuardada);
        setContingut(contingutGuardat);
      }
    }
  }, []);

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

        {/* Selector de pàgina */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Editar contingut de pàgina:
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={paginaSeleccionada}
              onChange={(e) => {
                if (e.target.value) {
                  carregarPagina(e.target.value);
                } else {
                  setPaginaSeleccionada('');
                  setContingut('');
                }
              }}
              className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={carregant}
            >
              <option value="">-- Selecciona una pàgina --</option>
              {paginesDisponibles.map((pagina) => (
                <option key={pagina.id} value={pagina.id}>
                  {pagina.nom}
                </option>
              ))}
            </select>
            {paginaSeleccionada && (
              <Link
                href={paginesDisponibles.find(p => p.id === paginaSeleccionada)?.ruta || '#'}
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-md transition-colors"
              >
                <FolderOpen className="h-4 w-4" />
                Veure pàgina
              </Link>
            )}
            {carregant && (
              <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
            )}
          </div>
          {error && (
            <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-600">
              {error}
            </div>
          )}
          {paginaSeleccionada && contingut && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">
              ✓ Contingut carregat. Pots editar el text i guardar els canvis.
            </div>
          )}
        </div>

        {/* Barra d'eines */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={paginaSeleccionada ? guardarPagina : guardarText}
              disabled={carregant || !contingut}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-4 w-4" />
              {carregant ? 'Guardant...' : guardat ? 'Guardat!' : paginaSeleccionada ? 'Guardar pàgina' : 'Guardar'}
            </button>
            {mostrarConfirmacio && (
              <span className="text-xs text-green-600">
                ✓ {paginaSeleccionada ? 'Pàgina guardada!' : 'Guardat a localStorage'}
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

