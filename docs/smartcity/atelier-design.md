# 🧠 Atelier Design (Parcours 100% NoSQL - BDTN Rouen)

## Concevoir **SmartCity Explorer** (MongoDB & Neo4j)
Un complément data-driven à ville-ideale.fr

**TD – Séance de design d'architecture NoSQL**

> Aujourd'hui : pas de code, on pense **architecture et modélisation NoSQL** (Document vs Graphe, Embedding vs Referencing).

---

## 🎯 Objectif de la séance

À la fin de cet atelier, vous devez être capables de :

* formaliser un **besoin produit** (personas + scénarios)
* raisonner en **requêtes (Access Patterns)** avant de modéliser
* arbitrer entre **Embedding (imbrication)** et **Referencing (référence)** dans MongoDB
* répartir les données et responsabilités entre **MongoDB** (Document) et **Neo4j** (Graphe)
* établir un **contrat de cohérence** entre vos deux bases NoSQL

👉 Vous construisez la **spécification** du projet fil rouge **SmartCity Explorer**.

---

## 🧠 Contexte réel

Vous cherchez une ville où vivre ou investir en France. Vous voulez :

1. **Rechercher et filtrer** des villes (par région, département, population minimale) et les trier par note globale.
2. **Consulter la fiche d'une ville** avec ses **scores détaillés par catégorie** (environnement, sécurité, santé, transports…).
3. **Lire et publier des avis utilisateurs** (texte libre, note, tags, auteur, date) et calculer la note moyenne.
4. **Obtenir des recommandations de villes similaires** basées sur les **points forts communs** entre villes.

---

## 🔑 Étape 1 - Vos Requêtes d'Abord (Query-First Design)

En NoSQL, **le schéma découle des requêtes (Access Patterns)** :

### Catégorie A - Catalogue Villes & Scores (Lecture fréquente, conjointe)

* **Q1** : « Rechercher les villes d'Auvergne-Rhône-Alpes de plus de 100 000 habitants, triées par `overall_score` décroissant (paginé). »
* **Q2** : « Afficher la fiche complète d'une ville (`id = 1`) **avec ses 8 scores par catégorie**. »

### Catégorie B - Avis Utilisateurs (Écriture continue, volume non borné)

* **Q3** : « Afficher les 10 derniers avis publiés sur une ville (`city_id = 1`), triés par date décroissante. »
* **Q4** : « Ajouter un nouvel avis utilisateur sur une ville. »
* **Q5** : « Calculer la note moyenne des avis d'une ville via un pipeline d'agrégation (`$match` + `$group`). »

### Catégorie C - Relations & Recommandations (Traversée de graphe)

* **Q6** : « Quels sont les points forts (`score >= 7.0`) d'une ville ? »
* **Q7** : « Quelles sont les $K$ villes les plus similaires à Lyon et quels points forts partagent-elles ? »

---

## 🧱 Étape 2 - Arbitrage MongoDB : Embedding vs Referencing

Dans MongoDB, nous devons stocker : **les Villes (`City`)**, **les Scores par catégorie (`Score`)**, et **les Avis utilisateurs (`Review`)**.

### Question clé : Que met-on dans le même document, et que sépare-t-on dans deux collections ?

| Relation | Cardinalité | Croissance | Accès conjoint ? | Décision MongoDB |
| :--- | :--- | :--- | :--- | :--- |
| **Ville ↔ Scores par catégorie** | `1 : N` borné (~8 catégories fixes par ville) | Statique / rare | Oui (affichés sur la fiche ville) | ✅ **Embedding** : Tableau `scores: [...]` imbriqué directement dans chaque document de la collection `cities` |
| **Ville ↔ Avis utilisateurs** | `1 : N` non borné (potentiellement des milliers d'avis) | Continue (nouveaux avis fréquents) | Non (paginé indépendamment) | ✅ **Referencing** : Collection `reviews` séparée avec clé `city_id` |

---

## 🕸️ Étape 3 - Pourquoi Neo4j pour les Recommandations ?

Modèle de graphe cible :

```text
(:City {city_id, name})-[:STRONG_IN]->(:Criterion {name})
(:City)-[:SIMILAR_TO {score}]->(:City)
```

* Une ville possède une relation `:STRONG_IN` vers chaque `:Criterion` où son score est $\ge 7.0$.
* Deux villes partageant des critères forts sont reliées par `:SIMILAR_TO` avec un score proportionnel au nombre de forces communes.
* En Cypher, trouver les villes similaires ET la liste exacte des critères partagés se fait en **une seule traversée de graphe**.

---

## 📦 Livrable attendu (1 fichier Markdown par équipe)

1. **Modèle de document JSON** d'une ville dans `db.cities` (avec `scores` imbriqués) et d'un avis dans `db.reviews`.
2. **Justification Embedding vs Referencing** (2 arguments techniques pour chaque choix).
3. **Schéma du graphe Neo4j** (nœuds, propriétés, relations).
4. **Contrat de gouvernance** : quel est l'identifiant pivot commun entre `db.cities`, `db.reviews` et `(:City)` dans Neo4j ?
