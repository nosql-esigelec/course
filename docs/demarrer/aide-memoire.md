# 📋 Aide-mémoire - Commandes essentielles

Guide de référence rapide pour les commandes les plus utilisées pendant le cours.

---

## 🔧 Git - Commandes de base

### Configuration initiale (une seule fois)
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### Cloner un projet
```bash
git clone <url-du-repo>
cd <nom-du-repo>
```

### Workflow quotidien
```bash
# Voir l'état de vos fichiers
git status

# Ajouter des fichiers modifiés
git add .                    # Tous les fichiers
git add <fichier>           # Un fichier spécifique

# Créer un commit
git commit -m "Description claire des changements"

# Envoyer vers GitHub
git push

# Récupérer les modifications des autres
git pull
```

### Branches (pour le projet en équipe)
```bash
# Créer et basculer sur une nouvelle branche
git checkout -b feature/nom-de-ma-branche

# Lister toutes les branches
git branch

# Basculer sur une branche existante
git checkout main

# Mettre à jour votre branche avec main
git checkout main
git pull
git checkout feature/ma-branche
git merge main
```

### En cas de problème
```bash
# Annuler les modifications non commitées
git checkout -- <fichier>

# Voir l'historique
git log --oneline

# Voir les différences
git diff
```

---

## 🐳 Docker - Commandes essentielles

### Gestion des services (avec docker compose.yml)

```bash
# Lancer tous les services
docker compose up -d

# Lancer des services spécifiques
docker compose up -d mongo-server jupyter
docker compose up -d neo4j jupyter

# Voir les services en cours d'exécution
docker compose ps
# ou
docker ps

# Arrêter les services
docker compose stop

# Arrêter et supprimer les conteneurs
docker compose down

# Redémarrer un service
docker compose restart <service>
docker compose restart jupyter
```

### Logs et débogage

```bash
# Voir les logs d'un service
docker compose logs <service>
docker compose logs jupyter
docker compose logs mongo-server

# Suivre les logs en temps réel
docker compose logs -f <service>

# Voir les dernières lignes
docker compose logs --tail=50 <service>
```

### Nettoyage

```bash
# Supprimer tous les conteneurs arrêtés
docker compose down

# Supprimer les volumes aussi (⚠️ efface les données)
docker compose down -v

# Voir l'espace disque utilisé
docker system df

# Nettoyer (libérer de l'espace)
docker system prune
```

---

## 📓 Jupyter - Raccourcis clavier

### Mode Commande (appuyez sur `Esc` pour y accéder)
| Raccourci | Action |
|-----------|--------|
| `Enter` | Passer en mode édition |
| `A` | Insérer une cellule au-dessus |
| `B` | Insérer une cellule en-dessous |
| `D D` (deux fois D) | Supprimer la cellule |
| `M` | Transformer en cellule Markdown |
| `Y` | Transformer en cellule Code |
| `C` | Copier la cellule |
| `V` | Coller la cellule |
| `Shift + Up/Down` | Sélectionner plusieurs cellules |

### Mode Édition (dans une cellule)
| Raccourci | Action |
|-----------|--------|
| `Esc` | Retour au mode commande |
| `Shift + Enter` | Exécuter la cellule et passer à la suivante |
| `Ctrl + Enter` | Exécuter la cellule (sans bouger) |
| `Alt + Enter` | Exécuter et insérer une cellule en-dessous |
| `Tab` | Auto-complétion |
| `Shift + Tab` | Afficher la documentation |

### Autres
| Raccourci | Action |
|-----------|--------|
| `Ctrl + S` (ou `Cmd + S`) | Sauvegarder |
| `Ctrl + Shift + P` | Palette de commandes |
| `H` (en mode commande) | Afficher tous les raccourcis |

---

## 🍃 MongoDB - Commandes de base

### Connexion (dans Python/Jupyter)
```python
import pymongo

# Connexion au serveur MongoDB
client = pymongo.MongoClient("mongodb://root:example@mongo-server:27017/")

# Sélectionner une base de données
db = client["ma_database"]

# Sélectionner une collection
collection = db["ma_collection"]
```

### Opérations CRUD
```python
# Create - Insérer
collection.insert_one({"nom": "Alice", "age": 25})
collection.insert_many([{"nom": "Bob"}, {"nom": "Charlie"}])

# Read - Lire
collection.find_one({"nom": "Alice"})
collection.find({"age": {"$gt": 20}})  # age > 20
list(collection.find())  # Tous les documents

# Update - Mettre à jour
collection.update_one(
    {"nom": "Alice"},
    {"$set": {"age": 26}}
)

# Delete - Supprimer
collection.delete_one({"nom": "Alice"})
collection.delete_many({"age": {"$lt": 18}})
```

### Requêtes utiles
```python
# Compter
collection.count_documents({"age": {"$gt": 20}})

# Trier
collection.find().sort("age", -1)  # Décroissant

# Limiter
collection.find().limit(10)

# Projection (sélectionner des champs)
collection.find({}, {"nom": 1, "age": 1, "_id": 0})
```

---

## 🕸️ Neo4j - Commandes Cypher de base

### Connexion (dans Python/Jupyter)
```python
from neo4j import GraphDatabase

# Connexion
driver = GraphDatabase.driver(
    "bolt://neo4j:7687",
    auth=("neo4j", "password")
)

# Exécuter une requête
def run_query(query):
    with driver.session() as session:
        result = session.run(query)
        return [record for record in result]
```

### Opérations de base

```cypher
-- Créer un nœud
CREATE (p:Personne {nom: "Alice", age: 30})

-- Créer une relation
MATCH (a:Personne {nom: "Alice"})
MATCH (b:Personne {nom: "Bob"})
CREATE (a)-[:CONNAIT]->(b)

-- Lire (sélectionner)
MATCH (p:Personne)
WHERE p.age > 25
RETURN p

-- Trouver avec relations
MATCH (p:Personne)-[r:CONNAIT]->(ami)
RETURN p.nom, ami.nom

-- Mettre à jour
MATCH (p:Personne {nom: "Alice"})
SET p.age = 31

-- Supprimer un nœud
MATCH (p:Personne {nom: "Alice"})
DELETE p

-- Supprimer un nœud et ses relations
MATCH (p:Personne {nom: "Alice"})
DETACH DELETE p
```

### Requêtes avancées
```cypher
-- Compter
MATCH (p:Personne)
RETURN count(p)

-- Chemins
MATCH path = (a:Personne)-[*1..3]->(b:Personne)
WHERE a.nom = "Alice"
RETURN path

-- Agrégation
MATCH (p:Personne)-[:TRAVAILLE_POUR]->(e:Entreprise)
RETURN e.nom, count(p) as nb_employes
ORDER BY nb_employes DESC
```

---

## 🌐 URLs importantes

### Pendant le cours (avec Docker)
- **Jupyter Lab**: http://localhost:8888 (voir logs pour le token)
- **Mongo Express**: http://localhost:8081
- **Neo4j Browser**: http://localhost:7474

### Exercices en ligne (sans installation)
- **MongoDB**: https://onecompiler.com/mongodb
- **Neo4j**: https://console.neo4j.org/

### Documentation
- **MongoDB**: https://docs.mongodb.com/
- **Neo4j**: https://neo4j.com/docs/
- **Docker**: https://docs.docker.com/

---

## 🆘 Problèmes fréquents

### Git : "Permission denied"
```bash
# Vérifier votre authentification GitHub
# Utilisez HTTPS ou configurez SSH
```

### Docker : "Port already in use"
```bash
# Arrêter les services
docker compose down

# Si ça ne suffit pas, identifier le processus
lsof -i :8888  # (remplacer 8888 par le port concerné)
```

### Jupyter : Token ne fonctionne pas
```bash
# Récupérer le nouveau token
docker compose logs jupyter | grep token
```

### MongoDB : Connection refused
```bash
# Vérifier que le service est lancé
docker compose ps

# Relancer si nécessaire
docker compose restart mongo-server
```

---

## 💡 Astuces rapides

### Git
```bash
# Créer un alias pour les commandes fréquentes
git config --global alias.co checkout
git config --global alias.st status
git config --global alias.cm commit

# Maintenant vous pouvez faire:
git st      # au lieu de git status
git co main # au lieu de git checkout main
```

### Docker
```bash
# Voir l'utilisation des ressources
docker stats

# Entrer dans un conteneur
docker exec -it <container-id> bash
```

### Jupyter
```python
# Recharger un module modifié sans redémarrer
%load_ext autoreload
%autoreload 2

# Afficher plusieurs variables
from IPython.display import display
display(var1, var2, var3)

# Mesurer le temps d'exécution
%%time
# votre code ici
```

---

## 📚 Pour aller plus loin

Consultez le [Guide de l'Étudiant](guide-etudiant.md) pour des explications détaillées sur tous ces concepts.

---

**💾 Conseil :** Gardez ce document ouvert pendant que vous travaillez !

**🔖 Raccourci :** Ajoutez cette page à vos favoris pour un accès rapide.
