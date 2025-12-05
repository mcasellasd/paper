'use client';

import Link from 'next/link';
import { ArrowLeft, Send, Bot, User, BookOpen, Loader2, MessageSquare, Folder, FolderPlus, Save, X, Edit2, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { bibliografia, obtenirReferencia, type ReferenciaBibliografica } from '@/lib/bibliografia/index';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Missatge {
  id: string;
  tipus: 'usuari' | 'assistent';
  contingut: string;
  timestamp: Date;
  referencies?: ReferenciaBibliografica[];
}

interface Xat {
  id: string;
  titol: string;
  missatges: Missatge[];
  dataCreacio: Date;
  dataModificacio: Date;
  carpetaId?: string;
}

interface Carpeta {
  id: string;
  nom: string;
  dataCreacio: Date;
  expanded?: boolean;
}

const missatgeInicial: Missatge = {
  id: '1',
  tipus: 'assistent',
  contingut: 'Hola! Sóc el teu assistent de bibliografia. Puc ajudar-te a trobar referències, respondre preguntes sobre els documents de la bibliografia, comentar sobre temes relacionats i resoldre dubtes. Què et puc ajudar?',
  timestamp: new Date()
};

// Funcions de gestió de localStorage
const STORAGE_KEY_CARPETES = 'xat-carpetes';
const STORAGE_KEY_XATS = 'xat-xats';

const getCarpetes = (): Carpeta[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY_CARPETES);
    return data ? JSON.parse(data).map((c: any) => ({
      ...c,
      dataCreacio: new Date(c.dataCreacio),
      expanded: c.expanded ?? false
    })) : [];
  } catch {
    return [];
  }
};

const saveCarpetes = (carpetes: Carpeta[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CARPETES, JSON.stringify(carpetes));
  } catch (e) {
    console.error('Error guardant carpetes:', e);
  }
};

const getXats = (): Xat[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY_XATS);
    return data ? JSON.parse(data).map((x: any) => ({
      ...x,
      missatges: x.missatges.map((m: any) => ({
        ...m,
        timestamp: new Date(m.timestamp)
      })),
      dataCreacio: new Date(x.dataCreacio),
      dataModificacio: new Date(x.dataModificacio)
    })) : [];
  } catch {
    return [];
  }
};

const saveXats = (xats: Xat[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_XATS, JSON.stringify(xats));
  } catch (e) {
    console.error('Error guardant xats:', e);
  }
};

export default function XatPage() {
  const tNav = useTranslations('nav');
  const [missatges, setMissatges] = useState<Missatge[]>([missatgeInicial]);
  const [inputMissatge, setInputMissatge] = useState('');
  const [carregant, setCarregant] = useState(false);
  const [carpetes, setCarpetes] = useState<Carpeta[]>([]);
  const [xats, setXats] = useState<Xat[]>([]);
  const [xatActualId, setXatActualId] = useState<string | null>(null);
  const [mostrarPanell, setMostrarPanell] = useState(false);
  const [mostrarNovaCarpeta, setMostrarNovaCarpeta] = useState(false);
  const [nomNovaCarpeta, setNomNovaCarpeta] = useState('');
  const [carpetaRenombrant, setCarpetaRenombrant] = useState<string | null>(null);
  const [nouNomCarpeta, setNouNomCarpeta] = useState('');
  const [guardant, setGuardant] = useState(false);
  
  const missatgesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputNovaCarpetaRef = useRef<HTMLInputElement>(null);

  // Carregar dades al iniciar
  useEffect(() => {
    setCarpetes(getCarpetes());
    setXats(getXats());
  }, []);

  // Desplaçar-se al final quan hi ha nous missatges
  useEffect(() => {
    missatgesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [missatges]);

  // Focus al input de nova carpeta
  useEffect(() => {
    if (mostrarNovaCarpeta && inputNovaCarpetaRef.current) {
      inputNovaCarpetaRef.current.focus();
    }
  }, [mostrarNovaCarpeta]);

  // Funcions de gestió de carpetes
  const crearCarpeta = () => {
    if (!nomNovaCarpeta.trim()) return;
    
    const novaCarpeta: Carpeta = {
      id: Date.now().toString(),
      nom: nomNovaCarpeta.trim(),
      dataCreacio: new Date(),
      expanded: true
    };
    
    const novesCarpetes = [...carpetes, novaCarpeta];
    setCarpetes(novesCarpetes);
    saveCarpetes(novesCarpetes);
    setNomNovaCarpeta('');
    setMostrarNovaCarpeta(false);
  };

  const renombrarCarpeta = (carpetaId: string) => {
    if (!nouNomCarpeta.trim()) {
      setCarpetaRenombrant(null);
      return;
    }
    
    const novesCarpetes = carpetes.map(c => 
      c.id === carpetaId ? { ...c, nom: nouNomCarpeta.trim() } : c
    );
    setCarpetes(novesCarpetes);
    saveCarpetes(novesCarpetes);
    setCarpetaRenombrant(null);
    setNouNomCarpeta('');
  };

  const eliminarCarpeta = (carpetaId: string) => {
    if (!confirm('Segur que vols eliminar aquesta carpeta i tots els seus xats?')) return;
    
    // Eliminar carpeta
    const novesCarpetes = carpetes.filter(c => c.id !== carpetaId);
    setCarpetes(novesCarpetes);
    saveCarpetes(novesCarpetes);
    
    // Eliminar xats de la carpeta
    const nousXats = xats.filter(x => x.carpetaId !== carpetaId);
    setXats(nousXats);
    saveXats(nousXats);
  };

  const toggleExpandirCarpeta = (carpetaId: string) => {
    const novesCarpetes = carpetes.map(c => 
      c.id === carpetaId ? { ...c, expanded: !c.expanded } : c
    );
    setCarpetes(novesCarpetes);
    saveCarpetes(novesCarpetes);
  };

  // Funcions de gestió de xats
  const guardarXat = () => {
    if (missatges.length <= 1) {
      alert('No hi ha res per guardar. Fes alguna pregunta primer.');
      return;
    }

    setGuardant(true);
    
    const titol = missatges.find(m => m.tipus === 'usuari')?.contingut.substring(0, 50) || 'Xat sense títol';
    const nouXat: Xat = {
      id: xatActualId || Date.now().toString(),
      titol,
      missatges: [...missatges],
      dataCreacio: xatActualId 
        ? xats.find(x => x.id === xatActualId)?.dataCreacio || new Date()
        : new Date(),
      dataModificacio: new Date(),
      carpetaId: undefined
    };

    let nousXats: Xat[];
    if (xatActualId) {
      nousXats = xats.map(x => x.id === xatActualId ? nouXat : x);
    } else {
      nousXats = [...xats, nouXat];
      setXatActualId(nouXat.id);
    }

    setXats(nousXats);
    saveXats(nousXats);
    
    setTimeout(() => {
      setGuardant(false);
      alert('Xat guardat correctament!');
    }, 300);
  };

  const guardarXatEnCarpeta = (carpetaId: string) => {
    if (missatges.length <= 1) {
      alert('No hi ha res per guardar. Fes alguna pregunta primer.');
      return;
    }

    const titol = missatges.find(m => m.tipus === 'usuari')?.contingut.substring(0, 50) || 'Xat sense títol';
    const nouXat: Xat = {
      id: Date.now().toString(),
      titol,
      missatges: [...missatges],
      dataCreacio: new Date(),
      dataModificacio: new Date(),
      carpetaId
    };

    const nousXats = [...xats, nouXat];
    setXats(nousXats);
    saveXats(nousXats);
    setXatActualId(null);
    setMissatges([missatgeInicial]);
    alert('Xat guardat a la carpeta!');
  };

  const carregarXat = (xatId: string) => {
    const xat = xats.find(x => x.id === xatId);
    if (xat) {
      setMissatges(xat.missatges);
      setXatActualId(xatId);
      setMostrarPanell(false);
    }
  };

  const eliminarXat = (xatId: string) => {
    if (!confirm('Segur que vols eliminar aquest xat?')) return;
    
    const nousXats = xats.filter(x => x.id !== xatId);
    setXats(nousXats);
    saveXats(nousXats);
    
    if (xatActualId === xatId) {
      setXatActualId(null);
      setMissatges([missatgeInicial]);
    }
  };

  const nouXat = () => {
    setMissatges([missatgeInicial]);
    setXatActualId(null);
    setMostrarPanell(false);
  };

  // Funció per buscar referències rellevants basant-se en la pregunta
  const buscarReferenciesRellevants = (pregunta: string): ReferenciaBibliografica[] => {
    const preguntaLower = pregunta.toLowerCase();
    const paraulesClau = preguntaLower.split(/\s+/).filter(p => p.length > 3);
    
    return bibliografia
      .map(ref => {
        let puntuacio = 0;
        const textComplet = `${ref.titol} ${ref.citacio} ${ref.resum || ''} ${ref.temes.join(' ')}`.toLowerCase();
        
        paraulesClau.forEach(paraula => {
          if (textComplet.includes(paraula)) {
            puntuacio += 1;
          }
        });
        
        if (ref.autors.some(autor => preguntaLower.includes(autor.toLowerCase()))) {
          puntuacio += 3;
        }
        
        ref.temes.forEach(tema => {
          if (preguntaLower.includes(tema.toLowerCase())) {
            puntuacio += 2;
          }
        });
        
        return { ref, puntuacio };
      })
      .filter(item => item.puntuacio > 0)
      .sort((a, b) => b.puntuacio - a.puntuacio)
      .slice(0, 5)
      .map(item => item.ref);
  };

  // Generar resposta basada en la pregunta i les referències trobades
  const generarResposta = (pregunta: string, referencies: ReferenciaBibliografica[]): string => {
    const preguntaLower = pregunta.toLowerCase();
    
    if (preguntaLower.includes('quant') || preguntaLower.includes('quantes') || preguntaLower.includes('quants')) {
      if (preguntaLower.includes('referència') || preguntaLower.includes('document') || preguntaLower.includes('bibliografia')) {
        return `La bibliografia conté ${bibliografia.length} referències bibliogràfiques en total.`;
      }
      if (preguntaLower.includes('autor')) {
        const totsAutors = Array.from(new Set(bibliografia.flatMap(ref => ref.autors)));
        return `Hi ha ${totsAutors.length} autors diferents a la bibliografia.`;
      }
      if (preguntaLower.includes('tema') || preguntaLower.includes('temat')) {
        const totsTemes = Array.from(new Set(bibliografia.flatMap(ref => ref.temes)));
        return `La bibliografia cobreix ${totsTemes.length} temes diferents.`;
      }
    }
    
    if (preguntaLower.includes('qui') || preguntaLower.includes('autor') || preguntaLower.includes('ha escrit')) {
      if (referencies.length > 0) {
        const autors = referencies.flatMap(ref => ref.autors);
        const autorsUnics = Array.from(new Set(autors));
        return `He trobat ${referencies.length} referència(s) rellevant(s). Alguns autors relacionats són: ${autorsUnics.slice(0, 5).join(', ')}.`;
      }
      const totsAutors = Array.from(new Set(bibliografia.flatMap(ref => ref.autors)));
      return `Alguns autors destacats de la bibliografia són: ${totsAutors.slice(0, 10).join(', ')}. Pots preguntar sobre un autor específic per veure les seves obres.`;
    }
    
    if (preguntaLower.includes('què') || preguntaLower.includes('explica') || preguntaLower.includes('parla') || preguntaLower.includes('diu')) {
      if (referencies.length > 0) {
        const primeraRef = referencies[0];
        let resposta = `Sobre aquest tema, he trobat la referència "${primeraRef.titol}" de ${primeraRef.autors.join(', ')} (${primeraRef.any}).\n\n`;
        if (primeraRef.resum) {
          resposta += primeraRef.resum;
        } else {
          resposta += 'Aquesta referència tracta sobre temes relacionats amb la teva pregunta.';
        }
        if (referencies.length > 1) {
          resposta += `\n\nTambé hi ha ${referencies.length - 1} referència(s) més relacionada(s) amb aquest tema.`;
        }
        return resposta;
      }
    }
    
    if (preguntaLower.includes('recomana') || preguntaLower.includes('sugger') || preguntaLower.includes('consulta') || preguntaLower.includes('llegeix')) {
      if (referencies.length > 0) {
        const recomanacions = referencies.slice(0, 3).map(ref => 
          `- "${ref.titol}" de ${ref.autors.join(', ')} (${ref.any})`
        ).join('\n');
        return `Et recomano les següents referències:\n\n${recomanacions}\n\nAquestes referències són rellevants per al teu tema d'interès. Pots fer clic a qualsevol referència per veure'n més detalls.`;
      }
    }
    
    if (preguntaLower.includes('any') || preguntaLower.includes('quan') || preguntaLower.includes('data')) {
      if (referencies.length > 0) {
        const anys = referencies.map(ref => ref.any).filter((any, index, arr) => arr.indexOf(any) === index);
        return `He trobat referències dels anys: ${anys.join(', ')}.`;
      }
    }
    
    if (referencies.length > 0) {
      const llistaReferencies = referencies.slice(0, 3).map(ref => 
        `- **${ref.titol}** de ${ref.autors.join(', ')} (${ref.any})`
      ).join('\n');
      
      return `He trobat ${referencies.length} referència(s) relacionada(s) amb la teva pregunta:\n\n${llistaReferencies}\n\n${referencies.length > 3 ? `I ${referencies.length - 3} referència(s) més.` : ''}\n\nPots fer clic a qualsevol referència per veure'n més detalls o fer-me una pregunta més específica.`;
    }
    
    return `No he trobat referències específiques relacionades amb la teva pregunta. Pots intentar:\n\n- Reformular la pregunta amb altres paraules\n- Fer una pregunta més general sobre la bibliografia\n- Cercar directament a la pàgina de bibliografia utilitzant els filtres disponibles\n- Preguntar sobre un autor, tema o any específic`;
  };

  const enviarMissatge = async () => {
    if (!inputMissatge.trim() || carregant) return;

    const pregunta = inputMissatge.trim();
    setInputMissatge('');
    setCarregant(true);

    const missatgeUsuari: Missatge = {
      id: Date.now().toString(),
      tipus: 'usuari',
      contingut: pregunta,
      timestamp: new Date()
    };
    setMissatges(prev => [...prev, missatgeUsuari]);

    await new Promise(resolve => setTimeout(resolve, 500));

    const referenciesRellevants = buscarReferenciesRellevants(pregunta);
    const resposta = generarResposta(pregunta, referenciesRellevants);

    const missatgeAssistent: Missatge = {
      id: (Date.now() + 1).toString(),
      tipus: 'assistent',
      contingut: resposta,
      timestamp: new Date(),
      referencies: referenciesRellevants.length > 0 ? referenciesRellevants : undefined
    };
    
    setMissatges(prev => [...prev, missatgeAssistent]);
    setCarregant(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMissatge();
    }
  };

  const xatsPerCarpeta = (carpetaId: string) => {
    return xats.filter(x => x.carpetaId === carpetaId);
  };

  const xatsSenseCarpeta = xats.filter(x => !x.carpetaId);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex">
        {/* Panell lateral de carpetes i xats */}
        <div className={`fixed left-0 top-0 h-full bg-gray-50 border-r border-gray-200 z-40 transform transition-transform duration-300 ${
          mostrarPanell ? 'translate-x-0' : '-translate-x-full'
        } w-80 lg:translate-x-0 lg:static lg:z-auto`}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Carpetes i Xats</h2>
                <button
                  onClick={() => setMostrarPanell(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={nouXat}
                  className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Nou Xat
                </button>
                <button
                  onClick={guardarXat}
                  disabled={guardant || missatges.length <= 1}
                  className="px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Guardar xat"
                >
                  <Save className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Nova carpeta */}
              {mostrarNovaCarpeta && (
                <div className="p-3 bg-white border border-blue-300 rounded-lg">
                  <input
                    ref={inputNovaCarpetaRef}
                    type="text"
                    value={nomNovaCarpeta}
                    onChange={(e) => setNomNovaCarpeta(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') crearCarpeta();
                      if (e.key === 'Escape') {
                        setMostrarNovaCarpeta(false);
                        setNomNovaCarpeta('');
                      }
                    }}
                    placeholder="Nom de la carpeta..."
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={crearCarpeta}
                      className="flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Crear
                    </button>
                    <button
                      onClick={() => {
                        setMostrarNovaCarpeta(false);
                        setNomNovaCarpeta('');
                      }}
                      className="flex-1 px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      Cancel·lar
                    </button>
                  </div>
                </div>
              )}

              {/* Botó crear carpeta */}
              {!mostrarNovaCarpeta && (
                <button
                  onClick={() => setMostrarNovaCarpeta(true)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FolderPlus className="h-4 w-4" />
                  Nova Carpeta
                </button>
              )}

              {/* Carpetes */}
              {carpetes.map(carpeta => {
                const xatsCarpeta = xatsPerCarpeta(carpeta.id);
                return (
                  <div key={carpeta.id} className="bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between p-2 hover:bg-gray-50">
                      <div className="flex items-center gap-2 flex-1">
                        <button
                          onClick={() => toggleExpandirCarpeta(carpeta.id)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {carpeta.expanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        {carpetaRenombrant === carpeta.id ? (
                          <input
                            type="text"
                            value={nouNomCarpeta}
                            onChange={(e) => setNouNomCarpeta(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') renombrarCarpeta(carpeta.id);
                              if (e.key === 'Escape') {
                                setCarpetaRenombrant(null);
                                setNouNomCarpeta('');
                              }
                            }}
                            onBlur={() => renombrarCarpeta(carpeta.id)}
                            autoFocus
                            className="flex-1 px-2 py-1 text-sm border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <>
                            <Folder className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-900 flex-1">{carpeta.nom}</span>
                            <span className="text-xs text-gray-500">({xatsCarpeta.length})</span>
                          </>
                        )}
                      </div>
                      {carpetaRenombrant !== carpeta.id && (
                        <div className="flex gap-1">
                          <button
                            onClick={() => {
                              setCarpetaRenombrant(carpeta.id);
                              setNouNomCarpeta(carpeta.nom);
                            }}
                            className="p-1 text-gray-500 hover:text-blue-600"
                            title="Renombrar"
                          >
                            <Edit2 className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => eliminarCarpeta(carpeta.id)}
                            className="p-1 text-gray-500 hover:text-red-600"
                            title="Eliminar"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    {carpeta.expanded && (
                      <div className="pl-6 pr-2 pb-2 space-y-1">
                        {xatsCarpeta.length === 0 ? (
                          <p className="text-xs text-gray-500 italic py-2">Cap xat en aquesta carpeta</p>
                        ) : (
                          xatsCarpeta.map(xat => (
                            <div
                              key={xat.id}
                              className="flex items-center justify-between group p-2 rounded hover:bg-gray-100"
                            >
                              <button
                                onClick={() => carregarXat(xat.id)}
                                className="flex-1 text-left text-xs text-gray-700 truncate"
                              >
                                {xat.titol}
                              </button>
                              <button
                                onClick={() => eliminarXat(xat.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-600"
                                title="Eliminar xat"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          ))
                        )}
                        <button
                          onClick={() => guardarXatEnCarpeta(carpeta.id)}
                          className="w-full mt-2 px-2 py-1 text-xs text-blue-600 border border-blue-300 rounded hover:bg-blue-50"
                        >
                          + Guardar xat actual aquí
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Xats sense carpeta */}
              {xatsSenseCarpeta.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div className="p-2 font-medium text-sm text-gray-700">Xats sense carpeta</div>
                  <div className="pl-2 pr-2 pb-2 space-y-1">
                    {xatsSenseCarpeta.map(xat => (
                      <div
                        key={xat.id}
                        className="flex items-center justify-between group p-2 rounded hover:bg-gray-100"
                      >
                        <button
                          onClick={() => carregarXat(xat.id)}
                          className="flex-1 text-left text-xs text-gray-700 truncate"
                        >
                          {xat.titol}
                        </button>
                        <button
                          onClick={() => eliminarXat(xat.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-600"
                          title="Eliminar xat"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overlay per mòbil */}
        {mostrarPanell && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setMostrarPanell(false)}
          />
        )}

        {/* Contingut principal */}
        <div className="flex-1 lg:ml-0">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
                <li>/</li>
                <li className="text-gray-900">Xat de Bibliografia</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex items-center gap-3">
                    <MessageSquare className="h-10 w-10 text-blue-600" />
                    Xat de Bibliografia
                  </h1>
                  <p className="mt-4 text-xl text-gray-600">
                    Fes preguntes sobre la bibliografia, demana recomanacions, resol dubtes i explora les referències disponibles
                  </p>
                </div>
                <button
                  onClick={() => setMostrarPanell(!mostrarPanell)}
                  className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  <Folder className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Xat */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col" style={{ height: '600px' }}>
              {/* Historial de missatges */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {missatges.map((missatge) => (
                  <div
                    key={missatge.id}
                    className={`flex gap-4 ${missatge.tipus === 'usuari' ? 'justify-end' : 'justify-start'}`}
                  >
                    {missatge.tipus === 'assistent' && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                    )}
                    
                    <div className={`flex flex-col max-w-[80%] ${missatge.tipus === 'usuari' ? 'items-end' : 'items-start'}`}>
                      <div
                        className={`rounded-lg px-4 py-3 ${
                          missatge.tipus === 'usuari'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{missatge.contingut}</p>
                      </div>
                      
                      {missatge.referencies && missatge.referencies.length > 0 && (
                        <div className="mt-2 space-y-2 w-full">
                          <p className="text-xs text-gray-500 mb-2">Referències relacionades:</p>
                          {missatge.referencies.map((ref) => (
                            <Link
                              key={ref.id}
                              href={`/bibliografia`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (typeof window !== 'undefined') {
                                  sessionStorage.setItem('referenciaSeleccionada', ref.id);
                                  window.location.href = `/bibliografia`;
                                }
                              }}
                              className="block p-2 bg-white border border-gray-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
                            >
                              <p className="text-xs font-medium text-gray-900">{ref.titol}</p>
                              <p className="text-xs text-gray-600">{ref.autors.join(', ')} ({ref.any})</p>
                            </Link>
                          ))}
                        </div>
                      )}
                      
                      <span className="text-xs text-gray-400 mt-1">
                        {missatge.timestamp.toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    {missatge.tipus === 'usuari' && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                
                {carregant && (
                  <div className="flex gap-4 justify-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-3">
                      <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
                    </div>
                  </div>
                )}
                
                <div ref={missatgesEndRef} />
              </div>

              {/* Input de missatge */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMissatge}
                    onChange={(e) => setInputMissatge(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Fes una pregunta sobre la bibliografia..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={carregant}
                  />
                  <button
                    onClick={guardarXat}
                    disabled={guardant || missatges.length <= 1}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    title="Guardar xat"
                  >
                    <Save className="h-4 w-4" />
                  </button>
                  <button
                    onClick={enviarMissatge}
                    disabled={!inputMissatge.trim() || carregant}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Enviar
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Prem Enter per enviar. Pots preguntar sobre referències, autors, temes o demanar recomanacions.
                </p>
              </div>
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
                <BookOpen className="h-4 w-4" />
                Veure bibliografia completa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}