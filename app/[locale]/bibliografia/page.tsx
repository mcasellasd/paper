'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Calendar, Tag, FileText, Search, Filter, ExternalLink, Copy, Check, Download } from 'lucide-react';
import { bibliografia, obtenirReferencia, type ReferenciaBibliografica } from '@/lib/bibliografia/index';
import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';


export default function BibliografiaPage() {
  const tNav = useTranslations('nav');
  const t = useTranslations('bibliografia');
  const [cerca, setCerca] = useState('');
  const [filtreTipus, setFiltreTipus] = useState<ReferenciaBibliografica['tipus'] | 'tots'>('tots');
  const [filtreAny, setFiltreAny] = useState<string>('tots');
  const [filtreTema, setFiltreTema] = useState<string>('tots');
  const [referenciaSeleccionada, setReferenciaSeleccionada] = useState<string | null>(null);
  const [copiat, setCopiat] = useState<string | null>(null);

  // Extraure tots els anys únics
  const totsElsAnys = useMemo(() => {
    return Array.from(new Set(bibliografia.map(ref => ref.any))).sort((a, b) => b.localeCompare(a));
  }, []);

  // Extraure tots els temes únics
  const totsElsTemes = useMemo(() => {
    return Array.from(new Set(bibliografia.flatMap(ref => ref.temes))).sort();
  }, []);

  // Labels de tipus traduïts
  const tipusLabels: Record<ReferenciaBibliografica['tipus'], string> = {
    llibre: t('tipus.llibre'),
    article: t('tipus.article'),
    web: t('tipus.web'),
    paper: t('tipus.paper'),
    informe: t('tipus.informe'),
    llei: t('tipus.llei'),
    altres: t('tipus.altres')
  };

  // Filtrar referències
  const referenciesFiltrades = useMemo(() => {
    return bibliografia.filter(ref => {
      // Filtrar per cerca
      if (cerca) {
        const cercaLower = cerca.toLowerCase();
        const coincideixCerca = 
          ref.titol.toLowerCase().includes(cercaLower) ||
          ref.autors.some(autor => autor.toLowerCase().includes(cercaLower)) ||
          ref.citacio.toLowerCase().includes(cercaLower) ||
          ref.temes.some(tema => tema.toLowerCase().includes(cercaLower));
        if (!coincideixCerca) return false;
      }

      // Filtrar per tipus
      if (filtreTipus !== 'tots' && ref.tipus !== filtreTipus) {
        return false;
      }

      // Filtrar per any
      if (filtreAny !== 'tots' && ref.any !== filtreAny) {
        return false;
      }

      // Filtrar per tema
      if (filtreTema !== 'tots' && !ref.temes.includes(filtreTema)) {
        return false;
      }

      return true;
    });
  }, [cerca, filtreTipus, filtreAny, filtreTema]);

  const referenciaDetall = referenciaSeleccionada 
    ? obtenirReferencia(referenciaSeleccionada)
    : null;

  const copiarCitacio = async (citacio: string, id: string) => {
    try {
      await navigator.clipboard.writeText(citacio);
      setCopiat(id);
      setTimeout(() => setCopiat(null), 2000);
    } catch (err) {
      console.error('Error copiant al porta-retalls:', err);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('bibliografia')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {referenciaDetall ? (
          /* Vista de referència individual */
          <div>
            <button
              onClick={() => setReferenciaSeleccionada(null)}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('tornarLlista')}
            </button>

            <article className="bg-white border border-gray-200 rounded-lg p-8">
              <header className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {referenciaDetall.titol}
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tipusLabels[referenciaDetall.tipus]}
                  </span>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">{t('detall.autors')}:</span>
                    <span>{referenciaDetall.autors.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{t('detall.any')}:</span>
                    <span>{referenciaDetall.any}</span>
                  </div>

                  {referenciaDetall.editorial && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">{t('detall.editorial')}:</span>
                      <span>{referenciaDetall.editorial}</span>
                    </div>
                  )}

                  {referenciaDetall.revista && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">{t('detall.revista')}:</span>
                      <span>{referenciaDetall.revista}</span>
                      {referenciaDetall.volum && <span>, Vol. {referenciaDetall.volum}</span>}
                      {referenciaDetall.numero && <span>, Núm. {referenciaDetall.numero}</span>}
                    </div>
                  )}

                  {referenciaDetall.url && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <a 
                        href={referenciaDetall.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {t('detall.enllaçExtern')}
                      </a>
                    </div>
                  )}

                  {referenciaDetall.doi && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">DOI:</span>
                      <a 
                        href={`https://doi.org/${referenciaDetall.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {referenciaDetall.doi}
                      </a>
                    </div>
                  )}

                  {referenciaDetall.isbn && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">ISBN:</span>
                      <span>{referenciaDetall.isbn}</span>
                    </div>
                  )}

                  {referenciaDetall.fitxer && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">{t('detall.document')}:</span>
                      <a 
                        href={`/api/biblioteca/${referenciaDetall.fitxer}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <Download className="h-3 w-3" />
                        {t('detall.descarregarPDF')}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {referenciaDetall.temes.map((tema) => (
                    <span
                      key={tema}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      <Tag className="h-3 w-3" />
                      {tema}
                    </span>
                  ))}
                </div>
              </header>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{t('detall.citacioCompleta')}</h3>
                  <button
                    onClick={() => copiarCitacio(referenciaDetall.citacio, referenciaDetall.id)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    {copiat === referenciaDetall.id ? (
                      <>
                        <Check className="h-4 w-4" />
                        {t('detall.copiat')}
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        {t('detall.copiar')}
                      </>
                    )}
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-md">
                  {referenciaDetall.citacio}
                </p>

                {referenciaDetall.resum && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('detall.resum')}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{referenciaDetall.resum}</p>
                  </div>
                )}

                {referenciaDetall.notes && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('detall.notes')}</h4>
                    <p className="text-sm text-gray-600">{referenciaDetall.notes}</p>
                  </div>
                )}
              </div>
            </article>
          </div>
        ) : (
          /* Vista de llista amb filtres */
          <div>
            {/* Barra de cerca i filtres */}
            <div className="mb-8 space-y-4">
              {/* Cerca */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('cerca')}
                  value={cerca}
                  onChange={(e) => setCerca(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filtres */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <select
                    value={filtreTipus}
                    onChange={(e) => setFiltreTipus(e.target.value as ReferenciaBibliografica['tipus'] | 'tots')}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="tots">{t('filtres.totsTipus')}</option>
                    {Object.entries(tipusLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <select
                  value={filtreAny}
                  onChange={(e) => setFiltreAny(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="tots">{t('filtres.totsAnys')}</option>
                  {totsElsAnys.map(any => (
                    <option key={any} value={any}>{any}</option>
                  ))}
                </select>

                <select
                  value={filtreTema}
                  onChange={(e) => setFiltreTema(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="tots">{t('filtres.totsTemes')}</option>
                  {totsElsTemes.map(tema => (
                    <option key={tema} value={tema}>{tema}</option>
                  ))}
                </select>

                {(cerca || filtreTipus !== 'tots' || filtreAny !== 'tots' || filtreTema !== 'tots') && (
                  <button
                    onClick={() => {
                      setCerca('');
                      setFiltreTipus('tots');
                      setFiltreAny('tots');
                      setFiltreTema('tots');
                    }}
                    className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    {t('filtres.netejar')}
                  </button>
                )}
              </div>

              <div className="text-sm text-gray-600">
                {t('mostrant', { count: referenciesFiltrades.length, total: bibliografia.length })}
              </div>
            </div>

            {/* Llista de referències */}
            <div className="space-y-4">
              {referenciesFiltrades.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">{t('noResultats')}</p>
                </div>
              ) : (
                referenciesFiltrades.map((ref) => (
                  <div
                    key={ref.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setReferenciaSeleccionada(ref.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {ref.titol}
                          </h3>
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {tipusLabels[ref.tipus]}
                          </span>
                          {ref.fitxer && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800" title="Document PDF disponible">
                              <FileText className="h-3 w-3" />
                              PDF
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">
                          <span className="font-medium">{ref.autors.join(', ')}</span>
                          {ref.any && <span> ({ref.any})</span>}
                        </p>

                        {ref.resum ? (
                          <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                            {ref.resum}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                            {ref.citacio}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {ref.temes.slice(0, 3).map((tema) => (
                            <span
                              key={tema}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                            >
                              <Tag className="h-3 w-3" />
                              {tema}
                            </span>
                          ))}
                          {ref.temes.length > 3 && (
                            <span className="text-xs text-gray-500">+{ref.temes.length - 3} més</span>
                          )}
                        </div>
                      </div>

                      <div className="ml-4 flex flex-col gap-2">
                        {ref.fitxer && (
                          <a
                            href={`/api/biblioteca/${ref.fitxer}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                            title="Descarregar PDF"
                          >
                            <Download className="h-4 w-4" />
                          </a>
                        )}
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            title="Obrir enllaç"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copiarCitacio(ref.citacio, ref.id);
                          }}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Copiar citació"
                        >
                          {copiat === ref.id ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {tNav('home')}
          </Link>
        </div>
      </div>
    </div>
  );
}

