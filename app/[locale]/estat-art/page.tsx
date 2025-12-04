import Link from 'next/link';
import { ArrowLeft, ArrowRight, Brain, Scale, Code, Shield } from 'lucide-react';

export default function EstatArtPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Estat de l'Art</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            2. Estat de l'Art (Marc Teòric)
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Marc teòric que fonamenta el projecte: LegalTech, IA generativa i dret andorrà
          </p>
        </div>

        {/* LegalTech Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Brain className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.1. LegalTech i IA Generativa
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Els Large Language Models (LLMs) com Claude i GPT estan transformant profundament 
                  el sector legal. Aquesta transformació es manifesta en diverses àrees:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Interpretació de text jurídic:</strong> Els LLMs poden processar i 
                    interpretar documents legals complexos, traduint el llenguatge jurídic tècnic 
                    a llenguatge accessible.
                  </li>
                  <li>
                    <strong>Resum i síntesi:</strong> Capacitat de generar resums estructurats de 
                    documents legals extensos, facilitant la comprensió ràpida.
                  </li>
                  <li>
                    <strong>Cerca semàntica:</strong> Enteniment del significat més enllà de la 
                    coincidència de paraules clau, permetent cerques més intel·ligents.
                  </li>
                  <li>
                    <strong>Comparació de sistemes legals:</strong> Anàlisi comparativa entre 
                    diferents ordenaments jurídics, detectant diferències i similituds.
                  </li>
                </ul>
                <p className="mt-4">
                  Aquest projecte aprofita aquestes capacitats per crear una eina específica per al 
                  context andorrà, adaptant-se a les particularitats del seu ordenament jurídic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marc Jurídic Andorrà Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.2. El marc jurídic andorrà
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El Principat d'Andorra presenta característiques úniques que configuren el seu 
                  marc jurídic:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Oficialitat del català</h3>
                    <p>
                      El català és l'única llengua oficial d'Andorra segons la Constitució. 
                      Tot i això, la realitat social és trilingüe, amb un ús extens del castellà 
                      i del francès.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Accés al BOPA</h3>
                    <p>
                      El Butlletí Oficial del Principat d'Andorra (BOPA) és la font oficial de 
                      publicació de normes. L'accés digital al BOPA presenta oportunitats per a 
                      l'automatització de l'ingestió de dades.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Codificació recent</h3>
                    <p>
                      El Codi Civil d'Andorra (Llei qualificada de 15-12-2022) és una codificació 
                      recent que modernitza el dret civil andorrà, proporcionant una base sòlida i 
                      actualitzada per al projecte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologies Web Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Code className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.3. Tecnologies Web Modernes
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  La tria de l'arquitectura JAMstack (JavaScript, APIs, Markup) amb Next.js i Vercel 
                  es justifica per diversos motius:
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Alt rendiment</h3>
                    <p className="text-sm text-gray-600">
                      La generació estàtica de pàgines (SSG) i la regeneració incremental (ISR) 
                      permeten temps de càrrega òptims i una millor experiència d'usuari.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Baix cost</h3>
                    <p className="text-sm text-gray-600">
                      El model de hosting de Vercel ofereix un nivell gratuït generós i costos 
                      escalables segons l'ús, ideal per a un projecte acadèmic.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Escalabilitat</h3>
                    <p className="text-sm text-gray-600">
                      L'arquitectura serverless permet escalar automàticament sense preocupacions 
                      d'infraestructura.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">SEO i accessibilitat</h3>
                    <p className="text-sm text-gray-600">
                      Next.js facilita l'optimització per a motors de cerca i el compliment de 
                      estàndards d'accessibilitat (WCAG).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marc Regulatori Section */}
        <section className="mb-16 scroll-mt-20" id="marc-regulatori">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.4. Marc Regulatori Europeu d'Intel·ligència Artificial
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  El Reglament Europeu d'IA (EU AI Act), aprovat el 2024, estableix el primer marc regulatori 
                  integral de la Unió Europea sobre intel·ligència artificial. Aquest marc té implicacions 
                  significatives per als sistemes d'IA destinats a l'accessibilitat jurídica.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.4.1. El Reglament Europeu d'IA (EU AI Act)
                    </h3>
                    <p className="text-sm text-gray-700">
                      El Reglament classifica els sistemes d'IA segons el nivell de risc i estableix obligacions 
                      específiques per a cada categoria. Els sistemes destinats a l'Administració de Justícia 
                      es classifiquen com d'alt risc, requerint supervisió humana, explicabilitat i avaluació 
                      de conformitat.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.4.2. Classificació de sistemes d'IA i obligacions
                    </h3>
                    <p className="text-sm text-gray-700">
                      El Reglament estableix quatre categories de risc: risc mínim, risc limitat, alt risc i 
                      risc inacceptable. Els sistemes d'IA per a l'accessibilitat jurídica ciutadana poden 
                      classificar-se com a risc limitat o alt risc segons les funcionalitats que ofereixin.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.4.3. Aplicació del Reglament a sistemes d'accessibilitat jurídica
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els sistemes que proporcionen interpretacions informatives sense prendre decisions 
                      automàtiques es classifiquen com a risc limitat, mentre que aquells que poden afectar 
                      drets legals directament requereixen mesures addicionals de supervisió i explicabilitat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Section */}
        <section className="mb-16 scroll-mt-20" id="gdpr">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.5. Protecció de Dades i GDPR en Sistemes d'IA Jurídica
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  El tractament de dades per sistemes d'IA jurídica ha de complir amb els principis del 
                  Reglament General de Protecció de Dades (GDPR), especialment en el context de processament 
                  automatitzat de text legal.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.5.1. Especificitats del tractament de dades per sistemes d'IA
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els sistemes d'IA jurídica han de processar només les dades estrictament necessàries per 
                      a la finalitat de proporcionar interpretacions legals, respectant els principis de 
                      minimització, finalitat i limitació del període de conservació.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.5.2. Drets dels usuaris i transparència algorítmica
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els usuaris tenen dret a conèixer la lògica involucrada en el processament automatitzat 
                      i a obtenir explicacions sobre les interpretacions generades per la IA, garantint la 
                      transparència algorítmica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsabilitat Section */}
        <section className="mb-16 scroll-mt-20" id="responsabilitat">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-red-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.6. Responsabilitat Legal de Sistemes d'IA
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  La responsabilitat legal en sistemes d'IA jurídica es distribueix entre desenvolupadors, 
                  proveïdors i usuaris, segons el marc legal aplicable i la naturalesa de l'error o dany produït.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.6.1. Teories de responsabilitat en sistemes d'IA
                    </h3>
                    <p className="text-sm text-gray-700">
                      La responsabilitat pot derivar-se de la responsabilitat del producte, la responsabilitat 
                      per culpa, o la responsabilitat objectiva segons el marc legal aplicable i la naturalesa 
                      de l'error o dany.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.6.2. Responsabilitat de desenvolupadors vs. usuaris
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els desenvolupadors tenen obligacions de diligència deguda en el disseny i desenvolupament, 
                      mentre que els usuaris tenen responsabilitat en l'ús adequat i la supervisió humana de les 
                      interpretacions generades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ètica Section */}
        <section className="mb-16 scroll-mt-20" id="etica">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Brain className="h-6 w-6 text-purple-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.7. Principis Ètics i Governança de la IA Legal
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  El desenvolupament de sistemes d'IA jurídica ha de basar-se en principis ètics fonamentals 
                  que garanteixin la justícia, la transparència i la no maleficència.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.7.1. Justícia, transparència i no maleficència
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els sistemes d'IA jurídica han de ser dissenyats sota principis de justícia (equitat en 
                      l'accés), transparència (explicabilitat de les decisions) i no maleficència (evitar dany 
                      als usuaris).
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.7.2. Biaixos i discriminació en algorismes jurídics
                    </h3>
                    <p className="text-sm text-gray-700">
                      Els sistemes d'IA poden perpetuar o amplificar biaixos existents en les dades d'entrenament, 
                      especialment en contextos jurídics on la discriminació històrica pot estar present en les dades.
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.7.3. Desenvolupament sostenible i ètic de la IA
                    </h3>
                    <p className="text-sm text-gray-700">
                      El desenvolupament de sistemes d'IA jurídica ha de considerar l'impacte social, ambiental 
                      i ètic a llarg termini, promovent la sostenibilitat i l'equitat.
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2.7.4. Governança efectiva i supervisió interna
                    </h3>
                    <p className="text-sm text-gray-700">
                      La governança efectiva requereix mecanismes de supervisió interna, auditoria regular, i 
                      processos de revisió ètica per garantir el compliment dels principis ètics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interpretació Jurídica Section */}
        <section className="mb-16 scroll-mt-20" id="interpretacio-juridica">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Brain className="h-6 w-6 text-indigo-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2.8. La Naturalesa de la Interpretació Jurídica i les Limitacions de la IA
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  La interpretació jurídica no és un exercici de reconeixement de patrons sintàctics, sinó un procés 
                  de construcció de significat normatiu. Aquesta naturalesa inherentment humana, dependent del context 
                  i carregada de valors, constitueix el principal obstacle i, alhora, la prova de foc definitiva per 
                  a qualsevol eina d'intel·ligència artificial que aspiri a assistir la ciutadania en la comprensió 
                  de les seves obligacions i drets.
                </p>

                {/* Promesa de la IA */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2.8.1. La Promesa de la IA en un Món Jurídic Complex
                  </h3>
                  <p className="mb-4">
                    La complexitat inherent als codis legals i als procediments judicials constitueix una de les barreres 
                    més persistents per a l'accés efectiu a la justícia per part de la ciutadania. Aquest laberint normatiu, 
                    sovint inescrutable per a qui no té formació especialitzada, genera una desigualtat estructural que la 
                    tecnologia promet mitigar.
                  </p>
                  <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4">
                    <p className="text-sm text-gray-700">
                      <strong>La premissa fonamental:</strong> Si bé la intel·ligència artificial pot simular tasques jurídiques, 
                      no pot dur a terme la interpretació del dret. Reconèixer aquesta distinció fonamental és la pedra 
                      angular per dissenyar un marc regulador que augmenti, en lloc de reemplaçar, el raonament jurídic humà.
                    </p>
                  </div>
                </div>

                {/* Naturalesa de la Interpretació */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2.8.2. El Repte Fonamental: La Naturalesa de la Interpretació Jurídica
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.2.1. La Distinció Essencial entre Text i Norma
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Un error comú és confondre el text legal —l'enunciat o la disposició escrita— amb la norma jurídica. 
                        La norma no és el text en si mateix, sinó el significat que se n'extreu a través d'un procés interpretatiu.
                      </p>
                      <p className="text-sm text-gray-700 italic">
                        Com va advertir el jurista romà Cels: <em>"Scire legis non hoc est, verba earum tenere, sed vim ac 
                        potestatem"</em> (Conèixer les lleis no és retenir-ne les paraules, sinó comprendre'n la força i el poder).
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        Aquesta distinció és fonamental perquè revela que aplicar el dret no és un procés algorítmic; és un 
                        acte de judici que transcendeix la semàntica literal del text legal.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.2.2. Els Atributs d'un Estat de Dret Funcional
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Perquè un sistema jurídic sigui eficaç i compleixi la seva funció social, ha de posseir certs atributs:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li><strong>Estabilitat:</strong> Les normes han de tenir una certa permanència per permetre als ciutadans planificar les seves accions.</li>
                        <li><strong>Publicitat:</strong> Les lleis han de ser públiques i accessibles per a tothom. Un dret secret no és dret.</li>
                        <li><strong>Claredat:</strong> Les normes han d'estar formulades d'una manera que siguin comprensibles.</li>
                        <li><strong>Universalitat:</strong> Les regles s'han d'aplicar a tothom per igual.</li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-2">
                        Aquests atributs no són autònoms. La seva eficàcia depèn d'una comprensió humana compartida, d'una 
                        "lògica comuna" que es fonamenta en el sentit comú.
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.2.3. El Paper Crucial del Context i el Sentit Comú
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Potser la lliçó més important apresa en els seixanta anys d'història de la IA és que les tasques que 
                        semblaven més difícils, com jugar a escacs o a Go al més alt nivell, han resultat ser relativament fàcils, 
                        mentre que les que semblaven més fàcils, com entendre una conversa, han resultat ser les més complexes.
                      </p>
                      <p className="text-sm text-gray-700">
                        El dret opera en "entorns no restringits", és a dir, en la complexitat desbordant de la vida social, on 
                        el context, les intencions no declarades i les normes socials implícites són determinants. Si el dret és, 
                        en essència, l'aplicació del sentit comú institucionalitzat, com podem encomanar la seva interpretació 
                        a una eina que, per definició, en manca?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Capacitats i Limitacions */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2.8.3. La Intel·ligència Artificial com a Eina Hermenèutica: Capacitats i Limitacions
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.3.1. Capacitats Actuals de la IA en el Món Jurídic
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Segons l'investigador Ramón López de Mántaras, tots els avenços que hem vist fins ara, inclosa la IA 
                        generativa que alimenta eines com ChatGPT, s'emmarquen dins de la categoria d'<strong>IA feble</strong>. 
                        Són sistemes dissenyats per executar tasques concretes de manera brillant, però sense consciència ni 
                        estats mentals.
                      </p>
                      <div className="mt-4 bg-white rounded p-3">
                        <p className="text-xs font-semibold text-gray-900 mb-2">Èxits Demostrats:</p>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                          <li>Aprovació d'exàmens professionals (UBE) amb puntuació d'admissió</li>
                          <li>Redacció estructurada i coherent de respostes jurídiques</li>
                          <li>Bon rendiment en preguntes de resposta múltiple</li>
                          <li>Recopilació i síntesi de doctrina existent</li>
                        </ul>
                        <p className="text-xs font-semibold text-gray-900 mt-3 mb-2">Febleses Identificades:</p>
                        <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                          <li>Manca de profunditat analítica en l'aplicació de regles als fets</li>
                          <li>Tendència a introduir qüestions jurídiques no pertinents</li>
                          <li>Errors en qüestions tècniques senzilles</li>
                          <li>Dificultats en l'aplicació de regles a fets complexos o nous</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.3.2. Les Limitacions Inherents i la Necessitat de Supervisió
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Els riscos associats a l'ús d'aquests sistemes fan que la supervisió humana sigui indispensable. 
                        Estudis sobre GPT-4 han documentat riscos persistents com:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>La capacitat d'inventar fonts (al·lucinacions)</li>
                        <li>Interpretar incorrectament els fets</li>
                        <li>No seguir requisits ètics fonamentals</li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-2">
                        Per aquest motiu, la seva aplicació en l'àmbit legal ha d'incloure un component <strong>"human-in-the-loop"</strong> 
                        (humà en el bucle), on un professional qualificat revisi, validi i corregeixi els resultats generats per la màquina.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ciutadania Augmentada */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2.8.4. Cap a una Ciutadania Jurídicament Augmentada
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.4.1. Balanç de Potencialitats i Perills
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        La IA pot actuar com un potent <strong>"multiplicador de força"</strong> (force multiplier) legal, capacitant 
                        els ciutadans per entendre millor els seus drets o navegar per procediments administratius. Tanmateix, 
                        aquesta mateixa potència comporta el risc de generar una falsa sensació de certesa.
                      </p>
                      <p className="text-sm text-gray-700">
                        L'objectiu, per tant, no ha de ser substituir el raonament humà, sinó augmentar-lo. La meta és una 
                        <strong> ciutadania jurídicament augmentada</strong>, un concepte que transcendeix la simple "assistència legal". 
                        Un ciutadà augmentat no és un receptor passiu de respostes generades per IA, sinó un actor equipat per la 
                        tecnologia per formular millors preguntes, identificar normes pertinents i dialogar de manera més crítica 
                        amb els professionals i les institucions.
                      </p>
                    </div>

                    <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.4.2. Recomanacions per a un Desplegament Responsable
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Perquè aquesta visió es faci realitat, és imprescindible un esforç coordinat entre desenvolupadors, 
                        legisladors i institucions educatives:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li><strong>Disseny centrat en l'usuari:</strong> Les eines d'IA han d'estar dissenyades per ser comprensibles, 
                        incloent advertiments clars sobre les seves limitacions.</li>
                        <li><strong>Implementació efectiva del marc regulador:</strong> És crucial exigir el compliment estricte 
                        dels requisits per a sistemes d'alt risc que estableix el Reglament d'IA de la UE.</li>
                        <li><strong>Foment de l'alfabetització jurídica i digital:</strong> Cal promoure l'educació ciutadana sobre 
                        els fonaments del dret i l'ús crític de les eines d'IA.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2.8.4.3. Visió Final: La Tecnologia com a Eina d'Augmentació
                      </h4>
                      <p className="text-sm text-gray-700">
                        L'ideal clàssic d'un <strong>"govern de les lleis i no dels homes"</strong>, articulat per Plató i Aristòtil, 
                        es basa en la premissa que la llei, com a expressió de la raó, ha de prevaldre sobre l'arbitrarietat. Un ús 
                        responsable de la intel·ligència artificial, guiat per un marc ètic i regulador que reconegui els seus límits 
                        fonamentals, pot contribuir a fer realitat aquesta aspiració mil·lenària. En lloc de substituir el judici humà 
                        per un algoritme, podem utilitzar la tecnologia per fer que les lleis siguin més accessibles i comprensibles, 
                        apoderant així cada ciutadà per participar de manera més plena en la vida jurídica.
                      </p>
                    </div>
                  </div>
                </div>
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
            href="/marc-regulatori"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Marc Regulatori
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

