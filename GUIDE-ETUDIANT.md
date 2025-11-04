# 📚 Guide de l'Étudiant - Formation NoSQL

Ce guide vous aidera à comprendre les concepts techniques et les outils que nous utiliserons pendant cette formation.

## 📖 Table des matières

1. [Le fichier README](#le-fichier-readme)
2. [Git et GitHub](#git-et-github)
3. [GitHub Classroom](#github-classroom)
4. [Markdown - Le langage de documentation](#markdown---le-langage-de-documentation)
5. [Docker - La conteneurisation](#docker---la-conteneurisation)
6. [Jupyter Notebooks](#jupyter-notebooks)
7. [Bonnes pratiques pour ce cours](#bonnes-pratiques-pour-ce-cours)
8. [Travail en équipe sur GitHub](#travail-en-équipe-sur-github)
9. [Résolution de problèmes courants](#résolution-de-problèmes-courants)

---

## Le fichier README

### Qu'est-ce qu'un README ?

Le **README** est le **premier fichier** que vous devriez lire dans un projet. C'est la "porte d'entrée" d'un projet.

#### 📌 Pourquoi "README" ?

- **READ ME** = "LIS-MOI" en anglais
- C'est une convention universelle dans le monde du développement
- Généralement nommé `README.md` (l'extension `.md` signifie Markdown)

#### 🎯 À quoi sert un README ?

Un bon README répond à ces questions :
- **Quoi ?** → De quoi parle ce projet ?
- **Pourquoi ?** → Quel problème résout-il ?
- **Comment ?** → Comment l'installer et l'utiliser ?
- **Qui ?** → Qui a créé ce projet ? Comment contribuer ?

#### 📝 Structure typique d'un README

```markdown
# Titre du Projet

## Description
Une brève description du projet

## Installation
Les étapes pour installer le projet

## Utilisation
Comment utiliser le projet avec des exemples

## Contribution
Comment contribuer au projet

## Licence
Information sur la licence
```

#### 💡 Dans notre cours

Pour cette formation, **chaque dossier important a son README** :

- `README.md` (racine) → Vue d'ensemble du cours
- `exercices/mongodb/README.md` → Exercices MongoDB
- `exercices/neo4j/README.md` → Exercices Neo4j
- `exercices/tds/README.md` → Guide d'installation Docker

**🎓 Conseil :** Lisez toujours le README avant de commencer à travailler dans un nouveau dossier !

---

## Git et GitHub

### Git : Le système de contrôle de version

#### Qu'est-ce que Git ?

Git est un **système de contrôle de version** qui permet de :
- 📝 Suivre l'historique des modifications de code
- 🔄 Revenir à une version antérieure si nécessaire
- 👥 Collaborer avec d'autres développeurs
- 🌿 Travailler sur plusieurs versions en parallèle (branches)

#### Les commandes Git essentielles

```bash
# Cloner un projet existant
git clone <url-du-repo>

# Vérifier l'état de vos fichiers
git status

# Ajouter des fichiers à la "zone de staging"
git add <fichier>
git add .  # Ajoute tous les fichiers modifiés

# Créer un commit (enregistrer une version)
git commit -m "Description des changements"

# Envoyer vos commits vers GitHub
git push

# Récupérer les dernières modifications
git pull
```

#### 🎬 Le workflow Git typique

```
1. Modifier des fichiers
2. git status          (voir ce qui a changé)
3. git add .           (préparer les changements)
4. git commit -m "..."  (enregistrer localement)
5. git push            (envoyer sur GitHub)
```

### GitHub : La plateforme collaborative

#### Qu'est-ce que GitHub ?

- **Git** = outil local sur votre ordinateur
- **GitHub** = plateforme en ligne qui héberge vos projets Git

#### Pourquoi utiliser GitHub ?

- ☁️ **Sauvegarde cloud** de votre code
- 👥 **Collaboration** facilitée
- 📊 **Visualisation** de l'historique
- 🔍 **Revue de code** entre pairs
- 📋 **Gestion de projet** (issues, projets, etc.)

---

## GitHub Classroom

### Qu'est-ce que GitHub Classroom ?

GitHub Classroom est un **outil éducatif** qui facilite la distribution et la collecte de devoirs basés sur Git.

#### 🎓 Comment ça marche ?

1. **L'enseignant crée une "assignment" (devoir)**
   - Prépare un template de projet
   - Configure les critères d'évaluation
   - Génère un lien d'invitation

2. **Vous acceptez l'invitation**
   - Cliquez sur le lien fourni par l'enseignant
   - GitHub Classroom crée automatiquement un repo pour vous/votre équipe
   - Vous avez maintenant votre propre copie du projet

3. **Vous travaillez sur votre repo**
   - Clonez le repo sur votre machine
   - Complétez les exercices
   - Commit et push régulièrement

4. **L'enseignant évalue votre travail**
   - Voit tous vos commits
   - Peut commenter votre code
   - Attribue une note

### 💡 Avantages de GitHub Classroom pour ce cours

#### Pour vous :
- ✅ Votre propre espace de travail
- ✅ Historique complet de votre progression
- ✅ Possibilité de revenir en arrière si erreur
- ✅ Collaboration facilitée en équipe
- ✅ Feedback de l'enseignant directement dans le code

#### Pour l'enseignant :
- ✅ Distribution automatique des devoirs
- ✅ Suivi de la progression en temps réel
- ✅ Évaluation facilitée
- ✅ Détection des difficultés rapidement

### 🚀 Workflow avec GitHub Classroom

```
📧 Recevoir le lien d'invitation
    ↓
🔗 Cliquer sur le lien et accepter
    ↓
📂 Votre repo est créé automatiquement
    ↓
💻 git clone <url-de-votre-repo>
    ↓
✍️ Travailler sur les exercices
    ↓
📤 git add, commit, push régulièrement
    ↓
✅ L'enseignant peut suivre votre progression
```

### 👥 Assignments d'équipe

Pour les **projets de groupe**, GitHub Classroom permet de :

1. **Former une équipe**
   - Le premier étudiant crée l'équipe
   - Les autres rejoignent l'équipe existante

2. **Travailler ensemble**
   - Tous les membres partagent le même repo
   - Chacun peut push ses contributions
   - L'historique montre qui a fait quoi

3. **Organiser le travail**
   - Créer des issues pour les tâches
   - Utiliser des branches pour les fonctionnalités
   - Faire des pull requests pour les reviews

---

## Markdown - Le langage de documentation

### Qu'est-ce que Markdown ?

Markdown est un **langage de balisage léger** pour créer des documents formatés avec du texte brut.

#### Pourquoi Markdown ?

- ✍️ **Simple** à écrire (plus facile que HTML)
- 👀 **Lisible** même sans être rendu
- 🔄 **Convertible** en HTML, PDF, etc.
- 🌐 **Universel** (GitHub, Jupyter, forums, etc.)

### 📝 Syntaxe Markdown de base

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3

**Texte en gras**
*Texte en italique*
***Texte en gras et italique***

- Liste à puces
- Deuxième élément
  - Sous-élément

1. Liste numérotée
2. Deuxième élément
3. Troisième élément

[Lien vers Google](https://google.com)

![Texte alternatif](url-de-image.png)

`code inline`

```python
# Bloc de code
def hello():
    print("Hello World!")
```

> Citation ou note importante

---

Ligne horizontale (séparateur)

| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Valeur 1  | Valeur 2  |
```

### 💡 Markdown dans notre cours

Vous utiliserez Markdown pour :
- 📝 Documenter votre code
- 📋 Écrire des rapports d'exercices
- 💬 Commenter dans les issues GitHub
- 📓 Ajouter des notes dans Jupyter

---

## Docker - La conteneurisation

### Qu'est-ce que Docker ?

Docker est une **plateforme de conteneurisation** qui permet d'exécuter des applications dans des environnements isolés.

#### 🐳 Analogie : Docker c'est comme...

Imaginez une **boîte de transport maritime** :
- Contient tout ce dont elle a besoin
- Peut être déplacée n'importe où
- Fonctionne de la même manière partout
- Isolée des autres conteneurs

### Concepts clés

#### 🏗️ Image Docker
- **Template** pour créer un conteneur
- Contient le code, les dépendances, la configuration
- Exemple : `mongo:6.0.11`, `neo4j:4.4.15`

#### 📦 Conteneur Docker
- **Instance en cours d'exécution** d'une image
- Environnement isolé
- Peut être démarré, arrêté, supprimé

#### 🎼 Docker Compose
- **Outil** pour gérer plusieurs conteneurs
- Définit les services dans un fichier `docker-compose.yml`
- Permet de lancer tout un environnement en une commande

### 🚀 Commandes Docker essentielles

```bash
# Lancer les services
docker-compose up -d

# Voir les conteneurs en cours d'exécution
docker-compose ps
# ou
docker ps

# Voir les logs d'un service
docker-compose logs <service>
docker-compose logs jupyter

# Arrêter les services
docker-compose stop

# Arrêter et supprimer les conteneurs
docker-compose down

# Redémarrer un service
docker-compose restart <service>
```

### 💡 Dans notre cours

Notre `docker-compose.yml` définit plusieurs services :

```yaml
services:
  mongo-server:      # Base de données MongoDB
  mongo-express:     # Interface web pour MongoDB
  neo4j:             # Base de données Neo4j
  jupyter:           # Notebooks interactifs
```

**Avantages pour vous :**
- ✅ Pas d'installation complexe sur votre machine
- ✅ Même environnement pour tous les étudiants
- ✅ Isolation (pas de conflit avec vos autres projets)
- ✅ Facile à supprimer après le cours

---

## Jupyter Notebooks

### Qu'est-ce qu'un Jupyter Notebook ?

Un **notebook Jupyter** est un document interactif qui combine :
- 💻 **Code** exécutable
- 📝 **Texte** formaté (Markdown)
- 📊 **Visualisations** (graphiques, tableaux)
- 🔢 **Résultats** d'exécution

#### Extension : `.ipynb`
- **I**nteractive **Py**thon **N**ote**b**ook

### 🎯 Pourquoi utiliser Jupyter ?

- 📚 **Apprentissage interactif** : tester du code en direct
- 🔬 **Expérimentation** : essayer différentes approches
- 📊 **Data Science** : analyser et visualiser des données
- 📖 **Documentation** : mélanger code et explications

### 🧩 Structure d'un Notebook

Un notebook est composé de **cellules** :

#### 1. Cellules de Code
```python
# Cette cellule contient du code Python
import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017")
```
- Appuyez sur `Shift + Enter` pour exécuter
- Le résultat s'affiche sous la cellule

#### 2. Cellules Markdown
```markdown
# Titre de section

Explication en texte normal avec **formatage**.
```
- Pour documenter, expliquer, structurer

### 🔄 Workflow dans Jupyter

```
1. Ouvrir le notebook (.ipynb)
2. Lire les instructions (cellules Markdown)
3. Exécuter les cellules de code dans l'ordre
4. Modifier et expérimenter
5. Ajouter vos propres cellules si nécessaire
6. Sauvegarder (Ctrl+S ou Cmd+S)
```

### 💡 Dans notre cours

Vous utiliserez deux notebooks principaux :

- `mongodb.ipynb` → Pratique MongoDB avec Python
- `neo4j.ipynb` → Pratique Neo4j avec Python

**🎓 Astuce :** Exécutez toujours les cellules dans l'ordre, du haut vers le bas !

---

## Bonnes pratiques pour ce cours

### 📅 Avant le cours

- [ ] Installer Docker Desktop
- [ ] Avoir un compte GitHub
- [ ] Cloner le repository du cours
- [ ] Tester que Docker fonctionne
- [ ] Lire le README principal

### 📚 Pendant le cours

#### Organisation
- 📝 **Prenez des notes** dans un fichier séparé ou directement dans les notebooks
- ❓ **Posez des questions** dès que vous ne comprenez pas
- 🤝 **Collaborez** avec vos voisins
- 💾 **Sauvegardez** régulièrement votre travail

#### Git
- 🔄 **Commit régulièrement** (au minimum après chaque exercice complété)
- 💬 **Messages de commit clairs** : "Exercice 3 MongoDB terminé" plutôt que "update"
- 📤 **Push fréquemment** pour ne pas perdre votre travail

#### Code
- 🧪 **Testez** votre code avant de passer à l'exercice suivant
- 📖 **Commentez** votre code pour vous en souvenir plus tard
- 🔍 **Lisez les messages d'erreur** attentivement

### 📊 Messages de commit efficaces

#### ❌ Mauvais exemples
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

#### ✅ Bons exemples
```bash
git commit -m "Ajout de l'exercice 1 MongoDB - insertion de documents"
git commit -m "Correction de la requête d'agrégation exercice 3"
git commit -m "Finalisation des requêtes Neo4j - recommandations"
```

### 🆘 Quand vous êtes bloqué

1. **Lisez l'erreur** attentivement
2. **Relisez les instructions** de l'exercice
3. **Vérifiez les exemples** fournis
4. **Consultez la documentation** (liens fournis)
5. **Demandez à un pair**
6. **Levez la main** pour demander de l'aide

---

## Travail en équipe sur GitHub

### 🎯 Projet collectif avec GitHub Classroom

Pour le projet final, vous travaillerez en **équipe de 3-4 personnes**.

### 📋 Étapes de formation d'équipe

1. **Un membre crée l'équipe**
   ```
   1. Cliquer sur le lien d'invitation
   2. Choisir "Create a new team"
   3. Donner un nom à l'équipe (ex: "team-nosql-01")
   ```

2. **Les autres rejoignent**
   ```
   1. Cliquer sur le même lien
   2. Choisir "Join an existing team"
   3. Sélectionner le nom de l'équipe
   ```

### 👥 Organisation du travail en équipe

#### Stratégie de branches

```
main (branche principale - code stable)
  ↓
feature/mongodb-queries (branche de Alice)
feature/neo4j-model (branche de Bob)
feature/python-integration (branche de Charlie)
```

#### Workflow recommandé

```bash
# 1. Créer une branche pour votre tâche
git checkout -b feature/ma-fonctionnalite

# 2. Travailler sur votre branche
# ... modifier des fichiers ...
git add .
git commit -m "Description"

# 3. Pousser votre branche
git push origin feature/ma-fonctionnalite

# 4. Créer une Pull Request sur GitHub
# 5. Un autre membre review et merge
```

### 🎯 Répartition des tâches

#### Utilisez les GitHub Issues

```markdown
# Exemple d'issue

**Titre:** Implémenter les requêtes MongoDB pour les utilisateurs

**Description:**
- [ ] Créer une collection users
- [ ] Implémenter l'insertion de nouveaux utilisateurs
- [ ] Implémenter la recherche par critères
- [ ] Tester avec des données de test

**Assigné à:** @alice
**Label:** mongodb, priority-high
```

### 🤝 Bonnes pratiques de collaboration

#### Communication
- 💬 **Communiquez** régulièrement avec votre équipe
- 📋 **Utilisez les issues** pour tracer les tâches
- 💡 **Commentez** vos Pull Requests
- 🔔 **Répondez** aux commentaires rapidement

#### Code
- 🔍 **Relisez** le code des autres (code review)
- 📝 **Documentez** votre code
- 🧪 **Testez** avant de merger
- 🔄 **Synchronisez** souvent avec la branche main

#### Résolution de conflits

Si Git vous signale des conflits :

```bash
# 1. Récupérer les dernières modifications
git pull origin main

# 2. Git marquera les conflits dans les fichiers
# 3. Ouvrir les fichiers et résoudre manuellement
# 4. Marquer comme résolu
git add .
git commit -m "Résolution des conflits"
git push
```

### 📊 Tableau de responsabilités (exemple)

| Membre | Responsabilité | Branche |
|--------|----------------|---------|
| Alice | Modélisation MongoDB | `feature/mongodb` |
| Bob | Requêtes Neo4j | `feature/neo4j` |
| Charlie | Documentation | `feature/docs` |
| Diane | Tests et intégration | `feature/tests` |

---

## Résolution de problèmes courants

### 🐛 Docker

#### Problème : "Cannot connect to the Docker daemon"
```bash
# Solution : Démarrer Docker Desktop
# Attendez que Docker soit complètement démarré (icône stable)
```

#### Problème : "Port already in use"
```bash
# Solution : Un autre service utilise le port
docker-compose down
# Ou changer le port dans docker-compose.yml
```

#### Problème : Conteneur qui ne démarre pas
```bash
# Voir les logs pour comprendre l'erreur
docker-compose logs <service>

# Redémarrer proprement
docker-compose down
docker-compose up -d
```

### 🐛 Git

#### Problème : "Your local changes would be overwritten"
```bash
# Solution 1 : Sauvegarder vos changements
git stash
git pull
git stash pop

# Solution 2 : Commit vos changements d'abord
git add .
git commit -m "WIP: travail en cours"
git pull
```

#### Problème : "Push rejected"
```bash
# Solution : Quelqu'un a push avant vous
git pull --rebase
git push
```

### 🐛 Jupyter

#### Problème : "Kernel not found"
```bash
# Solution : Redémarrer Jupyter
docker-compose restart jupyter
# Recharger la page dans le navigateur
```

#### Problème : Token ne fonctionne pas
```bash
# Solution : Récupérer le nouveau token
docker-compose logs jupyter
# Chercher la ligne avec le token et copier l'URL complète
```

### 🐛 MongoDB / Neo4j

#### Problème : "Connection refused"
```bash
# Vérifier que le service est bien démarré
docker-compose ps

# Si le service est down
docker-compose up -d <service>

# Vérifier les logs
docker-compose logs <service>
```

---

## 📚 Ressources supplémentaires

### 📖 Documentation

- [Git Book (Français)](https://git-scm.com/book/fr/v2)
- [GitHub Guides](https://guides.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Docker Documentation](https://docs.docker.com/get-started/)
- [Jupyter Documentation](https://jupyter-notebook.readthedocs.io/)

### 🎓 Tutoriels interactifs

- [Learn Git Branching](https://learngitbranching.js.org/?locale=fr_FR)
- [GitHub Skills](https://skills.github.com/)
- [Markdown Tutorial](https://www.markdowntutorial.com/)

### 🆘 Aide

- Issues du repository du cours
- Slack/Discord de la classe (si configuré)
- Email de l'enseignant : brice.fotzo@hotmail.com

---

## 🎯 Checklist de réussite

Avant de commencer le cours, assurez-vous que :

- [ ] J'ai lu ce guide en entier
- [ ] Je comprends ce qu'est un README et pourquoi c'est important
- [ ] J'ai un compte GitHub fonctionnel
- [ ] Docker Desktop est installé et fonctionne
- [ ] Je sais faire un git clone, commit, push
- [ ] J'ai accepté l'invitation GitHub Classroom
- [ ] Je connais les bases de Markdown
- [ ] Je sais lancer Jupyter avec Docker
- [ ] J'ai identifié mon équipe pour le projet
- [ ] Je sais où poser des questions si je suis bloqué

---

**Bonne formation ! 🚀**

N'oubliez pas : l'erreur fait partie de l'apprentissage. N'hésitez pas à expérimenter, casser des choses, et recommencer. C'est comme ça qu'on apprend !

---

*Ce guide sera mis à jour pendant le cours si nécessaire. Consultez-le régulièrement !*
