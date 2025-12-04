import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, Database, Cpu, Globe2 } from 'lucide-react';

export default function ArquitecturaPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Arquitectura Tècnica</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            4. Arquitectura Tècnica
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            El "core" del treball: stack tecnològic, model de dades i integració de IA
          </p>
        </div>

        {/* Stack Tecnològic Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Layers className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4.1. Stack Tecnològic
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  La tria de Next.js, React, Tailwind CSS i Vercel es justifica per la seva 
                  combinació de rendiment, desenvolupament ràpid i costos baixos:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Next.js 14+ (App Router)</h3>
                    <p className="text-sm text-gray-600">
                      Framework React amb suport nadiu per a Server Components, generació estàtica, 
                      i optimitzacions automàtiques. L'App Router proporciona una estructura clara 
                      i escalable.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">React 19</h3>
                    <p className="text-sm text-gray-600">
                      Biblioteca UI moderna amb suport per a components funcionals, hooks, i 
                      gestió d'estat eficient.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                    <p className="text-sm text-gray-600">
                      Framework CSS utility-first que permet desenvolupament ràpid i disseny 
                      consistent sense sortir del codi.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Vercel</h3>
                    <p className="text-sm text-gray-600">
                      Plataforma de hosting optimitzada per a Next.js amb desplegament automàtic, 
                      CDN global, i analytics integrats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model de Dades Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Database className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4.2. Model de Dades
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Per al MVP, s'ha triat un model de dades basat en fitxers JSON estàtics en lloc 
                  d'una base de dades relacional:
                </p>
                <div className="mt-6 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
{`{
  "id": "cc-art-001",
  "codi": "civil",
  "numeracio": "Article 1",
  "llibre": "I",
  "titol": "Disposicions generals",
  "text_oficial": "Text literal...",
  "vigencia": "2022-12-15",
  "modificacions": [...],
  "enllacos": ["art-002", "art-010"],
  "tags": ["dret civil"],
  "idiomes": {
    "ca": "Text en català...",
    "es": "Texto en castellano...",
    "fr": "Texte en français..."
  }
}`}
                  </pre>
                </div>
                <p className="mt-4">
                  <strong>Avantatges:</strong> Simplicitat, hosting gratuït, generació estàtica ràpida.
                </p>
                <p className="mt-2">
                  <strong>Desavantatges:</strong> Escalabilitat limitada. Migració a base de dades 
                  (PostgreSQL/Supabase) quan hi hagi més de 5.000 articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integració IA Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Cpu className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4.3. Integració de la IA
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Arquitectura de Prompts (Prompt Engineering)
                </h3>
                <p>
                  El disseny de prompts és crític per obtenir resultats fiables i útils. 
                  L'estructura del prompt inclou:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li><strong>Context:</strong> Especificació del rol (expert en dret andorrà)</li>
                  <li><strong>Instruccions:</strong> Format de sortida esperat (resum, exemples, conceptes)</li>
                  <li><strong>Limitacions:</strong> Indicacions per evitar al·lucinacions (només basar-se en el text proporcionat)</li>
                  <li><strong>Idioma:</strong> Especificació de la llengua de sortida</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Gestió de Costos i Tokens
                </h3>
                <p>
                  L'API de Claude té un cost aproximat de 0.003$ per 1K tokens. Estratègies implementades:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li><strong>Caché:</strong> Emmagatzemar respostes generades per evitar crides repetides</li>
                  <li><strong>Lazy loading:</strong> Generació només quan l'usuari activa la interpretació</li>
                  <li><strong>Optimització de prompts:</strong> Reduir tokens sense perdre qualitat</li>
                  <li><strong>Rate limiting:</strong> Controlar l'ús per usuari</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Estratègia Multilingüe Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Globe2 className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4.4. Estratègia Multilingüe (i18n)
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Gestionar contingut legal en tres idiomes presenta reptes tècnics específics:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Text legal oficial</h3>
                    <p className="text-sm text-gray-600">
                      Només el català és oficial. Les traduccions al castellà i francès es generen 
                      mitjançant IA amb revisió humana per garantir precisió.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Interfície d'usuari</h3>
                    <p className="text-sm text-gray-600">
                      Utilització de next-intl per gestionar traduccions de la UI de manera eficient, 
                      amb suport per a URLs localitzades (/ca/, /es/, /fr/).
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Interpretacions de IA</h3>
                    <p className="text-sm text-gray-600">
                      Les interpretacions es generen dinàmicament en l'idioma seleccionat per l'usuari, 
                      adaptant-se al context cultural i legal de cada llengua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/estat-art"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Estat de l'Art
          </Link>
          <Link
            href="/implementacio"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Implementació
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

