import Link from 'next/link';
import { ArrowLeft, ArrowRight, Brain, Scale, BookOpen, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MarcTeoricPage() {
  const t = useTranslations('marcTeoric');
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('marcTeoric')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            2. Marc Teòric i Revisió Bibliogràfica
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Conceptes fonamentals: accessibilitat jurídica, comprensió i subjecció jurídica
          </p>
        </div>

        {/* Accessibilitat Jurídica Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Users className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.1. Accessibilitat Jurídica
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La <strong>accessibilitat jurídica</strong> es refereix al dret universal d'accés al coneixement 
                  legal, inspirat en el moviment del "dret obert" i en els principis d'accés a la justícia 
                  desenvolupats per autors com Deborah Rhode. Aquest concepte reconeix que el dret no ha de ser 
                  un privilegi reservat als professionals, sinó un recurs accessible per a tots els ciutadans.
                </p>
                <p className="mb-4">
                  En una societat democràtica, la capacitat dels ciutadans de comprendre i exercir els seus drets 
                  és fonamental per a la funcionalitat de l'estat de dret. La investigació acadèmica ha demostrat 
                  de manera consistent que la complexitat del llenguatge jurídic actua com a barrera estructural 
                  per a l'accés a la justícia (Sandefur, 2009; Hadfield, 2017).
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Principis de l'accessibilitat jurídica:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Accés universal:</strong> El coneixement jurídic ha de ser accessible independentment 
                    de l'educació, l'origen lingüístic o la capacitat econòmica.</li>
                    <li><strong>Transparència:</strong> Les normes han de ser públiques, comprensibles i fàcilment 
                    localitzables.</li>
                    <li><strong>Multilingüisme:</strong> En contextos com Andorra, l'accessibilitat requereix suport 
                    per a múltiples llengües.</li>
                    <li><strong>Format digital:</strong> L'ús de tecnologies modernes per facilitar la cerca, 
                    navegació i comprensió del dret.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprensió Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Brain className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.2. Comprensió Jurídica
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La <strong>comprensió jurídica</strong> va més enllà de la simple accessibilitat. Es refereix a 
                  la capacitat dels ciutadans de comprendre no només què diu la llei, sinó també com s'aplica en 
                  contextos pràctics. Aquesta comprensió es pot millorar significativament mitjançant la 
                  simplificació del llenguatge jurídic i l'ús de la IA generativa.
                </p>
                <p className="mb-4">
                  Com assenyala Richard Susskind a "Tomorrow's Lawyers", la simplificació del dret mitjançant 
                  processament de llenguatge natural (NLP) i IA generativa pot transformar la manera com els 
                  ciutadans interactuen amb el sistema legal. Els models de llenguatge gran (LLMs) poden generar 
                  explicacions en llenguatge pla, resums estructurats i exemples pràctics que faciliten la 
                  comprensió.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Estratègies per millorar la comprensió:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Llenguatge clar:</strong> Aplicació dels principis de Plain Language per simplificar 
                    el text jurídic sense perdre precisió.</li>
                    <li><strong>Resums generats per IA:</strong> Creació de resums estructurats que destaquen els 
                    punts clau de cada norma.</li>
                    <li><strong>Exemples pràctics:</strong> Generació d'exemples contextualitzats que il·lustren 
                    com s'aplica la norma en situacions reals.</li>
                    <li><strong>Visualització:</strong> Ús de diagrames, fluxos i altres elements visuals per 
                    facilitar la comprensió de processos complexos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjecció Jurídica Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.3. Subjecció Jurídica i Compliment Normatiu
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La <strong>subjecció jurídica</strong> es refereix al compliment voluntari de les normes per part 
                  dels ciutadans, basat en la comprensió i l'acceptació del marc legal. Aquest concepte es fonamenta 
                  en les teories de Kelsen sobre l'eficàcia del dret, on la IA actua com a eina educativa que 
                  promou el compliment mitjançant la comprensió.
                </p>
                <p className="mb-4">
                  Quan els ciutadans comprenen les normes que els afecten, són més propensos a complir-les 
                  voluntàriament. Aquest compliment voluntari és preferible al compliment forçat per diverses raons:
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Beneficis del compliment voluntari:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Reducció de litigis:</strong> Quan els ciutadans comprenen les seves obligacions, 
                    es redueixen els conflictes i la necessitat d'intervenció judicial.</li>
                    <li><strong>Eficiència del sistema:</strong> El compliment voluntari redueix la càrrega sobre 
                    els sistemes de justícia i administració.</li>
                    <li><strong>Confiança institucional:</strong> Un sistema comprensible genera confiança en les 
                    institucions i promou la legitimitat democràtica.</li>
                    <li><strong>Prevenció d'infraccions involuntàries:</strong> La comprensió clara ajuda a evitar 
                    infraccions que es produeixen per ignorància o mala interpretació.</li>
                  </ul>
                </div>
                <p className="mb-4">
                  Les eines d'IA, com simuladors predictius i avaluadors de risc, poden ajudar els ciutadans a 
                  entendre les conseqüències de les seves accions i prendre decisions informades que promouen el 
                  compliment normatiu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Revisió Bibliogràfica Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.4. Revisió de Literatura: IA en Dret
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La literatura acadèmica sobre IA en dret ha crescut exponencialment en els últims anys. Estudis 
                  com "AI and Legal Accessibility" publicats en revistes com Harvard Law Review han documentat el 
                  potencial de la IA per millorar l'accés a la justícia.
                </p>
                <p className="mb-4">
                  No obstant això, també hi ha crítics importants com Cathy O'Neil que han advertit sobre els 
                  biaixos en sistemes d'IA i la necessitat de transparència i responsabilitat. Aquestes perspectives 
                  crítiques són essencials per desenvolupar eines d'IA ètiques i efectives.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contribució original:</h4>
                  <p>
                    A diferència d'eines comercials globals com LegalZoom, els projectes desenvolupats per l'autor 
                    (Catalunya Legal i Prudència.cat) prioritzen l'accés gratuït i la localització al dret català 
                    i andorrà, oferint una alternativa centrada en la comunitat i l'accessibilitat.
                  </p>
                </div>
                <p className="mb-4">
                  La comparació entre eines d'IA revela diferències significatives en enfocament, accessibilitat 
                  i impacte en la comprensió i subjecció jurídica. Aquesta revisió bibliogràfica estableix el marc 
                  teòric per entendre com la IA pot transformar l'accessibilitat jurídica quan es dissenya amb 
                  principis ètics i centrats en l'usuari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/introduccio"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Introducció
          </Link>
          <Link
            href="/ia-accessibilitat"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: IA i Accessibilitat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

