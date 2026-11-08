# 📊 Grille d'évaluation — Projet Portfolio Polyglotte

> Grille **publique** : vous savez exactement sur quoi vous êtes évalués.
> Note Portfolio /20 = **30 %** Jalon 1 (équipe) + **40 %** Backend (équipe) + **30 %** Frontend (individuel).
> Dates des jalons : voir le [planning officiel du README](../../README.md#-planning-officiel-des-séances--salle-d1264).

---

## 🎤 Jalon 1 — System Design (équipe) — /20 — 30 %

Évalué sur `ARCHITECTURE.md` + `API_ROUTES.md` (état de `main` à l'échéance) et la soutenance (10 min : 5 min de présentation, 4 min de questions).

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **J1.1** Modélisation MongoDB | 5 | Choix *Embedding* / *Referencing* justifiés **par les requêtes** (cardinalité bornée ou non, lecture atomique, fréquence d'écriture) ; documents d'exemple complets. |
| **J1.2** Modélisation Neo4j | 5 | Labels, propriétés, relations **orientées** et justifiées ; hiérarchie de compétences ; 3 requêtes Cypher clés correctes. |
| **J1.3** Cohérence inter-bases | 3 | Slugs pivots uniques et présents dans les deux bases ; stratégie de mise à jour / suppression expliquée. |
| **J1.4** Contrat d'API | 4 | Toutes les routes du besoin (R1–R5) avec paramètres et **exemples JSON complets** permettant de coder un frontend sans le backend. |
| **J1.5** Index & performance | 2 | Index MongoDB et contraintes Neo4j reliés aux requêtes qu'ils servent. |
| **J1.6** Soutenance | 1 | Présentation claire, réponses précises aux questions. |

## ⚙️ Jalon 2 — Backend unifié (équipe) — /20 — 40 %

Évalué sur l'état de `main` à l'échéance et la démo d'équipe.

| Critère | Points | Attendu pour la note maximale |
|---|:---:|---|
| **B.1** Reproductibilité | 4 | Sur une machine neuve : `just up && just seed && just dev` fonctionne ; seed **idempotent** avec les **vraies** données de tous les membres. |
| **B.2** Architecture en couches | 4 | `db/` → `repositories/` (1 base par repository) → `services/` → `api/`, modèles Pydantic conformes au contrat. |
| **B.3** Requêtes MongoDB | 4 | CRUD + **au moins un pipeline d'agrégation pertinent** (`$match`, `$unwind`, `$group`…), index effectivement créés. |
| **B.4** Requêtes Neo4j | 4 | Traversées utiles (projets similaires, compétences communes…) en Cypher paramétré, `MERGE` idempotent. |
| **B.5** Respect du contrat | 2 | Toutes les routes de `API_ROUTES.md` répondent avec le format annoncé ; Swagger (`/docs`) lisible. |
| **B.6** Travail d'équipe Git | 2 | Pull Requests relues, commits répartis entre les membres, messages explicites, `main` toujours fonctionnel. |

## 🎨 Jalon 2 — Frontend personnel (individuel) — /20 — 30 %

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
