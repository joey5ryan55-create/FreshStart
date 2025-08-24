
# 🌿 FreshStart POS — Type 9 Cannabis Delivery System

**Regulator-ready backend system for non-storefront cannabis delivery operators in California.**

This repo tracks the entire technical implementation of a **Type 9 Cannabis Delivery POS**, including backend API, database schema, regulatory guardrails, METRC integration, and operational SOPs.

---

## ✅ Phase 1 — Golden Thread MVP

> Goal: Thin slice proving flow works end-to-end

### 🔧 Infrastructure
- [x] Dockerized Postgres 16
- [x] Express server with `.env` config
- [x] Basic auth layer (`/login`, JWT tokens)
- [x] Error handling + standardized API responses
- [x] Seed scripts / test data for E2E flow
- [x] Unit + integration test scaffolding (Jest/Mocha)
- [x] Postman collection / replay workflow
- [x] Basic deploy script (Docker Compose / Heroku-style)

### 🗃️ Database Schema
- [x] `customers`, `orders`, `order_items`, `packages`
- [x] `deliveries`, `delivery_stops`
- [x] `users`, `roles`, `locations`

### 🔌 Endpoints
- [x] Health: `GET /`, `GET /db-test`
- [x] Catalog: `GET /catalog/packages?q=...`
- [x] Orders: `POST /orders`, `GET /orders/:id`, `PATCH /orders/:id/status`
- [x] Deliveries: `POST /deliveries`, `POST /deliveries/:id/stops`, `PATCH /deliveries/stops/:stopId/complete`
- [x] Manifest/Load: `GET /deliveries/:id/load`, `GET /deliveries/:id/manifest (CSV/HTML/JSON)`
- [x] Reports: daily, weekly, monthly

### 🔐 Compliance Triggers
- [x] Daily purchase caps
- [x] Inventory guard (no negatives)
- [x] Delivery cap guard ($10k limit)

### ✅ Verified
- [x] Orders → Deliveries → Stops → Manifest flow
- [x] CSV / HTML exports working
- [x] API key auth for POST/PATCH

---

## 🛡️ Phase 2 — Compliance + Usability

> Goal: License-ready (auditable, regulator-friendly)

- [ ] Age verification (21 rec / 18 med)
- [ ] Zoning checks & jurisdiction tax logic
- [ ] Upload ID for age verification
- [ ] Returns & destruction flow (audit trail)
- [ ] PDF export for waste w/ signature & timestamp
- [ ] Lot tracking for all packages
- [ ] CPRA/GDPR data minimization
- [ ] Auto license-product type validation
- [ ] Retention policy for audit artifacts (7 years)

### 🔍 Audit Logs
- [ ] Tamper-evident `audit_log` table
- [ ] POST/PATCH logging w/ timestamps
- [ ] Config change log (zones/tax edits)

### 🚛 Dispatcher Tools
- [ ] `/orders?status=created` queue
- [ ] Driver assignment flow

### 🚗 Driver Tools
- [ ] JSON stop view
- [ ] Signature/photo on completion
- [ ] Event logging: breaks, incidents, checks
- [ ] CA labor clock-in compliance
- [ ] Offline delivery mode

### 📈 Reporting
- [ ] Jurisdictional tax reports
- [ ] Regulatory audit drilldowns
- [ ] “One-click” regulatory export

### 🔐 Security
- [ ] Rate limiting & abuse prevention
- [ ] Driver device MDM wipe-on-theft policy
- [ ] SOC 2 checklist
- [ ] OWASP API Top 10 compliance
- [ ] Geo-fencing of delivery areas

---

## 🔄 Phase 3 — METRC + UI Polish

> Goal: Regulator sync & usability

### 🔄 METRC Integration
- [ ] Event queue: create/deliver/destroy
- [ ] Sync job w/ retry + backoff
- [ ] Sandbox support
- [ ] Failure injection tests
- [ ] METRC alert dashboard
- [ ] Error classifier

### 🖥 UI/UX
- [ ] Dispatcher web dashboard
- [ ] Driver mobile view (PWA)
- [ ] Print-ready manifests (branded)
- [ ] Accessibility (ADA/WCAG)
- [ ] Dark mode toggle

### 📣 Notifications
- [ ] SMS/Email status updates

### 🔐 Security
- [ ] Session timeout + idle logout
- [ ] TLS & at-rest encryption
- [ ] Key rotation (JWT/API)

### 🌐 Webhooks
- [ ] Webhooks for delivery updates

---

## 🏢 Phase 4 — Scale & Enterprise

> Goal: Multi-operator support

- [ ] Data silos per licensee
- [ ] Configurable settings by tenant
- [ ] Tenant impersonation / support mode

### 👮 RBAC + Infrastructure
- [ ] Role-based access (admin, dispatcher, driver)
- [ ] K8s / Docker Swarm scaling
- [ ] HA Postgres + auto backups
- [ ] Staging vs prod segregation
- [ ] Pen-testing, disaster recovery

### 🕓 Retention & Billing
- [ ] 7+ year immutable audit chain
- [ ] Daily notarization (hash log or blockchain)
- [ ] Billing usage logs

### 📊 Observability
- [ ] ELK/Splunk logs
- [ ] Grafana/Prometheus dashboards

---

## 🔌 Phase 5 — Integrations

> Goal: Plug into cannabis ecosystem

- [ ] ACH / Debit / Cashless ATM
- [ ] Chain-of-cash handling SOP
- [ ] QuickBooks / NetSuite
- [ ] Weedmaps / Leafly / Jane APIs
- [ ] Onfleet/Bringg API support
- [ ] Barcode + printers + cash drawers
- [ ] OpenAPI docs
- [ ] Webhooks w/ payload config
- [ ] API versioning

---

## 📊 Phase 6 — Analytics & ML

> Goal: Data-driven delivery & insights

- [ ] Dashboards: Sales, taxes, COGS, profit, delivery perf
- [ ] Wastage + cost tracking per package
- [ ] Smart reorder & low stock alerts
- [ ] Route optimizer (Google/Mapbox)
- [ ] Suspicious order/driver detection
- [ ] ML alert pipelines (idle driver, failed orders)
- [ ] Sentiment & review tracker (NLP)
- [ ] Loyalty & cohort tracking

---

## 🏷️ Phase 7 — White-Label SaaS

> Goal: Expand to other operators

- [ ] Branded portals & themes
- [ ] White-label legal doc generator
- [ ] Multi-state & international support
- [ ] Self-service onboarding & deletion (GDPR)
- [ ] Stripe billing, usage-based plans
- [ ] SLA dashboards
- [ ] Add-on marketplace

---

## 📂 Operational Edge Cases

- [ ] Failed deliveries (not home, invalid ID)
- [ ] Partial/split deliveries
- [ ] Dispatcher retry flow
- [ ] SOP Library for dispatchers/drivers
- [ ] Regulator audit SOPs
- [ ] Refund/resend flow

---

## 🧪 DevOps & Paper Trail

- [ ] Load + chaos testing
- [ ] Blue/green deploys
- [ ] Full test coverage dashboard
- [ ] Law enforcement & compliance exports
- [ ] Geo-anchored PDF evidence

---

© FreshStart POS — Internal Use Only
