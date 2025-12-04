import Link from 'next/link';
import { ArrowLeft, ArrowRight, Scale, Shield, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MarcRegulatoriPage() {
  const t = useTranslations('marcRegulatori');
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-700">{tNav('home')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{tNav('marcRegulatori')}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {t('description')}
          </p>
        </div>

        {/* Compliment EU AI Act Section */}
        <section className="mb-16 scroll-mt-20" id="compliment">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Scale className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('compliment.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('compliment.classificacio.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('compliment.classificacio.content')}
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('compliment.obligacions.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('compliment.obligacions.content')}
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('compliment.supervisio.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('compliment.supervisio.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Compliment Section */}
        <section className="mb-16 scroll-mt-20" id="gdpr">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('gdprCompliment.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('gdprCompliment.baseLegal.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('gdprCompliment.baseLegal.content')}
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('gdprCompliment.seguretat.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('gdprCompliment.seguretat.content')}
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('gdprCompliment.dretsUsuaris.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('gdprCompliment.dretsUsuaris.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propietat Intel·lectual Section */}
        <section className="mb-16 scroll-mt-20" id="propietat">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <FileText className="h-6 w-6 text-purple-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('propietatIntel·lectual.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('propietatIntel·lectual.dretsAutor.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('propietatIntel·lectual.dretsAutor.content')}
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('propietatIntel·lectual.dadesPubliques.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('propietatIntel·lectual.dadesPubliques.content')}
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('propietatIntel·lectual.licencies.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('propietatIntel·lectual.licencies.content')}
                  </p>
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
            href="/arquitectura"
            className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Següent: Arquitectura Tècnica
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

