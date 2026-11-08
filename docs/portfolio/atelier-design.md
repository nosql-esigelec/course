---
title: Atelier design Portfolio
---

# 🧠 Atelier #1  
## Concevoir un Portfolio Data-Driven

**TD – Séance de design**

> Aujourd’hui : pas de code  
> Aujourd’hui : on pense **architecture data**

---

## 🎯 Objectif de la séance

À la fin de cet atelier, vous devez être capables de :

- identifier les **bonnes entités**
- raisonner en **usages et requêtes**
- décider **où vivent les données**
- justifier vos choix MongoDB (*Embedding* / *Referencing*) / Neo4j

👉 Vous construisez la **spécification** du Portfolio : elle alimente directement `ARCHITECTURE.md` (Jalon 1).

---

## 🧩 Règles du jeu

1. On commence par le **besoin**, pas par la techno  
2. Chaque choix doit être **justifié par un usage ou une requête**
3. Il n’y a pas *une* bonne réponse  
4. Il y a des **choix faibles** et des **choix solides**

---

## 🎬 Mise en situation

> Vous postulez à un stage / une alternance / un CDI  
>  
> Le recruteur a **45 secondes**

### Question
**Qu’est-ce qu’il doit comprendre de vous ?**

---

## 🧠 Brainstorm collectif

Donnez-moi des éléments qu’un bon portfolio doit montrer.

👉 On liste. On ne trie pas encore.

---

## 🔍 Penser “data”

Maintenant, on parle en langage **data engineer** :

### Question
**Quelles “choses” doit-on stocker dans le système ?**

---

## ✍️ Exercice - Inventaire de données

### En binômes (2 min)
Listez **10 choses** qui existent dans un portfolio.

### Puis mise en commun

Posez-vous ces questions :

- qu’est-ce qui a une date ?
- qu’est-ce qui est une liste ?
- qu’est-ce qui a des relations ?
- qu’est-ce qui change souvent ?

---

## 🚧 Stop au scope explosion

On va définir un **MVP**

### Question clé
**Si vous ne gardez que 4 à 6 entités, lesquelles ?**

👉 MVP = version minimale **utile pour postuler**

---

## ✍️ À produire (MVP)

Dans votre Markdown :

```text
MVP :
- Entité 1
- Entité 2
- Entité 3
- Entité 4
```

Tout le reste = backlog.

---

## 🔑 Requêtes avant modèle

Un bon modèle rend les **bonnes requêtes faciles**

### Question

**Qu’est-ce que vous voulez pouvoir demander à votre portfolio ?**

---

## ✍️ Exercice - Requêtes

Partez des requêtes **R1 à R5** de `ARCHITECTURE.md`, puis chaque équipe en ajoute **3 à 5** en langage naturel

Exemples :

* Quels projets prouvent que je maîtrise Python ?
* Quelles compétences ai-je utilisées dans plusieurs projets ?

---

## ⚖️ Vos requêtes = votre contrat

> Si votre modèle ne rend pas ces requêtes simples,
> alors le modèle est mauvais.

Gardez vos requêtes sous les yeux pour la suite.

---

## 🧱 Nature des données

On va maintenant classer les données selon leur **nature**

### Trois catégories

1. **Borné, lu avec son parent** (ex. les formations d'un candidat)
2. **Volumineux, autonome ou partagé** (ex. une fiche projet à plusieurs auteurs)
3. **Relations & parcours** (ex. compétences communes, projets similaires)

---

## 🤔 Questions de tri

* Combien d'éléments au maximum ? (cardinalité **bornée** ou non)
* Est-ce qu'on le lit **toujours avec son parent** ?
* Est-ce qu'il est **partagé** entre plusieurs documents ?
* Est-ce que la valeur vient surtout des **liens** (traversées sur plusieurs niveaux) ?

---

## 💡 Conséquence logique

Sans encore décider :

* Borné, lu avec son parent → **MongoDB, Embedding** (imbriqué dans le document parent)
* Volumineux, autonome, partagé → **MongoDB, Referencing** (collection dédiée + slug)
* Relations & parcours → **Neo4j**

👉 La techno découle du besoin.

---

## 🏗️ Décision d’architecture

Maintenant, vous tranchez.

### Pour chaque techno :

* Qu’est-ce qu’on y stocke ?
* Pourquoi cette techno est la meilleure ici ?

---

## ❓ Questions de challenge (à anticiper)

* Pourquoi pas tout imbriqué dans `candidats` ? (limite de 16 Mo, projets partagés)
* Pourquoi pas tout en MongoDB, avec `$lookup` / `$graphLookup` ?
* Pourquoi pas tout dans Neo4j ?
* Quel est le coût de cette architecture ?
* Quel est le bénéfice fonctionnel concret ?

---

## 🔗 Contrat entre les bases

Avoir plusieurs bases = avoir des règles claires

### Questions clés

* Où vit l’identité d’un objet ?
* Où vit la description longue ?
* Où vivent les relations ?
* Quel identifiant commun utilisez-vous ?

---

## ✍️ À produire - Gouvernance

Dans votre Markdown :

```text
- Source de vérité des entités :
- Source de vérité du contenu :
- Source de vérité des relations :
- Identifiant commun :
- 2 règles de cohérence :
```

---

## 🧠 Architecture globale

> ✏️ Dessinez-la dès maintenant à plusieurs sur [Excalidraw](https://excalidraw.com) (*Live collaboration*) : ce schéma deviendra la section 1 de `ARCHITECTURE.md` et le cœur de votre soutenance.

### Question clé

**Quel est le rôle du backend Python ?**

* orchestration
* agrégation
* exposition
* cohérence globale

---

## ✍️ À produire - Architecture

```text
- Rôle du backend :
- Flux entre les bases :
- Ce que chaque base ne fait PAS :
```

---

## 🎤 Mini-restitution

Chaque groupe (2 min) présente :

* son MVP
* 3 requêtes clés
* sa répartition MongoDB (*Embedding* / *Referencing*) / Neo4j
* 1 justification forte

👉 On évalue le **raisonnement**, pas le design parfait.

---

## 📦 Livrable attendu

Vos notes alimentent directement les sections de **`ARCHITECTURE.md`** de votre dépôt Portfolio :

1. MVP (4–6 entités) → §3 et §4
2. Requêtes clés → §2
3. Répartition MongoDB (*Embedding* / *Referencing*) / Neo4j + justification → §3 et §4
4. Contrat de gouvernance (slugs pivots) → §5
5. Architecture globale → §1

Le contrat d'API correspondant se rédige ensuite dans **`API_ROUTES.md`**.

---
