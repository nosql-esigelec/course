# 📊 Grille d'évaluation - Projet Portfolio Polyglotte

> Grille **publique** : vous savez exactement sur quoi vous êtes évalués.
> Note Portfolio /20 = **30 %** Jalon 1 (équipe) + **40 %** Backend (équipe) + **30 %** Frontend (individuel).
> Dates des jalons : voir le [planning officiel](../planning.md).

---

## 🎤 Jalon 1 - System Design (équipe) - /20 - 30 %

### Livrables - /16

Évalués sur `ARCHITECTURE.md` et `API_ROUTES.md`, état de `main` à l'échéance. Ils doivent être **complets**.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **J1.1** Schéma d'architecture | 3 | Schéma juste et lisible : frontends, API, MongoDB, Neo4j, qui stocke quoi, flux. |
| **J1.2** Modèle MongoDB | 4 | *Embedding* / *Referencing* justifiés **par les requêtes** ; documents d'exemple complets ; index et pipeline d'agrégation clé. |
| **J1.3** Modèle Neo4j | 4 | Labels, propriétés, relations **orientées** et justifiées ; contraintes ; 3 requêtes Cypher clés correctes. |
| **J1.4** Contrat d'API | 4 | Toutes les routes nécessaires aux frontends (au moins les 5 du sujet), avec paramètres et **exemples JSON complets et réalistes**. |
| **J1.5** Cohérence inter-bases | 1 | Slugs pivots identiques dans les deux bases ; stratégie de suppression. |

### Soutenance - /4

**5 à 6 minutes de présentation**, puis 3 minutes de questions.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **J1.6** Schéma et contrat présentés et défendus | 3 | Le schéma et le contrat d'API sont expliqués clairement ; les choix d'architecture sont défendus ; réponses précises aux questions. |
| **J1.7** Format | 1 | 5 à 6 minutes respectées, centrées sur les deux éléments clés. |

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
