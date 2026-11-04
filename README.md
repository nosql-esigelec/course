# 🍃 Bases de Données NoSQL — MongoDB & Neo4j (ESIGELEC Rouen — BDTN)

Bienvenue sur le dépôt central du module **Bases de Données NoSQL** (Dominante *Big Data pour la Transformation Numérique — BDTN*) à l'**ESIGELEC Rouen**.

> ### 🚀 Inscription de votre Équipe (1 clic par groupe de 4)
> Pour générer automatiquement votre dépôt privé d'équipe et recevoir vos accès, **un seul membre par groupe** clique sur le lien ci-dessous :  
> 👉 **[Inscrire mon Équipe maintenant](https://github.com/nosql-esigelec/course/issues/new?template=inscription-equipe.yml)**

---

## 📅 Planning Officiel des Séances — Salle D1264

| Journée | Date | Créneau | Format | Programme & Livrables |
| :--- | :--- | :--- | :---: | :--- |
| **Journée 1** | **Lundi 9 Novembre** | **09h00 – 10h00** (1h) | Cours (D1264) | **Panorama NoSQL, MongoDB & Neo4j** : Théorème CAP, Familles NoSQL, Modélisation Documentaire **MongoDB** (*Embedding* vs *Referencing*) & Modélisation Graphe **Neo4j** (*Cypher*). |
| | | **14h30 – 17h30** (3h) | TP (D1264) | **Pratique des opérations MongoDB & Neo4j en Python** :<br>1. Enrôlement des équipes en 1 clic<br>2. **Partie 1 (1h30) — MongoDB** : CRUD, filtres & agrégation (`exercices/mongodb/README.md` + `exercices/tds/mongodb.ipynb`)<br>3. **Partie 2 (1h15) — Neo4j & Cypher** : Traversées de graphe & enquête *Validalab* (`exercices/neo4j/README.md` + `exercices/tds/neo4j.ipynb`). |
| **Journée 2** | **Lundi 16 Novembre** | **09h00 – 10h00** (1h) | Cours (D1264) | **Architecture Polyglotte & System Design** : Faire cohabiter MongoDB et Neo4j derrière une API FastAPI ([`brainstorm-smartcity-nosql.md`](./courses/design/brainstorm-smartcity-nosql.md)) & présentation du défi **Portfolio**. |
| | | **TP Journée 2** | TP (D1264) | 1. **TP Guidé `SmartCity Explorer` (MongoDB + Neo4j)** : Implémentation en équipe à 4 des Repositories MongoDB et Neo4j, du `seed` et validation `pytest` (**200/200 pts**).<br>2. **🚀 Lancement du Projet Final [`Portfolio d'Ingénieur Polyglotte`](./courses/design/projet-portfolio-polyglotte.md) (Phase 1 — Brainstorming & System Design)** : Conception du modèle MongoDB + Neo4j, rédaction de `ARCHITECTURE.md` et `API_ROUTES.md`. |
| **Journée 3** | **Vendredi 20 Novembre** | **09h00 – 10h00** (1h) | Soutenance (D1264) | **🎤 Jalon 1 — Soutenances Flash de System Design** : Présentation par chaque équipe de son architecture (`ARCHITECTURE.md` & `API_ROUTES.md`) et validation par l'enseignant. |
| | | **TP Journée 3** | TP / Démo (D1264) | 1. **⚙️ Phases 2 & 3 — Sprint Backend Unifié (Équipe) & Frontend (Individuel)** : Finalisation de l'API FastAPI du groupe, du `seed` multi-profils et branchement des Frontends personnels.<br>2. **🏆 Démonstration Live des Portfolios** : Démonstration du Backend orchestrateur par chaque équipe et présentation individuelle du **Portfolio** de chaque étudiant. |

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
