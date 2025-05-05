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

```typescript
// Exemple de structure attendue:
import { z } from "zod";

export const [nomEntité]Schema = z.object({
  id: z.number().optional(),
  // autres champs
});

export type [NomEntité] = z.infer<typeof [nomEntité]Schema>;

export const create[NomEntité]Schema = [nomEntité]Schema.omit({
  id: true
  // autres champs à omettre si nécessaire
});

export type Create[NomEntité]Input = z.infer<typeof create[NomEntité]Schema>;

export const update[NomEntité]Schema = [nomEntité]Schema.partial().extend({
  id: z.number(),
  // autres champs obligatoires
});

export type Update[NomEntité]Input = z.infer<typeof update[NomEntité]Schema>;
```

#### B. Repository (src/data-access/repositories/[nom-entité].repository.ts)

Implémentez les fonctions CRUD et toute autre opération spécifique nécessaire pour l'entité.

```
Source de données: [SUPABASE/STRAPI/POSTGRESQL/FIREBASE/REST_API/MOCK]
Dépendances spécifiques:
- [DEPENDANCE_1]: [VERSION] [DESCRIPTION]
- [DEPENDANCE_2]: [VERSION] [DESCRIPTION]
...
Fonctions à implémenter:
- [FONCTION_REPO_1]: [DESCRIPTION]
- [FONCTION_REPO_2]: [DESCRIPTION]
...
```

### 2. Cas d'Utilisation (src/use-cases/)

#### A. Server Actions (src/use-cases/[nom-entité].server.ts)

Implémentez les Server Actions pour gérer les opérations côté serveur avec Next.js, en utilisant le pattern safe-action et la revalidation du cache.

```
Nécessaire: [OUI/NON]
Actions à implémenter:
- [ACTION_1]: [DESCRIPTION] [SCHEMA_INPUT]
- [ACTION_2]: [DESCRIPTION] [SCHEMA_INPUT]
...
Authentification requise: [OUI/NON]
```

Exemple de structure:

```typescript
"use server";
import { authenticatedAction } from "@lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ROUTES } from "@config/routes";
import { [NomEntité]Repository } from "@data-access/repositories/[nom-entité].repository";
import { Create[NomEntité]Input, Update[NomEntité]Input } from "@data-access/schemas/[nom-entité].schema";
import { User } from "@data-access/schemas/user.schema";
import { NotFoundError, AuthenticationError, PublicError } from "@use-cases/errors";

// Use Cases (logique métier)
export async function get[NomEntité]ByIdUseCase(
  user: User | undefined,
  [nomEntité]Id: number
) {
  // Récupération de l'entité
  const [nomEntité] = await [NomEntité]Repository.getById([nomEntité]Id);

  // Vérifier si l'entité existe
  if (!([nomEntité])) {
    throw new NotFoundError("[NomEntité] not found");
  }

  // Vérification des autorisations si nécessaire
  // Exemple:
  // if (user?.id !== [nomEntité].userId && !user?.isAdmin) {
  //   throw new AuthenticationError();
  // }

  return [nomEntité];
}

export async function create[NomEntité]UseCase(
  user: User,
  input: Create[NomEntité]Input
) {
  // Vérification des autorisations si nécessaire
  if (!user) {
    throw new AuthenticationError();
  }

  // Logique métier et validation supplémentaire
  // Exemple:
  // const existingEntity = await [NomEntité]Repository.findByUniqueField(input.uniqueField);
  // if (existingEntity) {
  //   throw new PublicError("[NomEntité] with this unique field already exists");
  // }

  // Appel au repository
  try {
    return await [NomEntité]Repository.create({
      ...input,
      userId: user.id,
      // Ajouter les champs supplémentaires (userId, etc.)
    });
  } catch (error) {
    // Gestion des erreurs spécifiques
    throw new PublicError("Failed to create [NomEntité]");
  }
}

export async function update[NomEntité]UseCase(
  user: User,
  input: Update[NomEntité]Input
) {
  // Vérification des autorisations si nécessaire
  if (!user) {
    throw new AuthenticationError();
  }

  // Récupérer l'entité existante pour vérifier les permissions
  const existingEntity = await get[NomEntité]ByIdUseCase(user, input.id);

  // Vérifier que l'utilisateur peut modifier cette entité
  // Exemple:
  // if (existingEntity.userId !== user.id && !user.isAdmin) {
  //   throw new AuthenticationError();
  // }

  // Logique métier

  // Appel au repository
  try {
    return await [NomEntité]Repository.update(input);
  } catch (error) {
    // Gestion des erreurs spécifiques
    throw new PublicError("Failed to update [NomEntité]");
  }
}

export async function delete[NomEntité]UseCase(
  user: User,
  input: { [nomEntité]Id: number }
) {
  // Vérification des autorisations si nécessaire
  if (!user) {
    throw new AuthenticationError();
  }

  // Récupérer l'entité existante pour vérifier les permissions
  const existingEntity = await get[NomEntité]ByIdUseCase(user, input.[nomEntité]Id);

  // Vérifier que l'utilisateur peut supprimer cette entité
  // Exemple:
  // if (existingEntity.userId !== user.id && !user.isAdmin) {
  //   throw new AuthenticationError();
  // }

  // Appel au repository
  try {
    await [NomEntité]Repository.delete(input.[nomEntité]Id);
  } catch (error) {
    // Gestion des erreurs spécifiques
    throw new PublicError("Failed to delete [NomEntité]");
  }
}

// Server Actions (exposées pour utilisation dans l'interface)
export const create[NomEntité]Action = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      // définir le schéma de l'input
    })
  )
  .handler(async ({ input, ctx }) => {
    const result = await create[NomEntité]UseCase(ctx.user, {
      // mapper input vers les paramètres requis
    });
    revalidatePath(ROUTES.[ROUTE_ASSOCIÉE]);
    return result;
  });

export const update[NomEntité]Action = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      // définir le schéma de l'input
    })
  )
  .handler(async ({ input, ctx }) => {
    const result = await update[NomEntité]UseCase(ctx.user, {
      // mapper input vers les paramètres requis
    });
    revalidatePath(ROUTES.[ROUTE_ASSOCIÉE]);
    return result;
  });

export const delete[NomEntité]Action = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      // définir le schéma de l'input
    })
  )
  .handler(async ({ input, ctx }) => {
    await delete[NomEntité]UseCase(ctx.user, {
      // mapper input vers les paramètres requis
    });
    revalidatePath(ROUTES.[ROUTE_ASSOCIÉE]);
  });
```

#### B. Formulaires (src/use-cases/[nom-entité].form.ts)

Implémentez les hooks pour la gestion des formulaires avec validation et intégration des server actions.

```
Nécessaire: [OUI/NON]
Types de formulaires: [CRÉATION/ÉDITION/LES DEUX]
Champs des formulaires:
- [CHAMP_1]: [TYPE] [VALIDATION]
- [CHAMP_2]: [TYPE] [VALIDATION]
...
```

Exemple de structure:

```typescript
"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@components/ui/use-toast";
import { create[NomEntité]Action, update[NomEntité]Action, delete[NomEntité]Action } from "@use-cases/[nom-entité].server";
import { [NomEntité] } from "@data-access/schemas/[nom-entité].schema";
import { useAction } from "@lib/safe-action";

// Schéma pour le formulaire de création
const create[NomEntité]FormSchema = z.object({
  // Définir le schéma du formulaire de création
});

type Create[NomEntité]FormValues = z.infer<typeof create[NomEntité]FormSchema>;

// Schéma pour le formulaire de mise à jour
const update[NomEntité]FormSchema = z.object({
  id: z.number(),
  // Définir le schéma du formulaire de mise à jour
});

type Update[NomEntité]FormValues = z.infer<typeof update[NomEntité]FormSchema>;

interface Use[NomEntité]FormProps {
  initialData?: [NomEntité] | null;
  onSuccess?: () => void;
}

export function use[NomEntité]Form({ initialData, onSuccess }: Use[NomEntité]FormProps = {}) {
  const [isPending, startTransition] = useTransition();
  const isEditing = !!initialData;

  // Hook pour l'action de création
  const { execute: executeCreate, result: createResult } = useAction(create[NomEntité]Action);

  // Hook pour l'action de mise à jour
  const { execute: executeUpdate, result: updateResult } = useAction(update[NomEntité]Action);

  // Hook pour l'action de suppression
  const { execute: executeDelete, result: deleteResult } = useAction(delete[NomEntité]Action);

  // Formulaire avec React Hook Form
  const form = useForm<Create[NomEntité]FormValues | Update[NomEntité]FormValues>({
    resolver: zodResolver(isEditing ? update[NomEntité]FormSchema : create[NomEntité]FormSchema),
    defaultValues: isEditing
      ? {
          id: initialData.id,
          // autres champs avec valeurs initiales
        }
      : {
          // valeurs par défaut pour la création
        },
  });

  const onSubmit = (values: Create[NomEntité]FormValues | Update[NomEntité]FormValues) => {
    startTransition(async () => {
      try {
        if (isEditing) {
          await executeUpdate(values as Update[NomEntité]FormValues);
          toast({
            title: "Succès",
            description: "[NomEntité] mis à jour avec succès",
          });
        } else {
          await executeCreate(values as Create[NomEntité]FormValues);
          toast({
            title: "Succès",
            description: "[NomEntité] créé avec succès",
          });
          form.reset();
        }

        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue",
          variant: "destructive",
        });
      }
    });
  };

  const onDelete = (id: number) => {
    startTransition(async () => {
      try {
        await executeDelete({ [nomEntité]Id: id });
        toast({
          title: "Succès",
          description: "[NomEntité] supprimé avec succès",
        });

        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de la suppression",
          variant: "destructive",
        });
      }
    });
  };

  return {
    form,
    isEditing,
    isPending,
    onSubmit: form.handleSubmit(onSubmit),
    onDelete,
    createResult,
    updateResult,
    deleteResult,
  };
}
```

#### C. Composant de formulaire (src/components/[nom-entité]/[nom-entité]-form.tsx)

Implémentez le composant UI du formulaire qui utilise le hook form défini précédemment.

```typescript
"use client";

import { Button } from "@components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { use[NomEntité]Form } from "@use-cases/[nom-entité].form";
import { [NomEntité] } from "@data-access/schemas/[nom-entité].schema";

interface [NomEntité]FormProps {
  initialData?: [NomEntité] | null;
  onSuccess?: () => void;
}

export function [NomEntité]Form({ initialData, onSuccess }: [NomEntité]FormProps) {
  const { form, isEditing, isPending, onSubmit } = use[NomEntité]Form({
    initialData,
    onSuccess,
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Champs du formulaire */}
        <FormField
          control={form.control}
          name="champ1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Champ 1</FormLabel>
              <FormControl>
                <Input placeholder="Entrez la valeur..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Plus de champs selon les besoins */}

        <Button type="submit" disabled={isPending}>
          {isPending ? "En cours..." : isEditing ? "Mettre à jour" : "Créer"}
        </Button>
      </form>
    </Form>
  );
}
```

### 4. Pages/Routes (src/app/)

#### A. Page de liste (src/app/[route-appropriée]/page.tsx)

Implémentez la page pour lister les entités.

```typescript
import { Suspense } from "react";
import { [NomEntité]List } from "@components/[nom-entité]/[nom-entité]-list";
import { ListSkeleton } from "@components/ui/list-skeleton";

export default function [NomEntité]ListPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">[NomEntité]s</h1>
      <Suspense fallback={<ListSkeleton />}>
        <[NomEntité]List />
      </Suspense>
    </div>
  );
}
```

#### B. Page de création (src/app/[route-appropriée]/create/page.tsx)

```typescript
import { [NomEntité]Form } from "@components/[nom-entité]/[nom-entité]-form";

export default function Create[NomEntité]Page() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Créer un nouveau [NomEntité]</h1>
      <[NomEntité]Form />
    </div>
  );
}
```

#### C. Page de détail/modification (src/app/[route-appropriée]/[id]/page.tsx)

```typescript
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { [NomEntité]Form } from "@components/[nom-entité]/[nom-entité]-form";
import { FormSkeleton } from "@components/ui/form-skeleton";
import { get[NomEntité]ByIdUseCase } from "@use-cases/[nom-entité].server";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Edit[NomEntité]Page({ params }: PageProps) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    notFound();
  }

  try {
    const [nomEntité] = await get[NomEntité]ByIdUseCase(undefined, id);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Modifier [NomEntité]</h1>
      <Suspense fallback={<FormSkeleton />}>
        <[NomEntité]Form initialData={[nomEntité]} />
      </Suspense>
    </div>
  );
}
```

### 5. Configuration (src/config/)

#### A. Routes (src/config/routes.ts)

Mettez à jour le fichier de configuration des routes si nécessaire.

```
Routes à ajouter:
- [ROUTE_LIST]: "/[chemin-entité]"
- [ROUTE_CREATE]: "/[chemin-entité]/create"
- [ROUTE_EDIT]: "/[chemin-entité]/[id]"
...
```

#### B. Cache Tags (src/config/cache-tags.ts)

Ajoutez les tags nécessaires pour la gestion du cache avec Next.js.

```
Tags à ajouter:
- [NOM_TAG_1]: "[nom-entité]-list"
- [NOM_TAG_2]: "[nom-entité]-[id]"
...
```

## Précisions Techniques

- **Composants UI**: Utilisez les composants Shadcn/UI pour les formulaires et l'interface
- **Validation**: Implémentez la validation côté client avec Zod
- **Gestion des données**: Assurez-vous que les requêtes sont correctement typées avec TanStack Query
- **Stylisation**: Utilisez exclusivement les classes utilitaires Tailwind pour le style
- **Next.js**: Respectez les bonnes pratiques de Next.js 15 (Server Components vs Client Components)
- **Tests**: Assurez-vous que les fonctions du repository sont facilement remplaçables pour les tests
- **Server Actions**: Utilisez le pattern safe-action avec authenticatedAction si nécessaire
- **Chemins**: Utilisez les chemins de route définis dans ROUTES pour les revalidatePath
- **Cache**: Mettez en place des tags de cache appropriés pour optimiser les performances

## Considérations Particulières

- **Type de composant Next.js**: Les composants de page et de données sont des Server Components par défaut; les composants interactifs sont des Client Components ("use client")
- **Stratégie de cache**: Utilisez la revalidation sur demande avec des tags spécifiques pour chaque entité et collection
- **Gestion des erreurs**: Utilisez try/catch dans les actions et affichez les erreurs avec des toasts
- **Optimisations spécifiques**: Utilisez Suspense pour améliorer l'expérience utilisateur pendant le chargement des données

Le code généré doit être complet, bien commenté et prêt à être intégré dans le projet.
