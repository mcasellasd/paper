import Link from 'next/link';
import { ArrowLeft, ArrowRight, DollarSign, TrendingUp, Map } from 'lucide-react';

export default function SostenibilitatPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Sostenibilitat</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            6. Model de Sostenibilitat i Negoci
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Pla de costos, monetització i escalabilitat del projecte
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <DollarSign className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6.1. Pla de Costos
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El model de costos del MVP està dissenyat per ser sostenible amb un pressupost 
                  acadèmic limitat:
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Hosting (Vercel)</h3>
                    <p className="text-2xl font-bold text-green-600">0€</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Tier gratuït suficient per al MVP. Escalabilitat a Vercel Pro (20€/mes) 
                      si creix el tràfic.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">API Claude</h3>
                    <p className="text-2xl font-bold text-blue-600">50-100€/mes</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Cost variable segons ús. Mitjana de 0.003$ per 1K tokens. 
                      Estratègies de caché redueixen costos.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Domini .ad</h3>
                    <p className="text-2xl font-bold text-purple-600">~30€/any</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Cost anual del domini nacional andorrà.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Total MVP</h3>
                    <p className="text-2xl font-bold text-blue-700">~100€/mes</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Cost mensual mitjà per al funcionament bàsic del portal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6.2. Estratègia de Monetització
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El model de negoci segueix una estratègia freemium adaptada al context acadèmic:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Fase inicial (1-2 anys)</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Tot gratuït</strong> per guanyar tracció i recollir dades per al paper. 
                      Focus en validació acadèmica i feedback d'usuaris.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Fase de monetització (2+ anys)</h3>
                    <div className="mt-2 space-y-2 text-sm text-gray-700">
                      <p><strong>Freemium:</strong> Ciutadans accés gratuït, professionals de pagament</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>Ciutadà: Gratuït amb funcions bàsiques</li>
                        <li>Professional: 25€/mes (alerts, cerca avançada, exportació)</li>
                        <li>Empresa: 100€/mes (múltiples usuaris, API, consultoria)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Altres fonts de finançament</h3>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Subvencions del Govern d'Andorra</li>
                      <li>Fons europeus (Horizon Europe, Digital Europe)</li>
                      <li>Col·laboració amb Col·legi d'Advocats</li>
                      <li>Consultoria personalitzada per a despatxos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Map className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6.3. Escalabilitat
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El full de ruta del projecte està dividit en tres fases principals:
                </p>
                <div className="mt-6 space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Fase 1: MVP (6-8 setmanes)</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                      <li>Codi Civil d'Andorra (2022) complet</li>
                      <li>Llei de Consum (2023)</li>
                      <li>Interpretació IA bàsica</li>
                      <li>Chatbot funcional</li>
                      <li>Multilingüisme (CA/ES/FR)</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Fase 2: Expansió (8-12 setmanes)</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                      <li>Codi Penal</li>
                      <li>Codi de Procediment Civil</li>
                      <li>Jurisprudència vinculada</li>
                      <li>Comparador de sistemes legals</li>
                      <li>Guies per a expatriats</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Fase 3: Professionalització (12+ setmanes)</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                      <li>Sistema d'usuaris i autenticació</li>
                      <li>Subscripcions professionals</li>
                      <li>Alerts jurisprudencials</li>
                      <li>API pública</li>
                      <li>Documentació completa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/implementacio"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Implementació
          </Link>
          <Link
            href="/resultats"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Resultats
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

