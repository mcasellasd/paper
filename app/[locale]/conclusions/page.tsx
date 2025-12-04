import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Rocket } from 'lucide-react';

export default function ConclusionsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Conclusions</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            6. Conclusions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Resum: Com la IA desenvolupada individualment pot fer el dret accessible, comprensible i complible
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Resum: Els Projectes Il·lustren el Potencial de la IA
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Els projectes desenvolupats per l'autor (Catalunya Legal i Prudència.cat) il·lustren de manera 
                  pràctica com la IA, desenvolupada individualment, pot transformar l'accessibilitat jurídica, 
                  millorar la comprensió ciutadana i promoure una subjecció jurídica més conscient, fomentant el 
                  compliment voluntari de les normes.
                </p>
                <p className="mb-4">
                  Aquests projectes demostren que un desenvolupador individual, mitjançant IA, pot empoderar la 
                  ciutadania per interactuar amb el dret de manera autònoma, reduint les barreres tradicionals 
                  d'accés al coneixement jurídic.
                </p>
                <p className="mb-4">
                  Els objectius principals s'han assolit amb èxit:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">✓ Portal accessible assistit per IA</h3>
                    <p className="text-sm text-gray-700">
                      S'ha desenvolupat un portal funcional que democratitza l'accés al coneixement 
                      jurídic andorrà mitjançant interpretacions en llenguatge plà generades per IA.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">✓ Multilingüisme complet</h3>
                    <p className="text-sm text-gray-700">
                      Implementació exitosa del suport per a català, castellà i francès, reflectint 
                      la realitat trilingüe d'Andorra i facilitant l'accés a expatriats.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">✓ Comparativa de sistemes legals</h3>
                    <p className="text-sm text-gray-700">
                      Desenvolupament d'una eina funcional per comparar el dret andorrà amb sistemes 
                      veïns, especialment valuosa per a expatriats i professionals.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">✓ Validació empírica</h3>
                    <p className="text-sm text-gray-700">
                      Recollida de dades reals d'ús i avaluació per professionals del dret, 
                      contribuint al coneixement científic del LegalTech en jurisdiccions petites.
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
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitacions Actuals
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  El projecte presenta algunes limitacions que s'han identificat durant el 
                  desenvolupament:
                </p>
                <div className="mt-6 space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Cobertura inicial limitada</h3>
                    <p className="text-sm text-gray-700">
                      El MVP inclou només el Codi Civil d'Andorra (2022) i la Llei de Consum (2023). 
                      Altres codis importants (Penal, Procediment Civil) estan previstos per a la Fase 2.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Jurisprudència parcial</h3>
                    <p className="text-sm text-gray-700">
                      La vinculació amb jurisprudència està en desenvolupament. Només una part de les 
                      sentències del TSJ estan indexades i vinculades als articles corresponents.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Al·lucinacions ocasionals</h3>
                    <p className="text-sm text-gray-700">
                      Tot i les mesures implementades (RAG, referències creuades), encara es produeixen 
                      al·lucinacions ocasionals que requereixen revisió humana per a casos crítics.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Dependència de l'API externa</h3>
                    <p className="text-sm text-gray-700">
                      La dependència de l'API de Claude implica costos variables i possibles limitacions 
                      de disponibilitat. Es valora la possibilitat de models locals per a funcions bàsiques.
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
              <Rocket className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Perspectives Futures
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  L'evolució cap a IA més avançades ofereix possibilitats emocionants per al futur de 
                  l'accessibilitat jurídica:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>IA multimodal:</strong> Sistemes que poden processar text, imatges i àudio per 
                  proporcionar assistència més completa.</li>
                  <li><strong>Personalització avançada:</strong> Adaptació de les respostes segons el nivell 
                  de coneixement i necessitats específiques de cada usuari.</li>
                  <li><strong>Integració amb sistemes oficials:</strong> Connexió directa amb bases de dades 
                  oficials per a informació en temps real.</li>
                  <li><strong>Col·laboració humana-IA:</strong> Models que faciliten la col·laboració entre 
                  ciutadans, professionals i sistemes d'IA.</li>
                </ul>
                <p className="mb-4">
                  El projecte obre diverses línies de treball futur que poden expandir el seu impacte:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Jurisprudència vinculada completa</h3>
                    <p className="text-sm text-gray-600">
                      Indexació completa de totes les sentències del TSJ i Tribunal de Corts, amb 
                      vinculació automàtica als articles corresponents i resums generats per IA.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">API pública</h3>
                    <p className="text-sm text-gray-600">
                      Desenvolupament d'una API REST pública que permeti a tercers integrar les 
                      funcionalitats de Prudencia.ad en les seves pròpies aplicacions, amb rate 
                      limiting i autenticació.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Expansió a altres codis</h3>
                    <p className="text-sm text-gray-600">
                      Inclusió del Codi Penal, Codi de Procediment Civil, Llei General Tributària, 
                      i altres normatives rellevants per a completar la cobertura del dret andorrà.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Model d'IA especialitzat</h3>
                    <p className="text-sm text-gray-600">
                      Desenvolupament d'un model d'IA fine-tuned específicament per al dret andorrà, 
                      reduint al·lucinacions i millorant la precisió en contextos jurídics específics.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Integració amb sistemes veïns</h3>
                    <p className="text-sm text-gray-600">
                      Expansió del comparador per incloure més sistemes legals (França, Portugal) i 
                      desenvolupament d'eines de dret comparat automatitzat.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Aplicació a altres micro-estats</h3>
                    <p className="text-sm text-gray-600">
                      Transferència del model a altres jurisdiccions petites (Mònaco, San Marino, 
                      Liechtenstein) per validar l'escalabilitat de l'aproximació.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Impacte i Contribució Acadèmica
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Aquest projecte contribueix al camp del LegalTech i la democratització del dret 
              mitjançant diverses dimensions:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Originalitat:</strong> Primer estudi sistemàtic sobre l'aplicació de IA 
                al dret andorrà, un territori poc estudiat en aquest context.
              </li>
              <li>
                <strong>Metodologia:</strong> Combinació única de noves tecnologies, emprendiment i dret, 
                demostrant la viabilitat d'aproximacions híbrides en LegalTech.
              </li>
              <li>
                <strong>Impacte social:</strong> Eina pràctica que resol un problema real d'accés 
                al coneixement jurídic en un context multilingüe.
              </li>
              <li>
                <strong>Escalabilitat:</strong> Model transferible a altres jurisdiccions petites, 
                obrint noves línies de recerca.
              </li>
            </ul>
          </div>
        </section>

        {/* Crida a l'Acció */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Crida a l'Acció
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Els projectes desenvolupats per l'autor demostren que un desenvolupador individual pot crear eines 
              que empoderen la ciutadania i transformen l'accessibilitat jurídica. Aquest treball il·lustra el 
              potencial de la IA quan es desenvolupa amb principis ètics, centrat en l'usuari i orientat a la 
              comunitat.
            </p>
            <div className="bg-white border-l-4 border-green-600 p-4 my-6">
              <h4 className="font-semibold text-gray-900 mb-3">Recomanació per a desenvolupadors:</h4>
              <p>
                Més desenvolupadors haurien d'invertir en eines locals per empoderar la ciutadania. La combinació 
                de coneixement local, necessitats específiques de la comunitat i tecnologies d'IA accessibles pot 
                crear solucions que les grans empreses tecnològiques no poden proporcionar. El desenvolupament 
                d'eines d'IA jurídica no ha de ser exclusiu de grans corporacions; desenvolupadors individuals i 
                petites organitzacions poden tenir un impacte significatiu en la democratització del dret.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/beneficis-desafiaments"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Beneficis i Desafiaments
          </Link>
          <Link
            href="/bibliografia"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Bibliografia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

