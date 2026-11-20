---
title: Révision
---

# 📝 Réviser l'examen écrit

Cette page rassemble **tout ce qu'il faut savoir** pour l'écrit, puis des **exercices corrigés** à faire sans ordinateur.
On la parcourt ensemble en séance ; reprenez-la ensuite seuls, crayon en main.

!!! info "Comment se présente l'épreuve"
    - Écrit **sans document**, sur papier.
    - Des **QCM** (une seule bonne réponse), des **vrai ou faux**, et des **requêtes MongoDB et Cypher à lire** : on vous donne les données, vous écrivez ce que la requête renvoie (une liste de valeurs ou un nombre).
    - Vous reportez vos réponses sur une **feuille de réponses**. Pas de points négatifs.

!!! warning "Hors programme de l'écrit"
    Le **pipeline d'agrégation** (`aggregate`, `$group`, `$match`…) et l'**idempotence** (`MERGE`, seed relançable) ne sont **pas** à l'écrit.
    Ils restent essentiels pour SmartCity et le Portfolio.

---

## 1. Les notions NoSQL

### Le théorème CAP

Un système **distribué** ne peut garantir que **deux** de ces trois propriétés à la fois :

| Lettre | Propriété | En une phrase |
| :---: | :--- | :--- |
| **C** | Cohérence (*Consistency*) | Tous les nœuds voient la même donnée au même moment. |
| **A** | Disponibilité (*Availability*) | Chaque requête reçoit une réponse, sans erreur (mais peut-être pas la plus récente). |
| **P** | Tolérance au partitionnement (*Partition tolerance*) | Le système continue de fonctionner malgré une coupure réseau entre nœuds. |

Classement vu en cours :

| Catégorie | Exemples |
| :---: | :--- |
| **CA** | SGBD relationnel sur un seul serveur (PostgreSQL) |
| **CP** | MongoDB, Redis, HBase |
| **AP** | Cassandra, DynamoDB |

!!! tip "À ne pas confondre"
    Le **A** de CAP est la **disponibilité**, pas l'atomicité. L'atomicité, c'est le **A** de ACID (transactions SQL).
    BASE (*Basically Available, Soft state, Eventually consistent*) est la philosophie de nombreuses bases NoSQL : disponibilité d'abord, cohérence « à terme ».

### Passer à l'échelle

- **Scalabilité horizontale** : on **ajoute des serveurs** de même capacité. C'est l'approche privilégiée par le NoSQL.
- **Scalabilité verticale** : on **remplace** le serveur par un plus puissant. Plus cher, et vite limité.

### Les 4 familles NoSQL

| Famille | Exemple | Idéale pour |
| :--- | :--- | :--- |
| **Document** | MongoDB | Objets riches et variables : profils, catalogues, CV |
| **Clé-valeur** | Redis | Cache, sessions, compteurs : accès ultra-rapide par clé |
| **Colonnes** | Cassandra | Très gros volumes d'écritures, séries temporelles, historiques |
| **Graphe** | Neo4j | Relations : réseau social, « amis de mes amis », recommandation |

Caractéristiques communes : **schéma flexible**, **scalabilité horizontale**, **haute disponibilité** (réplication), **hautes performances**, dénormalisation acceptée.

---

## 2. MongoDB

### Vocabulaire

| SQL | MongoDB |
| :--- | :--- |
| Base | Base |
| Table | **Collection** |
| Ligne | **Document** (format BSON) |
| Colonne | **Champ** |

Une collection **n'impose pas de schéma** : deux documents peuvent avoir des champs différents, et un champ peut être **absent** d'un document.

### Lire : `find` et ses options

```javascript
db.films.find({ annee: 2010 })                          // égalité
db.films.find({ note: { $gt: 8 } })                     // >   ($gte : >=, $lt : <, $lte : <=)
db.films.find({ note: { $gte: 8, $lte: 9 } })           // intervalle
db.films.find({ genres: "SF" })                         // le TABLEAU genres CONTIENT "SF"
db.films.find({ annee: { $in: [2010, 2014] } })         // valeur dans une liste
db.films.find({ genres: "SF", annee: { $gt: 2012 } })   // plusieurs critères = ET
db.films.find({ $or: [ { genres: "SF" }, { note: { $gt: 8.6 } } ] })  // OU
db.films.countDocuments({ genres: "SF" })               // renvoie un NOMBRE
```

Projection, tri, limite :

```javascript
db.films.find({}, { titre: 1, _id: 0 })    // n'afficher que titre (et masquer _id)
  .sort({ note: -1 })                       // -1 : décroissant, 1 : croissant
  .skip(0)                                  // sauter N documents (pagination)
  .limit(3)                                 // garder les 3 premiers
```

!!! danger "Le piège des champs absents"
    - `{ oscar: { $ne: true } }` renvoie les documents où `oscar` vaut autre chose que `true` **et ceux qui n'ont pas de champ `oscar`**.
    - `{ oscar: false }` ne renvoie **que** les documents où `oscar` vaut exactement `false`.
    - `{ oscar: null }` renvoie les documents où `oscar` vaut `null` **ou est absent**.

### Écrire

```javascript
db.films.insertOne({ titre: "Dune", annee: 2021 })
db.films.insertMany([ { titre: "A" }, { titre: "B" } ])
db.films.updateOne({ titre: "Dune" }, { $set: { note: 8.0 } })      // modifier un champ
db.films.updateMany({ genres: "SF" }, { $inc: { vues: 1 } })        // incrémenter, sur TOUS les documents filtrés
db.films.updateOne({ titre: "Dune" }, { $push: { genres: "Aventure" } })  // ajouter à un tableau
db.films.deleteOne({ titre: "Dune" })
db.films.deleteMany({ note: { $lt: 5 } })
```

`updateOne` / `deleteOne` agissent sur **le premier** document trouvé ; `updateMany` / `deleteMany` sur **tous**.

### Index

```javascript
db.films.createIndex({ titre: 1 })                    // accélère les recherches sur titre
db.films.createIndex({ annee: 1, note: -1 })          // index composé : l'ordre des champs compte
db.users.createIndex({ email: 1 }, { unique: true })  // interdit deux documents avec le même email
```

Un index accélère les **lectures** mais ralentit un peu les **écritures** : on indexe les champs souvent filtrés ou triés, sans sur-indexer.

### Modéliser : Embedding ou Referencing ?

| | **Embedding** (imbriquer) | **Referencing** (référencer) |
| :--- | :--- | :--- |
| Quoi | Les sous-éléments sont **dans** le document parent | Les sous-éléments sont dans **une autre collection**, avec l'identifiant du parent |
| Quand | `1:1` ou `1:N` **borné**, toujours lu **avec** le parent | `1:N` **non borné** (qui grossit sans fin), `N:M`, ou paginé séparément |
| Exemple | Les 8 scores d'une ville ; les expériences d'un CV | Les milliers d'avis d'une ville ; un projet partagé par plusieurs étudiants |
| Lecture | **1 seule lecture**, pas de jointure | **2 lectures** (ou une jointure explicite) |

!!! tip "Deux règles à retenir"
    - Un document BSON est limité à **16 Mo** : jamais de tableau imbriqué qui grossit sans limite.
    - MongoDB ne fait **pas de jointure automatique** : avec le Referencing, `find()` sur le parent ne renvoie **pas** les documents de l'autre collection.

---

## 3. Neo4j et Cypher

### Le modèle graphe

- **Nœud** : une entité, avec un ou plusieurs **labels** (`:Acteur`, `:Film`) et des **propriétés** (`{nom: "Nolan"}`).
- **Relation** : relie deux nœuds ; elle a **toujours un type** (`:JOUE_DANS`) et **une direction** (`->`), et peut porter des propriétés.

### Lire : `MATCH … RETURN`

```cypher
MATCH (a:Acteur)-[:JOUE_DANS]->(f:Film {titre: "Inception"})   // motif à trouver
WHERE a.nom <> "Page"                                          // filtre
RETURN a.nom                                                   // ce qu'on renvoie
ORDER BY a.nom DESC LIMIT 10
```

| Écriture | Sens |
| :--- | :--- |
| `(a)-[:R]->(b)` | relation de `a` vers `b` (la direction doit correspondre aux données) |
| `(a)<-[:R]-(b)` | relation de `b` vers `a` |
| `(a)-[:R]-(b)` | relation dans **n'importe quel sens** |
| `(a)-[:R]->(x)<-[:R]-(b)` | `a` et `b` sont reliés au **même** nœud `x` |
| `RETURN DISTINCT x.nom` | supprime les doublons |
| `RETURN f.titre, count(a) AS nb` | une ligne par `f.titre`, avec le nombre de `a` |

!!! danger "Compter les lignes renvoyées"
    Cypher renvoie **une ligne par chemin trouvé**. Si deux chemins mènent à la même valeur, elle apparaît **deux fois**, sauf avec `DISTINCT`.
    Méthode sûre : listez tous les chemins qui correspondent au motif, un par ligne, puis appliquez `RETURN` (et `DISTINCT` s'il y en a un).

### Écrire et supprimer

```cypher
CREATE (a:Acteur {nom: "Zendaya"})                          // créer un nœud
MATCH (a:Acteur {nom: "Zendaya"}), (f:Film {titre: "Dune"})
CREATE (a)-[:JOUE_DANS]->(f)                                // créer une relation entre nœuds existants
MATCH (f:Film {titre: "Dune"}) SET f.annee = 2021           // modifier une propriété
MATCH (f:Film {titre: "Dune"}) DETACH DELETE f              // supprimer le nœud ET ses relations
```

`DELETE` seul sur un nœud qui a encore des relations provoque une **erreur** : il faut `DETACH DELETE`.

### Performances

- Toujours préciser le **label** : `MATCH (p:Personne {nom: "Alice"})` ne parcourt que les `Personne`, alors que `MATCH (p {nom: "Alice"})` parcourt **tous** les nœuds de la base.
- Index sur les propriétés filtrées : `CREATE INDEX FOR (p:Personne) ON (p.nom)`.

---

## 4. Architecture polyglotte

Chaque besoin va au moteur le plus adapté, derrière **une seule API** (FastAPI) :

- **MongoDB** pour les documents : fiches, profils, avis.
- **Neo4j** pour les relations : similarité, recommandation, compétences partagées.
- Un **identifiant pivot** (`city_id` dans SmartCity, `slug` dans le Portfolio) désigne la même entité dans les deux bases : c'est lui qui permet de les relier.
- Découpage du backend : **routes** (`api/`) → **services** (logique métier, croisent les bases) → **repositories** (un par base, ne parlent qu'à une base).

---

## 5. Entraînement

Faites chaque exercice **sur papier**, puis ouvrez la correction.

### Vrai ou faux

1. Un système distribué peut garantir à la fois C, A et P.
2. Redis est une base orientée document.
3. `db.films.find({ genres: "SF" })` renvoie aussi les films dont `genres` vaut `["SF", "Drame"]`.
4. `updateOne` modifie tous les documents qui correspondent au filtre.
5. Dans Neo4j, une relation peut ne pas avoir de type.
6. Stocker les commentaires d'un article très populaire dans un tableau imbriqué de l'article est une bonne idée.

??? success "Correction"
    1. **Faux** : au plus deux sur trois.
    2. **Faux** : clé-valeur.
    3. **Vrai** : le filtre teste si le tableau **contient** la valeur.
    4. **Faux** : seulement le premier ; c'est `updateMany` pour tous.
    5. **Faux** : une relation a toujours un type et une direction.
    6. **Faux** : tableau non borné → risque de dépasser 16 Mo ; on référence (collection `commentaires` avec l'identifiant de l'article).

### Lire des requêtes MongoDB

La collection `films` contient exactement ces 5 documents :

| `_id` | `titre` | `annee` | `genres` | `note` | `oscar` |
| :---: | :--- | :---: | :--- | :---: | :---: |
| 1 | "Inception" | 2010 | ["SF", "Action"] | 8.8 | true |
| 2 | "Intouchables" | 2011 | ["Comédie", "Drame"] | 8.5 | *(champ absent)* |
| 3 | "Interstellar" | 2014 | ["SF", "Drame"] | 8.7 | true |
| 4 | "Amélie" | 2001 | ["Comédie", "Romance"] | 8.3 | false |
| 5 | "Dune" | 2021 | ["SF"] | 8.0 | true |

Que renvoie chaque requête ?

```javascript
// M1
db.films.find({ genres: "SF", annee: { $gte: 2014 } })
// M2
db.films.countDocuments({ $or: [ { genres: "Comédie" }, { note: { $gt: 8.6 } } ] })
// M3
db.films.countDocuments({ oscar: { $ne: true } })
// M4
db.films.countDocuments({ oscar: false })
// M5 (dans l'ordre)
db.films.find({}, { titre: 1, _id: 0 }).sort({ note: -1 }).limit(3)
// M6 : combien de documents sont modifiés ?
db.films.updateMany({ genres: "Drame" }, { $set: { long: true } })
```

??? success "Correction"
    - **M1** : Interstellar, Dune (SF **et** année ≥ 2014 ; Inception est de 2010).
    - **M2** : **4** : Intouchables et Amélie (Comédie), Inception (8.8) et Interstellar (8.7).
    - **M3** : **2** : Intouchables (champ absent) et Amélie (`false`).
    - **M4** : **1** : seulement Amélie. Le champ absent ne vaut pas `false`.
    - **M5** : Inception, Interstellar, Intouchables (notes 8.8, 8.7, 8.5).
    - **M6** : **2** : Intouchables et Interstellar.

### Lire des requêtes Cypher

La base contient exactement ces relations (un même nom ou titre désigne toujours le même nœud) :

```text
(:Acteur {nom: "DiCaprio"})     -[:JOUE_DANS]->  (:Film {titre: "Inception"})
(:Acteur {nom: "Page"})         -[:JOUE_DANS]->  (:Film {titre: "Inception"})
(:Acteur {nom: "McConaughey"})  -[:JOUE_DANS]->  (:Film {titre: "Interstellar"})
(:Acteur {nom: "Chastain"})     -[:JOUE_DANS]->  (:Film {titre: "Interstellar"})
(:Acteur {nom: "Chalamet"})     -[:JOUE_DANS]->  (:Film {titre: "Interstellar"})
(:Acteur {nom: "Chalamet"})     -[:JOUE_DANS]->  (:Film {titre: "Dune"})

(:Realisateur {nom: "Nolan"})      -[:REALISE]->  (:Film {titre: "Inception"})
(:Realisateur {nom: "Nolan"})      -[:REALISE]->  (:Film {titre: "Interstellar"})
(:Realisateur {nom: "Villeneuve"}) -[:REALISE]->  (:Film {titre: "Dune"})
```

Que renvoie chaque requête ?

```cypher
// N1
MATCH (a:Acteur)-[:JOUE_DANS]->(:Film {titre: "Interstellar"}) RETURN a.nom
// N2 : combien de lignes ?
MATCH (:Acteur)-[:JOUE_DANS]->(:Film)<-[:REALISE]-(r:Realisateur) RETURN r.nom
// N3 : combien de lignes ?
MATCH (:Acteur)-[:JOUE_DANS]->(:Film)<-[:REALISE]-(r:Realisateur) RETURN DISTINCT r.nom
// N4
MATCH (:Acteur {nom: "Chalamet"})-[:JOUE_DANS]->(:Film)<-[:JOUE_DANS]-(co:Acteur) RETURN co.nom
// N5
MATCH (r:Realisateur)-[:REALISE]->(f:Film) RETURN r.nom, count(f) AS nb ORDER BY nb DESC
// N6 : combien de lignes ?
MATCH (f:Film)-[:JOUE_DANS]->(a:Acteur) RETURN a.nom
// N7 : que se passe-t-il ?
MATCH (f:Film {titre: "Dune"}) DELETE f
```

??? success "Correction"
    - **N1** : McConaughey, Chastain, Chalamet.
    - **N2** : **6** lignes : « Nolan » 5 fois (2 acteurs d'Inception + 3 d'Interstellar) et « Villeneuve » 1 fois.
    - **N3** : **2** lignes : Nolan, Villeneuve.
    - **N4** : McConaughey, Chastain (les autres acteurs d'Interstellar ; personne d'autre ne joue dans Dune).
    - **N5** : Nolan 2, puis Villeneuve 1.
    - **N6** : **0** ligne : la relation va de l'acteur vers le film, pas l'inverse.
    - **N7** : **erreur** : Dune a encore des relations. Il faut `DETACH DELETE`.

### Choisir la bonne modélisation

Pour chaque besoin, Embedding ou Referencing ? Et quelle base (MongoDB ou Neo4j) ?

1. Les 3 adresses de livraison d'un client, affichées sur sa fiche.
2. Les millions de lignes de commande d'un site e-commerce.
3. « Les clients qui ont acheté ce produit ont aussi acheté… ».
4. Les étapes (5 maximum) d'une recette de cuisine.

??? success "Correction"
    1. **Embedding** dans le document client (MongoDB) : peu nombreuses, lues avec le client.
    2. **Referencing** (MongoDB) : collection séparée, volume non borné.
    3. **Neo4j** : c'est un parcours de relations client → produit → client → produit.
    4. **Embedding** (MongoDB) : liste bornée, toujours lue avec la recette.

---

## Pour aller plus loin

- Refaire les [exercices MongoDB](exercices/mongodb.md) et [Neo4j](exercices/neo4j.md), **de tête** puis en vérifiant.
- Relire le [support de cours](https://nosql-esigelec.github.io/course/slides/){ target=_blank } et l'[aide-mémoire](demarrer/aide-memoire.md).
- Relire **votre propre code** SmartCity et Portfolio : chaque `find`, `MATCH` et chaque choix Embedding / Referencing est une question d'examen potentielle.
