import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Globe, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CasosEstudiPage() {
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('casosEstudi')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            4. Casos d'Estudi: Projectes Propis de l'Autor
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Com a autor, he desenvolupat dues plataformes basades en IA per democratitzar el dret català i andorrà, 
            integrant textos oficials amb funcionalitats avançades. Aquests projectes serveixen com a proves de 
            concepte per als beneficis discutits.
          </p>
        </div>

        {/* Introducció a la secció */}
        <section className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Aquesta secció presenta dos projectes desenvolupats per l'autor com a demostració pràctica de com la 
              IA pot transformar l'accessibilitat jurídica. Aquests projectes exemplifiquen l'aplicació dels 
              principis teòrics discutits en les seccions anteriors i proporcionen evidència empírica del valor de 
              les eines d'IA en contextos legals específics.
            </p>
          </div>
        </section>

        {/* Cas 1: Catalunya Legal */}
        <section className="mb-16 scroll-mt-20" id="catalunya-legal">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Globe className="h-6 w-6 text-blue-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cas 1: Catalunya Legal
                </h2>
                <a 
                  href="https://catalunyalegal.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visitar plataforma
                </a>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Descripció del Projecte
                </h3>
                <p className="mb-4">
                  <strong>Catalunya Legal</strong> és una plataforma desenvolupada per l'autor que integra el Codi 
                  Civil i el Codi de Consum de Catalunya, amb més de 1.800 articles indexats. La plataforma ofereix 
                  navegació estructurada, resums generats per IA, exemples contextuals i un chatbot per consultes 
                  integrades.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Accessibilitat
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Text consolidat oficial:</strong> Accés directe als textos legals oficials en un format 
                  estructurat i navegable.</li>
                  <li><strong>Accés gratuït via web:</strong> No requereix subscripcions ni pagaments, eliminant 
                  barreres econòmiques.</li>
                  <li><strong>Cerca avançada:</strong> Funcionalitats de cerca semàntica que permeten trobar informació 
                  rellevant ràpidament.</li>
                  <li><strong>Compatibilitat mòbil:</strong> Disseny responsive que permet l'accés des de qualsevol 
                  dispositiu.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Comprensió
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Resums generats per IA:</strong> Cada article inclou un resum en llenguatge clar que 
                  destaca els punts clau.</li>
                  <li><strong>Exemples pràctics:</strong> La IA genera exemples contextuals que il·lustren com s'aplica 
                  un article en situacions reals (ex.: aplicació d'un article sobre contractes en un escenari de 
                  lloguer diari).</li>
                  <li><strong>Navegació temàtica:</strong> Organització per àrees temàtiques (família, successions, 
                  obligacions) que facilita la comprensió del context.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Subjecció Jurídica
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Fomenta el compliment:</strong> Les interpretacions clares ajuden a evitar errors comuns, 
                  especialment en àrees com drets de consumidors.</li>
                  <li><strong>Prevenció de litigis:</strong> La comprensió clara de les obligacions redueix la 
                  probabilitat de conflictes legals.</li>
                  <li><strong>Educació ciutadana:</strong> Promou la comprensió del marc legal, fomentant el compliment 
                  voluntari.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Anàlisi i Limitacions
                </h3>
                <p className="mb-4">
                  Com a desenvolupament propi, aquest projecte cobreix àrees clau com família, successions i obligacions, 
                  amb un focus en l'usuari no expert. Les limitacions principals inclouen:
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>És orientatiu i no substitueix assessorament professional per a qüestions complexes.</li>
                    <li>Inclou avisos legals que clarifiquen que la informació és per a propòsits educatius.</li>
                    <li>Requereix actualització periòdica quan les normes canvien.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cas 2: Prudència.cat */}
        <section className="mb-16 scroll-mt-20" id="prudencia-cat">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Code className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cas 2: Prudència.cat
                </h2>
                <a 
                  href="https://prudencia-cat.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visitar plataforma
                </a>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Descripció del Projecte
                </h3>
                <p className="mb-4">
                  <strong>Prudència.cat</strong> és un projecte personal de l'autor centrat exclusivament en el Codi 
                  Civil de Catalunya, amb sis llibres i més de 1.400 articles. La plataforma ofereix navegació per 
                  títols, resums IA, exemples aplicats i un chatbot especialitzat.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Accessibilitat
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Accés directe a articles:</strong> Navegació estructurada per títols que permet accedir 
                  ràpidament a articles sobre persona, família, drets reals, etc.</li>
                  <li><strong>IA per contextualitzar:</strong> La IA ajuda a entendre ràpidament el context i la 
                  rellevància de cada article.</li>
                  <li><strong>Interfície intuïtiva:</strong> Disseny centrat en l'usuari que facilita la navegació 
                  sense coneixements tècnics.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Comprensió
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Exemples pràctics generats:</strong> Escenaris reals que il·lustren conceptes complexos 
                  com servituds o hipoteques.</li>
                  <li><strong>Resums estructurats:</strong> Cada article inclou un resum que destaca els elements 
                  essencials.</li>
                  <li><strong>Chatbot especialitzat:</strong> Permet fer preguntes en llenguatge natural sobre el 
                  Codi Civil.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Com ajuda en Subjecció Jurídica
                </h3>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Enteniment d'obligacions contractuals:</strong> Ajuda a comprendre les obligacions 
                  derivades de contractes, promovent l'adhesió voluntària.</li>
                  <li><strong>Reducció de litigis:</strong> La comprensió clara redueix malentesos que poden portar 
                  a conflictes legals.</li>
                  <li><strong>Educació preventiva:</strong> Informació accessible que ajuda a prevenir infraccions 
                  involuntàries.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Anàlisi i Filosofia del Projecte
                </h3>
                <p className="mb-4">
                  Inspirat en el concepte de "raó recta" en l'acció legal, aquest projecte demostra com un 
                  desenvolupador individual pot crear eines locals que empoderen la ciutadania. El projecte inclou 
                  recomanacions per consultar experts quan la complexitat ho requereixi, mantenint un equilibri entre 
                  autonomia ciutadana i necessitat d'assessorament professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparació */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comparació entre els Projectes
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300">
                    Característica
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300">
                    Catalunya Legal
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Prudència.cat
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Focus
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300">
                    Dret civil català + Consum
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Codi Civil de Catalunya
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Articles indexats
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300">
                    +1.800 articles
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    +1.400 articles
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Accessibilitat
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300">
                    Gratuït, web, cerca avançada
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Gratuït, web, navegació estructurada
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Comprensió via IA
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300">
                    Resums i exemples
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Resums i chatbot especialitzat
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Subjecció Jurídica
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-300">
                    Simulacions pràctiques
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Educació preventiva
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Observacions com a autor:</h4>
            <p className="text-sm text-gray-700">
              Ambdues plataformes, desenvolupades per mi, utilitzen IA (basada en models oberts com OpenAI) per 
              simplificar el dret català. Catalunya Legal integra consum, mentre Prudència.cat es centra en civil, 
              mostrant adaptabilitat. Com a autor, he prioritzat l'ètica: Gratuitat, privacitat i avisos sobre 
              limitacions. Les tecnologies utilitzades inclouen Vercel per hosting i models IA per generació de text, 
              demostrant com un desenvolupador individual pot crear eines que empoderen la ciutadania.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/ia-accessibilitat"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: IA i Accessibilitat
          </Link>
          <Link
            href="/beneficis-desafiaments"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Beneficis i Desafiaments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

