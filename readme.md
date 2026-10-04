# 📚 CortexAI

![CortexAI Logo](https://raw.githubusercontent.com/krrishbhandari/CortexAI/main/assets/logo.png)

**CortexAI** is an intelligent, modular AI platform that provides authentication, billing, chat, and autonomous agent services through a clean micro‑service architecture. The frontend is a modern React application powered by Vite, offering a sleek UI with Redux state management.

---

## 🚀 Overview

- **Multi‑service backend** built with **Node.js (ESM)** and **Express**
- **Micro‑service architecture** with separate services for Auth, Billing, Chat, and AI Agents
- **Redis** integration for caching and message queueing
- **React + Vite** frontend with **Redux Toolkit** for state management
- **Docker Compose** ready for local development and production deployment

---

## 🛠️ Tech Stack

| Layer          | Technology                              | Description |
|----------------|------------------------------------------|-------------|
| **Backend**    | Node.js (v20) + Express                 | Fast, lightweight HTTP servers |
|                | MongoDB (via Mongoose)                  | Persistent data storage |
|                | Redis (ioredis)                         | Caching & pub/sub |
|                | Docker + Docker‑Compose                 | Containerized services |
| **Auth Service** | dotenv, firebase‑admin                 | Environment config, Firebase admin SDK |
| **Billing Service** | Stripe SDK (planned)               | Payment processing (future) |
| **Chat Service** | OpenAI SDK (planned)                  | LLM‑driven chat capabilities |
| **Agent Service** | Custom graph & utils                | Autonomous AI agents |
| **Frontend**   | React 18 + Vite                         | Modern front‑end tooling |
|                | Redux Toolkit + React‑Redux              | Global state management |
|                | Tailwind CSS (optional)                 | Utility‑first styling |
|                | ESLint + Prettier                       | Code quality |
| **DevOps**     | Git, GitHub Actions (CI)                | Source control & CI |

---
## 🔑 Key Features

- **Rate Limiting** – Per‑agent request limits enforced via Redis (see `backend/services/agent/config/agentLimit.js`). Limits: chat 20 req/min, coding 5, pdf 5, ppt 5, image 5, search 5.
- **Retrieval‑Augmented Generation (RAG)** – PDF‑based RAG agent (`pdfRag.agent.js`) that extracts text from PDFs, stores embeddings in a vector store, and answers queries using LLMs.
- **Vector Database** – Vector store implementation using Qdrant (`backend/services/agent/config/vectorDb.js`). Documents are embedded and persisted for fast similarity search.

---

## 📂 Project Structure

```text
CortexAI/
├─ backend/
│  ├─ services/
│  │  ├─ auth/
│  │  │  ├─ config/
│  │  │  ├─ controllers/
│  │  │  ├─ models/
│  │  │  ├─ routes/
│  │  │  └─ index.js
│  │  ├─ billing/
│  │  ├─ chat/
│  │  └─ agent/
│  ├─ shared/
│  │  └─ redis/redis.js
│  ├─ docker-compose.yml
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  ├─ pages/
│  │  ├─ components/
│  │  ├─ features/
│  │  ├─ redux/
│  │  └─ assets/
│  ├─ public/
│  ├─ vite.config.js
│  └─ package.json
├─ .gitignore
└─ readme.md
```

---

## ⚙️ Backend Services

| Service | Port | Purpose | Key Files |
|---------|------|---------|-----------|
| **Auth** | 7000 | User authentication, JWT handling, Firebase admin integration | `services/auth/index.js`, `services/auth/routes/auth.route.js` |
| **Billing** | 7100 | Manage subscriptions & payments (future Stripe integration) | `services/billing/index.js` |
| **Chat** | 7200 | Conversational interface powered by LLMs (planned) | `services/chat/index.js` |
| **Agent** | 7300 | Autonomous AI agents, graph‑based workflows | `services/agent/index.js`, `services/agent/graph/` |

All services share the same **Redis** client (`backend/shared/redis/redis.js`) for caching and inter‑service messaging.

---

## 🖼️ Architecture Diagram

```mermaid
flowchart LR
    subgraph Frontend[Frontend (React + Vite)]
        FE[React App]
    end
    subgraph B[Backend]
        direction TB
        A[Auth Service]
        B[Billing Service]
        C[Chat Service]
        D[Agent Service]
        R[Redis]
        M[MongoDB]
    end
    FE -->|REST/API| A
    FE -->|REST/API| B
    FE -->|REST/API| C
    FE -->|REST/API| D
    A -->|Cache| R
    B -->|Cache| R
    C -->|Cache| R
    D -->|Cache| R
    A -->|DB| M
    B -->|DB| M
    C -->|DB| M
    D -->|DB| M
```

---

## 📦 Getting Started

### Prerequisites

- **Node.js** (v20+) & **npm**
- **Docker** & **Docker‑Compose** (optional but recommended)
- **MongoDB** instance (local or remote)
- **Redis** instance

### Backend Setup

```bash
# Clone the repo
git clone https://github.com/krrishbhandari/CortexAI.git
cd CortexAI/backend

# Install dependencies for all services
npm install

# Copy example env files & set variables
cp services/auth/.env.example services/auth/.env
# (repeat for other services)

# Start services via Docker Compose (includes Mongo & Redis)
docker-compose up -d

# Run individual service (example Auth)
cd services/auth
npm run dev   # assumes a dev script that uses nodemon
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm run dev   # Vite dev server at http://localhost:5173
```

---

## ✅ MVP Features

- **User registration & login** via Auth service (Firebase admin)
- **Protected API routes** using JWT middleware
- **Basic UI** with login page, dashboard, and placeholder pages for chat & billing
- **Dockerized environment** for consistent development & deployment
- **Redis caching** for session data and rate‑limiting

---

## 📈 Future Roadmap

- Integrate **Stripe** for real billing
- Add **OpenAI** (or Anthropic) LLM integration for Chat service
- Expand **Agent** capabilities with workflow orchestration
- Implement **CI/CD pipelines** with GitHub Actions
- Add comprehensive **unit & integration tests**

---

## 📄 License

This project is licensed under the **MIT License**.

---

*Generated by Antigravity AI*