import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, Lightbulb, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BeneficisDesafiamentsPage() {
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('beneficisDesafiaments')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            5. Beneficis, Desafiaments i Recomanacions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Anàlisi dels impactes positius, riscos i recomanacions per al desenvolupament responsable d'eines d'IA jurídica
          </p>
        </div>

        {/* Beneficis Section */}
        <section className="mb-16 scroll-mt-20" id="beneficis">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.1. Beneficis
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Democratització de l'Accés al Dret
                </h3>
                <p className="mb-4">
                  Les eines d'IA jurídica democratitzen l'accés al coneixement legal, eliminant barreres tradicionals 
                  d'educació, recursos econòmics i ubicació geogràfica. Els projectes desenvolupats per l'autor 
                  demostren com eines gratuïtes i accessibles poden tenir un impacte significatiu a nivell local.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Reducció de Desigualtats
                </h3>
                <p className="mb-4">
                  L'accés gratuït al coneixement jurídic redueix les desigualtats en l'accés a la justícia:
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Igualtat econòmica:</strong> Elimina la barrera econòmica per a consultes bàsiques.</li>
                    <li><strong>Igualtat educativa:</strong> Proporciona educació legal accessible per a persones sense 
                    formació jurídica.</li>
                    <li><strong>Igualtat lingüística:</strong> Suport multilingüe que elimina barreres per a persones 
                    que no parlen la llengua oficial amb fluïdesa.</li>
                    <li><strong>Igualtat geogràfica:</strong> Accés des de qualsevol ubicació amb connexió a Internet.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Impacte Local
                </h3>
                <p className="mb-4">
                  Els projectes desenvolupats per l'autor (Catalunya Legal i Prudència.cat) demostren l'impacte que 
                  eines locals desenvolupades per desenvolupadors individuals poden tenir:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Millor adaptació al context legal específic (dret català vs. dret global).</li>
                  <li>Comprensió de les necessitats locals i culturals.</li>
                  <li>Possibilitat d'iteració ràpida basada en feedback de la comunitat.</li>
                  <li>Model sostenible que no depèn de grans inversions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Desafiaments Section */}
        <section className="mb-16 scroll-mt-20" id="desafiaments">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.2. Desafiaments
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Biaixos en IA
                </h3>
                <p className="mb-4">
                  Els sistemes d'IA poden perpetuar o amplificar biaixos existents en les dades d'entrenament. 
                  Com a desenvolupador, he implementat diverses estratègies per mitigar aquests riscos:
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Validació manual d'articles:</strong> Revisió humana de tots els resums i 
                    interpretacions generats per IA.</li>
                    <li><strong>Fonts oficials:</strong> Ús exclusiu de textos legals oficials com a font primària.</li>
                    <li><strong>Transparència:</strong> Comparació costat per costat entre text original i interpretació.</li>
                    <li><strong>Limitació d'àmbit:</strong> Enfocament en dret civil i consum, àrees amb menys risc de 
                    biaixos sistèmics.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Privacitat i Protecció de Dades (GDPR)
                </h3>
                <p className="mb-4">
                  El compliment del Reglament General de Protecció de Dades (GDPR) és essencial per a qualsevol 
                  eina que processi informació legal:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Minimització de dades:</strong> Només es recopilen les dades estrictament necessàries.</li>
                  <li><strong>Transparència:</strong> Polítiques de privacitat clares sobre com s'utilitzen les dades.</li>
                  <li><strong>Seguretat:</strong> Implementació de mesures de seguretat adequades per protegir les dades.</li>
                  <li><strong>Drets dels usuaris:</strong> Facilitació de l'exercici dels drets d'accés, rectificació i 
                  supressió.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Dependència Tecnològica
                </h3>
                <p className="mb-4">
                  La dependència excessiva de la tecnologia pot crear vulnerabilitats:
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Disponibilitat:</strong> La dependència d'APIs externes pot crear vulnerabilitats si 
                    el servei cau.</li>
                    <li><strong>Costos:</strong> Els costos d'APIs d'IA poden escalar ràpidament amb l'ús.</li>
                    <li><strong>Actualització:</strong> Necessitat d'actualitzar contínuament el contingut quan les 
                    normes canvien.</li>
                    <li><strong>Accés digital:</strong> Exclou persones sense accés a Internet o amb limitacions 
                    tecnològiques.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recomanacions Section */}
        <section className="mb-16 scroll-mt-20" id="recomanacions">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5.3. Recomanacions
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Per a Institucions Catalanes i Andorranes
                </h3>
                <p className="mb-4">
                  Les institucions públiques podrien escalar els models desenvolupats per l'autor:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>Col·laboració:</strong> Establir col·laboracions entre desenvolupadors independents i 
                  institucions públiques per escalar solucions locals.</li>
                  <li><strong>Finançament:</strong> Proporcionar finançament per al desenvolupament i manteniment 
                  d'eines d'accessibilitat jurídica.</li>
                  <li><strong>Dades oficials:</strong> Facilitar l'accés a dades estructurades i APIs oficials per 
                  millorar la precisió i actualització de les eines.</li>
                  <li><strong>Validació institucional:</strong> Col·laborar en la validació de la precisió i 
                  adequació de les interpretacions generades per IA.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Educació sobre IA Jurídica
                </h3>
                <p className="mb-4">
                  És essencial promoure l'educació sobre les capacitats i limitacions de la IA jurídica:
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Per a ciutadans:</strong> Programes educatius que expliquen com utilitzar eines d'IA 
                    jurídica de manera responsable.</li>
                    <li><strong>Per a professionals:</strong> Formació sobre com integrar la IA en la pràctica legal 
                    de manera ètica i efectiva.</li>
                    <li><strong>Per a desenvolupadors:</strong> Guies sobre millors pràctiques per al desenvolupament 
                    d'eines d'IA jurídica responsables.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  Futures Iteracions amb IA Multimodals
                </h3>
                <p className="mb-4">
                  El futur de la IA jurídica inclou possibilitats emocionants:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li><strong>IA multimodal:</strong> Sistemes que poden processar text, imatges i àudio per proporcionar 
                  assistència més completa.</li>
                  <li><strong>Personalització:</strong> Adaptació de les respostes segons el nivell de coneixement i 
                  necessitats específiques de cada usuari.</li>
                  <li><strong>Integració amb sistemes oficials:</strong> Connexió directa amb bases de dades oficials 
                  per a informació en temps real.</li>
                  <li><strong>Col·laboració humana-IA:</strong> Models que faciliten la col·laboració entre ciutadans, 
                  professionals i sistemes d'IA.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
          <Link
            href="/casos-estudi"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior: Casos d'Estudi
          </Link>
          <Link
            href="/conclusions"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Conclusions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

