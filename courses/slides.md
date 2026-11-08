---
theme: dracula
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Bases de données NoSQL
---

# Bases de données NoSQL


---
layout: two-cols-header
---


# Qui suis-je?

- 🧑🏾 **Nom**: Brice FOTZO
- 🌍 **Origine**: Bafoussam, Cameroun
- 🎓 **Formation**: Ingénieur Généraliste(BDTN) - ESIGELEC Rouen

> Parcours Data & AI
- Analytics Engineer - **Apprenti** @ Renault
- Data Enigneer - CDI @ Starclay
- Tech Lead Data - CDI @ HephIA
- Tech Lead Data - CDI @ Servier
- Intervenant - CDD @ ESIGELEC Rouen/Poitiers

> Engagements Communautaires
- Data Engineer - **Volunteer** @ Validalab(DFG)
- MUG Leader Paris - **Volunteer** @ MongoDB
- Créateur de contenu @ LinkedIn, Medium
- Créateur de Serial Techos

---
layout: default
---

# Et vous?
## Faisons connaissance
<div class="mr-4 mt-6">
  <img src="/images/etvous.png"/>
</div>
---
layout: two-cols-header
---

# Plan du module


::left::
- **Introduction au NoSQL** 
  - Pourquoi NoSQL ?
  - Théorème CAP
  - Types de bases NoSQL
  - Comparaison SQL vs NoSQL

- **MongoDB** 
  - Introduction et concepts
  - Structure des données
  - Opérations CRUD
  - Requêtes avancées
  - Indexation et modélisation

::right::

- **Neo4j** 
  - Base de données orientée graphe
  - Langage Cypher
  - Modélisation de graphes
  - Cas d'utilisation

- **Travaux Pratiques** - 
  - Exercices MongoDB
  - Exercices Neo4j
  - Mise en pratique

---
layout: two-cols-header
---

# Organisation du module (3 Jours)

::left::
**Jour 1 (Lun 09/11 : 9h-12h & 13h30-17h30)**
  - **09h00 – 11h00 (2h CM)** : Panorama NoSQL, MongoDB & Neo4j
  - **11h00 – 12h00 (1h TP)** : Enrôlement GitHub & Setup Docker `SmartCity`
  - **13h30 – 17h30 (4h TP)** : Design & Sprints `SmartCity` *(Notebooks en sandbox)*
  - **Intersession J1 -> J2** : Finir les 4 Sprints `SmartCity` (`200/200`)

::right::

**Jour 2 (Lun 16/11 : 9h-12h & 14h-17h — 100% TP)**
  - **09h00 – 12h00** : System Design `Portfolio` (`ARCHITECTURE.md` & `API_ROUTES.md`)
  - **14h00 – 15h30** : **Soutenances System Design** (Jalon 1 — 30%)
  - **15h30 – 17h00** : Dev Backend d'équipe & Frontends individuels

**Jour 3 (Ven 20/11 : 9h-12h & 14h-17h — 100% TP)**
  - **09h00 – 12h00** : Intégration finale Backend + 4 Frontends personnels
  - **14h00 – 17h00** : **Démonstrations Live** des Portfolios (Jalon 2 — 70%)

---
layout: two-cols-header
---

# Objectifs d'apprentissage

::left::

- **Compétences visées**:
   - Maîtriser les différences entre SQL et NoSQL
   - Choisir les BDD adaptées à un besoin
   - Manipuler des BDD dans une app *Python*
   - Déployer des bases de données NoSQL
   - Modéliser efficacement en NoSQL


::right::
- **Technologies et outils**:
   - BDD: `MongoDB`, `Neo4j`
   - Virtualization: `Docker`
   - Code: `Python`
   - Cloud: `MongoDB Atlas`, `Neo4j Aura`



---
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Introduction au NoSQL
## Au-delà du relationnel

---
layout: two-cols-header
---

# Qu'est-ce que le NoSQL ?

::left::

<div class="mb-6">

### Origine
**11 juin 2009** à San Francisco
- Meetup organisé par Johan Oskarsson
- Émergence d'un nouveau paradigme

</div>

<div>

### Définitions
- **No SQL** : N'utilisent pas un modèle relationnel (ni le langage SQL)
- **Not only SQL** : Bases non relationnelles complémentaires

</div>

::right::

<div>

### Caractéristiques principales
- ✅ Open source
- ✅ Conçus pour des clusters puissants
- ✅ Basés sur les besoins du web au 21ème siècle
- ✅ Pas de schéma fixe
- ✅ Permet l'ajout de champs sans contrôles

</div>

---
layout: default
---

# Évolution historique

<div class="grid grid-cols-3 gap-4">

<div>

### 1970-2000
**Ère des SGBD traditionnels**
- Domination des bases relationnelles
- SQL comme standard
- Oracle, MySQL, PostgreSQL

</div>

<div>

### 2000-2010
**Émergence du NoSQL**
- Bulle internet
- Papiers de recherche (Google, Facebook, IBM)
- BDD open source (MongoDB, CouchDB, Neo4j, Redis, Cassandra, HBase, Riak)

</div>

<div>

### 2010-Aujourd'hui
**Ère du Cloud DBaaS**
- MongoDB Atlas
- AWS DynamoDB
- Google Cloud Firestore
- Azure Cosmos DB
- Cloudant

</div>

</div>

---
layout: two-cols-header
---

# Pourquoi NoSQL ?

::left::

<div class="mb-6">

### Limites du SQL
- Schéma rigide
- Scalabilité verticale
- Performances avec grands volumes
- Structures complexes
- Coût des jointures

</div>

<div>

### Besoins modernes
- Données non structurées
- Scalabilité horizontale
- Haute disponibilité
- Temps réel
- Agilité de développement

</div>

::right::

```mermaid
graph TB
    A[Challenges] --> B[Volume]
    A --> C[Vélocité]
    A --> D[Variété]
    B --> E[Big Data]
    C --> E
    D --> E
    E --> F[NoSQL]
```

---
layout: default
---

# Le théorème CAP

<div class="grid grid-cols-3 gap-4">

<div>

### Cohérence
- Tous les nœuds voient les mêmes données
- Lectures cohérentes
- Transactions ACID

</div>

<div>

### Disponibilité
- Chaque requête reçoit une réponse
- Sans erreur
- Sans garantie de fraîcheur

</div>

<div>

### Tolérance au partitionnement
- Le système continue de fonctionner
- Malgré les pertes de messages
- Ou pannes réseau

</div>

</div>

<div class="mt-8">

```mermaid
graph TD
    C[Cohérence] --- CA[MongoDB]
    C --- CP[Redis]
    A[Disponibilité] --- CA
    A --- AP[Cassandra]
    P[Partitionnement] --- CP
    P --- AP
```

</div>

---
layout: two-cols-header
---

# Types de bases NoSQL

::left::

<div class="mb-6">

### Document (MongoDB)
```json
{
  "id": 1,
  "nom": "Dupont",
  "adresses": [
    {
      "type": "domicile",
      "ville": "Paris"
    },
    {
      "type": "travail",
      "ville": "Lyon"
    }
  ]
}
```

</div>

<div>

### Clé-valeur (Redis)
```bash
SET user:1:nom "Dupont"
SET user:1:email "dupont@mail.com"
HSET user:1 nom "Dupont" email "dupont@mail.com"
```

</div>

::right::

<div class="mb-6">

### Colonnes (Cassandra)
```sql
CREATE TABLE users (
  user_id uuid,
  year int,
  month int,
  events map<timestamp, text>,
  PRIMARY KEY ((user_id), year, month)
);
```

</div>

<div>

### Graphe (Neo4j)
```cypher
CREATE (u:User {name: 'Dupont'})
CREATE (p:Post {title: 'NoSQL'})
CREATE (u)-[:AUTHORED]->(p)
```

</div>

---
layout: two-cols-header
---

# Caractéristiques des BDD NoSQL

::left::

<div class="mb-4">

### 🌐 Communautés impliquées et actives
- Proviennent de l'Open Source ou ont une version Open Source
- Support des communautés fondamental pour la croissance
- **Exemples** :
  - MongoDB : 858 contributeurs
  - Cassandra : 472 contributeurs
  - Redis : 775 contributeurs

</div>

<div class="mb-4">

### 📊 Passage à l'échelle (Scalabilité)

**Scalabilité Horizontale** ✅
- Ajout de serveurs de même capacité
- Ex: 8 serveurs 2vCPUs/4Go
- Approche privilégiée par NoSQL

**Scalabilité Verticale** ❌
- Augmentation de la puissance d'un serveur
- Plus coûteuse et limitée

</div>

::right::

<div class="mb-4">

### ✅ Disponibilité garantie
- Serveur unique : Point de défaillance unique
- Cluster de serveurs : Réplication des données
- Haute disponibilité native

</div>

<div class="mb-4">

### ☁️ Cloud Ready et coûts réduits
- Architectures Cloud natives
- Paradigme Cloud intégré
- Serveurs standards, open source
- Implémentation peu coûteuse

**Exemple de coût** :
- MongoDB Enterprise : **0$**
- Oracle RAC : **$47,500** par unité

</div>

<div class="mb-4">

### ⚡ Hautes performances
- ⏱️ Réponse rapide
- 👥 Haute concurrence
- Nombreux utilisateurs simultanés

</div>

<div>

### 🔄 Flexibilité
- Schéma flexible : Modification à la volée
- Types de données variés
- Indexage spécifique
- Dénormalisation acceptée

</div>




---
layout: default
---

# Comparaison SQL vs NoSQL

<div class="grid grid-cols-2 gap-4">

<div>

### SQL
- Schéma fixe
- Relations
- Transactions ACID
- Jointures
- Scalabilité verticale
- Requêtes complexes
- Cohérence forte

</div>

<div>

### NoSQL
- Schéma flexible
- Documents imbriqués
- BASE (Basic Availability)
- Dénormalisation
- Scalabilité horizontale
- Requêtes simples
- Cohérence éventuelle

</div>

</div>

<div class="mt-6">

### Critères de choix
1. Nature des données (structurées vs non structurées)
2. Volume et croissance prévue
3. Patterns d'accès (lectures vs écritures)
4. Besoins en cohérence
5. Expertise de l'équipe

</div>

---
layout: two-cols-header
---

# Cas d'usage

::left::

<div class="mb-4">

### Applications idéales
- Réseaux sociaux
- IoT / Big Data
- Logging
- E-commerce
- Temps réel
- Contenu mobile

</div>

<div>

### Exemples concrets
- Facebook : Cassandra
- LinkedIn : MongoDB
- Twitter : Redis
- Amazon : DynamoDB

</div>

::right::

```mermaid
graph TB
    A[Cas d'usage] --> B[Temps réel]
    A --> C[Big Data]
    A --> D[Mobile]
    B --> E[Redis]
    B --> F[MongoDB]
    C --> G[Cassandra]
    C --> H[HBase]
    D --> F
    D --> I[CouchDB]
```

---
layout: default
---

# Testons nous un peu
## Connectez-vous à ce wooclap
<div class="mr-4 mt-6">
  <img src="/images/wooclap2.png"/>
</div>

---
layout: cover
---

# MongoDB
## Une base de données orientée document

---
layout: default
---

# Qu'est-ce que MongoDB ?

### Caractéristiques principales
- Base de données NoSQL orientée document
- Documents au format BSON (Binary JSON)
- Schéma flexible et dynamique
- Scalabilité horizontale native
- Haute disponibilité avec la réplication

### Architecture
- Collections ≈ Tables en SQL
- Documents ≈ Lignes en SQL
- Champs ≈ Colonnes en SQL
- Index supportés
- Pas de jointures natives

---
layout: two-cols-header
---

# Structure des données

::left::

### Document BSON
```json
{
  "_id": ObjectId("5f7d3"),
  "nom": "Dupont",
  "age": 30,
  "adresses": [
    {
      "type": "domicile",
      "ville": "Paris",
      "code_postal": "75001"
    },
    {
      "type": "travail",
      "ville": "Lyon",
      "code_postal": "69001"
    }
  ],
  "tags": ["VIP", "Premium"]
}
```

::right::

### Types de données
- Strings
- Numbers (Integer, Float, Decimal)
- Dates
- Boolean
- Arrays
- Embedded Documents
- ObjectId
- Null
- Binary Data
- Regular Expression

---
layout: two-cols-header
---

# Opérations CRUD

::left::

### Create
```javascript
// Insérer un document
db.clients.insertOne({
  nom: "Dupont",
  age: 30
})

// Insérer plusieurs documents
db.clients.insertMany([
  { nom: "Martin", age: 25 },
  { nom: "Bernard", age: 35 }
])
```

### Read
```javascript
// Trouver tous les clients
db.clients.find()

// Avec filtre
db.clients.find({
  age: { $gt: 30 }
})
```

::right::

### Update
```javascript
// Modifier un document
db.clients.updateOne(
  { nom: "Dupont" },
  { $set: { age: 31 } }
)

// Modifier plusieurs documents
db.clients.updateMany(
  { age: { $lt: 30 } },
  { $set: { statut: "jeune" } }
)
```

### Delete
```javascript
// Supprimer un document
db.clients.deleteOne({
  nom: "Dupont"
})

// Supprimer plusieurs documents
db.clients.deleteMany({
  age: { $lt: 25 }
})
```

---
layout: default
---

# Requêtes avancées

### Opérateurs de comparaison
```javascript
{
  age: { $gt: 25 },        // plus grand que
  prix: { $lte: 100 },     // plus petit ou égal
  statut: { $ne: "inactif" }, // différent de
  tags: { $in: ["VIP", "Premium"] } // dans la liste
}
```

### Opérateurs logiques
```javascript
{
  $and: [
    { age: { $gt: 25 } },
    { ville: "Paris" }
  ],
  $or: [
    { statut: "VIP" },
    { points: { $gt: 100 } }
  ]
}
```

---
layout: two-cols-header
---

# Indexation avec MongoDB

::left::

### Types d'index
- Single Field Index
- Compound Index
- Text Index
- Geospatial Index
- ...

### Création d'index
```javascript
// Index simple
db.clients.createIndex({ nom: 1 })

// Index composé
db.clients.createIndex(
  { ville: 1, age: -1 }
)

// Index unique
db.clients.createIndex(
  { email: 1 },
  { unique: true }
)
```

::right::

### Bonnes pratiques
- Index sur les champs fréquemment recherchés
- Attention aux index composés : ordre important
- Éviter la sur-indexation
- Utiliser explain() pour analyser
- Index en arrière-plan pour la production

### Analyse des index
```javascript
// Analyser une requête
db.clients.find({
  ville: "Paris"
}).explain("executionStats")

// Liste des index
db.clients.getIndexes()

// Statistiques d'index
db.clients.stats()
```

---
layout: two-cols-header
---

# Cas d'utilisation de MongoDB

::left::

### Idéal pour
- Applications web modernes
- Contenu varié et évolutif
- Données semi-structurées
- Besoin de scalabilité horizontale
- Développement agile
- Applications temps réel

::right::

### Exemples concrets
1. **E-commerce**
   - Catalogues de produits
   - Paniers utilisateurs
   - Historique des commandes

2. **Applications mobiles**
   - Profils utilisateurs
   - Contenu généré par les utilisateurs
   - Données de géolocalisation

3. **Analytics**
   - Logs d'événements
   - Données IoT
   - Métriques en temps réel

---
layout: two-cols-header
---

# Modélisation des données

::left::

### Patterns de conception
- Embedded Documents
```javascript
{
  _id: 1,
  item: "Xbox Series X",
  manufacturer: {
    name: "Microsoft",
    address: "Redmond, WA",
    phone: "123-456-7890"
  }
}
```

- References
```javascript
{
  _id: 1,
  item: "Xbox Series X",
  manufacturer_id: 123
}
```

::right::

### Bonnes pratiques
- Privilégier l'embedding pour les relations 1:1
- Utiliser les références pour les relations N:M
- Dénormaliser stratégiquement
- Limiter la taille des documents
- Concevoir pour les cas d'utilisation

### Anti-patterns
- Jointures côté application excessive
- Documents trop profonds
- Arrays non bornés
- Références en cascade
---
layout: default
---

# Testons nous un peu
## Connectez-vous à ce wooclap
<div class="mr-4 mt-6">
  <img src="/images/wooclap2.png"/>
</div>

---
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# MongoDB - Innovations 2025
## Les dernières avancées qui transforment le NoSQL

---
layout: two-cols-header
---

# MongoDB 8.2 - Dernière version

::left::

<div class="mb-4">

### 🚀 Version actuelle : **MongoDB 8.2**
Sortie récente avec des fonctionnalités majeures

</div>

<div class="mb-4">

### Nouveautés principales

**Search & Vector Search Community** 🔍
- Recherche full-text native
- Vector Search dans Community Edition
- Capacités IA pour tous

**Hybrid Search** 🔀
- Stage `$scoreFusion` pour recherche hybride
- Combinaison texte + vecteurs
- Pertinence améliorée

</div>

::right::

<div class="mb-4">

**Queryable Encryption amélioré** 🔐
- Requêtes prefix, suffix, substring
- Champs chiffrés interrogeables
- Sécurité maximale sans compromis

**Améliorations techniques** ⚡
- `$currentDate` avec aggregate()
- Métriques disk usage standardisées
- Performance optimisée

</div>

<div class="mt-4 p-4 bg-green-900 rounded">

💡 **MongoDB 8.2** apporte des fonctionnalités Atlas vers les déploiements self-managed

</div>

---
layout: two-cols-header
---

# Queryable Encryption
## Sécurité maximale des données

::left::

<div class="mb-4">

### Chiffrement interrogeable
- **At rest** : Données chiffrées au repos
- **In transit** : Données chiffrées en transit
- **In use** : Données utilisables chiffrées

</div>

<div>

### Cas d'usage
- Données médicales (HIPAA)
- Informations bancaires (PCI-DSS)
- Données personnelles (RGPD)
- Secteur public et défense

### Nouveauté 8.2
```javascript
// Recherche sur champs chiffrés
db.patients.find({
  nom: { $regex: "^Dup" }  // Prefix search
})
```

</div>

::right::

<div class="flex items-center justify-center h-full">
  <img src="/images/encryption.png" class="rounded-lg shadow-lg"/>
</div>

---
layout: two-cols-header
---

# Vector Search & RAG
## MongoDB et l'Intelligence Artificielle

::left::

<div class="mb-6">

### Architecture RAG complète
- **Vector Search** : Recherche sémantique
- **Embeddings** : Vectorisation de données
- **Reranking** : Optimisation des résultats
- **LLM Integration** : Intégration modèles IA

</div>

<div>

### Cas d'usage IA
- Chatbots intelligents
- Moteurs de recommandation
- Recherche sémantique
- Assistants virtuels
- Analyse de documents

</div>

::right::

<div class="flex items-center justify-center h-full">
  <img src="/images/pipeline.png" class="rounded-lg shadow-lg"/>
</div>

---
layout: default
---

# Vector Search en pratique

### Créer un index vectoriel
```javascript
db.products.createSearchIndex({
  name: "vector_index",
  type: "vectorSearch",
  definition: {
    fields: [{
      type: "vector",
      path: "embedding",
      numDimensions: 1536,
      similarity: "cosine"
    }]
  }
})
```

### Recherche vectorielle
```javascript
db.products.aggregate([
  {
    $vectorSearch: {
      index: "vector_index",
      path: "embedding",
      queryVector: [0.123, 0.456, ...], // 1536 dimensions
      numCandidates: 100,
      limit: 10
    }
  },
  {
    $project: {
      name: 1,
      description: 1,
      score: { $meta: "vectorSearchScore" }
    }
  }
])
```

---
layout: two-cols-header
---

# Agents IA avec MongoDB
## Memory & State Management

::left::

<div class="mb-6">

### Architecture Agent-Database
**Cycle de l'Agent**
1. **Perceive** : Perception de l'environnement
2. **Decide** : Prise de décision
3. **Act** : Action et exécution

**Rôle de MongoDB**
- Memory & State persistant
- Contexte et historique
- Contraintes et règles
- Capture des résultats

</div>

::right::

<div class="flex items-center justify-center h-full">
  <img src="/images/agents.png" class="rounded-lg shadow-lg"/>
</div>

---
layout: default
---

# Pourquoi MongoDB pour l'IA ?

<div class="grid grid-cols-2 gap-6">

<div>

### Avantages techniques
- **Schéma flexible** : Adaptation rapide aux données IA
- **Vector Search natif** : Pas besoin de base vectorielle séparée
- **Performance** : Requêtes vectorielles rapides
- **Scalabilité** : Gestion de millions de vecteurs
- **Unified Platform** : Données + Vecteurs + Métadonnées

</div>

<div>

### Use cases concrets
1. **RAG (Retrieval-Augmented Generation)**
   - Documentation technique
   - Support client automatisé

2. **Agents autonomes**
   - Memory à long terme
   - Context management

3. **Recommandation**
   - Similar items
   - Personnalisation

4. **Analyse sémantique**
   - Clustering de documents
   - Classification automatique

</div>

</div>

<div class="mt-6 p-4 bg-blue-900 rounded">

🔥 **MongoDB se positionne comme la base de données de référence pour l'IA moderne**

</div>

---
layout: iframe
url: https://app.wooclap.com/NFMFFF/questionnaires/690a8cebb1bf86ff9eac1763
---
---
layout: cover
# background: './images/pont.png'
---

# Neo4j
## Base de données orientée graphe

---
layout: two-cols-header
# image: '/images/ponts.png'
---
# Le problème des 7 ponts

::left::

**Ponts de Koenigsberg**

<div class="mr-4 mt-6">
<img src="/images/ponts.png"/>
</div>

::right::

**Vue simplifiée**

<div class="mr-4 mt-6">
  <img src="/images/ponts-simple.png"/>
</div>

---
layout: default
# image: '/images/ponts.png'
---
# Le problème des 7 ponts





<div class="mr-4 mt-6">
  <img src="/images/penser.png"/>
</div>

---
layout: default
---

# Qu'est-ce que Neo4j ?


### Caractéristiques principales
- Base de données orientée graphe
- Modélisation naturelle des relations
- Langage de requête Cypher
- ACID compliant
- Très performant pour les données connectées

### Architecture
- Nœuds (Nodes) ≈ Entités
- Relations (Relationships) ≈ Connexions
- Propriétés ≈ Attributs
- Labels ≈ Types de nœuds
- Types de relations

---
layout: two-cols-header
---

# Structure d'un graphe

::left::

### Éléments de base
```mermaid
graph LR
    A[Personne:Alice] -->|CONNAIT| B[Personne:Bob]
    B -->|TRAVAILLE_POUR| C[Entreprise:Tech]
    A -->|AIME| D[Produit:Phone]
```

### Types de nœuds (Labels)
- Personne
- Entreprise
- Produit
- Lieu
- Événement

::right::

### Relations et propriétés
```cypher
CREATE (p:Personne {
  nom: "Alice",
  age: 30
})-[r:TRAVAILLE_POUR {
  depuis: "2020",
  poste: "Développeur"
}]->(e:Entreprise {
  nom: "Tech Corp",
  secteur: "IT"
})
```

---
layout: two-cols-header
---

# Langage Cypher

::left::

### Création de nœuds
```cypher
// Créer un nœud
CREATE (p:Personne {
  nom: "Alice",
  age: 30
})

// Créer une relation
MATCH (a:Personne {nom: "Alice"})
MATCH (b:Personne {nom: "Bob"})
CREATE (a)-[r:CONNAIT]->(b)
```

### Lecture
```cypher
// Trouver des nœuds
MATCH (p:Personne)
WHERE p.age > 25
RETURN p

// Avec relations
MATCH (p:Personne)-[r:TRAVAILLE_POUR]->(e:Entreprise)
RETURN p, r, e
```

::right::

### Modification
```cypher
// Mettre à jour un nœud
MATCH (p:Personne {nom: "Alice"})
SET p.age = 31

// Modifier une relation
MATCH ()-[r:TRAVAILLE_POUR]->()
SET r.poste = "Senior Dev"
```

### Suppression
```cypher
// Supprimer un nœud
MATCH (p:Personne {nom: "Alice"})
DELETE p

// Supprimer une relation
MATCH ()-[r:CONNAIT]->()
DELETE r
```

---
layout: default
---

# Requêtes avancées

### Navigation dans le graphe
```cypher
// Chemins de longueur variable
MATCH (a:Personne {nom: "Alice"})-[*1..3]->(b)
RETURN b

// Plus court chemin
MATCH p=shortestPath(
  (a:Personne)-[*]->(b:Personne)
)
WHERE a.nom = "Alice" AND b.nom = "Charlie"
RETURN p
```

### Agrégation et patterns complexes
```cypher
// Groupement et comptage
MATCH (p:Personne)-[:TRAVAILLE_POUR]->(e:Entreprise)
RETURN e.nom, count(p) as nb_employes
ORDER BY nb_employes DESC

// Pattern complexe
MATCH (p1:Personne)-[:CONNAIT]->(p2:Personne)-[:TRAVAILLE_POUR]->(e:Entreprise)
WHERE p1.nom = "Alice" AND e.secteur = "IT"
RETURN DISTINCT p2.nom as contacts_it
```

---
layout: two-cols-header
---

# Modélisation avec Neo4j

::left::

### Bonnes pratiques
1. **Labels**
   - Utilisez des labels multiples
   - Hiérarchie de labels
   - Nommage clair

2. **Relations**
   - Direction significative
   - Nommage explicite
   - Propriétés utiles

3. **Propriétés**
   - Attributs atomiques
   - Indexation stratégique
   - Pas de tableaux complexes

::right::

### Patterns communs
```mermaid
graph TD
    A[User] -->|POSTED| B[Post]
    B -->|TAGGED| C[Topic]
    A -->|FOLLOWS| A
    B -->|REPLY_TO| B
```

### Anti-patterns
- Relations sans direction
- Propriétés redondantes
- Sur-utilisation des labels
- Relations génériques

---
layout: two-cols-header
---

# Indexation et Performances

::left::

### Types d'index
- Indexes par label/propriété
- Composite indexes
- Full-text indexes
- Range indexes

### Création d'index
```cypher
// Index simple
CREATE INDEX FOR (p:Personne)
ON (p.nom)

// Index composé
CREATE INDEX FOR (p:Personne)
ON (p.nom, p.age)

// Index full-text
CREATE FULLTEXT INDEX personneSearch
FOR (p:Personne)
ON EACH [p.nom, p.description]
```

::right::

### Optimisation
1. **Stratégies d'indexation**
   - Index sur les propriétés filtrées
   - Index sur les propriétés de jointure
   - Éviter la sur-indexation

2. **Analyse des performances**
   ```cypher
   PROFILE
   MATCH (p:Personne)-[:CONNAIT]->()
   RETURN p.nom, count(*) as relations
   ```

3. **Monitoring**
   - Utilisation de la mémoire
   - Temps de réponse
   - Cache hits/misses

---
layout: default
---

# Cas d'utilisation de Neo4j

### Idéal pour
- Réseaux sociaux
- Systèmes de recommandation
- Détection de fraude
- Graphes de connaissances
- Gestion des identités
- Analyse d'impact

### Exemples concrets
1. **Réseaux sociaux**
```cypher
// Trouver les amis des amis
MATCH (p:Personne {nom:"Alice"})-[:CONNAIT]->(ami)-[:CONNAIT]->(amiDami)
WHERE NOT (p)-[:CONNAIT]->(amiDami)
RETURN DISTINCT amiDami.nom as suggestions
```

2. **Recommandations**
```cypher
// Produits fréquemment achetés ensemble
MATCH (p:Produit)<-[:A_ACHETE]-(c:Client)-[:A_ACHETE]->(autreProduit:Produit)
WHERE p.id = "123"
RETURN autreProduit.nom, count(*) as frequence
ORDER BY frequence DESC
LIMIT 5
```

3. **Détection de fraude**
```cypher
// Identifier les cycles de transactions suspects
MATCH chemin = (c:Compte)-[:TRANSFERT*3..5]->(c)
WHERE ALL(r IN relationships(chemin) WHERE r.montant > 10000)
RETURN chemin
```
---
layout: iframe
url: https://app.wooclap.com/NFMFFF/questionnaires/690a8cebb1bf86ff9eac1764
---

---
layout: cover
---


# Travaux Pratiques
## NoSQL en pratique - Mise en application

---
layout: default
---

# Place à la Pratique : SmartCity Explorer !

### Étape 1 (11h00 – 12h00) : Enrôlement & Setup Docker
- Former **8 équipes de 4** et ouvrir une Issue d'inscription sur **`github.com/nosql-esigelec/course`**
- Cloner le dépôt d'équipe `smartcity`, lancer `uv sync --all-packages` et `docker compose up -d`

### Étape 2 (13h30 – 17h30) : Design & Sprints 1 à 4
- **Atelier Design** : Arbitrage *Embedding* (`cities` + `scores`) vs *Referencing* (`reviews`) + Graphe Neo4j
- **Sprints 1 à 4** : Connexions DB -> Seed -> Repositories Mongo/Neo4j -> Services (`uv run pytest -v`)
- **Sandbox & Aide** : Notebooks (`mongodb.ipynb`, `neo4j.ipynb`), `AIDE-MEMOIRE.md` & Neo4j Browser (`localhost:7474`)

### Intersession (d'ici Lundi 16 Nov)
- Terminer les 4 Sprints (`200/200` sur GitHub Actions) — **Enseignant 100% joignable toute la semaine !**

---
layout: default
---

# Merci !

## Questions ?

**Ressources**
- Documentation MongoDB: https://docs.mongodb.com
- Documentation Neo4j: https://neo4j.com/docs
- Repository GitHub: https://github.com/nosql-esigelec/course

**Contact**
- Email: brice.fotzo@hotmail.com
- LinkedIn: Brice FOTZO
