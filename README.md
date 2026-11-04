# 🍃 Bases de Données NoSQL — MongoDB & Neo4j (ESIGELEC Rouen — BDTN)

Bienvenue sur le dépôt central du module **Bases de Données NoSQL** (Dominante *Big Data pour la Transformation Numérique — BDTN*) à l'**ESIGELEC Rouen**.

---

## 📅 Planning Officiel des Séances — Salle D1264

| Journée | Date | Créneau | Format | Programme & Livrables |
| :--- | :--- | :--- | :---: | :--- |
| **Journée 1** | **Lundi 9 Novembre** | **09h00 – 10h00** (1h) | Cours (D1264) | Fondamentaux NoSQL, Théorème CAP, Familles NoSQL & Modélisation Documentaire **MongoDB** (*Embedding* vs *Referencing*). |
| | | **10h00 – 12h00** (2h) | TP (D1264) | Onboarding Git/SSH (`hello-world`), prise en main de MongoDB via Docker & Jupyter (`exercices/tds/mongodb.ipynb` + `exercices/mongodb/README.md`). |
| | | **14h30 – 17h30** (3h) | TP (D1264) | **Atelier Design SmartCity** ([`brainstorm-smartcity-nosql.md`](./courses/design/brainstorm-smartcity-nosql.md)) puis **TP Guidé `SmartCity Explorer` — Sprints 1 & 2 (MongoDB)** : `db/mongo.py`, `MongoCityRepository` (`cities` + `scores` imbriqués), `MongoRepository` (`reviews` + agrégation `$avg`), `CityService` & `ReviewService`. |
| **Journée 2** | **Lundi 16 Novembre** | **09h00 – 10h00** (1h) | Cours (D1264) | Bases de données orientées Graphe (**Neo4j**), Property Graph Model, langage **Cypher** (`MATCH`, traversées multi-sauts, recommandations). |
| | | **10h00 – 12h00** (2h) | TP (D1264) | Prise en main de Cypher (`exercices/tds/neo4j.ipynb`) puis **TP Guidé `SmartCity Explorer` — Sprints 3 & 4 (Neo4j & Seed)** : `db/neo4j.py`, `Neo4jRepository` (`STRONG_IN` & `SIMILAR_TO`), `RecommendationService` et `seed_all.py` ($\rightarrow$ **200/200 pts** sur GitHub Actions). |
| | | **Après-midi** (2h) | TP (D1264) | **🚀 Lancement du Projet Final : [`Portfolio d'Ingénieur Polyglotte`](./courses/design/projet-portfolio-polyglotte.md) (Phase 1 — Brainstorming & System Design)** : Conception du modèle MongoDB (*Embedding* CV + *Referencing* Projets) + Graphe de compétences Neo4j, rédaction de `ARCHITECTURE.md` et `API_ROUTES.md`. |
| **Journée 3** | **Vendredi 20 Novembre** | **09h00 – 10h00** (1h) | Soutenance (D1264) | **🎤 Jalon 1 — Soutenances Flash de System Design** : Présentation par chaque équipe de son architecture (`ARCHITECTURE.md` & `API_ROUTES.md`) et validation par l'enseignant. |
| | | **10h00 – 12h00** (2h) | TP (D1264) | **⚙️ Phases 2 & 3 — Sprint Backend Unifié (Équipe) & Frontend (Individuel)** : Implémentation des routes FastAPI du groupe, du `seed` multi-profils et branchement des Frontends personnels. |
| | | **Après-midi** (2h) | TP / Démo (D1264) | **🏆 Finalisation & Démonstration Live des Portfolios** : Démonstration du Backend orchestrateur par chaque équipe et présentation individuelle du **Portfolio** de chaque étudiant avec ses vraies données. |

---

## 📚 Guides & Références Indispensables

1. **👉 [Guide de l'Étudiant (`GUIDE-ETUDIANT.md`)](./GUIDE-ETUDIANT.md)** : Configuration SSH, récupération de votre dépôt d'équipe, installation de `uv` & Docker, fonctionnement des tests par Sprint et du Projet Final Portfolio.
2. **💡 [Aide-Mémoire (`AIDE-MEMOIRE.md`)](./AIDE-MEMOIRE.md)** : Toutes les commandes essentielles (Git, Docker, `uv`, `pytest`, MongoDB `MQL` / `Motor`, Neo4j `Cypher`).
3. **🧠 Ateliers de Design & Sujets Projets** :
   - [Atelier Design — SmartCity Explorer (Édition 100 % NoSQL)](./courses/design/brainstorm-smartcity-nosql.md)
   - [Projet Final — Concevoir & Développer votre Portfolio d'Ingénieur Polyglotte](./courses/design/projet-portfolio-polyglotte.md)

---

## 📁 Structure du Dépôt

```text
course/
├── README.md                                     # Planning & vue d'ensemble du module
├── GUIDE-ETUDIANT.md                             # Guide d'onboarding (Git, Docker, uv, Sprints, Portfolio)
├── AIDE-MEMOIRE.md                               # Cheat-sheet (Git, Docker, MongoDB, Cypher)
├── courses/
│   ├── slides.md                                 # Présentation interactive Slidev
│   └── design/
│       ├── brainstorm-smartcity-nosql.md         # Atelier Design SmartCity (100% NoSQL)
│       └── projet-portfolio-polyglotte.md        # Sujet & Grille du Projet Final Portfolio
└── exercices/
    ├── intro-nosql/                              # Étude de cas conceptuelle & théorème CAP
    ├── mongodb/                                  # Exercices CRUD & Agrégation MongoDB
    ├── neo4j/                                    # Exercices Cypher & Modélisation Graphe
    └── tds/                                      # Environnement Docker Compose + Notebooks Jupyter
        ├── docker compose.yml                    # MongoDB + Neo4j + Jupyter Lab
        ├── mongodb.ipynb                         # TP guidé PyMongo (sample_mflix)
        └── neo4j.ipynb                           # TP guidé Neo4j Python Driver (Validalab)
```

---

## 🚀 Démarrage Rapide des Travaux Dirigés (Notebooks Jupyter)

```bash
# 1. Cloner ce dépôt de cours
git clone https://github.com/nosql-esigelec/course.git
cd course/exercices/tds

# 2. Démarrer MongoDB, Neo4j et Jupyter Lab
docker compose up -d

# 3. Récupérer l'URL et le token Jupyter Lab
docker compose logs jupyter
```

- **Jupyter Lab** : `http://localhost:8888` (`mongodb.ipynb` & `neo4j.ipynb`)
- **Mongo Express** : `http://localhost:8081`
- **Neo4j Browser** : `http://localhost:7474`

---

## 🏗️ Les 2 Projets du Module

### 1. TP Fil Rouge Guidé : **SmartCity Explorer (Édition 100 % NoSQL)**
Dans votre dépôt d'équipe `smartcity-<equipe>` sur l'organisation [`nosql-esigelec`](https://github.com/nosql-esigelec) :
- **Objectif** : Compléter les couches `db/`, `repositories/`, `services/` et `scripts/seed_all.py` d'une application FastAPI + Streamlit exploitant **MongoDB** (*Embedding* `cities` + *Referencing* `reviews`) et **Neo4j** (graphe de similarité).
- **Validation** : 4 Sprints évalués en continu par `pytest` et GitHub Actions (200 points).

### 2. Projet Final de Conception & Soutenance : **Portfolio d'Ingénieur Polyglotte**
📄 **Sujet complet** : **[`courses/design/projet-portfolio-polyglotte.md`](./courses/design/projet-portfolio-polyglotte.md)**
- **En équipe (System Design + Backend FastAPI unifié)** : Concevoir le modèle de données NoSQL (MongoDB + Neo4j), le défendre en soutenance le **vendredi 20 novembre (9h–10h)**, et implémenter l'API orchestrateur du groupe.
- **Individuellement (Frontend & Vraies Données)** : Peupler la base avec votre vrai parcours/projets et développer votre propre Frontend de Portfolio.

---

## 👨‍🏫 Intervenant

**Brice FOTZO**
- Tech Lead Data @ Servier
- MongoDB User Group (MUG) Leader Paris
- Intervenant @ ESIGELEC Rouen & Poitiers (`brice.fotzo@hotmail.com`)
