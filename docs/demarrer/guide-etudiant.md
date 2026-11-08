# 🎓 Guide de l'Étudiant — Cours & Projets Bases de Données (ESIGELEC)

Bienvenue dans ce module ! Ce guide regroupe tout ce qu'il faut savoir pour travailler efficacement sur les Travaux Dirigés (TD) et le projet fil rouge **SmartCity Explorer**.

---

## 1. Vos Outils de Travail

| Outil | Rôle | Vérification rapide |
| :--- | :--- | :--- |
| **Git** + compte **GitHub** + **clé SSH** | Cloner votre dépôt d'équipe (SSH) et pousser votre code | `ssh -T git@github.com` → *« Hi &lt;pseudo&gt;! »* |
| **Docker Desktop** (+ WSL2 à jour sous Windows) | Lancer les bases de données locales (MongoDB, Neo4j) | `docker compose version` |
| **`uv`** | Gestionnaire Python ultra-rapide (installe aussi Python 3.11+) | `uv --version` |
| **`just`** | Lanceur de commandes du projet (`just seed`, `just dev-backend`…) — Windows : `winget install Casey.Just` · macOS : `brew install just` · Linux : `uv tool install rust-just` | `just --version` |
| **VS Code** | Éditeur recommandé | `code --version` |

### Configurer votre clé SSH GitHub (une seule fois, avant le premier cours)
```bash
# 1. Générer une clé (laisser l'emplacement par défaut, une passphrase est recommandée)
ssh-keygen -t ed25519 -C "votre.email@groupe-esigelec.org"

# 2. Afficher la clé publique et la copier
cat ~/.ssh/id_ed25519.pub        # Windows PowerShell : Get-Content $HOME\.ssh\id_ed25519.pub
```

3. Coller la clé dans **GitHub → Settings → SSH and GPG keys → New SSH key**.
4. Vérifier : `ssh -T git@github.com` doit répondre *« Hi &lt;votre-pseudo&gt;! You've successfully authenticated »*.

> Documentation officielle : [Connecting to GitHub with SSH](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh).

---

## 2. Fonctionnement du Projet Fil Rouge (SmartCity Explorer)

### Accéder au dépôt de votre équipe
Un dépôt privé dédié à votre équipe est créé dans l'organisation GitHub du cours dès l'inscription de l'équipe (voir la [page d'accueil](../index.md)) :
`https://github.com/nosql-esigelec/2026-2027-rouen-smartcity-<votre-equipe>`

> ⚠️ Acceptez d'abord l'invitation GitHub reçue par mail (ou sur `https://github.com/nosql-esigelec/<depot>/invitations`).

### Démarrer en 4 commandes
```bash
# 1. Cloner le dépôt de votre équipe (en SSH — clé configurée ci-dessus)
git clone git@github.com:nosql-esigelec/<nom-du-depot>.git
cd <nom-du-depot>

# 2. Configurer l'environnement et installer les dépendances
cp .env.example .env
uv sync --all-packages

# 3. Démarrer les bases de données locales via Docker
docker compose up -d

# 4. Vérifier que les tests du Sprint 1 se lancent
uv run pytest -m sprint1 -v
```

---

## 3. Organisation en Sprints & Évaluation Automatique

Le projet est découpé en **4 Sprints** progressifs documentés dans `TP_SESSIONS.md` :

1. **Sprint 1 (25 pts)** — Connexions aux bases de données (`packages/backend/src/backend/db/`) :
   ```bash
   uv run pytest -m sprint1 -v
   ```

2. **Sprint 2 (50 pts)** — Script de Seed / Ingestion des jeux de données (`packages/backend/src/backend/scripts/seed_all.py`) :
   ```bash
   uv run pytest -m sprint2 -v
   ```

3. **Sprint 3 (100 pts)** — Repositories CRUD & Agrégations (`packages/backend/src/backend/repositories/`) :
   ```bash
   uv run pytest -m sprint3 -v
   ```

4. **Sprint 4 (25 pts)** — Services Métier (`packages/backend/src/backend/services/`) :
   ```bash
   uv run pytest -m sprint4 -v
   ```

### Suivre votre note en direct sur GitHub
À chaque `git push`, le workflow **GitHub Actions** exécute automatiquement les tests des 4 Sprints et affiche un **tableau récapitulatif de votre score sur 200 (et sur 20)** dans l'onglet **Actions** de votre dépôt GitHub !

---

## 4. Projet Final de Conception & Soutenance : Portfolio Polyglotte

Une fois que vous maîtrisez l'architecture d'un backend multi-bases grâce au TP guidé **SmartCity Explorer**, vous passez à la vitesse supérieure avec le **Projet Final : Concevoir et Développer votre Portfolio d'Ingénieur Polyglotte** ([Projet Portfolio](../portfolio/index.md)) :

1. **Phase 1 — Brainstorming, System Design & Soutenance d'Architecture (Équipe)** :
    - Vous concevez votre propre répartition des données entre bases (Parcours + Projets détaillés + Graphe de compétences Neo4j), rédigez `ARCHITECTURE.md` et `API_ROUTES.md`, et défendez vos choix en soutenance.
2. **Phase 2 — Backend Unifié FastAPI (Équipe)** :
    - Votre équipe développe un backend orchestrateur commun capable de servir les profils, projets et graphes de compétences de tous les membres du groupe.
3. **Phase 3 — Frontend Personnel & Vraies Données (Individuel)** :
    - Chaque étudiant injecte ses vraies expériences, formations, compétences et projets ESIGELEC dans le seed et développe **son propre Frontend** (Next.js, React, Astro ou Streamlit). Vous repartez du module avec votre portfolio prêt à l'emploi !
