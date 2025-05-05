# Prompt pour Nouvelle Fonctionnalité

## Contexte Technique

- **Stack Frontend**: Next.js 15, Tailwind CSS v4, Shadcn/UI, TanStack Query
- **Architecture des dossiers**:
  - `src/app/`: Routage de l'application (Next.js)
  - `src/data-access/`: Gestion des données, schémas et repositories
  - `src/use-cases/`: Logique métier, formulaires et hooks associés
  - `src/components/`: Composants UI réutilisables
  - `src/config/`: Configurations globales de l'application

## Description de la Fonctionnalité

**Nom de la fonctionnalité**: [NOM_FONCTIONNALITÉ]  
**Description**: [DESCRIPTION_DÉTAILLÉE]

**Entité principale**: [NOM_ENTITÉ]  
**Attributs principaux**:

- [ATTRIBUT_1]: [TYPE] [DESCRIPTION]
- [ATTRIBUT_2]: [TYPE] [DESCRIPTION]
  ...

**Pages/Routes requises**:
...

**Interactions utilisateur**:
...

## Fichiers à Générer

Pour cette fonctionnalité, générez les fichiers suivants selon notre architecture:

### 1. Modèles et Accès aux Données (src/data-access/)

#### A. Schéma de données (src/data-access/schemas/[nom-entité].schema.ts)

Créez un schéma Zod ou TypeScript pour l'entité principale avec tous ses attributs, validations et types.

#### B. Repository (src/data-access/repositories/[nom-entité].repository.ts)

Implémentez les fonctions CRUD et toute autre opération spécifique nécessaire pour l'entité.

### 2. Cas d'Utilisation (src/use-cases/)

#### A. Hooks (src/use-cases/[nom-entité]/hooks/use[NomEntité].ts)

Créez les hooks React nécessaires utilisant TanStack Query pour gérer les opérations et l'état.

#### B. Formulaires (src/use-cases/[nom-entité]/forms/[nom-entité]-form.tsx)

Implémentez les formulaires de création/édition avec validation et gestion des erreurs.

### 3. Composants UI (src/components/)

#### A. Composants spécifiques (src/components/[nom-entité]/\*)

Créez les composants UI nécessaires pour afficher et interagir avec l'entité.

### 4. Pages/Routes (src/app/)

#### A. Pages principales (src/app/[route-appropriée]/page.tsx)

Implémentez les pages pour lister, afficher, créer et éditer l'entité.

### 5. Configuration (src/config/)

#### A. Routes (src/config/routes.ts)

Mettez à jour le fichier de configuration des routes si nécessaire.

#### B. Cache Tags (src/config/cache-tags.ts)

Ajoutez les tags nécessaires pour la gestion du cache avec Next.js.

## Précisions Techniques

- Utilisez les composants Shadcn/UI pour les formulaires et l'interface
- Implémentez la validation côté client avec Zod
- Assurez-vous que les requêtes sont correctement typées avec TanStack Query
- Utilisez les classes utilitaires Tailwind pour le style
- Respectez les bonnes pratiques de Next.js 15 (Server Components vs Client Components)
- Assurez-vous que les fonctions du repository sont facilement remplaçables pour les tests
- Mettez en place des tags de cache appropriés pour optimiser les performances

Le code généré doit être complet, bien commenté et prêt à être intégré dans le projet.
