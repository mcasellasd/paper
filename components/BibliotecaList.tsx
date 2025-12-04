'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { BookOpen, Calendar, Tag, FileText, Search, Filter, X } from 'lucide-react';
import { documentsBiblioteca, DocumentBiblioteca } from '@/lib/biblioteca/index';

interface BibliotecaListProps {
  documents: DocumentBiblioteca[];
  totsElsTemes: string[];
}

export default function BibliotecaList({ documents, totsElsTemes }: BibliotecaListProps) {
  const [cerca, setCerca] = useState('');
  const [temaSeleccionat, setTemaSeleccionat] = useState<string | null>(null);
  const [ordre, setOrdre] = useState<'data' | 'titol'>('data');

  const documentsFiltrats = useMemo(() => {
    let resultat = [...documents];

    // Filtrar per cerca de text
    if (cerca.trim()) {
      const cercaLower = cerca.toLowerCase();
      resultat = resultat.filter(doc => 
        doc.titol.toLowerCase().includes(cercaLower) ||
        doc.descripcio.toLowerCase().includes(cercaLower) ||
        doc.tema.some(t => t.toLowerCase().includes(cercaLower)) ||
        doc.font.toLowerCase().includes(cercaLower)
      );
    }

    // Filtrar per tema
    if (temaSeleccionat) {
      resultat = resultat.filter(doc => doc.tema.includes(temaSeleccionat));
    }

    // Ordenar
    resultat.sort((a, b) => {
      if (ordre === 'data') {
        return b.data.localeCompare(a.data);
      } else {
        return a.titol.localeCompare(b.titol);
      }
    });

    return resultat;
  }, [documents, cerca, temaSeleccionat, ordre]);

  return (
    <div>
      {/* Barra de cerca i filtres */}
      <div className="mb-8 space-y-4">
        {/* Cerca de text */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cercar documents per títol, descripció, tema o font..."
            value={cerca}
            onChange={(e) => setCerca(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {cerca && (
            <button
              onClick={() => setCerca('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filtres i ordenació */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Filtre per tema */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filtrar per tema:</span>
            <select
              value={temaSeleccionat || ''}
              onChange={(e) => setTemaSeleccionat(e.target.value || null)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tots els temes</option>
              {totsElsTemes.map((tema) => {
                const count = documents.filter(doc => doc.tema.includes(tema)).length;
                return (
                  <option key={tema} value={tema}>
                    {tema} ({count})
                  </option>
                );
              })}
            </select>
            {temaSeleccionat && (
              <button
                onClick={() => setTemaSeleccionat(null)}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <X className="h-3 w-3" />
                Netejar filtre
              </button>
            )}
          </div>

          {/* Ordenació */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-gray-600">Ordenar per:</span>
            <select
              value={ordre}
              onChange={(e) => setOrdre(e.target.value as 'data' | 'titol')}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="data">Data (més recent primer)</option>
              <option value="titol">Títol (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Resultats de la cerca */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Search className="h-4 w-4" />
          <span>
            {documentsFiltrats.length} document{documentsFiltrats.length !== 1 ? 's' : ''} trobat{documentsFiltrats.length !== 1 ? 's' : ''}
            {cerca && ` per "${cerca}"`}
            {temaSeleccionat && ` en "${temaSeleccionat}"`}
          </span>
        </div>
      </div>

      {/* Llista de documents */}
      {documentsFiltrats.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documentsFiltrats.map((document) => (
            <Link
              key={document.id}
              href={`/biblioteca?doc=${document.id}`}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
                    {document.titol}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {document.descripcio}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{document.data}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      <span>{document.font}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {document.tema.slice(0, 2).map((tema) => (
                      <span
                        key={tema}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        {tema}
                      </span>
                    ))}
                    {document.tema.length > 2 && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        +{document.tema.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">No s'han trobat documents</p>
          <p className="text-sm text-gray-500">
            Prova de canviar els criteris de cerca o els filtres
          </p>
          {(cerca || temaSeleccionat) && (
            <button
              onClick={() => {
                setCerca('');
                setTemaSeleccionat(null);
              }}
              className="mt-4 text-sm text-blue-600 hover:text-blue-800"
            >
              Netejar tots els filtres
            </button>
          )}
        </div>
      )}
    </div>
  );
}

