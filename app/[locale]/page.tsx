import Link from 'next/link';
import { ArrowRight, BookOpen, Cpu, Database, Globe, Target, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Noves tecnologies aplicades a l'accessibilitat jurídica:{' '}
              <span className="text-blue-700">Intel·ligència artificial i interpretació ciutadana del dret</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              El projecte <span className="font-semibold text-blue-700">Prudencia.ad</span>: Un sistema d'intel·ligència artificial per a l'accessibilitat jurídica 
              al Principat d'Andorra
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Paper sobre noves tecnologies i emprendiment en LegalTech que combina innovació tecnològica i dret 
              per democratitzar l'accés al coneixement jurídic andorrà
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/introduccio"
                className="rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Començar lectura
              </Link>
              <Link
                href="/arquitectura"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-700"
              >
                Veure arquitectura <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-700">
              Característiques principals
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Innovació tecnològica i emprendiment en LegalTech
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Aquest projecte combina les noves tecnologies i l'emprenedoria amb 
              la profunditat del dret per crear una eina accessible i útil.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Cpu className="h-5 w-5 flex-none text-blue-700" />
                  Intel·ligència Artificial
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Integració de LLMs (Claude/GPT) per interpretar i simplificar 
                    el llenguatge jurídic complex.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Globe className="h-5 w-5 flex-none text-blue-700" />
                  Multilingüisme
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Suport complet per a català, castellà i francès, reflectint 
                    la realitat trilingüe d'Andorra.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Database className="h-5 w-5 flex-none text-blue-700" />
                  Dret Comparat
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Comparació automàtica entre sistemes legals (Andorra, 
                    Catalunya, Espanya) utilitzant IA.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <BookOpen className="h-5 w-5 flex-none text-blue-700" />
                  Accessibilitat
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Democratització del coneixement jurídic mitjançant 
                    interpretacions en llenguatge plà.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Zap className="h-5 w-5 flex-none text-blue-700" />
                  Rendiment
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Arquitectura JAMstack amb Next.js i Vercel per a 
                    alt rendiment i baix cost.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Target className="h-5 w-5 flex-none text-blue-700" />
                  Validació Empírica
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Estudi acadèmic amb dades reals d'ús i avaluació per 
                    professionals del dret.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Structure Overview */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Estructura del treball
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Una aproximació sistemàtica que combina teoria i pràctica
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Introducció
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Context, problema i objectius del projecte
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Estat de l'Art
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Marc teòric: LegalTech, IA generativa i dret andorrà
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Anàlisi de Requisits
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Perfils d'usuari i requisits funcionals i no funcionals
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">4</span>
                  </div>
                  Arquitectura Tècnica
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Stack tecnològic, model de dades i integració de IA
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">5</span>
                  </div>
                  Implementació
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Desenvolupament del MVP i gestió de reptes tècnics
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">6</span>
                  </div>
                  Sostenibilitat
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Model de negoci i estratègia de monetització
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">7</span>
                  </div>
                  Resultats
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Mètriques de rendiment i validació qualitativa
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <span className="text-white font-bold">8</span>
                  </div>
                  Conclusions
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Assoliment d'objectius i treball futur
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explora el projecte complet
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Accedeix a totes les seccions del paper per entendre en profunditat 
              les noves tecnologies aplicades a l'accessibilitat jurídica i el projecte Prudencia.ad
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/introduccio"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Començar lectura
                <ArrowRight className="ml-2 inline h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

