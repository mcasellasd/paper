import Link from 'next/link';
import { ArrowLeft, BookOpen, Calendar, Tag, FileText } from 'lucide-react';
import { documentsBiblioteca, obtenirDocument } from '@/lib/biblioteca/index';
import BibliotecaList from '@/components/BibliotecaList';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

async function llegirDocument(fitxer: string): Promise<string> {
  try {
    const ruta = join(process.cwd(), 'lib', 'biblioteca', fitxer);
    
    // Verificar que el fitxer existeix
    if (!existsSync(ruta)) {
      console.error(`Fitxer no trobat: ${ruta}`);
      return `Error: El fitxer "${fitxer}" no s'ha trobat a la ruta esperada.`;
    }
    
    const contingut = await readFile(ruta, 'utf-8');
    return contingut;
  } catch (error) {
    console.error(`Error llegint document ${fitxer}:`, error);
    if (error instanceof Error) {
      console.error(`Detalls de l'error: ${error.message}`);
    }
    return `Error: No s'ha pogut carregar el document "${fitxer}". Si us plau, verifica que el fitxer existeix.`;
  }
}

export default async function BibliotecaPage({
  searchParams,
}: {
  searchParams: Promise<{ doc?: string }> | { doc?: string };
}) {
  // Gestionar searchParams com a Promise o objecte directe
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  
  const documentSeleccionat = params.doc 
    ? obtenirDocument(params.doc)
    : null;

  const contingutDocument = documentSeleccionat
    ? await llegirDocument(documentSeleccionat.fitxer)
    : null;

  // Extraure tots els temes únics
  const totsElsTemes = Array.from(
    new Set(documentsBiblioteca.flatMap(doc => doc.tema))
  ).sort();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Biblioteca</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Biblioteca de Documentació
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Col·lecció de documents, resums i referències acadèmiques relacionades amb el projecte
          </p>
        </div>

        {documentSeleccionat && contingutDocument ? (
          /* Vista de document individual */
          <div>
            <Link
              href="/biblioteca"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Tornar a la biblioteca
            </Link>

            <article className="bg-white border border-gray-200 rounded-lg p-8">
              <header className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {documentSeleccionat.titol}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{documentSeleccionat.data}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Font: {documentSeleccionat.font}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {documentSeleccionat.tema.map((tema) => (
                    <span
                      key={tema}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag className="h-3 w-3" />
                      {tema}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="markdown-content">
                  {contingutDocument.split('\n').map((line, index) => {
                    const trimmedLine = line.trim();
                    
                    // Processar encapçalaments
                    if (trimmedLine.startsWith('# ')) {
                      return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{trimmedLine.substring(2)}</h1>;
                    }
                    if (trimmedLine.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">{trimmedLine.substring(3)}</h2>;
                    }
                    if (trimmedLine.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-900">{trimmedLine.substring(4)}</h3>;
                    }
                    if (trimmedLine.startsWith('#### ')) {
                      return <h4 key={index} className="text-lg font-semibold mt-3 mb-2 text-gray-900">{trimmedLine.substring(5)}</h4>;
                    }
                    
                    // Processar llistes amb punts
                    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
                      const content = trimmedLine.substring(2);
                      const parts = content.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={index} className="mb-2 ml-6 list-disc">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={partIndex}>{part.substring(2, part.length - 2)}</strong>;
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </li>
                      );
                    }
                    
                    // Processar llistes numerades
                    const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
                    if (numberedMatch) {
                      const content = numberedMatch[2];
                      const parts = content.split(/(\*\*.*?\*\*)/g);
                      return (
                        <li key={index} className="mb-2 ml-6 list-decimal">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={partIndex}>{part.substring(2, part.length - 2)}</strong>;
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </li>
                      );
                    }
                    
                    // Línia buida
                    if (trimmedLine === '') {
                      return <br key={index} />;
                    }
                    
                    // Processar negreta dins del text
                    const parts = trimmedLine.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={index} className="mb-4">
                        {parts.map((part, partIndex) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={partIndex}>{part.substring(2, part.length - 2)}</strong>;
                          }
                          return <span key={partIndex}>{part}</span>;
                        })}
                      </p>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        ) : (
          /* Vista de llista de documents amb cerca i filtres */
          <BibliotecaList documents={documentsBiblioteca} totsElsTemes={totsElsTemes} />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Tornar a l'inici
          </Link>
        </div>
      </div>
    </div>
  );
}

