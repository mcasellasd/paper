import Link from 'next/link';
import { ArrowLeft, ArrowRight, Accessibility, Brain, Scale, ArrowRightCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function IAAccessibilitatPage() {
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('iaAccessibilitat')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            3. Com la IA ajuda en Accessibilitat, Comprensió i Subjecció Jurídica
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Anàlisi de com la intel·ligència artificial transforma la interacció ciutadana amb el dret
          </p>
        </div>

        {/* Accessibilitat Section */}
        <section className="mb-16 scroll-mt-20" id="accessibilitat">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Accessibility className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3.1. Accessibilitat
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La IA permet crear plataformes obertes que eliminen barreres tradicionals d'accés al coneixement 
                  jurídic. Aquestes plataformes utilitzen tecnologies avançades com la cerca semàntica i el suport 
                  mòbil per garantir que el dret sigui accessible per a tots els ciutadans, independentment de la 
                  seva ubicació, recursos o coneixements tècnics.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Eliminació de barreres
                </h3>
                <p className="mb-4">
                  Les eines d'IA eliminen múltiples tipus de barreres:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Barreres econòmiques:</strong> Plataformes gratuïtes que no requereixen subscripcions 
                  costoses o assessorament professional per a consultes bàsiques.</li>
                  <li><strong>Barreres geogràfiques:</strong> Accés des de qualsevol lloc amb connexió a Internet, 
                  especialment valuós en contextos micro-estatals com Andorra.</li>
                  <li><strong>Barreres lingüístiques:</strong> Suport multilingüe que permet als usuaris accedir al 
                  dret en la seva llengua preferida.</li>
                  <li><strong>Barreres tècniques:</strong> Interfícies intuïtives que no requereixen coneixements 
                  tècnics avançats.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Exemples generals
                </h3>
                <p className="mb-4">
                  Eines com DoNotPay han demostrat com la IA pot automatitzar tràmits senzills i proporcionar 
                  assistència legal bàsica a milions d'usuaris. Aquests exemples il·lustren el potencial de la IA 
                  per democratitzar l'accés a la justícia.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Beneficis per a grups vulnerables:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Minories lingüístiques:</strong> La traducció i interpretació IA permeten l'accés 
                    al dret per a persones que no parlen la llengua oficial amb fluïdesa.</li>
                    <li><strong>Persones amb baixos ingressos:</strong> L'accés gratuït elimina barreres econòmiques 
                    que tradicionalment han exclòs aquests grups.</li>
                    <li><strong>Expatriats i immigrants:</strong> Eines que faciliten la comprensió del dret del 
                    país d'acollida, promovent la integració.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprensió Section */}
        <section className="mb-16 scroll-mt-20" id="comprensio">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3.2. Comprensió
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La IA genera explicacions en llenguatge pla, resums estructurats i exemples pràctics mitjançant 
                  models com GPT i Claude. Aquesta capacitat transforma la manera com els ciutadans comprenen el dret, 
                  convertint text jurídic complex en informació accessible i accionable.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Generació de contingut comprensible
                </h3>
                <p className="mb-4">
                  Els models de llenguatge gran poden:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Simplificar el llenguatge:</strong> Traduir terminologia jurídica tècnica a llenguatge 
                  quotidià sense perdre precisió.</li>
                  <li><strong>Crear resums estructurats:</strong> Destacar els punts clau de normes complexes en 
                  formats fàcils de llegir.</li>
                  <li><strong>Generar exemples pràctics:</strong> Il·lustrar com les normes s'apliquen en situacions 
                  reals de la vida quotidiana.</li>
                  <li><strong>Contextualitzar la informació:</strong> Explicar com una norma específica es relaciona 
                  amb altres normes i amb el sistema legal en general.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Impacte en l'educació cívica
                </h3>
                <p className="mb-4">
                  La millora de la comprensió jurídica té un impacte profund en l'educació cívica:
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Drets familiars:</strong> Els ciutadans poden comprendre millor les normes sobre 
                    matrimoni, divorci, custòdia i successions.</li>
                    <li><strong>Drets de consumidors:</strong> Comprensió clara de les proteccions legals en 
                    transaccions comercials.</li>
                    <li><strong>Drets laborals:</strong> Informació accessible sobre contractes, desnonaments i 
                    proteccions laborals.</li>
                    <li><strong>Obligacions fiscals:</strong> Comprensió de les responsabilitats fiscals i com 
                    complir-les correctament.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjecció Jurídica Section */}
        <section className="mb-16 scroll-mt-20" id="subjeccio">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3.3. Subjecció Jurídica
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Les eines predictives i simuladores basades en IA fomenten el compliment normatiu voluntari, 
                  reduint les infraccions involuntàries. Quan els ciutadans comprenen les conseqüències de les seves 
                  accions i les obligacions legals que tenen, són més propensos a complir-les voluntàriament.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Eines predictives i simuladors
                </h3>
                <p className="mb-4">
                  Les eines d'IA poden ajudar els ciutadans a:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Entendre conseqüències:</strong> Simular els resultats possibles de diferents accions 
                  legals.</li>
                  <li><strong>Avaluar riscos:</strong> Identificar possibles problemes legals abans que es 
                  produeixin.</li>
                  <li><strong>Prendre decisions informades:</strong> Proporcionar informació que permet als ciutadans 
                  prendre decisions que promouen el compliment normatiu.</li>
                  <li><strong>Evitar errors comuns:</strong> Alertar sobre pràctiques que poden resultar en 
                  infraccions involuntàries.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Riscos i limitacions
                </h3>
                <p className="mb-4">
                  És important reconèixer que la IA també presenta riscos:
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Riscos principals:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Errors en IA:</strong> Els models d'IA poden generar informació incorrecta o 
                    incompleta.</li>
                    <li><strong>Al·lucinacions:</strong> La generació de cites o precedents ficticis pot portar a 
                    decisions errònies.</li>
                    <li><strong>Biaixos algorítmics:</strong> Els sistemes d'IA poden perpetuar o amplificar biaixos 
                    existents.</li>
                    <li><strong>Dependència excessiva:</strong> Els usuaris poden dependre massa de la IA sense 
                    verificar la informació.</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Recomanació fonamental:</h4>
                  <p>
                    La IA ha de combinar-se sempre amb assessorament humà professional quan es tracten qüestions 
                    legals complexes o amb conseqüències significatives. Les eines d'IA són millor enteses com a 
                    assistents que augmenten la comprensió, no com a substituts del raonament jurídic professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagrama de Flux */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Flux de Consulta: De la Necessitat a la Comprensió i el Compliment
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="bg-white border border-gray-300 rounded-lg p-4 text-center min-w-[150px]">
                <div className="text-2xl mb-2">👤</div>
                <div className="font-semibold text-sm">Consulta Usuari</div>
              </div>
              <ArrowRightCircle className="h-6 w-6 text-blue-600" />
              <div className="bg-white border border-gray-300 rounded-lg p-4 text-center min-w-[150px]">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold text-sm">Processament IA</div>
              </div>
              <ArrowRightCircle className="h-6 w-6 text-blue-600" />
              <div className="bg-white border border-gray-300 rounded-lg p-4 text-center min-w-[150px]">
                <div className="text-2xl mb-2">📖</div>
                <div className="font-semibold text-sm">Resposta Accessible</div>
              </div>
              <ArrowRightCircle className="h-6 w-6 text-blue-600" />
              <div className="bg-white border border-gray-300 rounded-lg p-4 text-center min-w-[150px]">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-semibold text-sm">Compliment Millorat</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/marc-teoric"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Marc Teòric
          </Link>
          <Link
            href="/casos-estudi"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Casos d'Estudi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

