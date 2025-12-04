import Link from 'next/link';
import { type Locale } from '@/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prudencia.ad</h3>
            <p className="text-sm text-gray-600">
              Sistema d'intel·ligència artificial per a l'accessibilitat jurídica al Principat d'Andorra.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Enllaços</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/introduccio`} className="text-sm text-gray-600 hover:text-blue-600">
                  Introducció
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/arquitectura`} className="text-sm text-gray-600 hover:text-blue-600">
                  Arquitectura
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resultats`} className="text-sm text-gray-600 hover:text-blue-600">
                  Resultats
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contacte</h4>
            <p className="text-sm text-gray-600">
              Paper acadèmic d'investigació
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Finalitat acadèmica i implementació tècnica real
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Prudencia.ad. Tots els drets reservats.
          </p>
        </div>
      </div>
    </footer>
  );
}

