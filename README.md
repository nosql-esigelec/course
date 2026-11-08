# 🍃 Bases de Données NoSQL — MongoDB & Neo4j (ESIGELEC Rouen — BDTN)

Bienvenue sur le dépôt central du module **Bases de Données NoSQL** (Dominante *Big Data pour la Transformation Numérique — BDTN*) à l'**ESIGELEC Rouen**.

> ### 🚀 1. Inscription de votre Équipe (1 clic par équipe)
> **34 étudiants → 8 équipes : 6 équipes de 4 et 2 équipes de 5.** Pour générer automatiquement votre dépôt privé d'équipe (`smartcity`) et recevoir vos accès, **un seul membre par équipe** clique sur le lien ci-dessous :  
> 👉 **[Inscrire mon Équipe maintenant](https://github.com/nosql-esigelec/course/issues/new?template=inscription-equipe.yml)**
>
> ### 📊 2. Support de Cours (Web Interactif & PDF toujours à jour)
> - 🌐 **Slides interactives en ligne (GitHub Pages)** : **[https://nosql-esigelec.github.io/course/](https://nosql-esigelec.github.io/course/)**
> - 📄 **Télécharger les slides en PDF (généré automatiquement)** : **[cours-nosql-esigelec.pdf](https://nosql-esigelec.github.io/course/cours-nosql-esigelec.pdf)**

---

## 📅 Planning Officiel des Séances — Salle D1264

> 📌 **Ce tableau est le seul planning de référence** (dates, créneaux, échéances). En cas de doute avec un autre document, c'est ce tableau qui fait foi.

| Journée | Date | Créneau | Format | Programme & Livrables |
| :--- | :--- | :--- | :---: | :--- |
| **Journée 1** | **Lundi 9 Novembre** | **09h00 – 11h00** (2h) | CM (D1264) | **Cours Complet NoSQL, MongoDB & Neo4j** : Théorème CAP, Familles NoSQL, Modélisation Documentaire **MongoDB** (*Embedding* vs *Referencing*, MongoDB 8.2 & IA) & Modélisation Graphe **Neo4j** (*Cypher*). |
| | | **11h00 – 12h00** (1h) | TP (D1264) | **Enrôlement des 8 équipes & Setup Docker `SmartCity`** : Création des dépôts d'équipe en 1 clic, clone, installation `uv` et démarrage des conteneurs MongoDB & Neo4j. |
| | | **13h30 – 17h30** (4h) | TP (D1264) | **Atelier Design & Sprints `SmartCity Explorer` (MongoDB + Neo4j)** :<br>1. Atelier d'architecture ([`brainstorm-smartcity-nosql.md`](./courses/design/brainstorm-smartcity-nosql.md))<br>2. Développement en équipe des **Sprints 1 à 4** (`db/`, `scripts/seed_all.py`, `repositories/`, `services/`) avec en *sandbox* de test : **Neo4j Browser** (`http://localhost:7474`, conteneur SmartCity), [OneCompiler MongoDB](https://onecompiler.com/mongodb) et l'[Aide-Mémoire](./AIDE-MEMOIRE.md).<br>🚨 **Intersession J1 $\rightarrow$ J2** : Terminer les 4 Sprints (`200/200` sur GitHub Actions) avant le **Dimanche 15 Novembre 23h59** *(enseignant 100 % joignable toute la semaine)*. |
| **Journée 2** | **Lundi 16 Novembre** | **09h00 – 12h00** (3h) | TD/TP (D1264) | **🚀 Projet Final [`Portfolio d'Ingénieur Polyglotte`](./courses/design/projet-portfolio-polyglotte.md) — Phase 1 (System Design)** : Conception en équipe du modèle MongoDB (*Embedding* vs *Referencing*) + Graphe de compétences Neo4j, rédaction et `git push` de **`ARCHITECTURE.md`** et **`API_ROUTES.md`** avant 12h00. |
| | | **14h00 – 17h00** (3h) | Soutenance & TP (D1264) | 1. **14h00 – 15h30 : 🎤 Soutenances de System Design (Jalon 1 — 30 %)** : Pitch par chaque équipe de son `ARCHITECTURE.md` & `API_ROUTES.md` et validation par l'enseignant.<br>2. **15h30 – 17h00 : Démarrage du Dev `Portfolio`** : Mise en place du Backend FastAPI unifié d'équipe, du `seed` multi-profils et initialisation des 4 Frontends personnels. |
| **Journée 3** | **Vendredi 20 Novembre** | **09h00 – 12h00** (3h) | TP (D1264) | **⚙️ Sprint Final d'Intégration (Backend d'Équipe + 4 Frontends Individuels)** : Peuplement avec les vraies données des 4 membres, branchement des 4 Frontends sur l'API FastAPI du groupe et répétition générale. |
| | | **14h00 – 17h00** (3h) | Démo Finale (D1264) | **🏆 Démonstrations Live des Portfolios (Jalon 2 — 70 %)** : Démonstration du Backend unifié par chaque équipe (Swagger + MongoDB + Neo4j Browser) suivie de la présentation individuelle des **4 Portfolios**. |

---

## 📚 Guides & Références Indispensables

1. **👉 [Guide de l'Étudiant (`GUIDE-ETUDIANT.md`)](./GUIDE-ETUDIANT.md)** : Configuration Git, récupération de votre dépôt d'équipe, installation de `uv` & Docker, fonctionnement des tests par Sprint et du Projet Final Portfolio.
2. **💡 [Aide-Mémoire (`AIDE-MEMOIRE.md`)](./AIDE-MEMOIRE.md)** : Toutes les commandes essentielles (Git, Docker, `uv`, `pytest`, MongoDB `MQL` / `Motor`, Neo4j `Cypher`).
3. **🧠 Ateliers de Design & Sujets Projets** :
   - [Atelier Design — SmartCity Explorer (Édition 100 % NoSQL)](./courses/design/brainstorm-smartcity-nosql.md)
   - [Projet Final — Concevoir & Développer votre Portfolio d'Ingénieur Polyglotte](./courses/design/projet-portfolio-polyglotte.md)

---

## 📁 Structure du Dépôt

```text
course/
├── README.md                                     # Planning, liens Slides/PDF & vue d'ensemble
├── GUIDE-ETUDIANT.md                             # Guide d'onboarding (Git, Docker, uv, Sprints, Portfolio)
├── AIDE-MEMOIRE.md                               # Cheat-sheet (Git, Docker, MongoDB, Cypher)
├── courses/
│   ├── slides.md                                 # Présentation interactive Slidev (publiée sur GitHub Pages + PDF)
│   └── design/
│       ├── brainstorm-smartcity-nosql.md         # Atelier Design SmartCity (100% NoSQL)
│       ├── brainstorm.md                         # Support d'atelier Design Portfolio
│       └── projet-portfolio-polyglotte.md        # Sujet & Grille du Projet Final Portfolio
└── exercices/
    ├── intro-nosql/                              # Étude de cas conceptuelle & théorème CAP
    ├── mongodb/                                  # Exercices CRUD & Agrégation MongoDB (sandbox)
    ├── neo4j/                                    # Exercices Cypher & Modélisation Graphe (sandbox)
    └── tds/                                      # Notebooks Jupyter historiques (hors TP SmartCity — en cours de migration)
        ├── mongodb.ipynb                         # Exemples guidés PyMongo (sample_mflix)
        └── neo4j.ipynb                           # Exemples guidés Neo4j Python Driver (Validalab)
```

---

## 🏗️ Les 2 Projets du Module

### 1. TP Fil Rouge Guidé : **SmartCity Explorer (Édition 100 % NoSQL)**
Dans votre dépôt d'équipe `2026-2027-rouen-smartcity-<equipe>` sur l'organisation [`nosql-esigelec`](https://github.com/nosql-esigelec) :
- **Objectif** : Compléter les couches `db/`, `scripts/seed_all.py`, `repositories/` et `services/` d'une application FastAPI + Streamlit exploitant **MongoDB** (*Embedding* `cities` + *Referencing* `reviews`) et **Neo4j** (graphe de similarité).
- **Validation** : 4 Sprints évalués en continu par `pytest` et GitHub Actions (**200 points**, à terminer pour le **dimanche 15 novembre 23h59**).

### 2. Projet Final de Conception & Soutenance : **Portfolio d'Ingénieur Polyglotte**
📄 **Sujet complet** : **[`courses/design/projet-portfolio-polyglotte.md`](./courses/design/projet-portfolio-polyglotte.md)**
- **En équipe (System Design + Backend FastAPI unifié)** : Concevoir le modèle de données NoSQL (MongoDB + Neo4j), le défendre en soutenance le **lundi 16 novembre à 14h00**, et implémenter l'API orchestrateur du groupe.
- **Individuellement (Frontend & Vraies Données)** : Peupler la base avec votre vrai parcours/projets et développer votre propre Frontend de Portfolio présenté le **vendredi 20 novembre à 14h00**.

---

## 👨‍🏫 Intervenant

**Brice FOTZO**
- Tech Lead Data @ Servier
- MongoDB User Group (MUG) Leader Paris
- Intervenant @ ESIGELEC Rouen & Poitiers (`brice.fotzo@hotmail.com`) — *100 % joignable entre les séances par mail, LinkedIn ou Issue GitHub !*
