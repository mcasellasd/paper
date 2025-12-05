'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Bot, User, BookOpen, Loader2, MessageSquare } from 'lucide-react';
import { bibliografia, obtenirReferencia, type ReferenciaBibliografica } from '@/lib/bibliografia/index';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';

interface Missatge {
  id: string;
  tipus: 'usuari' | 'assistent';
  contingut: string;
  timestamp: Date;
  referencies?: ReferenciaBibliografica[];
}

export default function XatPage() {
  const tNav = useTranslations('nav');
  const [missatges, setMissatges] = useState<Missatge[]>([
    {
      id: '1',
      tipus: 'assistent',
      contingut: 'Hola! Sóc el teu assistent de bibliografia. Puc ajudar-te a trobar referències, respondre preguntes sobre els documents de la bibliografia, comentar sobre temes relacionats i resoldre dubtes. Què et puc ajudar?',
      timestamp: new Date()
    }
  ]);
  const [inputMissatge, setInputMissatge] = useState('');
  const [carregant, setCarregant] = useState(false);
  const missatgesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Memoitzar valors constants que no canvien
  const totalReferencies = useMemo(() => bibliografia.length, []);
  const totsAutors = useMemo(() => Array.from(new Set(bibliografia.flatMap(ref => ref.autors))), []);
  const totsTemes = useMemo(() => Array.from(new Set(bibliografia.flatMap(ref => ref.temes))), []);

  // Desplaçar-se al final quan hi ha nous missatges
  useEffect(() => {
    missatgesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [missatges]);

  // Funció per buscar referències rellevants basant-se en la pregunta (memoitzada)
  const buscarReferenciesRellevants = useCallback((pregunta: string): ReferenciaBibliografica[] => {
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
        
        // Puntuació extra si coincideix amb autors
        if (ref.autors.some(autor => preguntaLower.includes(autor.toLowerCase()))) {
          puntuacio += 3;
        }
        
        // Puntuació extra si coincideix amb temes
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
  }, []);

  // Generar resposta basada en la pregunta i les referències trobades (memoitzada)
  const generarResposta = useCallback((pregunta: string, referencies: ReferenciaBibliografica[]): string => {
    const preguntaLower = pregunta.toLowerCase();
    
    // Respostes per a preguntes específiques sobre quantitat
    if (preguntaLower.includes('quant') || preguntaLower.includes('quantes') || preguntaLower.includes('quants')) {
      if (preguntaLower.includes('referència') || preguntaLower.includes('document') || preguntaLower.includes('bibliografia')) {
        return `La bibliografia conté ${totalReferencies} referències bibliogràfiques en total.`;
      }
      if (preguntaLower.includes('autor')) {
        return `Hi ha ${totsAutors.length} autors diferents a la bibliografia.`;
      }
      if (preguntaLower.includes('tema') || preguntaLower.includes('temat')) {
        return `La bibliografia cobreix ${totsTemes.length} temes diferents.`;
      }
    }
    
    // Preguntes sobre autors
    if (preguntaLower.includes('qui') || preguntaLower.includes('autor') || preguntaLower.includes('ha escrit')) {
      if (referencies.length > 0) {
        const autors = referencies.flatMap(ref => ref.autors);
        const autorsUnics = Array.from(new Set(autors));
        return `He trobat ${referencies.length} referència(s) rellevant(s). Alguns autors relacionats són: ${autorsUnics.slice(0, 5).join(', ')}.`;
      }
      // Si no hi ha referències específiques, llistar alguns autors destacats
      return `Alguns autors destacats de la bibliografia són: ${totsAutors.slice(0, 10).join(', ')}. Pots preguntar sobre un autor específic per veure les seves obres.`;
    }
    
    // Preguntes sobre què parla o explica
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
    
    // Preguntes sobre recomanacions
    if (preguntaLower.includes('recomana') || preguntaLower.includes('sugger') || preguntaLower.includes('consulta') || preguntaLower.includes('llegeix')) {
      if (referencies.length > 0) {
        const recomanacions = referencies.slice(0, 3).map(ref => 
          `- "${ref.titol}" de ${ref.autors.join(', ')} (${ref.any})`
        ).join('\n');
        return `Et recomano les següents referències:\n\n${recomanacions}\n\nAquestes referències són rellevants per al teu tema d'interès. Pots fer clic a qualsevol referència per veure'n més detalls.`;
      }
    }
    
    // Preguntes sobre anys
    if (preguntaLower.includes('any') || preguntaLower.includes('quan') || preguntaLower.includes('data')) {
      if (referencies.length > 0) {
        const anys = referencies.map(ref => ref.any).filter((any, index, arr) => arr.indexOf(any) === index);
        return `He trobat referències dels anys: ${anys.join(', ')}.`;
      }
    }
    
    // Resposta genèrica amb referències trobades
    if (referencies.length > 0) {
      const llistaReferencies = referencies.slice(0, 3).map(ref => 
        `- **${ref.titol}** de ${ref.autors.join(', ')} (${ref.any})`
      ).join('\n');
      
      return `He trobat ${referencies.length} referència(s) relacionada(s) amb la teva pregunta:\n\n${llistaReferencies}\n\n${referencies.length > 3 ? `I ${referencies.length - 3} referència(s) més.` : ''}\n\nPots fer clic a qualsevol referència per veure'n més detalls o fer-me una pregunta més específica.`;
    }
    
    // Resposta quan no es troben referències
    return `No he trobat referències específiques relacionades amb la teva pregunta. Pots intentar:\n\n- Reformular la pregunta amb altres paraules\n- Fer una pregunta més general sobre la bibliografia\n- Cercar directament a la pàgina de bibliografia utilitzant els filtres disponibles\n- Preguntar sobre un autor, tema o any específic`;
  }, [totalReferencies, totsAutors, totsTemes]);

  const enviarMissatge = useCallback(async () => {
    if (!inputMissatge.trim() || carregant) return;

    const pregunta = inputMissatge.trim();
    setInputMissatge('');
    setCarregant(true);

    // Afegir missatge de l'usuari
    const missatgeUsuari: Missatge = {
      id: Date.now().toString(),
      tipus: 'usuari',
      contingut: pregunta,
      timestamp: new Date()
    };
    setMissatges(prev => [...prev, missatgeUsuari]);

    // Simular processament (en el futur, aquí es faria una crida a l'API d'IA)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Buscar referències rellevants
    const referenciesRellevants = buscarReferenciesRellevants(pregunta);
    
    // Generar resposta
    const resposta = generarResposta(pregunta, referenciesRellevants);

    // Afegir resposta de l'assistent
    const missatgeAssistent: Missatge = {
      id: (Date.now() + 1).toString(),
      tipus: 'assistent',
      contingut: resposta,
      timestamp: new Date(),
      referencies: referenciesRellevants.length > 0 ? referenciesRellevants : undefined
    };
    
    setMissatges(prev => [...prev, missatgeAssistent]);
    setCarregant(false);
  }, [inputMissatge, carregant, buscarReferenciesRellevants, generarResposta]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMissatge();
    }
  }, [enviarMissatge]);

  return (
    <div className="bg-white min-h-screen">
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex items-center gap-3">
            <MessageSquare className="h-10 w-10 text-blue-600" />
            Xat de Bibliografia
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Fes preguntes sobre la bibliografia, demana recomanacions, resol dubtes i explora les referències disponibles
          </p>
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
                  
                  {/* Mostrar referències si n'hi ha */}
                  {missatge.referencies && missatge.referencies.length > 0 && (
                    <div className="mt-2 space-y-2 w-full">
                      <p className="text-xs text-gray-500 mb-2">Referències relacionades:</p>
                      {missatge.referencies.map((ref) => (
                        <Link
                          key={ref.id}
                          href={`/bibliografia`}
                          onClick={(e) => {
                            e.preventDefault();
                            // Guardar la referència seleccionada a localStorage per obrir-la directament
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

        {/* Suggeriments de preguntes */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Preguntes d'exemple:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Quantes referències hi ha sobre llenguatge jurídic?',
              'Recomana'm articles sobre IA i dret',
              'Quins autors han escrit sobre accessibilitat jurídica?',
              'Què diu sobre el llenguatge clar?'
            ].map((pregunta, index) => (
              <button
                key={index}
                onClick={() => {
                  setInputMissatge(pregunta);
                  inputRef.current?.focus();
                }}
                className="px-3 py-1.5 text-xs bg-white border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 transition-colors text-gray-700"
              >
                {pregunta}
              </button>
            ))}
          </div>
        </div>

        {/* Informació */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Com funciona?</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Fes preguntes sobre la bibliografia i les referències disponibles</li>
            <li>Demana recomanacions de documents sobre temes específics</li>
            <li>Consulta informació sobre autors, anys o temes</li>
            <li>Les referències relacionades apareixeran automàticament</li>
            <li>Fes clic a qualsevol referència per veure'n més detalls</li>
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
            <BookOpen className="h-4 w-4" />
            Veure bibliografia completa
          </Link>
        </div>
      </div>
    </div>
  );
}
