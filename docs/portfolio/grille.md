# 📊 Grille d'évaluation - Projet Portfolio Polyglotte

> Grille **publique** : vous savez exactement sur quoi vous êtes évalués.
> Note Portfolio /20 = **30 %** Jalon 1 (équipe) + **40 %** Backend (équipe) + **30 %** Frontend (individuel).
> Dates des jalons : voir le [planning officiel](../planning.md).

---

## 🎤 Jalon 1 - System Design (équipe) - /20 - 30 %

**Ce qui est attendu : un schéma et un contrat, pas du texte.** Évalué sur `ARCHITECTURE.md` + `API_ROUTES.md` (état de `main` à l'échéance) et sur la soutenance : **6 minutes de présentation maximum**, puis 3 minutes de questions.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **J1.1** Schéma d'architecture | 5 | Un schéma lisible (API FastAPI, MongoDB, Neo4j, frontends) qui montre **qui stocke quoi** et **quels flux** ; expliqué clairement à l'oral. |
| **J1.2** Choix MongoDB défendus | 4 | *Embedding* / *Referencing* justifiés **par les requêtes** (cardinalité bornée ou non, lecture en une requête) ; un document d'exemple par collection. |
| **J1.3** Modèle Neo4j défendu | 4 | Schéma du graphe (nœuds, relations **orientées**) et **une** requête Cypher clé expliquée (projets similaires ou compétences communes). |
| **J1.4** Contrat d'API minimal | 4 | Les **5 routes minimales** avec méthode, chemin et **exemple de réponse JSON**, présentées et reliées aux écrans des frontends. |
| **J1.5** Cohérence inter-bases | 2 | Slugs pivots identiques dans MongoDB et Neo4j ; ce qui se passe à la suppression d'un projet. |
| **J1.6** Soutenance | 1 | **6 minutes maximum respectées**, réponses précises aux questions. |

## ⚙️ Jalon 2 - Backend unifié (équipe) - /20 - 40 %

Évalué sur l'état de `main` à l'échéance et la démo d'équipe.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **B.1** Reproductibilité | 4 | Sur une machine neuve : `just up && just seed && just dev` fonctionne ; seed **idempotent** avec les **vraies** données de tous les membres. |
| **B.2** Architecture en couches | 4 | `db/` → `repositories/` (1 base par repository) → `services/` → `api/`, modèles Pydantic conformes au contrat. |
| **B.3** Requêtes MongoDB | 4 | CRUD + **au moins un pipeline d'agrégation pertinent** (`$match`, `$unwind`, `$group`…), index effectivement créés. |
| **B.4** Requêtes Neo4j | 4 | Traversées utiles (projets similaires, compétences communes…) en Cypher paramétré, `MERGE` idempotent. |
| **B.5** Respect du contrat | 2 | Toutes les routes de `API_ROUTES.md` répondent avec le format annoncé ; Swagger (`/docs`) lisible. |
| **B.6** Travail d'équipe Git | 2 | Pull Requests relues, commits répartis entre les membres, messages explicites, `main` toujours fonctionnel. |

## 🎨 Jalon 2 - Frontend personnel (individuel) - /20 - 30 %

Évalué lors de votre démo (~2 min) et sur `frontends/frontend-<pseudo>/`.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **F.1** Intégration avec l'API d'équipe | 8 | Les 3 vues sont alimentées par l'API (aucune donnée en dur) : **parcours** (MongoDB), **projets** (MongoDB), **graphe de compétences / projets similaires** (Neo4j). |
| **F.2** Vraies données | 4 | Votre vrai parcours, vos vrais projets et compétences, suffisamment riches pour être montrés à un recruteur. |
| **F.3** Qualité de l'interface | 3 | Lisible, navigable, responsive ; le graphe est compréhensible. |
| **F.4** Démo & maîtrise | 5 | Démo fluide dans le temps imparti ; réponse correcte à une question sur **votre** code (quelle route, quelle requête derrière). |

---

## ⚖️ Règles

- **Part individuelle** : la note d'équipe (Jalon 1 et Backend) peut être **modulée individuellement** (±3 points) si la contribution d'un membre est manifestement absente (aucun commit, aucune PR, incapable d'expliquer le backend).
- **Échéances** : seul l'état de `main` à l'heure limite est évalué.
- **Plagiat / IA** : vous pouvez vous aider d'outils d'IA, mais chaque membre doit pouvoir **expliquer** le code de l'équipe et le sien.
