'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { locales, type Locale } from '@/i18n';
import { localeNames } from '@/i18n';

interface HeaderProps {
  locale: Locale;
}

const navigation = [
  { key: 'home', href: '/' },
  { key: 'introduccio', href: '/introduccio' },
  { key: 'marcTeoric', href: '/estat-art' },
  { key: 'marcRegulatori', href: '/marc-regulatori' },
  { key: 'iaAccessibilitat', href: '/ia-accessibilitat' },
  { key: 'casosEstudi', href: '/casos-estudi' },
  { key: 'beneficisDesafiaments', href: '/beneficis-desafiaments' },
  { key: 'conclusions', href: '/conclusions' },
  { key: 'editor', href: '/editor' },
  { key: 'bibliografia', href: '/bibliografia' },
];

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-2xl font-bold text-blue-700">
              Prudencia.ad
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => {
              const href = `/${locale}${item.href === '/' ? '' : item.href}`;
              const isActive = pathname === href || (item.href !== '/' && pathname?.startsWith(href));
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <Globe className="h-4 w-4" />
                <span>{localeNames[locale]}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname?.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setLangMenuOpen(false)}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const href = `/${locale}${item.href === '/' ? '' : item.href}`;
                return (
                  <Link
                    key={item.key}
                    href={href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
              <div className="mt-4 border-t border-gray-200 pt-4">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={pathname?.replace(`/${locale}`, `/${loc}`) || `/${loc}`}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

