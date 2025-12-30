# Instructions pour l'agent

Ces conventions doivent être respectées pour toute évolution du projet.

## Gitflow

- Toute nouvelle fonctionnalité passe par un processus gitflow.
- Créer une branche dédiée à la fonctionnalité à partir de `main` ou `master`.

## Variables partagées et sensibles

- Regrouper les variables partagées et sensibles (env, API keys, clés, IDs) dans un fichier persistant.
- Importer ce fichier pour toute utilisation.

## CSS et Bootstrap

- Prioriser l'utilisation de Bootstrap plutôt que du CSS custom.
- Résoudre si possible la dette technique CSS en traduisant vers Bootstrap sur les composants modifiés.

## Commentaires et nommage

- Commenter les fonctions du code (techniques, rôle fonctionnel, interactions).
- Commentaires en français.
- Noms de fonctions en français, en CamelCase, et explicites.
