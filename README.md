# MediaHub - Site Média Moderne avec Astro

Un site média moderne et élégant construit avec Astro, optimisé pour la publication d'articles Markdown et la gestion de newsletter.

## Présentation

MediaHub est un site média statique qui utilise Astro Content Collections pour gérer et afficher des articles Markdown. Le site offre une expérience de lecture optimale avec un design moderne, épuré et responsive.

### Fonctionnalités principales

- **Page d'accueil** : Liste des derniers articles avec système de cartes lisibles
- **Pages d'articles dynamiques** : Rendu automatique des articles Markdown avec mise en forme élégante
- **Page À propos** : Présentation du site et de l'équipe
- **Page Newsletter** : Formulaire d'inscription à la newsletter
- **Page Contact** : Formulaire de contact et mentions légales
- **Design responsive** : Optimisé pour tous les appareils
- **Performance optimale** : Site statique ultra-rapide
- **SEO-friendly** : Métadonnées optimisées pour le référencement

## Architecture du projet

```text
/
├── public/                      # Fichiers statiques publics
│   └── favicon.svg
├── src/
│   ├── components/              # Composants réutilisables
│   │   ├── ArticleCard.astro   # Carte d'article pour la liste
│   │   ├── Footer.astro        # Pied de page du site
│   │   └── Header.astro        # En-tête avec navigation
│   ├── content/                 # Content Collections
│   │   ├── config.ts           # Configuration des collections
│   │   └── posts/              # Articles Markdown
│   │       ├── article-1.md
│   │       ├── article-2.md
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal du site
│   ├── pages/                   # Pages du site
│   │   ├── index.astro         # Page d'accueil
│   │   ├── about.astro         # Page À propos
│   │   ├── contact.astro       # Page Contact
│   │   ├── newsletter.astro    # Page Newsletter
│   │   └── posts/
│   │       └── [...slug].astro # Page dynamique pour les articles
│   ├── styles/
│   │   └── global.css          # Styles CSS globaux
│   └── config.ts               # Configuration centrale du site
├── astro.config.mjs            # Configuration Astro
├── package.json
└── tsconfig.json
```

## Installation et utilisation

### Prérequis

- Node.js 18 ou supérieur
- npm ou yarn

### Installation

```bash
npm install
```

### Commandes disponibles

| Commande              | Action                                              |
| :-------------------- | :-------------------------------------------------- |
| `npm install`         | Installe les dépendances                            |
| `npm run dev`         | Lance le serveur de développement sur `localhost:4321` |
| `npm run build`       | Génère le site statique dans `./dist/`              |
| `npm run preview`     | Prévisualise le build en local                      |
| `npm run astro ...`   | Exécute les commandes CLI Astro                     |

## Ajouter un nouvel article

### 1. Créer un fichier Markdown

Créez un nouveau fichier `.md` dans le dossier `src/content/posts/`.

Exemple : `src/content/posts/mon-nouvel-article.md`

### 2. Ajouter le frontmatter

Chaque article doit contenir un frontmatter YAML avec les champs obligatoires suivants :

```yaml
---
title: "Le titre de votre article"
date: 2024-01-15
category: "Catégorie"
excerpt: "Un résumé court et accrocheur de votre article qui apparaîtra sur les cartes."
source: "Nom de la source"
---
```

### 3. Rédiger le contenu

Écrivez votre article en Markdown sous le frontmatter :

```markdown
---
title: "Mon nouvel article"
date: 2024-01-15
category: "Technologie"
excerpt: "Une introduction captivante à mon article"
source: "TechNews"
---

## Introduction

Votre contenu ici...

## Section 1

Plus de contenu...

### Sous-section

Encore plus de contenu...

## Conclusion

La conclusion de votre article.
```

### 4. Formats Markdown supportés

Le site supporte tous les éléments Markdown standards :

- **Titres** : `# H1`, `## H2`, `### H3`, etc.
- **Paragraphes** : Texte normal
- **Listes** :
  - Listes à puces : `- item`
  - Listes numérotées : `1. item`
- **Liens** : `[texte](url)`
- **Images** : `![alt](url)`
- **Gras** : `**texte**`
- **Italique** : `*texte*`
- **Code inline** : `` `code` ``
- **Blocs de code** : `` ```language ... ``` ``
- **Citations** : `> citation`

### 5. Exemple complet

```markdown
---
title: "L'avenir de la technologie web"
date: 2024-01-20
category: "Technologie"
excerpt: "Découvrez les tendances qui façonneront le web de demain et comment vous pouvez vous y préparer."
source: "WebDev Magazine"
---

Le web évolue constamment, et 2024 promet d'être une année charnière pour de nombreuses technologies.

## Les frameworks JavaScript

Les frameworks comme React, Vue et Svelte continuent d'évoluer...

## Le web statique

Les générateurs de sites statiques comme Astro gagnent en popularité...

### Performance

La performance est devenue un critère essentiel...

## Conclusion

L'avenir du web est passionnant et plein d'opportunités.
```

## Configuration du site

### Fichier de configuration principal

Le fichier `src/config.ts` centralise toutes les variables globales du site :

```typescript
export const SITE_CONFIG = {
  title: 'MediaHub',                    // Nom du site
  description: 'Description du site',   // Description pour SEO
  author: 'MediaHub Team',              // Auteur
  email: 'contact@mediahub.com',        // Email de contact
  url: 'https://mediahub.com',          // URL du site

  navigation: [                         // Menu de navigation
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    // ...
  ],

  postsPerPage: 12,                     // Nombre d'articles par page

  social: {                             // Liens réseaux sociaux
    twitter: 'https://twitter.com/...',
    linkedin: 'https://linkedin.com/...',
    github: 'https://github.com/...',
  },
};
```

Modifiez ces valeurs pour personnaliser votre site.

### Styles CSS

Les styles globaux sont définis dans `src/styles/global.css` avec des variables CSS pour faciliter la personnalisation :

- Couleurs : `--color-primary`, `--color-secondary`, etc.
- Typographie : `--font-sans`, `--text-base`, etc.
- Espacements : `--spacing-xs`, `--spacing-md`, etc.
- Layout : `--max-width`, `--border-radius`, etc.

## Structure des composants

### Header.astro

Navigation principale du site avec menu responsive. Utilise la configuration de navigation depuis `config.ts`.

### Footer.astro

Pied de page avec liens de navigation et réseaux sociaux.

### ArticleCard.astro

Composant de carte d'article utilisé sur la page d'accueil. Affiche :
- Badge de catégorie
- Date de publication
- Titre de l'article
- Extrait
- Source
- Lien vers l'article complet

### Layout.astro

Layout principal qui englobe toutes les pages. Inclut :
- Métadonnées SEO
- Header et Footer
- Importation des styles globaux

## Déploiement

Le site génère des fichiers HTML statiques, ce qui permet un déploiement sur n'importe quelle plateforme d'hébergement statique :

### Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `./dist/`.

### Plateformes recommandées

- **Netlify** : Déploiement automatique depuis Git
- **Vercel** : Support natif d'Astro
- **GitHub Pages** : Hébergement gratuit
- **Cloudflare Pages** : CDN global performant

### Configuration Netlify

Créez un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Configuration Vercel

Vercel détecte automatiquement Astro, aucune configuration nécessaire.

## Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `src/styles/global.css` :

```css
:root {
  --color-primary: #2563eb;        /* Couleur principale */
  --color-secondary: #0891b2;      /* Couleur secondaire */
  --color-accent: #0ea5e9;         /* Couleur d'accent */
}
```

### Modifier la typographie

Changez les polices dans les variables CSS :

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Ajouter des pages

1. Créez un nouveau fichier `.astro` dans `src/pages/`
2. Ajoutez un lien dans le menu de navigation via `src/config.ts`

## Performance et optimisation

- **Génération statique** : Tous les articles sont pré-rendus
- **CSS optimisé** : Styles scopés et minifiés automatiquement
- **Images optimisées** : Astro optimise automatiquement les images
- **Code splitting** : JavaScript divisé par page
- **Zéro JavaScript par défaut** : Pages HTML pures pour un chargement instantané

## Support et contribution

Pour toute question ou suggestion d'amélioration, n'hésitez pas à ouvrir une issue ou à contribuer au projet.

## Licence

Ce projet est open source et libre d'utilisation.

## Ressources

- [Documentation Astro](https://docs.astro.build)
- [Guide Markdown](https://www.markdownguide.org/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
