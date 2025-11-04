# Formation NoSQL - MongoDB & Neo4j

Formation intensive d'une journée sur les bases de données NoSQL, avec focus sur MongoDB (base orientée document) et Neo4j (base orientée graphe).

## 📋 Vue d'ensemble

Cette formation vous permettra de :
- Comprendre les concepts NoSQL et le théorème CAP
- Maîtriser MongoDB pour les données orientées document
- Utiliser Neo4j pour les données en graphe
- Pratiquer avec Docker et Jupyter notebooks
- Choisir la bonne base de données selon vos besoins

## 📚 Pour bien démarrer

### 🎓 Nouveau dans le développement ?

**👉 Lisez d'abord le [Guide de l'Étudiant](./GUIDE-ETUDIANT.md) !**

Ce guide explique en détail :
- Ce qu'est un README et comment l'utiliser
- Comment utiliser Git et GitHub
- Le fonctionnement de GitHub Classroom
- Les bases de Docker et Jupyter
- Les bonnes pratiques pour travailler en équipe
- Comment résoudre les problèmes courants

Même si vous avez déjà de l'expérience, jetez-y un œil pour comprendre comment nous allons travailler ensemble !

### 📋 Besoin d'une référence rapide ?

**💡 Consultez l'[Aide-mémoire](./AIDE-MEMOIRE.md) pendant le cours !**

Commandes essentielles pour :
- Git (clone, commit, push, branches)
- Docker (up, down, logs, restart)
- Jupyter (raccourcis clavier)
- MongoDB (CRUD, requêtes)
- Neo4j (Cypher de base)
- URLs et résolution de problèmes

## ⏰ Programme de la journée (7 heures)

### Matin (9h00 - 12h00) - 3 heures

| Horaire | Sujet | Durée |
|---------|-------|-------|
| 9h00 - 10h00 | **Introduction au NoSQL** | 1h |
| | - Pourquoi NoSQL ? | |
| | - Théorème CAP | |
| | - Types de bases NoSQL | |
| | - Comparaison SQL vs NoSQL | |
| 10h00 - 10h15 | *Pause* | 15min |
| 10h15 - 11h30 | **MongoDB - Théorie** | 1h15 |
| | - Structure des données BSON | |
| | - Opérations CRUD | |
| | - Requêtes avancées | |
| | - Indexation et modélisation | |
| 11h30 - 12h00 | **Exercices MongoDB simples** | 30min |
| | - Exercices en ligne (sans installation) | |

### Après-midi (13h30 - 17h30) - 4 heures

| Horaire | Sujet | Durée |
|---------|-------|-------|
| 13h30 - 14h30 | **Pratique MongoDB avec Docker** | 1h |
| | - Setup de l'environnement | |
| | - Notebooks Jupyter | |
| | - Cas pratiques | |
| 14h30 - 15h30 | **Neo4j - Théorie** | 1h |
| | - Bases de données orientées graphe | |
| | - Langage Cypher | |
| | - Modélisation de graphes | |
| | - Cas d'utilisation | |
| 15h30 - 15h45 | *Pause* | 15min |
| 15h45 - 16h30 | **Exercices Neo4j simples** | 45min |
| | - Exercices en ligne (sans installation) | |
| 16h30 - 17h30 | **Pratique Neo4j avec Docker** | 1h |
| | - Setup de l'environnement | |
| | - Notebooks Jupyter | |
| | - Cas pratiques | |

## 📁 Structure du projet

```
nosql/
├── README.md                       # Ce fichier
├── courses/                        # Support de cours
│   ├── slides.md                   # Présentation Slidev
│   ├── package.json               # Dépendances Slidev
│   ├── netlify.toml               # Config déploiement
│   ├── vercel.json                # Config déploiement
│   └── public/
│       └── images/                # Images pour les slides
└── exercices/                      # Exercices pratiques
    ├── intro-nosql/               # Étude de cas conceptuelle
    │   └── README.md
    ├── mongodb/                   # Exercices MongoDB simples
    │   └── README.md              # (utilise https://onecompiler.com/mongodb)
    ├── neo4j/                     # Exercices Neo4j simples
    │   └── README.md              # (utilise https://console.neo4j.org/)
    └── tds/                       # Travaux dirigés avec Docker
        ├── README.md              # Guide d'installation
        ├── docker-compose.yml     # Configuration Docker
        ├── mongodb.ipynb          # Notebook MongoDB
        ├── neo4j.ipynb            # Notebook Neo4j
        ├── mongo-data/            # Données d'exemple MongoDB
        ├── backups/               # Dump Neo4j
        └── conf/                  # Configuration Neo4j
```

## 🚀 Démarrage rapide

### Option 1 : Exercices simples (sans installation)

Pour débuter rapidement sans installation :

1. **Introduction NoSQL** : Lisez le cas d'usage dans `exercices/intro-nosql/README.md`
2. **MongoDB** : Suivez les exercices dans `exercices/mongodb/README.md` avec [OneCompiler](https://onecompiler.com/mongodb)
3. **Neo4j** : Suivez les exercices dans `exercices/neo4j/README.md` avec [Neo4j Sandbox](https://console.neo4j.org/)

### Option 2 : Pratique avec Docker (installation requise)

Pour une expérience complète avec Python et Jupyter :

**Prérequis :**
- Docker et Docker Compose installés
- Git installé

**Installation :**

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd nosql

# Aller dans le répertoire des TDs
cd exercices/tds

# Lancer MongoDB + Jupyter
docker-compose up -d mongo-server jupyter

# Ou lancer Neo4j + Jupyter
docker-compose up -d neo4j jupyter

# Ou lancer tous les services
docker-compose up -d
```

**Accéder à Jupyter :**

```bash
# Récupérer le token d'accès
docker-compose logs jupyter

# Ouvrir dans le navigateur
# http://localhost:8888/lab?token=<token>
```

Consultez le guide détaillé dans `exercices/tds/README.md`.

### Option 3 : Présentation Slidev

Pour lancer les slides en local :

```bash
cd courses

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Générer la version statique
npm run build
```

## 🛠️ Technologies utilisées

### Bases de données
- **MongoDB 6.0.11** - Base de données orientée document
- **Neo4j 4.4.15 Enterprise** - Base de données orientée graphe

### Outils
- **Docker & Docker Compose** - Conteneurisation
- **Jupyter Lab** - Notebooks interactifs
- **Slidev** - Présentation interactive

### Interfaces d'administration
- **Mongo Express** - Interface web pour MongoDB (port 8081)
- **Neo4j Browser** - Interface web pour Neo4j (port 7474)

### Drivers Python
- **pymongo** - Driver MongoDB pour Python
- **neo4j** - Driver Neo4j pour Python

## 📚 Ressources supplémentaires

### Documentation officielle
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Neo4j Documentation](https://neo4j.com/docs/)
- [MongoDB University](https://university.mongodb.com/) - Cours gratuits
- [Neo4j GraphAcademy](https://graphacademy.neo4j.com/) - Cours gratuits

### Services Cloud (pour aller plus loin)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - MongoDB cloud gratuit
- [Neo4j AuraDB](https://neo4j.com/cloud/aura/) - Neo4j cloud gratuit

### Outils
- [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI pour MongoDB
- [Neo4j Desktop](https://neo4j.com/download/) - Environnement local Neo4j

## 🎯 Objectifs d'apprentissage

À la fin de cette formation, vous serez capable de :

- ✅ Comprendre les différences entre SQL et NoSQL
- ✅ Identifier les cas d'usage appropriés pour MongoDB et Neo4j
- ✅ Créer et interroger des collections MongoDB
- ✅ Modéliser et requêter des graphes avec Neo4j
- ✅ Utiliser les drivers Python pour MongoDB et Neo4j
- ✅ Déployer des environnements NoSQL avec Docker
- ✅ Choisir la bonne base de données selon le contexte

## 🤝 Contribution et support

Pour toute question ou suggestion :
- Ouvrir une issue sur GitHub
- Contacter l'intervenant : brice.fotzo@hotmail.com

## 📝 Licence

Ce matériel de formation est fourni à des fins éducatives.

## 👨‍🏫 Intervenant

**Brice FOTZO**
- Tech Lead Data @ HephIA
- MUG Leader Paris @ MongoDB
- Intervenant @ ESIGELEC Rouen

---

Bonne formation ! 🚀
