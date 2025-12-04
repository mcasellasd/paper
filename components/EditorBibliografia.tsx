'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { bibliografia, type ReferenciaBibliografica } from '@/lib/bibliografia/index';
import { BookOpen, X, Plus, Sparkles, FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface EditorBibliografiaProps {
  initialContent?: string;
  onContentChange?: (content: string) => void;
}

export default function EditorBibliografia({ 
  initialContent = '', 
  onContentChange 
}: EditorBibliografiaProps) {
  const [contingut, setContingut] = useState(initialContent);
  const [suggeriments, setSuggeriments] = useState<ReferenciaBibliografica[]>([]);
  const [mostrarSuggeriments, setMostrarSuggeriments] = useState(false);
  const [posicioCursor, setPosicioCursor] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Detectar temes al text i trobar referències relacionades
  const detectarTemesIReferencies = useCallback((text: string) => {
    const textLower = text.toLowerCase();
    
    // Trobar referències que coincideixen amb el contingut
    const referenciesRellevants = bibliografia
      .map(ref => {
        let puntuacio = 0;
        
        // Puntuació per coincidències de temes
        ref.temes.forEach(tema => {
          const temaLower = tema.toLowerCase();
          if (textLower.includes(temaLower)) {
            puntuacio += 3;
          }
          // També buscar paraules del tema
          const paraulesTema = temaLower.split(/\s+/);
          paraulesTema.forEach(paraula => {
            if (paraula.length > 4 && textLower.includes(paraula)) {
              puntuacio += 1;
            }
          });
        });
        
        // Puntuació per coincidències de títol
        const titolLower = ref.titol.toLowerCase();
        if (textLower.includes(titolLower.substring(0, 30))) {
          puntuacio += 5;
        }
        
        // Puntuació per coincidències d'autors
        ref.autors.forEach(autor => {
          const nomAutor = autor.split(',')[0].toLowerCase().trim();
          if (nomAutor.length > 3 && textLower.includes(nomAutor)) {
            puntuacio += 4;
          }
        });
        
        // Puntuació per paraules clau al títol
        const paraulesTitol = titolLower.split(/\s+/);
        paraulesTitol.forEach(paraula => {
          if (paraula.length > 4 && textLower.includes(paraula)) {
            puntuacio += 1;
          }
        });
        
        // Puntuació per paraules clau al resum
        if (ref.resum) {
          const resumLower = ref.resum.toLowerCase();
          const paraulesResum = resumLower.split(/\s+/);
          paraulesResum.forEach(paraula => {
            if (paraula.length > 5 && textLower.includes(paraula)) {
              puntuacio += 0.5;
            }
          });
        }
        
        return { ref, puntuacio };
      })
      .filter(item => item.puntuacio > 0)
      .sort((a, b) => b.puntuacio - a.puntuacio)
      .slice(0, 5)
      .map(item => item.ref);
    
    return referenciesRellevants;
  }, []);

  // Actualitzar suggeriments quan canvia el contingut
  useEffect(() => {
    if (contingut.length > 50) { // Només buscar si hi ha prou text
      const referencies = detectarTemesIReferencies(contingut);
      setSuggeriments(referencies);
      setMostrarSuggeriments(referencies.length > 0);
    } else {
      setSuggeriments([]);
      setMostrarSuggeriments(false);
    }
  }, [contingut, detectarTemesIReferencies]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nouContingut = e.target.value;
    setContingut(nouContingut);
    setPosicioCursor(e.target.selectionStart);
    onContentChange?.(nouContingut);
  };

  const inserirCita = (ref: ReferenciaBibliografica, format: 'curta' | 'completa' = 'curta') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const text = contingut;
    const posicio = posicioCursor;
    
    let cita: string;
    if (format === 'curta') {
      // Format curt: (Autor, Any)
      const primerAutor = ref.autors[0].split(',')[0].trim();
      cita = `(${primerAutor}, ${ref.any})`;
    } else {
      // Format complet: (Autor, Any. Títol)
      const primerAutor = ref.autors[0].split(',')[0].trim();
      const titolCurt = ref.titol.length > 50 ? ref.titol.substring(0, 50) + '...' : ref.titol;
      cita = `(${primerAutor}, ${ref.any}. ${titolCurt})`;
    }
    
    const nouText = 
      text.slice(0, posicio) + 
      cita + 
      ' ' + 
      text.slice(posicio);
    
    setContingut(nouText);
    onContentChange?.(nouText);
    
    // Restaurar focus i posició del cursor
    setTimeout(() => {
      textarea.focus();
      const novaPosicio = posicio + cita.length + 1;
      textarea.setSelectionRange(novaPosicio, novaPosicio);
      setPosicioCursor(novaPosicio);
    }, 0);
  };

  const inserirCitacioCompleta = (ref: ReferenciaBibliografica) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const text = contingut;
    const posicio = posicioCursor;
    
    const citacio = `\n\n[${ref.citacio}]\n\n`;
    const nouText = 
      text.slice(0, posicio) + 
      citacio + 
      text.slice(posicio);
    
    setContingut(nouText);
    onContentChange?.(nouText);
    
    setTimeout(() => {
      textarea.focus();
      const novaPosicio = posicio + citacio.length;
      textarea.setSelectionRange(novaPosicio, novaPosicio);
      setPosicioCursor(novaPosicio);
    }, 0);
  };

  // Detectar referències utilitzades al text
  const referenciesUtilitzades = useMemo(() => {
    const textLower = contingut.toLowerCase();
    return bibliografia.filter(ref => {
      // Buscar per nom d'autor
      const primerAutor = ref.autors[0]?.split(',')[0].toLowerCase().trim();
      if (primerAutor && textLower.includes(primerAutor)) {
        return true;
      }
      // Buscar per any
      if (textLower.includes(`(${ref.any})`) || textLower.includes(`(${ref.any}.`)) {
        return true;
      }
      // Buscar per títol
      const titolCurt = ref.titol.substring(0, 20).toLowerCase();
      if (textLower.includes(titolCurt)) {
        return true;
      }
      return false;
    });
  }, [contingut]);

  return (
    <div className="relative">
      {/* Editor de text */}
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">
            Editor de Text amb Suggeriments de Bibliografia
          </label>
          {mostrarSuggeriments && suggeriments.length > 0 && (
            <span className="text-xs text-blue-600 flex items-center gap-1 animate-pulse">
              <Sparkles className="h-3 w-3" />
              {suggeriments.length} referència{suggeriments.length !== 1 ? 's' : ''} suggerida{suggeriments.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        
        <textarea
          ref={textareaRef}
          value={contingut}
          onChange={handleTextChange}
          onSelect={(e) => {
            const target = e.target as HTMLTextAreaElement;
            setPosicioCursor(target.selectionStart);
          }}
          className="w-full min-h-[400px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm leading-relaxed resize-y"
          placeholder="Escriu el teu text aquí... L'editor detectarà automàticament temes i suggerirà referències bibliogràfiques rellevants basades en el contingut que escrius."
        />
        
        {/* Contador de paraules */}
        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
          <span>{contingut.split(/\s+/).filter(w => w.length > 0).length} paraules</span>
          <span>{contingut.length} caràcters</span>
        </div>
      </div>

      {/* Panell de suggeriments */}
      {mostrarSuggeriments && suggeriments.length > 0 && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              Referències Suggerides
            </h3>
            <button
              onClick={() => setMostrarSuggeriments(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Ocultar suggeriments"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {suggeriments.map((ref) => (
              <div
                key={ref.id}
                className="bg-white border border-gray-200 rounded-md p-3 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {ref.titol}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {ref.autors.join(', ')} ({ref.any})
                    </p>
                    {ref.resum && (
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                        {ref.resum}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {ref.temes.slice(0, 3).map((tema) => (
                        <span
                          key={tema}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700"
                        >
                          {tema}
                        </span>
                      ))}
                      {ref.temes.length > 3 && (
                        <span className="text-xs text-gray-500">+{ref.temes.length - 3} més</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-4 flex flex-col gap-2 flex-shrink-0">
                    <button
                      onClick={() => inserirCita(ref, 'curta')}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap"
                      title="Inserir citació curta (Autor, Any)"
                    >
                      <Plus className="h-3 w-3" />
                      Cita curta
                    </button>
                    <button
                      onClick={() => inserirCita(ref, 'completa')}
                      className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors whitespace-nowrap"
                      title="Inserir citació completa (Autor, Any. Títol)"
                    >
                      Cita completa
                    </button>
                    <button
                      onClick={() => inserirCitacioCompleta(ref)}
                      className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors whitespace-nowrap"
                      title="Inserir citació completa al final"
                    >
                      Citació completa
                    </button>
                    {ref.fitxer && (
                      <Link
                        href={`/api/biblioteca/${ref.fitxer}`}
                        target="_blank"
                        className="px-3 py-1.5 text-xs font-medium text-green-600 bg-green-50 hover:bg-green-100 rounded-md transition-colors flex items-center gap-1 justify-center whitespace-nowrap"
                        title="Descarregar PDF"
                      >
                        <Download className="h-3 w-3" />
                        PDF
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Llista de referències utilitzades */}
      {referenciesUtilitzades.length > 0 && (
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Referències Detectades al Text ({referenciesUtilitzades.length})
          </h3>
          <div className="space-y-2">
            {referenciesUtilitzades.map((ref) => (
              <div
                key={ref.id}
                className="bg-white border border-gray-200 rounded-md p-2 text-xs"
              >
                <span className="font-medium text-gray-900">{ref.autors[0]}</span>
                {' '}({ref.any}) - <span className="text-gray-600">{ref.titol}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

