---
title: Évaluation
---

# ⚖️ Évaluation

## Vue d'ensemble

| Composante | Mode | Comment c'est noté |
| :--- | :---: | :--- |
| **TP guidé SmartCity Explorer** | Équipe | Automatiquement, par les tests (`pytest`) à chaque `git push` - [détail](#smartcity) |
| **Portfolio - Jalon 1 : System Design** | Équipe | Grille, 30 % de la note Portfolio - [grille](portfolio/grille.md) |
| **Portfolio - Backend unifié** | Équipe | Grille, 40 % de la note Portfolio - [grille](portfolio/grille.md) |
| **Portfolio - Frontend personnel** | **Individuel** | Grille, 30 % de la note Portfolio - [grille](portfolio/grille.md) |

!!! note "Pondération finale"
    La pondération entre SmartCity, le Portfolio et un éventuel examen écrit sera précisée ici.

## SmartCity : notation automatique { #smartcity }

| Sprint | Contenu | Points |
| :--- | :--- | :---: |
| 1 | Connexions MongoDB & Neo4j (`db/`) | 25 |
| 2 | Seed : villes + scores **imbriqués**, avis **référencés**, graphe Neo4j | 50 |
| 3 | Repositories : recherche paginée, agrégation, requêtes Cypher | 100 |
| 4 | Services métier | 25 |
| | **Total** | **200** |

- **Au prorata** : chaque Sprint rapporte des points en proportion des tests réussis (25 tests sur 26 = ~96 %).
- **Votre note en direct** : onglet **Actions** de votre dépôt → dernier run → résumé « Résultat de l'Évaluation Automatique ».
- **Ce qui est noté** : le dernier run **terminé** sur `main` avant l'échéance (voir le [planning](planning.md)).
- **Ne modifiez pas** `tests/` ni `.github/` : toute modification est détectée et vérifiée à la main.
- **Vos commits comptent** : configurez Git avec l'email de votre compte GitHub, sinon vos contributions ne vous sont pas attribuées.

```bash
git config --global user.email "email-de-votre-compte@github"
```

## 🏆 Leaderboard (16 et 20 novembre)

À chaque séance, le top 3 des équipes est affiché dans trois catégories :

| Catégorie | Ce qui compte |
| :--- | :--- |
| 🚀 **La plus avancée** | Score des tests (SmartCity puis Portfolio), et à score égal, l'équipe qui l'a atteint en premier |
| 💬 **La plus communicante** | Questions pertinentes, demandes d'aide, échanges avec l'enseignant (Teams, mail, Issues GitHub) |
| 🤝 **La plus active** | Nombre de membres qui contribuent (commits sur `main`, Pull Requests), régularité du travail |
