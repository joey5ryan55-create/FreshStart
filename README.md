# 🌿 FreshStart POS — Type 9 Cannabis Delivery System

**Regulator-ready backend system for non-storefront cannabis delivery operators in California.**

This repo tracks the entire technical implementation of a **Type 9 Cannabis Delivery POS**, including backend API, database schema, regulatory guardrails, METRC integration, and operational SOPs.

---

## ✅ Phase 1 — Golden Thread MVP

> Goal: Thin slice proving flow works end-to-end

### 🔧 Infrastructure
- [x] Dockerized Postgres 16
- [x] Express server with .env config
- [x] Basic auth layer (/login, JWT tokens)
- [x] Error handling + standardized API responses
- [x] Seed scripts / test data for E2E flow
- [ ] Unit + integration test scaffolding (Jest/Mocha)
- [ ] Postman collection / replay workflow
- [ ] Basic deploy script (Docker Compose / Heroku-style)

### 🗃️ Database Schema
- [x] 'customers', 'orders', 'order_items', 'packages'
- [x] 'deliveries', 'delivery_stops'
- [x] 'users', 'roles', 'locations'

### 🔌 Endpoints
- [x] Health: GET /, GET /db-test
- [ ] Catalog: GET /catalog/packages?q=...
- [ ] Orders: POST /orders, GET /orders/:id, PATCH /orders/:id/status
- [ ] Deliveries: POST /deliveries, POST /deliveries/:id/stops, PATCH /deliveries/stops/:stopId/complete
- [ ] Manifest/Load: GET /deliveries/:id/load, GET /deliveries/:id/manifest (CSV/HTML/JSON)
- [ ] Reports: daily, weekly, monthly

### 🔐 Compliance Triggers
- [ ] Daily purchase caps
- [ ] Inventory guard (no negatives)
- [ ] Delivery cap guard ( limit)

### ✅ Verified
- [ ] Orders → Deliveries → Stops → Manifest flow
- [ ] CSV / HTML exports working
- [ ] API key auth for POST/PATCH

---

(…TRUNCATED FOR SPACE…)

© FreshStart POS — Internal Use Only
