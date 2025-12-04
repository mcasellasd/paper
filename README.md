# Prudencia.ad - Web de Suport per a Paper Acadèmic d'Investigació

Web de suport per al paper acadèmic d'investigació "Noves tecnologies aplicades a l'accessibilitat jurídica: Intel·ligència artificial i interpretació ciutadana del dret. El projecte Prudencia.ad"

## Descripció

Aquest projecte és una web acadèmica que presenta el paper acadèmic d'investigació sobre el desenvolupament de Prudencia.ad, un sistema d'IA per democratitzar l'accés al coneixement jurídic andorrà. La web combina contingut acadèmic amb una presentació moderna i accessible.

## Característiques

- ✅ **Multilingüisme**: Suport complet per a català, castellà i francès
- ✅ **Disseny modern**: Interfície neta i professional amb Tailwind CSS
- ✅ **Navegació estructurada**: Segueix l'estructura acadèmica del paper
- ✅ **Responsive**: Totalment funcional en dispositius mòbils
- ✅ **SEO optimitzat**: Estructura i metadades optimitzades per a motors de cerca

## Estructura del Projecte

```
prudencia-web/
├── app/
│   └── [locale]/          # Pàgines amb suport multilingüe
│       ├── layout.tsx      # Layout principal amb Header i Footer
│       ├── page.tsx        # Pàgina d'inici
│       ├── introduccio/    # Secció 1: Introducció
│       ├── estat-art/      # Secció 2: Estat de l'Art
│       ├── arquitectura/  # Secció 4: Arquitectura Tècnica
│       ├── implementacio/  # Secció 5: Implementació
│       ├── sostenibilitat/ # Secció 6: Sostenibilitat
│       ├── resultats/      # Secció 7: Resultats
│       └── conclusions/    # Secció 8: Conclusions
├── components/
│   ├── Header.tsx         # Component de navegació
│   └── Footer.tsx         # Component de peu de pàgina
├── messages/              # Fitxers de traducció
│   ├── ca.json           # Traduccions en català
│   ├── es.json           # Traduccions en castellà
│   └── fr.json           # Traduccions en francès
├── lib/
│   └── i18n.ts           # Configuració d'internacionalització
└── i18n.ts               # Configuració d'idiomes

```

## Tecnologies Utilitzades

- **Next.js 16**: Framework React amb App Router
- **TypeScript**: Tipat estàtic per a major seguretat
- **Tailwind CSS**: Estilització utilitària
- **next-intl**: Internacionalització i traduccions
- **lucide-react**: Icones modernes i accessibles

## Instal·lació

1. Instal·la les dependències:
```bash
npm install
```

2. Executa el servidor de desenvolupament:
```bash
npm run dev
```

3. Obre [http://localhost:3000](http://localhost:3000) al navegador

## Estructura de Contingut

La web segueix l'estructura acadèmica del paper:

1. **Introducció**: Context, problema i objectius
2. **Estat de l'Art**: Marc teòric (LegalTech, IA generativa, dret andorrà)
3. **Anàlisi de Requisits**: Perfils d'usuari i requisits (no implementat encara)
4. **Arquitectura Tècnica**: Stack tecnològic, model de dades, integració IA
5. **Implementació**: Desenvolupament del MVP
6. **Sostenibilitat**: Model de negoci i costos
7. **Resultats**: Mètriques i validació
8. **Conclusions**: Assoliment d'objectius i treball futur

## Idiomes Suportats

- **Català** (`/ca`): Idioma per defecte
- **Castellà** (`/es`): Traducció completa
- **Francès** (`/fr`): Traducció completa

## Desplegament

El projecte està preparat per desplegar-se a Vercel:

1. Connecta el repositori a Vercel
2. Configura les variables d'entorn si cal
3. Desplega automàticament amb cada push a `main`

## Desenvolupament Futur

- [ ] Afegir secció d'Anàlisi de Requisits (Secció 3)
- [ ] Afegir secció de Bibliografia (Secció 9)
- [ ] Implementar components interactius (timeline, gràfics)
- [ ] Afegir mode fosc
- [ ] Millorar SEO amb metadades dinàmiques
- [ ] Afegir animacions i transicions

## Llicència

Aquest projecte és part d'un paper acadèmic d'investigació i té finalitat acadèmica.

## Contacte

Per a consultes sobre aquest projecte, contacta amb l'autor del paper acadèmic d'investigació.
