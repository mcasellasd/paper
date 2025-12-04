import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, Code, Shield } from 'lucide-react';

export default function ImplementacioPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">Inici</Link></li>
            <li>/</li>
            <li className="text-gray-900">Implementació</li>
          </ol>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            5. Implementació i Desenvolupament (MVP)
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Procés de desenvolupament del producte mínim viable
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.1. Procés d'Ingestió de Dades
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  La transformació dels PDFs del BOPA a JSON estructurat és un procés crític que 
                  requereix diverses etapes:
                </p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>Extracció de text:</strong> Utilització d'eines com pdf-parse o 
                    pdfjs-dist per extreure el text brut dels PDFs oficials.
                  </li>
                  <li>
                    <strong>Parsing estructurat:</strong> Identificació de patrons (articles, 
                    títols, capítols) mitjançant expressions regulars i anàlisi de l'estructura.
                  </li>
                  <li>
                    <strong>Validació i neteja:</strong> Verificació de la integritat dels 
                    articles i neteja de caràcters especials o errors d'OCR.
                  </li>
                  <li>
                    <strong>Generació de JSON:</strong> Creació de fitxers JSON estructurats 
                    seguint l'esquema definit, amb metadades completes.
                  </li>
                  <li>
                    <strong>Enllaços creuats:</strong> Identificació automàtica de referències 
                    entre articles per crear la xarxa de connexions.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Code className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.2. Desenvolupament del Frontend
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Els components clau del frontend inclouen:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ArticleViewer</h3>
                    <p className="text-sm text-gray-600">
                      Component principal que mostra l'article oficial, la interpretació de IA 
                      (toggleable), i les referències relacionades. Inclou navegació entre articles 
                      i breadcrumbs per orientació.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ChatbotPrudencia</h3>
                    <p className="text-sm text-gray-600">
                      Xat conversacional accessible des de qualsevol pàgina. Implementa RAG 
                      (Retrieval Augmented Generation) per cercar articles rellevants abans de 
                      generar la resposta amb IA.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ComparadorSistemes</h3>
                    <p className="text-sm text-gray-600">
                      Component que permet comparar articles del dret andorrà amb equivalents 
                      de Catalunya i Espanya, generant taules comparatives automàtiques.
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
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.3. Gestió de Riscos en Sistemes d'IA Jurídica
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  La gestió de riscos és essencial en sistemes d'IA jurídica per garantir la fiabilitat, 
                  la seguretat i el compliment del marc regulatori. Aquesta secció detalla la identificació 
                  de riscos, les estratègies de mitigació implementades i les mesures de control.
                </p>

                {/* Identificació de Riscos */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5.3.1. Identificació de riscos
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.1.1. Al·lucinació i generació de contingut fictici
                      </h4>
                      <p className="text-sm text-gray-700">
                        El risc que la IA generi informació legal que no existeix en les fonts oficials, 
                        especialment perillós en contextos jurídics on la precisió és essencial. Aquest 
                        risc pot portar a conseqüències greus si els usuaris confien en informació incorrecta.
                      </p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.1.2. Biaixos algorítmics i discriminació
                      </h4>
                      <p className="text-sm text-gray-700">
                        Els sistemes d'IA poden perpetuar biaixos existents en les dades d'entrenament o 
                        introduir noves formes de discriminació en la interpretació jurídica, especialment 
                        en àrees sensibles com drets laborals o familiars.
                      </p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.1.3. Errors d'interpretació i conseqüències legals
                      </h4>
                      <p className="text-sm text-gray-700">
                        Errors en la interpretació de normes legals poden portar a conseqüències greus per 
                        als usuaris que confien en les interpretacions generades, especialment si no tenen 
                        coneixements jurídics per detectar errors.
                      </p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.1.4. Vulnerabilitats de seguretat i ciberseguretat
                      </h4>
                      <p className="text-sm text-gray-700">
                        Els sistemes d'IA jurídica són vulnerables a atacs de seguretat, manipulació de 
                        dades, o compromís de la integritat de les interpretacions generades, especialment 
                        quan es processen dades sensibles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Estratègies de Mitigació */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5.3.2. Estratègies de mitigació implementades
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.2.1. RAG (Retrieval Augmented Generation)
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Implementació de RAG per assegurar que les respostes es basin sempre en documents 
                        oficials recuperats, no en coneixement pre-entrenat del model. Això redueix 
                        significativament el risc d'al·lucinació.
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside ml-4">
                        <li>Cerca semàntica prèvia per identificar articles rellevants</li>
                        <li>Context limitat als documents recuperats</li>
                        <li>Verificació de fonts abans de generar la resposta</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.2.2. Referències creuades i verificació de fonts
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Totes les interpretacions inclouen referències directes als articles originals, 
                        permetent als usuaris verificar la informació i consultar el text oficial.
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside ml-4">
                        <li>Comparació costat per costat entre text original i interpretació</li>
                        <li>Enllaços directes a fonts oficials</li>
                        <li>Metadades completes sobre les fonts consultades</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.2.3. Supervisió humana obligatòria
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Revisió humana de les interpretacions generades per a articles crítics, amb un 
                        procés de validació per part de professionals del dret.
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside ml-4">
                        <li>Revisió manual de tots els articles del Codi Civil</li>
                        <li>Procés de validació per professionals del dret andorrà</li>
                        <li>Marc de risc mínim i verificació obligatòria</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.2.4. Disclaimers i limitació de responsabilitat
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Advertències clares sobre la naturalesa informativa (no assessorament legal) del 
                        contingut generat i la necessitat de consultar professionals per a casos complexos.
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside ml-4">
                        <li>Disclaimers prominents en totes les interpretacions</li>
                        <li>Recomanació explícita de consultar professionals per casos complexos</li>
                        <li>Limitació clara de responsabilitat del desenvolupador</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mesures de Control */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5.3.3. Mesures de control i auditoria
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.3.1. Traçabilitat de les interpretacions generades
                      </h4>
                      <p className="text-sm text-gray-700">
                        Registre de totes les interpretacions generades amb identificació de la versió del 
                        model utilitzat, data de generació, i fonts consultades. Això permet auditoria i 
                        verificació posterior.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.3.2. Registre de decisions i versions
                      </h4>
                      <p className="text-sm text-gray-700">
                        Sistema de versionat que permet rastrejar canvis en les interpretacions i identificar 
                        quines versions del model van generar quines respostes, facilitant la detecció de 
                        regressions o errors.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        5.3.3.3. Avaluació contínua de la qualitat
                      </h4>
                      <p className="text-sm text-gray-700">
                        Procés continu d'avaluació de la qualitat de les interpretacions generades, amb 
                        mètriques de precisió, claredat i utilitat per als usuaris, permetent millores 
                        iteratives del sistema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/arquitectura"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Arquitectura
          </Link>
          <Link
            href="/sostenibilitat"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Sostenibilitat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

