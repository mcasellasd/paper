import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target, AlertCircle, BookOpen, Lightbulb } from 'lucide-react';

export default function IntroduccioPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Introducció</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            1. Introducció
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Context, problema i objectius del projecte Prudencia.ad
          </p>
        </div>

        {/* Índex de continguts */}
        <nav className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-6" aria-label="Índex de continguts">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Índex de continguts</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a href="#context" className="text-blue-700 hover:text-blue-800 hover:underline">
                1.1. Context
              </a>
              <ol className="ml-6 mt-1 space-y-1 text-gray-600">
                <li>
                  <a href="#context-accessibilitat" className="hover:text-blue-700 hover:underline">
                    1.1.1. El repte de l'accessibilitat jurídica
                  </a>
                </li>
                <li>
                  <a href="#context-historic" className="hover:text-blue-700 hover:underline">
                    1.1.2. L'accés històric de la ciutadania al coneixement jurídic
                  </a>
                  <ol className="ml-6 mt-1 space-y-1 text-gray-600">
                    <li>
                      <a href="#casos-catalunya-andorra" className="hover:text-blue-700 hover:underline">
                        1.1.2.1. Casos específics d'estudi: Catalunya i Andorra
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#context-andorra" className="hover:text-blue-700 hover:underline">
                    1.1.3. El context específic del Principat d'Andorra
                  </a>
                </li>
                <li>
                  <a href="#context-comparativa" className="hover:text-blue-700 hover:underline">
                    1.1.4. Comparativa amb sistemes veïns
                  </a>
                </li>
                <li>
                  <a href="#context-legaltech" className="hover:text-blue-700 hover:underline">
                    1.1.5. La oportunitat de la LegalTech i la IA generativa
                  </a>
                </li>
                <li>
                  <a href="#context-llenguatge-clar" className="hover:text-blue-700 hover:underline">
                    1.1.6. Els principis de Llenguatge Clar i Disseny Jurídic
                  </a>
                </li>
                <li>
                  <a href="#context-marc-etic" className="hover:text-blue-700 hover:underline">
                    1.1.7. Marc ètic i arquitectura de risc mínim per a la IA legal
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#problema" className="text-blue-700 hover:text-blue-800 hover:underline">
                1.2. Problema
              </a>
              <ol className="ml-6 mt-1 space-y-1 text-gray-600">
                <li>
                  <a href="#problema-opacitat" className="hover:text-blue-700 hover:underline">
                    1.2.1. Opacitat i complexitat sistèmica del llenguatge jurídic
                  </a>
                </li>
                <li>
                  <a href="#problema-implicacions" className="hover:text-blue-700 hover:underline">
                    1.2.2. Implicacions estratègiques: desequilibri de poder i erosió de la confiança
                  </a>
                </li>
                <li>
                  <a href="#problema-andorra" className="hover:text-blue-700 hover:underline">
                    1.2.3. El problema específic del context andorrà
                  </a>
                  <ol className="ml-4 mt-1 space-y-1 text-gray-500">
                    <li>
                      <a href="#problema-immigracio" className="hover:text-blue-700 hover:underline">
                        1.2.3.1. Immigració i integració: el repte d'aprendre les lleis d'un nou país
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <a href="#problema-autotutela" className="hover:text-blue-700 hover:underline">
                    1.2.4. Autotutela i autosuficiència jurídica: la necessitat d'autonomia ciutadana
                  </a>
                </li>
                <li>
                  <a href="#problema-ia-drets" className="hover:text-blue-700 hover:underline">
                    1.2.5. La IA com a eina per a la no discriminació i l'exercici de drets fonamentals
                  </a>
                </li>
                <li>
                  <a href="#problema-conclusions" className="hover:text-blue-700 hover:underline">
                    1.2.6. Conclusions: la claredat com a requisit fonamental per als drets fonamentals i l'autotutela
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#antecedents" className="text-blue-700 hover:text-blue-800 hover:underline">
                1.3. Antecedents
              </a>
            </li>
            <li>
              <a href="#objectius" className="text-blue-700 hover:text-blue-800 hover:underline">
                1.4. Objectius
              </a>
            </li>
          </ol>
        </nav>

        {/* Context Section */}
        <section id="context" className="mb-16 scroll-mt-20">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1.1. Context
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La complexitat del llenguatge jurídic constitueix una barrera d'accés persistent que 
                  afecta la capacitat dels ciutadans per comprendre i exercir els seus drets. Aquesta 
                  problemàtica, documentada àmpliament en la literatura acadèmica sobre accessibilitat 
                  jurídica (Tamanaha, 2004; Sandefur, 2009), adquireix dimensions especials en contextos 
                  micro-estatals com el Principat d'Andorra, on la realitat multilingüe i la proporció 
                  elevada d'expatriats amplifiquen els desafiaments d'accessibilitat.
                </p>

                <h3 id="context-accessibilitat" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.1. El repte de l'accessibilitat jurídica
                </h3>
                <p className="mb-4">
                  La investigació en sociologia jurídica ha demostrat de manera consistent que la 
                  complexitat del llenguatge legal actua com a barrera estructural per a l'accés a la 
                  justícia (Hadfield, 2017). Els ciutadans sense formació jurídica especialitzada 
                  troben dificultats significatives per interpretar normes, comprendre els seus drets 
                  i obligacions, i navegar pels sistemes legals (Sandefur, 2009). Aquest problema es 
                  veu agreujat quan el text jurídic utilitza terminologia tècnica, estructures 
                  sintàctiques complexes i referències creuades entre múltiples normes.
                </p>
                <p className="mb-4">
                  En l'era digital, la transformació del sector legal mitjançant tecnologies emergents 
                  (LegalTech) ha obert noves possibilitats per abordar aquests desafiaments. Els 
                  sistemes d'intel·ligència artificial generativa, especialment els models de llenguatge 
                  gran (LLMs), han demostrat capacitats prometedores per simplificar i explicar text 
                  jurídic complex (Katz et al., 2023; Choi et al., 2023). No obstant això, la majoria 
                  de la investigació s'ha centrat en sistemes legals de gran escala, deixant un buit 
                  significatiu en l'aplicació d'aquestes tecnologies a contextos micro-estatals.
                </p>

                <h3 id="context-historic" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.2. L'accés històric de la ciutadania al coneixement jurídic: Una perspectiva transversal
                </h3>
                <p className="mb-4">
                  L'accés del ciutadà comú al coneixement jurídic ha constituït un dels terrenys de poder 
                  més decisius en la història de les societats humanes. La capacitat de conèixer, interpretar 
                  i aplicar les normes que regulen la convivència no ha estat mai una qüestió tècnica neutra, 
                  sinó un instrument de control social i, simultàniament, una eina d'emancipació col·lectiva. 
                  Aquesta anàlisi explora la trajectòria històrica d'aquest accés, des dels primers codis 
                  escrits fins a la revolució de la impremta, per evidenciar com la transparència legal ha 
                  estat sempre inseparable de la qualitat democràtica d'una comunitat.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Una distinció fonamental: accés físic versus accessibilitat intel·lectual</h4>
                  <p className="mb-4">
                    Abans d'aprofundir en la trajectòria històrica, cal establir una distinció conceptual fonamental 
                    que recorre tota la història de l'accés al dret: la diferència entre <strong>accés físic</strong> 
                    i <strong>accessibilitat intel·lectual</strong> a les lleis.
                  </p>
                  <p className="mb-4">
                    L'<strong>accés físic</strong> es refereix a la disponibilitat material del text legal: la capacitat 
                    de veure, llegir o consultar físicament el document que conté la norma. Aquest accés inclou aspectes 
                    com la publicació de les lleis en esteles, taules de bronze, manuscrits, llibres impresos, butlletins 
                    oficials o portals digitals. Històricament, aquest accés ha estat condicionat per factors com la 
                    ubicació geogràfica del document, el cost d'adquisició, l'analfabetisme, la disponibilitat de còpies 
                    o l'accés a tecnologies de reproducció i difusió.
                  </p>
                  <p className="mb-4">
                    L'<strong>accessibilitat intel·lectual</strong>, en canvi, es refereix a la capacitat real de comprendre, 
                    interpretar i aplicar el contingut jurídic. Aquesta dimensió transcendeix la mera disponibilitat física 
                    del text i implica la comprensió del significat, la capacitat de relacionar normes entre si, la 
                    interpretació del llenguatge jurídic i la capacitat d'aplicar aquest coneixement a situacions concretes. 
                    Les barreres a l'accessibilitat intel·lectual inclouen la complexitat del llenguatge jurídic ("legalese"), 
                    la necessitat de coneixements especialitzats, la fragmentació de la informació legal i la dependència 
                    d'intermediaris per a la interpretació.
                  </p>
                  <p className="mb-4">
                    Aquesta distinció és crucial per entendre la paradoxa històrica que ha caracteritzat l'evolució de l'accés 
                    al dret: <strong>l'augment de l'accés físic no ha comportat necessàriament una millora proporcional de 
                    l'accessibilitat intel·lectual</strong>. Les Dotze Taules van garantir l'accés físic al dret romà, però 
                    la seva comprensió continuava requerint coneixements especialitzats. La impremta va democratitzar l'accés 
                    als textos legals, però la complexitat del llenguatge jurídic va mantenir barreres intel·lectuals 
                    significatives. Avui dia, malgrat tenir accés gratuït i universal als textos legals a través d'Internet, 
                    la majoria dels ciutadans continuen trobant dificultats per comprendre i aplicar el dret sense l'assistència 
                    d'intermediaris professionals.
                  </p>
                  <p>
                    Aquesta perspectiva dual permet analitzar la història de l'accés al dret no només com una evolució 
                    tecnològica, sinó també com una lluita constant per reduir les barreres tant físiques com intel·lectuals 
                    que limiten l'autonomia ciutadana en la comprensió i aplicació del dret.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Antiguitat: La publicitat com a revolució jurídica</h4>
                  <p className="mb-4">
                    Els primers sistemes jurídics complexos de la humanitat ja van reconèixer la necessitat 
                    de la publicitat com a garantia de legitimitat. El <strong>Codi d'Hammurabi</strong> 
                    (Babilònia, 1792-1750 aC) representa una fita inicial en aquest sentit, encara que la 
                    seva accessibilitat real per a la població comuna sigui matèria de debat. Esculpit en 
                    una estela de basalto i exposat públicament, el codi buscava unificar diversos sistemes 
                    jurídics locals i establir un cos normatiu visible per a tots els habitants de l'imperi. 
                    No obstant això, la concentració del coneixement escrit en mans d'una elit sacerdotal i 
                    administrativa limitava efectivament l'accés real del ciutadà mitjà.
                  </p>
                  <p className="mb-4">
                    La veritable ruptura paradigmàtica arriba amb les <strong>Dotze Taules de Roma</strong> 
                    (450 aC), un moment que els juristes romans van considerar l'inici del dret propiament 
                    dit. La promulgació d'aquest codi va respondre directament a les demandes de la plebs, 
                    que patia l'arbitrarietat d'un dret no escrit interpretat exclusivament per la noblesa 
                    patrícia i els pontífexs. Després d'una crisi institucional que va incloure una secessió 
                    de la plebs, el Senat va crear una comissió de decemvirs que va codificar les normes 
                    existents i les va inscriure en dotze taules de bronze exposades al Fòrum romà.
                  </p>
                  <p className="mb-4">
                    Aquest acte de publicitat va tenir una triple funció transformadora. En primer lloc, va 
                    establir la <strong>transparència procedimental</strong>: tot ciutadà podia conèixer els 
                    mecanismes judicials i les sancions previstes, cosa que limitava el poder discrecional 
                    dels magistrats. En segon lloc, va crear un <strong>llenguatge jurídic compartit</strong> 
                    que, tot i ser imperfecte i encara elitista, proporcionava a la plebs un marc de referència 
                    per defensar-se de l'explotació econòmica. Finalment, va institucionalitzar el principi 
                    que la <strong>ciutadania implicava drets cognoscibles</strong>, un concepte que perduraria 
                    en la tradició jurídica occidental. Les pròpies Taules, però, reflectien la tensió social 
                    de l'època: mentre algunes disposicions garantien igualtat processal, altres consagraven 
                    privilegis patricis, com la prohibició de matrimonis entre patricis i plebeus.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">L'Edat Mitjana: El monopoli del coneixement eclesiàstic</h4>
                  <p className="mb-4">
                    El col·lapse de l'Imperi Romà va significar una regressió radical en l'accés públic al 
                    dret. Durant l'alta edat mitjana, el coneixement jurídic es va concentrar quasi 
                    exclusivament en els <strong>scriptoria monàstics</strong>, on monjos i monges copiaven 
                    manuscrits de dret canònic i dret romà amb finalitats principalment doctrinals. Aquest 
                    procés de transmissió manual, controlat per les institucions eclesiàstiques, converteix 
                    el text jurídic en un bé escàs i sotmès a una interpretació mediatitzada per l'Església.
                  </p>
                  <p className="mb-4">
                    Paral·lelament, el dret vigent en la major part d'Europa va ser el <strong>dret 
                    consuetudinari</strong>, un sistema no escrit basat en pràctiques locals, precedents i 
                    tradicions. Aquest dret, lluny de ser accessible, operava com un "saber fer" dels senyors 
                    feudals, jutges locals i oficials manorials que l'aplicaven sense necessitat de 
                    justificar-ne els fonaments. A Anglaterra, per exemple, les cortes manorials observaven 
                    el "dret consuetudinari" mentre que les cortes reials aplicaven el "common law", però en 
                    ambdós casos la població camperola tenia una participació molt limitada en la 
                    interpretació de les normes.
                  </p>
                  <p className="mb-4">
                    La <strong>Universitat de Bolonya</strong>, fundada el 1088, va representar una inflexió 
                    important en la recuperació del dret romà i el desenvolupament del dret canònic com a 
                    sistemes sistemàtics. No obstant això, aquesta renaixença jurídica va ser profundament 
                    elitista: l'ensenyament es feia en llatí, i els llibres de lleis eren objectes cars i 
                    inaccessibles per a la majoria de la població. Els juristes formats a Bolonya esdevenien 
                    consellers (consilia) dels poders públics, però el seu coneixement no filtrava cap a la 
                    societat civil. A més, la proliferació de sistemes jurídics locals (dret visigòtic, dret 
                    llombard, costums de ciutat) va crear un panorama legal fragmentat i opac, on el ciutadà 
                    comú es movia sense mapa cognitiu.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">La Revolució de la Impremta: Democratització i control</h4>
                  <p className="mb-4">
                    La invenció de la impremta per Gutenberg al segle XV va representar una ruptura 
                    epistemològica sense precedents en l'accés al coneixement jurídic. La capacitat de produir 
                    llibres en múltiples còpies va transformar el text legal d'un bé escàs en un producte 
                    potencialment massiu. Durant el segle XVI, les obres jurídiques impreses van ser 
                    principalment <strong>col·leccions d'estatuts, informes judicials i abreujaments</strong>, 
                    que començaven a circular en anglès i altres llengües vernacles.
                  </p>
                  <p className="mb-4">
                    Aquest procés va tenir efectes contradictoris. Per una banda, la <strong>democratització 
                    del coneixement</strong> va fer possible que ciutadans no especialistes accedissin a 
                    informació bàsica sobre procediments judicials, dret penal i drets de propietat. Autors 
                    com Rastell argumentaven que la impremta evitaria que la llei fos una "trampa" per als 
                    ignorants. Per primera vegada, Justices of the Peace i altres funcionaris locals podien 
                    disposar de manuals pràctics en la seva llengua. Aquest fenomen es va accelerar durant el 
                    regnat de Carles I d'Anglaterra, quan es van imprimir els primers informes judicials 
                    complets en anglès, com els <em>Hobart's Reports</em> (1641), i material educatiu dels 
                    Inns of Court.
                  </p>
                  <p className="mb-4">
                    Per altra banda, els poders públics van reaccionar ràpidament amb mecanismes de 
                    <strong>censura i control</strong>. Al segle XVI, el govern anglès va crear la 
                    <strong>Stationers' Company</strong> (1556), un gremi amb poder de policia sobre la 
                    impremta, i va establir sistemes de llicències prèvies i llistes de llibres prohibits. La 
                    censura es va justificar com a protecció contra continguts "sediciosos" o "herètics", 
                    però l'efecte real va ser la consolidació d'un monopoli estatal-gremial sobre la 
                    producció legal. Els decrets de la <em>Star Chamber</em> (1586, 1637) reforçaven aquest 
                    control, limitant el nombre de premses i assignant drets d'impressió exclusius.
                  </p>
                  <p className="mb-4">
                    Paradoxalment, aquest sistema de <strong>copyright primerenc</strong> va sorgir com a 
                    eina de control estatal abans que com a protecció dels drets d'autor. Els impressors 
                    registraven obres per obtenir un "títol incontestable" que els protegia de la competència, 
                    però aquest dret derivava de la concessió reial, no de la creativitat pròpia. Així, la 
                    impremta va democratitzar parcialment l'accés mentre simultàniament construïa noves 
                    barreres institucionals.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">El segle XIX i XX: Butlletins oficials i publicació sistemàtica</h4>
                  <p className="mb-4">
                    El segle XIX va veure l'emergència de codificacions nacionals amb l'objectiu explícit de 
                    crear sistemes legals unificats i accessibles. El Codi Civil francès de 1804 (Codi 
                    Napoleó) va ser traduït i adaptat a múltiples jurisdiccions, però la seva accessibilitat 
                    real per als ciutadans comuns continuava sent limitada. El segle XX va introduir la 
                    publicació sistemàtica de normes a través de butlletins oficials (com el BOE espanyol, el 
                    BOPA andorrà o el Journal Officiel francès). Aquests mecanismes van garantir la 
                    publicitat formal de les lleis, però la seva accessibilitat pràctica seguia sent 
                    problemàtica: els butlletins eren costosos, difícils de consultar i requerien coneixements 
                    jurídics per a la seva interpretació.
                  </p>

                  <h4 className="font-semibold text-gray-900 mb-2 mt-4">L'era digital: oportunitats i limitacions</h4>
                  <p className="mb-4">
                    L'emergència d'Internet i les tecnologies digitals al final del segle XX i principis del 
                    XXI va obrir noves possibilitats per a l'accés al coneixement jurídic. Els portals 
                    jurídics oficials van permetre l'accés gratuït als textos legals, però les limitacions 
                    persistien:
                  </p>
                  <ul className="space-y-2 list-disc list-inside mt-2 mb-4">
                    <li><strong>Format PDF no estructurat:</strong> La majoria de les publicacions oficials continuen utilitzant PDFs que dificulten la cerca i la navegació</li>
                    <li><strong>Absència d'eines de cerca avançada:</strong> La manca de cerques semàntiques o per conceptes limita la utilitat pràctica</li>
                    <li><strong>Complexitat del llenguatge:</strong> El "legalese" continua sent una barrera significativa per als ciutadans sense formació jurídica</li>
                    <li><strong>Fragmentació de la informació:</strong> Les normes estan disperses en múltiples fonts i documents, dificultant la comprensió del marc legal complet</li>
                  </ul>
                </div>

                <h4 id="casos-catalunya-andorra" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.2.1. Casos específics d'estudi: Catalunya i Andorra
                </h4>
                <p className="mb-4">
                  La trajectòria històrica de l'accés al coneixement jurídic adquireix dimensions especials 
                  quan s'examina en el context dels Països Catalans, on Catalunya i Andorra presenten 
                  trajectòries paral·leles però diferenciades que il·lustren les tensions entre accessibilitat 
                  i control.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Catalunya: De les Constitucions a la digitalització</h5>
                  <p className="mb-4">
                    Catalunya va desenvolupar un dels sistemes jurídics més sofisticats de l'Europa medieval, 
                    caracteritzat per la codificació precoç i la publicitat relativa de les normes. Les 
                    <strong>Constitucions de Catalunya</strong>, compilades per primera vegada al segle XIII i 
                    sistematitzades progressivament, representaven un intent de crear un dret públic accessible 
                    als ciutadans. Aquestes constitucions es promulgaven en les Corts i es publicaven per a la 
                    seva difusió, encara que la seva accessibilitat real fos limitada per l'analfabetisme i la 
                    dependència d'intermediaris.
                  </p>
                  <p className="mb-4">
                    Els <strong>Usatges de Barcelona</strong> (segle XII) constitueixen un exemple primerenc de 
                    codificació consuetudinària que buscava unificar el dret català. Aquest text, tot i ser escrit 
                    en llatí i accessible principalment a la noblesa i al clergat, va establir un precedent de 
                    publicitat normativa que es desenvoluparia amb les Constitucions posteriors. La tradició 
                    jurídica catalana es va caracteritzar per la coexistència de múltiples fonts de dret (dret 
                    romà, dret canònic, dret consuetudinari local, constitucions), creant un sistema complex però 
                    relativament accessible per als estaments privilegiats.
                  </p>
                  <p className="mb-4">
                    Durant l'Edat Moderna, la publicació de les Constitucions i altres normes es va fer a través 
                    de llibres impresos, però la seva accessibilitat continuava sent limitada. La supressió de les 
                    institucions catalanes després de la Guerra de Successió (1714) va significar una regressió 
                    en l'accés al dret català, que va passar a estar subordinat al dret castellà i publicat 
                    principalment a través del Butlletí Oficial de l'Estat.
                  </p>
                  <p className="mb-4">
                    Amb la recuperació de l'autonomia política al segle XX, Catalunya va desenvolupar el 
                    <strong>Diari Oficial de la Generalitat de Catalunya (DOGC)</strong>, creat el 1980, que va 
                    garantir la publicació sistemàtica de les normes catalanes. La digitalització del DOGC a finals 
                    del segle XX va representar un pas significatiu cap a l'accessibilitat, però les limitacions 
                    persistien: el format PDF, l'absència d'eines de cerca avançada i la complexitat del llenguatge 
                    jurídic continuaven sent barreres per als ciutadans.
                  </p>
                  <p className="mb-4">
                    En l'actualitat, Catalunya disposa d'un portal jurídic relativament sofisticat que permet 
                    l'accés a les normes, però encara presenta limitacions en termes de comprensió i interpretació 
                    per part de ciutadans no especialistes. Aquest context fa que iniciatives com el projecte 
                    catalunyalegal.vercel.app, que serveix de prova de concepte per a Prudencia.ad, siguin 
                    especialment rellevants.
                  </p>

                  <h5 className="font-semibold text-gray-800 mb-2 mt-4">Andorra: De la tradició consuetudinària a la codificació moderna</h5>
                  <p className="mb-4">
                    Andorra presenta una trajectòria històrica única que reflecteix les tensions entre tradició i 
                    modernització en l'accés al coneixement jurídic. Durant segles, el dret andorrà es va basar en 
                    la tradició consuetudinària i en els <strong>Parèages</strong> (1278, 1288), documents 
                    fundacionals que estableixen el sistema de co-sobirania entre el bisbe d'Urgell i el comte de 
                    Foix (posteriorment el president de França). Aquests documents, escrits en llatí i accessibles 
                    principalment a les elits, van establir un marc jurídic que es va mantenir gairebé sense canvis 
                    fins al segle XX.
                  </p>
                  <p className="mb-4">
                    El dret andorrà tradicional es caracteritzava per la seva <strong>oralitat i 
                    consuetudinarisme</strong>. Les decisions judicials es basaven en la memòria col·lectiva i en la 
                    interpretació dels consellers i dels síndics, creant un sistema on el coneixement jurídic estava 
                    concentrat en un petit nombre d'individus. Aquesta tradició oral, tot i ser accessible en el 
                    sentit que tothom podia participar en les assemblees (veus), presentava limitacions 
                    significatives: la manca de codificació escrita feia difícil la previsibilitat i la transparència 
                    del dret.
                  </p>
                  <p className="mb-4">
                    La modernització del sistema jurídic andorrà va començar amb l'aprovació de la 
                    <strong>Constitució d'Andorra</strong> (1993), que va establir un marc democràtic modern i va 
                    crear el Butlletí Oficial del Principat d'Andorra (BOPA) com a mecanisme de publicació de normes. 
                    No obstant això, la transició del dret consuetudinari al dret codificat ha estat gradual i 
                    incompleta. Fins a l'aprovació del <strong>Codi Civil d'Andorra</strong> (2022), moltes àrees del 
                    dret continuaven basant-se en la tradició i en la jurisprudència, sense una codificació 
                    sistemàtica.
                  </p>
                  <p className="mb-4">
                    El BOPA, creat el 1993, va representar un pas significatiu cap a la publicitat de les normes, 
                    però la seva accessibilitat pràctica ha estat limitada per diversos factors:
                  </p>
                  <ul className="space-y-2 list-disc list-inside mt-2 mb-4">
                    <li><strong>Format PDF no estructurat:</strong> Les publicacions del BOPA es fan principalment en PDF, dificultant la cerca i la navegació</li>
                    <li><strong>Absència d'eines de cerca:</strong> No existeixen cerques semàntiques o per conceptes que facilitin l'accés als ciutadans</li>
                    <li><strong>Multilingüisme no resolt:</strong> Malgrat que el català és l'única llengua oficial, la realitat trilingüe (català, castellà, francès) no està adequadament reflectida en les publicacions oficials</li>
                    <li><strong>Dependència de la tradició:</strong> Moltes normes continuen referint-se a pràctiques consuetudinàries no codificades, dificultant la comprensió per part d'expatriats i ciutadans sense coneixement de la tradició local</li>
                  </ul>
                  <p className="mb-4">
                    La recent aprovació del Codi Civil (2022) representa una oportunitat única per desenvolupar eines 
                    digitals modernes des del moment de la seva entrada en vigor, evitant l'herència de sistemes 
                    obsolets. Aquest context fa que el projecte Prudencia.ad sigui especialment rellevant: no només 
                    millora l'accessibilitat del dret andorrà, sinó que també contribueix a la transició del sistema 
                    consuetudinari tradicional cap a un sistema jurídic modern i accessible.
                  </p>

                  <h5 className="font-semibold text-gray-800 mb-2 mt-4">Comparativa i implicacions</h5>
                  <p className="mb-4">
                    La comparativa entre Catalunya i Andorra revela tensions similars però amb manifestacions 
                    diferents. Catalunya, amb una tradició de codificació més antiga i un sistema jurídic més 
                    desenvolupat, ha desenvolupat eines digitals relativament sofisticades però encara presenta barreres 
                    de comprensió. Andorra, amb una tradició consuetudinària més forta i una codificació més recent, 
                    presenta oportunitats úniques per desenvolupar eines modernes des del principi, evitant els 
                    problemes d'herència de sistemes obsolets.
                  </p>
                  <p className="mb-4">
                    En ambdós casos, però, la lliçó històrica és clara: la publicació formal de les normes no 
                    garanteix l'accessibilitat efectiva. Tant Catalunya com Andorra necessiten eines que no només 
                    publiquin les lleis, sinó que les facin comprensibles i accessibles per a tots els ciutadans, 
                    especialment considerant la realitat multilingüe i la proporció elevada d'expatriats en ambdós 
                    territoris.
                  </p>
                </div>

                <h4 id="implicacions-dret-modern" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">Implicacions per al dret modern i la democràcia</h4>
                <p className="mb-4">
                  La trajectòria històrica descrita revela una llei immutable: <strong>la transparència 
                  jurídica és condició necessària però no suficient per a la justícia social</strong>. Les 
                  Dotze Taules van publicar el dret però van mantenir privilegis de classe. La impremta va 
                  difondre el coneixement però va generar noves formes de control estatal. Aquesta tensió 
                  persisteix avui en dia amb la digitalització de la informació legal i les barreres 
                  d'accessibilitat i comprensió que encara limiten l'autonomia ciutadana.
                </p>
                <p className="mb-4">
                  La distinció entre accés físic i accessibilitat intel·lectual adquireix especial rellevància en l'era 
                  digital contemporània. Avui dia, l'accés físic als textos legals ha assolit nivells sense precedents: 
                  els portals jurídics oficials ofereixen accés gratuït i universal a les normes, i les tecnologies 
                  digitals permeten la cerca i la consulta instantània. No obstant això, aquest augment espectacular 
                  de l'accés físic no s'ha traduït en una millora proporcional de l'accessibilitat intel·lectual. La 
                  paradoxa contemporània és clara: <strong>tenim més accés físic que mai, però les barreres 
                  intel·lectuals persisteixen i, en alguns casos, s'han agreujat</strong> per la fragmentació de la 
                  informació i la complexitat creixent dels sistemes legals.
                </p>
                <p className="mb-4">
                  Per als sistemes jurídics contemporanis, la lliçó és clara: <strong>l'accés formal al 
                  text no equival a l'accés efectiu al dret</strong>. La història demostra que la ciutadania 
                  necessita no només lleis publicades (accés físic) sinó també <strong>eines que facilitin la 
                  comprensió, l'interpretació i l'aplicació del dret</strong> (accessibilitat intel·lectual). 
                  Això requereix educació jurídica, llenguatge clar, mecanismes de participació en la interpretació 
                  normativa i, especialment en l'era digital, eines tecnològiques que transformin l'accés físic en 
                  accessibilitat intel·lectual real.
                </p>
                <p className="mb-4">
                  La revolució de la impremta va ensenyar que cada ruptura tecnològica en la difusió del coneixement 
                  comporta simultàniament potencial emancipador i risc de monopolització. En aquest sentit, la 
                  digitalització actual del dret, amb plataformes com Prudencia.ad que combinen l'accés físic amb eines 
                  d'accessibilitat intel·lectual (simplificació del llenguatge, explicacions contextuals, comparatives 
                  entre sistemes legals), representa una nova etapa en aquesta lluita secular per la democratització real 
                  del saber jurídic, superant la paradoxa històrica que ha caracteritzat l'evolució de l'accés al dret.
                </p>

                <h3 id="context-andorra" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.3. El context específic del Principat d'Andorra
                </h3>
                <p className="mb-4">
                  El Principat d'Andorra presenta característiques úniques que fan aquest projecte 
                  especialment rellevant des d'una perspectiva acadèmica i pràctica. Amb una població 
                  d'aproximadament 77.543 habitants segons les dades del Servei d'Estudis del Ministeri 
                  d'Afers Socials, Justícia i Interior (2023), Andorra combina un ordenament jurídic 
                  compacte però complet amb una realitat sociolingüística complexa.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Característiques distintives del marc jurídic andorrà:</h4>
                  <ul className="space-y-2 list-disc list-inside mt-2">
                    <li>
                      <strong>Ordenament jurídic compacte:</strong> A diferència dels sistemes legals 
                      de gran escala, l'ordenament andorrà presenta una estructura més manejable, 
                      facilitant la creació d'eines comprehensives que abastin tot el corpus legal 
                      rellevant.
                    </li>
                    <li>
                      <strong>Realitat trilingüe oficial:</strong> Segons la Constitució andorrana 
                      (1993), el català és l'única llengua oficial, però el castellà i el francès 
                      són d'ús comú i reconeguts en la pràctica jurídica i administrativa. Aquesta 
                      realitat multilingüe crea necessitats específiques d'accessibilitat que no 
                      s'aborden adequadament amb eines monolingües.
                    </li>
                    <li>
                      <strong>Alta proporció d'expatriats:</strong> Segons l'Institut d'Estudis 
                      Andorrans (2023), aproximadament el 48% de la població és d'origen estranger, 
                      creant una necessitat crítica d'eines que facilitin la comprensió del marc legal 
                      per a persones que poden tenir coneixements limitats del català jurídic.
                    </li>
                    <li>
                      <strong>Codificació recent i modernització:</strong> L'aprovació del Codi Civil 
                      d'Andorra el 2022 representa una modernització significativa del dret privat 
                      andorrà, creant una oportunitat única per desenvolupar eines digitals des del 
                      moment de la seva entrada en vigor.
                    </li>
                    <li>
                      <strong>Accés al BOPA:</strong> El Butlletí Oficial del Principat d'Andorra 
                      (BOPA) constitueix la font oficial de publicació de normes, però la seva 
                      estructura en PDF i l'absència d'eines de cerca avançades dificulten l'accés 
                      eficient per part de ciutadans i professionals.
                    </li>
                  </ul>
                </div>

                <h3 id="context-comparativa" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.4. Comparativa amb sistemes veïns
                </h3>
                <p className="mb-4">
                  A diferència d'Andorra, els sistemes legals veïns (Catalunya, Espanya, França) han 
                  desenvolupat eines digitals sofisticades per facilitar l'accés al coneixement jurídic. 
                  Per exemple, el portal <em>Ley fácil</em> de Xile, iniciatives similars a Espanya 
                  com <em>BOE.es</em> amb funcionalitats de cerca avançada, o el portal jurídic de 
                  Catalunya amb eines de consulta estructurada, demostren la viabilitat i el valor 
                  d'aquest tipus de solucions.
                </p>
                <p className="mb-4">
                  Aquesta comparativa posa de manifest la necessitat d'eines modernes, centralitzades 
                  i explicatives del dret andorrà que puguin competir amb els estàndards establerts en 
                  sistemes legals veïns, especialment considerant la importància creixent del dret 
                  comparat en un context europeu integrat.
                </p>

                <h3 id="context-legaltech" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.5. La oportunitat de la LegalTech i la IA generativa
                </h3>
                <p className="mb-4">
                  L'emergència de la LegalTech i específicament dels models de llenguatge gran (LLMs) 
                  com GPT-4, Claude, o altres sistemes d'IA generativa, ofereix oportunitats sense 
                  precedents per abordar els desafiaments d'accessibilitat jurídica. La investigació 
                  recent ha demostrat que aquests models poden generar explicacions clares de text 
                  jurídic complex mantenint la precisió conceptual (Katz et al., 2023), tot i que 
                  requereixen estratègies específiques per mitigar riscos com l'al·lucinació (Ji et al., 
                  2023).
                </p>
                <p className="mb-4">
                  No obstant això, la IA legal presenta riscos significatius que han de ser abordats amb 
                  rigor. Des de mitjans de 2023, s'han identificat més de 120 casos d'al·lucinacions 
                  (cites o precedents completament ficticis) en documents judicials generats per IA. 
                  A més, la precisió dels LLMs en tasques de raonament jurídic especialitzat sovint és 
                  inferior al 50%, la qual cosa els fa inadequats per a un ús no supervisat. Aquests 
                  riscos són especialment perillosos per als usuaris amb menys coneixements jurídics, 
                  precisament els més afectats per l'opacitat sistèmica i els menys capaços de detectar 
                  errors mortals.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <p className="mb-4">
                    En aquest context, la perspectiva de <strong>López de Mántaras (2023)</strong> sobre les 
                    <strong> IA especialitzades</strong> adquireix especial rellevància. L'investigador català argumenta 
                    que les intel·ligències artificials especialitzades poden triomfar en el processament de llenguatge 
                    natural en dominis específics, superant les limitacions dels models generals. Aquesta premissa és 
                    particularment aplicable al LegalTech: mentre que els LLMs generals poden tenir dificultats amb la 
                    precisió i la fiabilitat en contextos jurídics especialitzats, els sistemes d'IA entrenats 
                    específicament per al dret poden assolir millors resultats en comprensió, generació i interpretació 
                    de llenguatge jurídic.
                  </p>
                  <p className="mb-4">
                    La proposta de López de Mántaras suggereix que, en lloc de confiar exclusivament en models generals 
                    que intenten abastar tots els dominis, el desenvolupament de <strong>IA especialitzades en dret</strong> 
                    pot oferir avantatges significatius: major precisió en la interpretació de terminologia jurídica, millor 
                    comprensió del context legal, reducció d'al·lucinacions en dominis especialitzats i capacitat superior 
                    per simplificar el llenguatge jurídic mantenint la fidelitat conceptual. Aquesta aproximació és especialment 
                    valuosa per a contextos micro-estatals com Andorra, on la creació d'un model especialitzat en el dret 
                    andorrà pot proporcionar nivells de precisió i fiabilitat que els models generals no poden assolir.
                  </p>
                </div>
                <p className="mb-4">
                  La perspectiva de <strong>Colina (2024)</strong> sobre la IA com a <strong>canvi de paradigma en el dret</strong> 
                  proporciona un marc teòric addicional per entendre la transformació que està experimentant el sector legal. 
                  Colina argumenta que la intel·ligència artificial representa un canvi paradigmàtic similar a altres revolucions 
                  tecnològiques que han impactat el sistema legal, transformant no només les eines disponibles sinó també els processos 
                  legals, la interpretació jurídica i la pràctica del dret mateix. Aquest canvi de paradigma implica una redefinició 
                  de com es genera, s'interpreta i s'aplica el coneixement jurídic, amb implicacions profundes per a l'accessibilitat 
                  i la democratització del dret.
                </p>
                <p className="mb-4">
                  El projecte Prudencia.ad s'insereix en aquest context com una iniciativa que combina la innovació tecnològica 
                  amb la necessitat social d'accessibilitat jurídica, adoptant una aproximació que reconeix tant les oportunitats 
                  dels LLMs generals com el potencial superior de les IA especialitzades. Això es reflecteix en la visió a llarg 
                  termini del projecte, que inclou el desenvolupament d'un model d'IA fine-tuned específicament per al dret andorrà, 
                  contribuint tant al desenvolupament pràctic d'eines útils com al coneixement acadèmic sobre l'aplicació de la IA 
                  especialitzada en contextos jurídics micro-estatals. En aquest sentit, el projecte no només utilitza la tecnologia 
                  com a eina, sinó que participa activament en el canvi de paradigma que Colina identifica, contribuint a redefinir 
                  com els ciutadans accedeixen, comprenen i interactuen amb el dret.
                </p>

                <h3 id="context-llenguatge-clar" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.6. Els principis de Llenguatge Clar i Disseny Jurídic
                </h3>
                <p className="mb-4">
                  El moviment del Llenguatge Clar (Plain Language) és un estàndard global que busca una 
                  comunicació que l'audiència pugui llegir, entendre i sobre la qual pugui actuar en una 
                  sola lectura. Els seus principis bàsics inclouen l'ús de frases curtes i directes 
                  (evitant excedir les 24 paraules), la preferència per la veu activa sobre la passiva, 
                  l'eliminació de paraules innecessàries i redundàncies, i la reducció de nominalitzacions. 
                  Aquest enfocament ha estat adoptat institucionalment a nivell mundial, amb exemples clau 
                  com la Plain Writing Act of 2010 als Estats Units.
                </p>
                <p className="mb-4">
                  El mite que el "legalese" és necessari per a la precisió ha estat repetidament 
                  desmuntat per la investigació empírica. La claredat no sacrifica la precisió legal; al 
                  contrari, l'augmenta en reduir l'ambigüitat i el risc de litigis derivats de males 
                  interpretacions. L'evidència del benefici del Llenguatge Clar és contundent: la revisió 
                  d'una única carta per part de l'Administració de Beneficis per a Veterans dels EUA va 
                  reduir dràsticament el nombre de trucades telefòniques, demostrant un estalvi de costos 
                  i un augment significatiu de l'eficiència operativa.
                </p>
                <p className="mb-4">
                  El Disseny Jurídic (Legal Design) és una disciplina centrada en l'usuari que construeix 
                  i expandeix els principis del Llenguatge Clar. Incorpora elements de disseny gràfic, 
                  visualització de dades i disseny d'experiència d'usuari (UX) per millorar la usabilitat 
                  global dels processos i documents legals. Això inclou l'ús de tipografies llegibles 
                  (mida mínima de 12-14 punts), espai en blanc generós per reduir la càrrega cognitiva, 
                  capçaleres clares amb jerarquia visual, i elements visuals com icones, diagrames de flux 
                  i cronologies. Aquest enfocament transforma els documents legals d'avisos burocràtics a 
                  eines educatives que apoderen els usuaris, fomentant l'agència personal i reduint la 
                  dependència sistèmica dels intermediaris legals.
                </p>

                <h3 id="context-marc-etic" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.1.7. Marc ètic i arquitectura de risc mínim per a la IA legal
                </h3>
                <p className="mb-4">
                  Una IA dissenyada per interpretar lleis, doctrina o jurisprudència s'ha de plantejar sota 
                  un marc de <strong>risc mínim, verificació obligatòria i claredat màxima</strong>, 
                  fusionant la tecnologia amb els principis de Llenguatge Clar i Disseny Legal. Aquesta IA 
                  s'ha de concebre no com una entitat autònoma de presa de decisions, sinó com una 
                  <strong>eina d'assistència i simplificació</strong> sota estricta supervisió humana.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Principis fonamentals del disseny:</h4>
                  <ul className="space-y-2 list-disc list-inside mt-2">
                    <li>
                      <strong>Desplegament verificat i tancat:</strong> El sistema d'IA s'ha de desplegar 
                      exclusivament en marcs verificats i rastrejables, prohibint l'ús d'eines d'IA 
                      generativa no rastrejables per a la simplificació de textos o l'assessorament legal 
                      públic.
                    </li>
                    <li>
                      <strong>Transparència i traçabilitat:</strong> Qualsevol simplificació o resum generat 
                      ha de proporcionar una comparació costat per costat del text original i el text 
                      simplificat, amb enllaços directes a la font en el document original (llei o 
                      jurisprudència).
                    </li>
                    <li>
                      <strong>Supervisió humana obligatòria:</strong> Els professionals del dret tenen el 
                      deure ètic no delegable de verificar tota la informació generada per IA, tractant-la 
                      com el treball d'un assistent virtual jove que necessita orientació i verificació 
                      exhaustiva.
                    </li>
                    <li>
                      <strong>Mesurament objectiu de la claredat:</strong> L'output de l'IA ha d'avaluar-se 
                      per complir amb estàndards de llegibilitat mínims, utilitzant mètriques com el 
                      Flesch-Kincaid Grade Level, apuntant a un nivell de 7.0–8.0 per a documents destinats 
                      al públic general.
                    </li>
                  </ul>
                </div>
                <p className="mb-4">
                  Aquest marc ètic és essencial per garantir que la IA legal sigui un sistema altament 
                  restringit i auditat que prioritzi la claredat i la usabilitat per sobre de la generació 
                  lliure de contingut, assegurant-se que cada interpretació estigui recolzada per fonts 
                  verificables i presentada d'una manera que mitigi les barreres cognitives inherents al 
                  dret.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Referències citades en aquesta secció:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 list-none">
                    <li>• Choi, J. H., et al. (2023). "ChatGPT Goes to Law School". <em>SSRN Electronic Journal</em>.</li>
                    <li>• Hadfield, G. K. (2017). "Rules for a Flat World: Why Humans Invented Law and How to Reinvent It for a Complex Global Economy". Oxford University Press.</li>
                    <li>• Institut d'Estudis Andorrans (2023). Dades demogràfiques i poblacionals.</li>
                    <li>• Ji, Z., et al. (2023). "Survey of Hallucination in Natural Language Generation". <em>ACM Computing Surveys</em>, 55(12).</li>
                    <li>• Katz, D. M., et al. (2023). "GPT-4 Passes the Bar Exam". <em>SSRN Electronic Journal</em>.</li>
                    <li>• Sandefur, R. L. (2009). "Access to Justice". <em>Annual Review of Law and Social Science</em>, 5, 339-358.</li>
                    <li>• Servei d'Estudis del Ministeri d'Afers Socials, Justícia i Interior (2023). Estadístiques poblacionals d'Andorra.</li>
                    <li>• Tamanaha, B. Z. (2004). "On the Rule of Law: History, Politics, Theory". Cambridge University Press.</li>
                    <li>• Plain Writing Act of 2010, Public Law 111-274, 124 Stat. 2861 (Estats Units).</li>
                    <li>• Quadre Resum: La Crisi d'Accessibilitat Jurídica i les seves Solucions Estratègiques (2024). Resum generat amb Notebook LM.</li>
                    <li>• Disseny d'Intel·ligència Artificial per a Interpretació Legal: Marc de Risc Mínim, Verificació Obligatòria i Claredat Màxima (2024). Document de treball intern.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section id="problema" className="mb-16 scroll-mt-20">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1.2. Problema
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  El problema central que aborda aquest projecte no és simplement tècnic o d'infraestructura, 
                  sinó que es troba en el cor mateix del sistema jurídic: una <strong>crisi d'accessibilitat 
                  jurídica</strong> que representa un fracàs fonamental de comunicació institucional. Aquesta 
                  crisi no és un simple inconvenient, sinó una barrera funcional a la justícia que soscava 
                  directament els principis democràtics, l'equitat i la confiança institucional.
                </p>

                <h3 id="problema-opacitat" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.1. Opacitat i complexitat sistèmica del llenguatge jurídic
                </h3>
                <p className="mb-4">
                  El llenguatge jurídic tradicional, conegut com a "legalese", es caracteritza per una sèrie 
                  de trets que impedeixen activament la comprensió. Aquests inclouen clàusules imbricades al 
                  centre de les frases, un ús excessiu de la veu passiva, frases extremadament llargues 
                  (sovint de més de 24 paraules), una capitalització no estàndard i un lèxic arcaic. Estudis 
                  empírics demostren que la dificultat principal no rau només en la terminologia especialitzada, 
                  sinó en l'estil d'escriptura, que redueix significativament la comprensió i la retenció per 
                  part del públic general.
                </p>
                <p className="mb-4">
                  Aquesta complexitat és també estructural, derivada de l'alt volum de normes i de la 
                  dependència dels precedents, la qual cosa crea barreres gairebé insuperables per als no 
                  experts. En el context andorrà, aquest problema s'agreuja per la manca d'eines modernes, 
                  centralitzades i explicatives del dret andorrà en comparació amb sistemes veïns.
                </p>

                <h3 id="problema-implicacions" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.2. Implicacions estratègiques: desequilibri de poder i erosió de la confiança
                </h3>
                <p className="mb-4">
                  La incomprensió jurídica genera un <strong>desequilibri de poder</strong> que afecta de manera 
                  desproporcionada les poblacions marginades, incloent-hi persones amb lesions cerebrals 
                  traumàtiques (TBI) o amb un domini limitat de l'idioma, que ja estan sobrerepresentades en 
                  el sistema de justícia. Aquest desequilibri es manifesta de múltiples maneres:
                </p>
                <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4">
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>Dificultat d'accés al coneixement jurídic:</strong> Els ciutadans sense 
                      formació jurídica especialitzada troben barreres gairebé insuperables per interpretar 
                      normes, comprendre els seus drets i obligacions, i navegar pels sistemes legals.
                    </li>
                    <li>
                      <strong>Barrera lingüística agreujada:</strong> En el context andorrà, els expatriats 
                      (aproximadament el 48% de la població) que no dominen el català jurídic es troben 
                      davant d'una doble barrera: la complexitat del llenguatge legal i la barrera lingüística 
                      bàsica.
                    </li>
                    <li>
                      <strong>Erosió de la confiança institucional:</strong> La incomprensió està directament 
                      vinculada a una erosió mesurable de la confiança pública en les institucions governamentals 
                      i judicials. La manca de claredat allunya els ciutadans, soscavant la seva percepció de 
                      legitimitat i responsabilitat institucional.
                    </li>
                    <li>
                      <strong>Falta d'eines comparatives:</strong> L'absència d'eines que permetin comparar el 
                      dret andorrà amb sistemes veïns (Catalunya, Espanya) dificulta especialment als 
                      expatriats i professionals la comprensió del marc legal andorrà.
                    </li>
                    <li>
                      <strong>Absència de recursos digitals moderns:</strong> La manca d'eines digitals 
                      sofisticades per a professionals del dret i ciutadans limita l'eficiència i l'accessibilitat 
                      del sistema legal.
                    </li>
                  </ul>
                </div>

                <h3 id="problema-andorra" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.3. El problema específic del context andorrà
                </h3>
                <p className="mb-4">
                  En el Principat d'Andorra, aquesta crisi d'accessibilitat adquireix dimensions especials:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>
                    <strong>Estructura del BOPA:</strong> El Butlletí Oficial del Principat d'Andorra (BOPA) 
                    constitueix la font oficial de publicació de normes, però la seva estructura en PDF i 
                    l'absència d'eines de cerca avançades dificulten l'accés eficient per part de ciutadans 
                    i professionals.
                  </li>
                  <li>
                    <strong>Realitat multilingüe no adreçada:</strong> Malgrat que el català és l'única llengua 
                    oficial segons la Constitució (1993), el castellà i el francès són d'ús comú i reconeguts 
                    en la pràctica jurídica i administrativa. No obstant això, no existeixen eines que 
                    abordin adequadament aquesta realitat multilingüe.
                  </li>
                  <li>
                    <strong>Oportunitat perduda amb la codificació recent:</strong> L'aprovació del Codi Civil 
                    d'Andorra el 2022 representa una modernització significativa, però no s'ha acompanyat de 
                    eines digitals modernes que facilitin l'accés i la comprensió d'aquest nou corpus legal.
                  </li>
                </ul>

                <h3 id="problema-immigracio" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.3.1. Immigració i integració: el repte d'aprendre les lleis d'un nou país
                </h3>
                <p className="mb-4">
                  Un dels aspectes més crítics d'aquesta crisi d'accessibilitat jurídica es manifesta en el 
                  context de la <strong>immigració i la integració</strong>. En el Principat d'Andorra, on 
                  aproximadament el 48% de la població és d'origen estranger segons l'Institut d'Estudis 
                  Andorrans (2023), la pregunta fonamental és: <em>Com aprèn un nou vingut les lleis del país 
                  d'acollida?</em>
                </p>
                <p className="mb-4">
                  La integració efectiva d'una persona immigrant requereix la comprensió del marc legal que 
                  regula aspectes fonamentals de la vida quotidiana: drets laborals, drets de residència, 
                  obligacions fiscals, drets familiars, propietat, contractes, i un llarg etcètera. No obstant 
                  això, els immigrants s'enfronten a múltiples barreres per accedir a aquest coneixement:
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Barreres per a la integració jurídica dels immigrants:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong>Barrera lingüística:</strong> Encara que molts immigrants a Andorra parlen 
                      castellà o francès, el llenguatge jurídic català presenta un vocabulari tècnic i 
                      estructures sintàctiques complexes que difereixen significativament del llenguatge 
                      quotidià.
                    </li>
                    <li>
                      <strong>Diferències en els sistemes legals:</strong> Els immigrants provenen de sistemes 
                      legals amb tradicions jurídiques diferents (dret continental, common law, dret islàmic, 
                      etc.), la qual cosa fa que conceptes bàsics puguin ser completament diferents o inexistents 
                      en els seus països d'origen.
                    </li>
                    <li>
                      <strong>Falta de recursos educatius estructurats:</strong> No existeixen programes 
                      sistemàtics d'educació legal per a immigrants que els ajudin a comprendre el marc legal 
                      andorrà de manera progressiva i accessible.
                    </li>
                    <li>
                      <strong>Dependència d'intermediaris:</strong> La complexitat del sistema legal força els 
                      immigrants a dependre d'intermediaris (advocats, consultors, comunitats d'immigrants), 
                      creant desigualtats econòmiques i vulnerabilitat a l'explotació.
                    </li>
                    <li>
                      <strong>Informació fragmentada i no verificada:</strong> Els immigrants sovint depenen 
                      de fonts no oficials, informació de boca a boca o traduccions no oficials que poden ser 
                      incompletes, desactualitzades o incorrectes.
                    </li>
                  </ul>
                </div>
                <p className="mb-4">
                  Aquestes barreres no només dificulten la integració, sinó que també poden tenir conseqüències 
                  greus: immigrants que no compleixen obligacions legals per ignorància, que no exerceixen 
                  drets als quals tenen accés, o que es troben en situacions de vulnerabilitat per falta de 
                  coneixement del marc legal que els protegeix.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Com el coneixement fiable de les lleis facilita la integració
                </h4>
                <p className="mb-4">
                  El coneixement fiable i accessible de les lleis és un <strong>factor fonamental per a la 
                  integració efectiva</strong> dels immigrants per diverses raons:
                </p>
                <ul className="space-y-3 list-disc list-inside mb-4">
                  <li>
                    <strong>Autonomia i agència personal:</strong> Quan els immigrants poden comprendre les 
                    lleis per si mateixos, guanyen autonomia per prendre decisions informades sobre aspectes 
                    crítics de les seves vides sense dependre constantment d'intermediaris.
                  </li>
                  <li>
                    <strong>Prevenció de vulnerabilitats:</strong> El coneixement del marc legal ajuda els 
                    immigrants a identificar i prevenir situacions d'explotació laboral, abús o discriminació, 
                    i a saber on buscar ajuda quan es troben en situacions de vulnerabilitat.
                  </li>
                  <li>
                    <strong>Participació ciutadana:</strong> La comprensió del sistema legal és essencial per 
                    a la participació efectiva en la vida ciutadana, des de l'exercici del dret de vot fins a 
                    la participació en associacions o la comprensió de les obligacions i drets com a residents.
                  </li>
                  <li>
                    <strong>Confiança en les institucions:</strong> Quan les lleis són accessibles i comprensibles, 
                    els immigrants desenvolupen confiança en les institucions del país d'acollida, facilitant 
                    la seva integració social i cultural.
                  </li>
                  <li>
                    <strong>Comparació amb sistemes coneguts:</strong> Per a immigrants que provenen de sistemes 
                    legals similars (com els de Catalunya o Espanya), la possibilitat de comparar el dret 
                    andorrà amb el que coneixen facilita significativament la comprensió i l'adaptació.
                  </li>
                </ul>
                <p className="mb-4">
                  En aquest context, una eina com Prudencia.ad, que ofereix interpretacions clares i accessibles 
                  del dret andorrà en múltiples llengües, amb possibilitats de comparació amb sistemes legals 
                  veïns, i amb garanties de fiabilitat i traçabilitat, pot ser un <strong>instrument poderós 
                  per facilitar la integració jurídica i social</strong> dels immigrants a Andorra. No es tracta 
                  només d'una qüestió de tecnologia, sinó d'una qüestió de <strong>justícia social i integració 
                  efectiva</strong>.
                </p>

                <h3 id="problema-autotutela" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.4. Autotutela i autosuficiència jurídica: la necessitat d'autonomia ciutadana
                </h3>
                <p className="mb-4">
                  Un principi fonamental de l'estat de dret modern és la capacitat dels ciutadans d'exercir 
                  <strong>autotutela</strong> en la comprensió i aplicació de les lleis i normes que els afecten. 
                  La <strong>autosuficiència jurídica</strong> no significa que els ciutadans hagin de prescindir 
                  completament de l'assessorament professional quan sigui necessari, sinó que han de poder ser 
                  <strong>autònoms i autosuficients en el màxim nombre de casos possibles</strong>, especialment 
                  en qüestions quotidianes i de baixa complexitat.
                </p>
                <p className="mb-4">
                  La inaccessibilitat del llenguatge jurídic actual crea una <strong>dependència sistèmica 
                  d'intermediaris professionals</strong> fins i tot per a qüestions bàsiques que podrien ser 
                  resoltes pels propis ciutadans si tinguessin accés a informació clara i comprensible. Aquesta 
                  dependència genera múltiples problemes:
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Problemes derivats de la falta d'autotutela jurídica:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong>Desigualtat econòmica en l'accés a la justícia:</strong> La necessitat constant 
                      d'assessorament professional crea una barrera econòmica que exclou a persones amb recursos 
                      limitats de l'exercici efectiu dels seus drets.
                    </li>
                    <li>
                      <strong>Pèrdua d'agència personal:</strong> Quan els ciutadans no poden comprendre les 
                      normes que els afecten, perden capacitat de prendre decisions informades i autònomes sobre 
                      aspectes crítics de les seves vides.
                    </li>
                    <li>
                      <strong>Sobrecàrrega del sistema judicial:</strong> La dependència excessiva d'intermediaris 
                      i la manca de comprensió bàsica del dret genera un volum excessiu de consultes i litigis 
                      que podrien evitar-se amb millor accessibilitat jurídica.
                    </li>
                    <li>
                      <strong>Vulnerabilitat a l'explotació:</strong> La dependència d'intermediaris pot crear 
                      situacions de vulnerabilitat on els ciutadans no poden verificar si l'assessorament que 
                      reben és adequat o si estan sent explotats.
                    </li>
                    <li>
                      <strong>Erosió de la confiança institucional:</strong> Quan els ciutadans senten que no 
                      poden comprendre el sistema legal sense ajuda professional constant, desenvolupen desconfiança 
                      cap a les institucions i perceben el dret com a allunyat i inaccessible.
                    </li>
                  </ul>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  L'autotutela com a principi democràtic
                </h4>
                <p className="mb-4">
                  La capacitat d'autotutela jurídica és essencial per a una <strong>democràcia funcional</strong> 
                  per diverses raons:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>
                    <strong>Participació ciutadana informada:</strong> Per participar efectivament en la vida 
                    democràtica, els ciutadans han de poder comprendre les normes que regulen la seva participació, 
                    des del dret de vot fins a la participació en processos participatius o consultius.
                  </li>
                  <li>
                    <strong>Control democràtic:</strong> La comprensió del marc legal permet als ciutadans 
                    exercir un control efectiu sobre les institucions i exigir responsabilitats quan és necessari.
                  </li>
                  <li>
                    <strong>Prevenció de vulneracions de drets:</strong> Quan els ciutadans comprenen els seus 
                    drets, poden identificar i prevenir vulneracions abans que esdevinguin problemes més greus 
                    que requereixin intervenció professional o judicial.
                  </li>
                  <li>
                    <strong>Eficiència del sistema:</strong> Un sistema on els ciutadans poden resoldre qüestions 
                    bàsiques per si mateixos és més eficient i deixa els recursos professionals disponibles per a 
                    casos que realment requereixen assistència especialitzada.
                  </li>
                </ul>
                <p className="mb-4">
                  En aquest context, una eina com Prudencia.ad que ofereix interpretacions clares, accessibles i 
                  verificables del dret andorrà no és només una millora tecnològica, sinó un <strong>instrument 
                  per a l'empoderament ciutadà i l'exercici efectiu de l'autotutela jurídica</strong>. Permet als 
                  ciutadans ser autònoms en el màxim nombre de casos possibles, reduint la dependència d'intermediaris 
                  per a qüestions bàsiques mentre manté la possibilitat d'accedir a assessorament professional quan 
                  la complexitat ho requereixi.
                </p>

                <h3 id="problema-ia-drets" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.5. La IA com a eina per a la no discriminació i l'exercici de drets fonamentals
                </h3>
                <p className="mb-4">
                  La inaccessibilitat del llenguatge jurídic no només és un problema tècnic, sinó que constitueix 
                  una <strong>violació indirecta del principi de no discriminació</strong> i del dret fonamental 
                  a l'accés a la justícia. Quan el sistema legal és comprensible només per a una minoria 
                  especialitzada, es crea una discriminació de facto basada en l'educació, l'origen lingüístic, 
                  la capacitat cognitiva i el nivell socioeconòmic.
                </p>
                <p className="mb-4">
                  La intel·ligència artificial, quan es dissenya sota principis ètics i amb un marc de risc 
                  mínim, pot ser una eina poderosa per <strong>democratitzar l'accés al coneixement jurídic</strong> 
                  i garantir que tots els ciutadans, independentment del seu origen, formació o capacitats, 
                  puguin comprendre i exercir els seus drets fonamentals, exercint així l'autotutela jurídica de 
                  manera efectiva.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Com la IA pot promoure la no discriminació i els drets fonamentals:</h4>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>Igualtat d'accés al coneixement jurídic:</strong> Una IA ben dissenyada pot 
                      proporcionar interpretacions clares i accessibles del dret a tots els ciutadans, 
                      eliminant les barreres que tradicionalment han exclòs a persones sense formació jurídica 
                      o amb dominis limitats de l'idioma oficial.
                    </li>
                    <li>
                      <strong>Multilingüisme inclusiu:</strong> En contextos com Andorra, on el 48% de la població 
                      és d'origen estranger, la IA pot oferir interpretacions en múltiples llengües (català, 
                      castellà, francès), garantint que el dret sigui accessible independentment de la llengua 
                      materna de l'usuari.
                    </li>
                    <li>
                      <strong>Accommodació de diverses capacitats cognitives:</strong> La IA pot adaptar la 
                      complexitat de les explicacions segons les necessitats de l'usuari, facilitant l'accés a 
                      persones amb lesions cerebrals traumàtiques, dificultats d'aprenentatge o altres 
                      necessitats especials.
                    </li>
                    <li>
                      <strong>Reducció de la dependència d'intermediaris:</strong> En reduir la necessitat de 
                      consultar professionals legals per a qüestions bàsiques, la IA pot empoderar els ciutadans 
                      i reduir les desigualtats econòmiques en l'accés a la justícia.
                    </li>
                    <li>
                      <strong>Transparència i traçabilitat:</strong> Una IA dissenyada amb principis de 
                      transparència pot proporcionar comparacions costat per costat entre el text original i 
                      la interpretació, amb enllaços directes a les fonts, garantint que els usuaris puguin 
                      verificar la informació i exercir el seu dret a la informació.
                    </li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  La IA en la interpretació jurídica: possibilitats i limitacions
                </h4>
                <p className="mb-4">
                  En l'àmbit específic de la <strong>interpretació jurídica</strong>, la IA ofereix oportunitats 
                  úniques però també presenta desafiaments significatius que han de ser abordats amb rigor:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>
                    <strong>Simplificació sense pèrdua de precisió:</strong> La IA pot descomposar textos 
                    jurídics complexos en explicacions més accessibles, aplicant principis de Llenguatge Clar 
                    mentre manté la fidelitat al significat legal original.
                  </li>
                  <li>
                    <strong>Identificació de patrons i consistències:</strong> En analitzar grans volums de 
                    normes i jurisprudència, la IA pot ajudar a identificar inconsistències, contradiccions o 
                    àrees on la interpretació pot ser particularment complexa, ajudant tant a ciutadans com a 
                    professionals.
                  </li>
                  <li>
                    <strong>Contextualització i comparació:</strong> La IA pot proporcionar context sobre com 
                    una norma específica s'ha interpretat en casos similars o com es relaciona amb altres 
                    normes del sistema legal, facilitant una comprensió més completa.
                  </li>
                  <li>
                    <strong>Mitigació de biaixos humans:</strong> Quan es dissenya adequadament, la IA pot 
                    ajudar a identificar i mitigar biaixos inconscients que poden afectar la interpretació 
                    jurídica, promovent una aplicació més equitativa del dret.
                  </li>
                </ul>
                <p className="mb-4">
                  No obstant això, és crucial reconèixer que la IA no pot substituir el raonament jurídic 
                  humà ni la presa de decisions judicials. La IA ha de concebre's com una <strong>eina d'assistència 
                  i simplificació</strong> sota estricta supervisió humana, especialment en la interpretació 
                  jurídica, on el context, la intenció del legislador i les circumstàncies específiques de cada 
                  cas requereixen un raonament jurídic sofisticat que va més enllà de les capacitats actuals 
                  de la IA.
                </p>

                <h3 id="problema-conclusions" className="text-xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-20">
                  1.2.6. Conclusions: la claredat com a requisit fonamental per als drets fonamentals i l'autotutela
                </h3>
                <p className="mb-4">
                  La claredat, la simplicitat i el disseny centrat en l'usuari no són objectius secundaris ni 
                  aspiracions estètiques; són <strong>elements essencials per a la funcionalitat de l'estat de 
                  dret</strong> i per a la garantia efectiva dels drets fonamentals. L'opacitat jurídica no només 
                  impedeix l'accés a la justícia, sinó que també:
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Fomenta la desconfiança en les institucions</li>
                    <li>Augmenta els costos sistèmics (tant per a ciutadans com per a l'administració)</li>
                    <li>Perpetua la desigualtat i el desequilibri de poder</li>
                    <li>Erosiona la legitimitat democràtica del sistema legal</li>
                    <li>Limita l'agència personal dels ciutadans en la gestió dels seus propis assumptes legals</li>
                    <li><strong>Viola indirectament el principi de no discriminació</strong> en crear barreres 
                    d'accés basades en educació, origen lingüístic i capacitat econòmica</li>
                    <li><strong>Dificulta l'exercici efectiu dels drets fonamentals</strong> per part de 
                    poblacions marginades i vulnerables</li>
                  </ul>
                </div>
                <p className="mb-4">
                  Per tant, la inversió en accessibilitat jurídica a través del Llenguatge Clar, el Disseny 
                  Jurídic i una integració tecnològica responsable no és una opció, sinó un <strong>deure 
                  ineludible</strong> per garantir la legitimitat i eficàcia del sistema legal en el segle XXI, 
                  així com per assegurar l'exercici efectiu dels drets fonamentals per part de tots els ciutadans, 
                  sense discriminació.
                </p>
                <p className="mb-4">
                  Aquest projecte s'insereix precisament en aquesta necessitat, oferint una solució tecnològica 
                  que combina els principis de Llenguatge Clar i Disseny Jurídic amb les capacitats de la 
                  intel·ligència artificial per a la interpretació jurídica, sempre sota un marc de risc mínim i 
                  verificació obligatòria. L'objectiu és crear una eina que <strong>democratitzi l'accés al 
                  coneixement jurídic</strong>, promogui la no discriminació i garanteixi que tots els ciutadans, 
                  independentment del seu origen, formació o capacitats, puguin comprendre i exercir els seus 
                  drets fonamentals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Antecedents Section */}
        <section id="antecedents" className="mb-16 scroll-mt-20">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1.3. Antecedents i Perspectiva Personal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Com a autor d'aquest paper, he desenvolupat dues plataformes basades en IA que serveixen com a 
                  antecedents i proves de concepte per a aquest projecte: <strong>Catalunya Legal</strong> 
                  (https://catalunyalegal.vercel.app/) i <strong>Prudència.cat</strong> 
                  (https://prudencia-cat.vercel.app/).
                </p>
                <p className="mb-4">
                  Aquests projectes sorgeixen d'una necessitat observada en l'educació jurídica i la pràctica: 
                  la manca d'eines accessibles que permetin als ciutadans comprendre el dret sense dependre 
                  constantment d'intermediaris professionals. Com a desenvolupador individual, he prioritzat 
                  l'accessibilitat, la gratuïtat i l'ètica en el disseny d'aquestes eines.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">El projecte Catalunya Legal com a PoC:</h4>
                  <p className="mb-3">
                    El portal <strong>catalunyalegal.vercel.app</strong>, desenvolupat per mi, indexa 1.818 articles 
                    del Codi Civil i Codi de Consum de Catalunya i ha validat:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>La viabilitat tècnica de l'arquitectura JAMstack amb Next.js</li>
                    <li>L'eficàcia dels LLMs per interpretar i simplificar text jurídic</li>
                    <li>L'interès dels usuaris per aquest tipus d'eines</li>
                    <li>La sostenibilitat del model de costos amb APIs d'IA</li>
                  </ul>
                </div>
                <p className="mb-4">
                  Aquests antecedents proporcionen una base sòlida per adaptar l'arquitectura al context específic 
                  d'Andorra, amb els seus propis reptes i oportunitats. La meva experiència pràctica en el 
                  desenvolupament d'aquestes eines afegeix credibilitat i originalitat al paper, permetent-me 
                  presentar-los com a contribucions pròpies que il·lustren el potencial de la IA per a 
                  l'accessibilitat jurídica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectius Section */}
        <section id="objectius" className="mb-16 scroll-mt-20">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1.4. Objectius
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Objectiu Principal
                </h3>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                  <p className="font-semibold text-gray-900">
                    Crear un portal accessible assistit per IA que democratitzi l'accés al coneixement 
                    jurídic andorrà.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Objectius Secundaris
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Multilingüisme:</strong> Suport complet per a català, castellà i francès, 
                      reflectint la realitat trilingüe d'Andorra i facilitant l'accés a expatriats.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Comparativa de sistemes legals:</strong> Eina per comparar el dret andorrà 
                      amb sistemes veïns (Catalunya, Espanya), especialment valuosa per a expatriats i 
                      professionals.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Validació empírica:</strong> Estudi acadèmic que avaluï l'eficàcia i 
                      fiabilitat de l'ús de LLMs en dret micro-estatal, contribuint al coneixement 
                      científic del LegalTech.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Tornar a l'inici
          </Link>
          <Link
            href="/marc-teoric"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Marc Teòric
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

