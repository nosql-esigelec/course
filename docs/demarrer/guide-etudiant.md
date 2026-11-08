---
title: Avant le premier cours
---

# 🧰 Avant le premier cours : préparer votre poste

!!! tip "Objectif : arriver lundi avec un poste prêt"
    Comptez **45 min à 1 h**, une seule fois, **chez vous** (le Wi-Fi de la salle ne supportera pas 34 installations en même temps).
    À la fin de cette page, la [checklist](#checklist) doit être entièrement verte. Rien d'autre n'est à préparer : le projet sera présenté en cours.

| # | Outil | À quoi il sert dans le module |
|---|---|---|
| 1 | **Compte GitHub** | héberger le code de votre équipe |
| 2 | **Git** + **clé SSH** | récupérer et envoyer votre code |
| 3 | **Docker Desktop** | faire tourner MongoDB et Neo4j sur votre machine |
| 4 | **`uv`** | installer Python et les dépendances du projet |
| 5 | **`just`** | lancer les commandes du projet en un mot |
| 6 | **VS Code** | éditeur de code |

!!! warning "Après chaque installation, **fermez et rouvrez votre terminal**"
    Sinon la nouvelle commande ne sera pas trouvée (« commande introuvable » / « n'est pas reconnu »).

## 1. Compte GitHub

1. Créez un compte sur [github.com](https://github.com/signup) si vous n'en avez pas (de préférence avec votre adresse ESIGELEC).
2. **Notez votre pseudo exact** : il servira à inscrire votre équipe.

## 2. Installer les outils

Choisissez votre système :

=== "Windows 10 / 11"

    Ouvrez **PowerShell** (menu Démarrer → « PowerShell »). Pour l'étape WSL, ouvrez-le **en tant qu'administrateur** (clic droit).

    ```powershell
    # a) WSL2 — nécessaire à Docker (PowerShell ADMINISTRATEUR), puis REDÉMARREZ le PC
    wsl --install
    wsl --update

    # b) Les autres outils (PowerShell normal, après le redémarrage)
    winget install --id Git.Git -e
    winget install --id Docker.DockerDesktop -e
    winget install --id astral-sh.uv -e
    winget install --id Casey.Just -e
    winget install --id Microsoft.VisualStudioCode -e
    ```

    Ensuite : **lancez Docker Desktop** une première fois, acceptez les conditions et attendez que l'icône de la baleine indique *Engine running*.

    !!! note "`winget` introuvable ?"
        Mettez à jour « App Installer » depuis le Microsoft Store, ou installez chaque outil depuis son site :
        [Git](https://git-scm.com/download/win) · [Docker Desktop](https://www.docker.com/products/docker-desktop/) ·
        [uv](https://docs.astral.sh/uv/getting-started/installation/) · [just](https://github.com/casey/just#installation) ·
        [VS Code](https://code.visualstudio.com/).

=== "macOS"

    Installez d'abord [Homebrew](https://brew.sh/) si vous ne l'avez pas, puis dans le **Terminal** :

    ```bash
    brew install git uv just
    brew install --cask docker visual-studio-code
    ```

    Ensuite : **lancez Docker Desktop** (Applications) une première fois et attendez *Engine running*.

=== "Linux (Ubuntu / Debian)"

    ```bash
    sudo apt update && sudo apt install -y git curl
    curl -LsSf https://astral.sh/uv/install.sh | sh       # uv
    uv tool install rust-just                               # just
    ```

    - **Docker** : suivez [Docker Engine pour Ubuntu](https://docs.docker.com/engine/install/ubuntu/), puis `sudo usermod -aG docker $USER` et reconnectez-vous.
    - **VS Code** : [code.visualstudio.com](https://code.visualstudio.com/) (paquet `.deb`).

Puis, quel que soit votre système, installez Python via `uv` :

```bash
uv python install 3.12
```

## 3. Configurer Git et votre clé SSH

```bash
# Votre identité : utilisez l'email de votre compte GitHub (sinon vos commits ne vous sont pas attribués)
git config --global user.name "Prénom Nom"
git config --global user.email "email-de-votre-compte-github"

# Générer une clé SSH (appuyez sur Entrée pour l'emplacement par défaut ; une passphrase est recommandée)
ssh-keygen -t ed25519 -C "email-de-votre-compte-github"
```

Copiez la **clé publique** :

=== "Windows (PowerShell)"

    ```powershell
    Get-Content $HOME\.ssh\id_ed25519.pub | Set-Clipboard
    ```

=== "macOS"

    ```bash
    pbcopy < ~/.ssh/id_ed25519.pub
    ```

=== "Linux"

    ```bash
    cat ~/.ssh/id_ed25519.pub     # puis copiez la ligne affichée
    ```

Collez-la dans **GitHub → Settings → SSH and GPG keys → New SSH key**, puis testez :

```bash
ssh -T git@github.com
```

Réponse attendue : *« Hi `<votre-pseudo>`! You've successfully authenticated… »* (à la première connexion, répondez `yes`).

## 4. Pré-télécharger les bases de données

À faire **chez vous**, Docker Desktop démarré (≈ 1 Go) :

```bash
docker pull mongo:7
docker pull neo4j:5
```

## ✅ Checklist { #checklist }

Dans un **nouveau** terminal, chaque commande doit répondre sans erreur :

| Commande | Réponse attendue |
|---|---|
| `git --version` | `git version 2.x` |
| `ssh -T git@github.com` | `Hi <votre-pseudo>! You've successfully authenticated` |
| `docker run --rm hello-world` | `Hello from Docker!` |
| `docker images` | les lignes `mongo 7` et `neo4j 5` |
| `uv --version` | `uv 0.x` |
| `uv python list --only-installed` | une ligne `cpython-3.12…` |
| `just --version` | `just 1.x` |
| `code --version` | un numéro de version |

**Tout est vert ?** Vous êtes prêts pour lundi. Rien d'autre à préparer.

## 🆘 Erreurs fréquentes

| Symptôme | Solution |
|---|---|
| « commande introuvable » / « n'est pas reconnu… » | Fermez et rouvrez le terminal (voire la session Windows). |
| Docker : *WSL 2 installation is incomplete* | `wsl --update` dans PowerShell, puis relancez Docker Desktop. |
| Docker : *Virtualization not enabled* | Activez la virtualisation (Intel VT-x / AMD-V) dans le BIOS du PC. |
| `Cannot connect to the Docker daemon` | Docker Desktop n'est pas démarré : lancez-le et attendez *Engine running*. |
| `Permission denied (publickey)` | La clé n'est pas ajoutée sur GitHub, ou ce n'est pas la bonne : refaites l'étape 3. |
| PC de l'école ou sans droits administrateur | Signalez-le **avant** le cours sur Teams. |

Toujours bloqué ? Postez **la commande et le message d'erreur complet** (capture d'écran) dans le canal **Général** de l'équipe Teams du cours.
