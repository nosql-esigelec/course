---
title: SmartCity Explorer
---

# 🏙️ TP guidé — SmartCity Explorer (100 % NoSQL)

Application FastAPI + Streamlit qui compare les villes françaises selon des critères de qualité de vie et recommande des villes similaires.
Vous complétez les couches **`db/` → `scripts/seed_all.py` → `repositories/` → `services/`** ; les routes API et le frontend sont fournis.

| Couche | Techno | Rôle |
| :--- | :--- | :--- |
| MongoDB `cities` | pattern **Embedding** | ville + ses scores par catégorie imbriqués |
| MongoDB `reviews` | pattern **Referencing** | avis liés par `city_id` + pipeline d'agrégation |
| Neo4j | graphe | `(:City)-[:STRONG_IN]->(:Criterion)`, `(:City)-[:SIMILAR_TO]->(:City)` |

## Démarrer { #demarrer }

!!! warning "Avant de commencer"
    Votre **clé SSH** est configurée et votre **invitation GitHub** est acceptée → [Avant le premier cours](../demarrer/guide-etudiant.md).

=== "Windows (PowerShell / WSL)"

    ```bash
    git clone git@github.com:nosql-esigelec/2026-2027-rouen-smartcity-<equipe>.git
    cd 2026-2027-rouen-smartcity-<equipe>
    copy .env.example .env      # WSL : cp .env.example .env
    uv sync --all-packages
    docker compose up -d
    uv run pytest -m sprint1 -v
    ```

=== "macOS / Linux"

    ```bash
    git clone git@github.com:nosql-esigelec/2026-2027-rouen-smartcity-<equipe>.git
    cd 2026-2027-rouen-smartcity-<equipe>
    cp .env.example .env
    uv sync --all-packages
    docker compose up -d
    uv run pytest -m sprint1 -v
    ```

Vérifiez que `docker compose ps` affiche `smartcity-mongo` et `smartcity-neo4j` en **healthy**.

## Les 4 Sprints

| Sprint | Fichiers | Commande | Points |
| :--- | :--- | :--- | :---: |
| 1 — Connexions | `db/mongo.py`, `db/neo4j.py` | `uv run pytest -m sprint1 -v` | 25 |
| 2 — Seed | `scripts/seed_all.py` | `uv run pytest -m sprint2 -v` puis `just seed` | 50 |
| 3 — Repositories | `repositories/mongo_city_repo.py`, `mongo_repo.py`, `neo4j_repo.py` | `uv run pytest -m sprint3 -v` | 100 |
| 4 — Services | `services/*.py` | `uv run pytest -m sprint4 -v` | 25 |

Comment c'est noté : voir [Évaluation](../evaluation.md#smartcity).

## Tester vos requêtes à côté du code

| Besoin | Outil |
| :--- | :--- |
| Essayer un filtre ou un pipeline MongoDB | `docker exec -it smartcity-mongo mongosh smartcity` ou [OneCompiler MongoDB](https://onecompiler.com/mongodb) |
| Visualiser le graphe, mettre au point une requête Cypher | **Neo4j Browser** : <http://localhost:7474> (`neo4j` / `password`) |
| Retrouver une syntaxe | [Aide-mémoire](../demarrer/aide-memoire.md) |

## Travailler à 4 ou 5 sans conflits

- Répartissez-vous : **binôme MongoDB** / **binôme Neo4j**, puis croisez pour les services.
- Une branche par binôme, **Pull Request** relue par l'autre binôme, `main` toujours vert.
- `seed_all.py` est partagé : chaque binôme ne modifie que **ses** fonctions (`seed_mongo_*` / `seed_neo4j`).
