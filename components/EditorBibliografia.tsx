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
  const [suggeriments, setSuggeriments] = useState<SuggerimentReferencia[]>([]);
  const [mostrarSuggeriments, setMostrarSuggeriments] = useState(false);
  const [posicioCursor, setPosicioCursor] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Historial per undo/redo
  const [historial, setHistorial] = useState<string[]>([initialContent]);
  const [indexHistorial, setIndexHistorial] = useState(0);

  // Interfície per a suggeriment amb fragment de text
  interface SuggerimentReferencia {
    ref: ReferenciaBibliografica;
    puntuacio: number;
    fragmentText?: string;
    posicioInici?: number;
    posicioFi?: number;
  }

  // Detectar temes al text i trobar referències relacionades amb fragments
  const detectarTemesIReferencies = useCallback((text: string): SuggerimentReferencia[] => {
    const textLower = text.toLowerCase();
    const linies = text.split('\n');
    
    // Trobar referències que coincideixen amb el contingut
    const referenciesRellevants: SuggerimentReferencia[] = bibliografia
      .map(ref => {
        let puntuacio = 0;
        let millorFragment = '';
        let millorPosicioInici = -1;
        let millorPosicioFi = -1;
        let millorPuntuacioFragment = 0;
        
        // Buscar coincidències de temes i trobar el fragment
        ref.temes.forEach(tema => {
          const temaLower = tema.toLowerCase();
          const indexTema = textLower.indexOf(temaLower);
          
          if (indexTema !== -1) {
            puntuacio += 3;
            
            // Trobar el fragment de text al voltant de la coincidència
            const contextInici = Math.max(0, indexTema - 100);
            const contextFi = Math.min(text.length, indexTema + tema.length + 100);
            const fragment = text.substring(contextInici, contextFi);
            const puntuacioFragment = tema.length * 3;
            
            if (puntuacioFragment > millorPuntuacioFragment) {
              millorFragment = fragment.trim();
              millorPosicioInici = contextInici;
              millorPosicioFi = contextFi;
              millorPuntuacioFragment = puntuacioFragment;
            }
          }
          
          // També buscar paraules del tema
          const paraulesTema = temaLower.split(/\s+/);
          paraulesTema.forEach(paraula => {
            if (paraula.length > 4) {
              const indexParaula = textLower.indexOf(paraula);
              if (indexParaula !== -1) {
                puntuacio += 1;
                
                if (millorPuntuacioFragment === 0) {
                  const contextInici = Math.max(0, indexParaula - 100);
                  const contextFi = Math.min(text.length, indexParaula + paraula.length + 100);
                  millorFragment = text.substring(contextInici, contextFi).trim();
                  millorPosicioInici = contextInici;
                  millorPosicioFi = contextFi;
                }
              }
            }
          });
        });
        
        // Buscar coincidències d'autors
        ref.autors.forEach(autor => {
          const nomAutor = autor.split(',')[0].toLowerCase().trim();
          if (nomAutor.length > 3) {
            const indexAutor = textLower.indexOf(nomAutor);
            if (indexAutor !== -1) {
              puntuacio += 4;
              
              if (puntuacio > millorPuntuacioFragment) {
                const contextInici = Math.max(0, indexAutor - 100);
                const contextFi = Math.min(text.length, indexAutor + nomAutor.length + 100);
                millorFragment = text.substring(contextInici, contextFi).trim();
                millorPosicioInici = contextInici;
                millorPosicioFi = contextFi;
                millorPuntuacioFragment = puntuacio;
              }
            }
          }
        });
        
        // Buscar coincidències de títol
        const titolLower = ref.titol.toLowerCase();
        const indexTitol = textLower.indexOf(titolLower.substring(0, 30));
        if (indexTitol !== -1) {
          puntuacio += 5;
          
          if (puntuacio > millorPuntuacioFragment) {
            const contextInici = Math.max(0, indexTitol - 100);
            const contextFi = Math.min(text.length, indexTitol + 30 + 100);
            millorFragment = text.substring(contextInici, contextFi).trim();
            millorPosicioInici = contextInici;
            millorPosicioFi = contextFi;
            millorPuntuacioFragment = puntuacio;
          }
        }
        
        // Buscar paraules clau al títol
        const paraulesTitol = titolLower.split(/\s+/);
        paraulesTitol.forEach(paraula => {
          if (paraula.length > 4) {
            const indexParaula = textLower.indexOf(paraula);
            if (indexParaula !== -1) {
              puntuacio += 1;
              
              if (millorPuntuacioFragment === 0) {
                const contextInici = Math.max(0, indexParaula - 100);
                const contextFi = Math.min(text.length, indexParaula + paraula.length + 100);
                millorFragment = text.substring(contextInici, contextFi).trim();
                millorPosicioInici = contextInici;
                millorPosicioFi = contextFi;
              }
            }
          }
        });
        
        // Si no s'ha trobat un fragment específic, buscar per línies que continguin paraules clau
        if (!millorFragment && puntuacio > 0) {
          linies.forEach((linia, indexLinia) => {
            const liniaLower = linia.toLowerCase();
            let puntuacioLinia = 0;
            
            ref.temes.forEach(tema => {
              if (liniaLower.includes(tema.toLowerCase())) {
                puntuacioLinia += 3;
              }
            });
            
            if (puntuacioLinia > 0) {
              const posicioInici = text.indexOf(linia);
              if (posicioInici !== -1) {
                millorFragment = linia.trim();
                millorPosicioInici = posicioInici;
                millorPosicioFi = posicioInici + linia.length;
              }
            }
          });
        }
        
        return { 
          ref, 
          puntuacio,
          fragmentText: millorFragment || undefined,
          posicioInici: millorPosicioInici >= 0 ? millorPosicioInici : undefined,
          posicioFi: millorPosicioFi >= 0 ? millorPosicioFi : undefined
        };
      })
      .filter(item => item.puntuacio > 0)
      .sort((a, b) => b.puntuacio - a.puntuacio)
      .slice(0, 5);
    
    return referenciesRellevants;
  }, []);

  // Actualitzar el contingut quan canvia initialContent
  useEffect(() => {
    setContingut(initialContent);
    historialRef.current = [initialContent];
    indexHistorialRef.current = 0;
    ultimCanviRef.current = initialContent;
    setHistorial([initialContent]);
    setIndexHistorial(0);
  }, [initialContent]);
  
  // Ref per evitar dependències circulars a l'historial
  const historialRef = useRef<string[]>([initialContent]);
  const indexHistorialRef = useRef(0);
  const ultimCanviRef = useRef<string>(initialContent);
  
  // Afegir al historial quan canvia el contingut (amb debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const historialActual = historialRef.current;
      const indexActual = indexHistorialRef.current;
      
      // No afegir si és el mateix que l'últim canvi
      if (contingut === ultimCanviRef.current) {
        return;
      }
      
      // No afegir si és el mateix que l'entrada actual de l'historial
      if (contingut === historialActual[indexActual]) {
        return;
      }
      
      // Eliminar entrades futures si estem al mig de l'historial
      const nouHistorial = historialActual.slice(0, indexActual + 1);
      nouHistorial.push(contingut);
      
      // Limitar l'historial a 50 entrades
      if (nouHistorial.length > 50) {
        nouHistorial.shift();
      }
      
      historialRef.current = nouHistorial;
      indexHistorialRef.current = nouHistorial.length - 1;
      ultimCanviRef.current = contingut;
      
      setHistorial([...nouHistorial]);
      setIndexHistorial(nouHistorial.length - 1);
    }, 500); // Debounce de 500ms
    
    return () => clearTimeout(timeoutId);
  }, [contingut]);

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
  
  // Funció per aplicar negreta al text seleccionat
  const aplicarNegreta = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const textSeleccionat = contingut.substring(start, end);
    
    if (textSeleccionat) {
      // Si el text ja està en negreta, eliminar-lo
      if (textSeleccionat.startsWith('**') && textSeleccionat.endsWith('**')) {
        const textSenseNegreta = textSeleccionat.slice(2, -2);
        const nouText = 
          contingut.substring(0, start) + 
          textSenseNegreta + 
          contingut.substring(end);
        
        setContingut(nouText);
        onContentChange?.(nouText);
        
        // Restaurar selecció
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start, start + textSenseNegreta.length);
        }, 0);
      } else {
        // Afegir negreta
        const textAmbNegreta = `**${textSeleccionat}**`;
        const nouText = 
          contingut.substring(0, start) + 
          textAmbNegreta + 
          contingut.substring(end);
        
        setContingut(nouText);
        onContentChange?.(nouText);
        
        // Restaurar selecció
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start, start + textAmbNegreta.length);
        }, 0);
      }
    } else {
      // Si no hi ha text seleccionat, inserir **
      const nouText = 
        contingut.substring(0, start) + 
        '****' + 
        contingut.substring(end);
      
      setContingut(nouText);
      onContentChange?.(nouText);
      
      // Posar el cursor entre els asteriscs
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + 2, start + 2);
      }, 0);
    }
  }, [contingut, onContentChange]);
  
  // Funció per desfer
  const desfer = useCallback(() => {
    const historialActual = historialRef.current;
    const indexActual = indexHistorialRef.current;
    
    if (indexActual > 0) {
      const nouIndex = indexActual - 1;
      const contingutAnterior = historialActual[nouIndex];
      setContingut(contingutAnterior);
      indexHistorialRef.current = nouIndex;
      setIndexHistorial(nouIndex);
      ultimCanviRef.current = contingutAnterior;
      onContentChange?.(contingutAnterior);
      
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  }, [onContentChange]);
  
  // Funció per refer
  const refer = useCallback(() => {
    const historialActual = historialRef.current;
    const indexActual = indexHistorialRef.current;
    
    if (indexActual < historialActual.length - 1) {
      const nouIndex = indexActual + 1;
      const contingutPosterior = historialActual[nouIndex];
      setContingut(contingutPosterior);
      indexHistorialRef.current = nouIndex;
      setIndexHistorial(nouIndex);
      ultimCanviRef.current = contingutPosterior;
      onContentChange?.(contingutPosterior);
      
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  }, [onContentChange]);
  
  // Gestionar tecles de drecera
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Command+Z (Mac) o Ctrl+Z (Windows/Linux) per desfer
    if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      desfer();
      return;
    }
    
    // Command+Shift+Z (Mac) o Ctrl+Y (Windows/Linux) per refer
    if ((e.metaKey || e.ctrlKey) && (e.shiftKey && e.key === 'z' || e.key === 'y')) {
      e.preventDefault();
      refer();
      return;
    }
    
    // Command+B per negreta
    if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
      e.preventDefault();
      aplicarNegreta();
      return;
    }
  }, [desfer, refer, aplicarNegreta]);

  const inserirCita = (ref: ReferenciaBibliografica, format: 'curta' | 'completa' = 'curta', posicioEspecifica?: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const text = contingut;
    const posicio = posicioEspecifica !== undefined ? posicioEspecifica : posicioCursor;
    
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
    
    // Trobar el final de la frase o paraula per inserir la cita
    let posicioInsercio = posicio;
    if (posicioEspecifica !== undefined) {
      // Si s'ha especificat una posició, buscar el final de la frase més propera
      const textDespres = text.substring(posicio);
      const matchPunt = textDespres.match(/^[^.!?]*[.!?]/);
      if (matchPunt) {
        posicioInsercio = posicio + matchPunt[0].length;
      } else {
        // Si no hi ha punt, buscar el final de la paraula
        const matchParaula = textDespres.match(/^\S*\s*/);
        if (matchParaula) {
          posicioInsercio = posicio + matchParaula[0].length;
        }
      }
    }
    
    const nouText = 
      text.slice(0, posicioInsercio) + 
      ' ' + cita + 
      text.slice(posicioInsercio);
    
    setContingut(nouText);
    onContentChange?.(nouText);
    
    // Restaurar focus i posició del cursor
    setTimeout(() => {
      textarea.focus();
      const novaPosicio = posicioInsercio + cita.length + 2;
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
          onKeyDown={handleKeyDown}
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
            {suggeriments.map((suggeriment) => {
              const ref = suggeriment.ref;
              return (
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
                      
                      {/* Mostrar fragment de text on s'hauria d'afegir la cita */}
                      {suggeriment.fragmentText && (
                        <div className="mb-3 p-2 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
                          <p className="text-xs font-medium text-gray-700 mb-1">
                            📍 Ubicació suggerida per la cita:
                          </p>
                          <p className="text-xs text-gray-600 italic leading-relaxed">
                            "{suggeriment.fragmentText.length > 150 
                              ? suggeriment.fragmentText.substring(0, 150) + '...' 
                              : suggeriment.fragmentText}"
                          </p>
                        </div>
                      )}
                      
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
                      {suggeriment.posicioInici !== undefined ? (
                        <>
                          <button
                            onClick={() => inserirCita(ref, 'curta', suggeriment.posicioFi)}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap"
                            title="Inserir citació curta a la ubicació suggerida"
                          >
                            <Plus className="h-3 w-3" />
                            Cita curta aquí
                          </button>
                          <button
                            onClick={() => inserirCita(ref, 'completa', suggeriment.posicioFi)}
                            className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors whitespace-nowrap"
                            title="Inserir citació completa a la ubicació suggerida"
                          >
                            Cita completa aquí
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => inserirCita(ref, 'curta')}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap"
                            title="Inserir citació curta (Autor, Any) a la posició del cursor"
                          >
                            <Plus className="h-3 w-3" />
                            Cita curta
                          </button>
                          <button
                            onClick={() => inserirCita(ref, 'completa')}
                            className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors whitespace-nowrap"
                            title="Inserir citació completa (Autor, Any. Títol) a la posició del cursor"
                          >
                            Cita completa
                          </button>
                        </>
                      )}
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
              );
            })}
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

