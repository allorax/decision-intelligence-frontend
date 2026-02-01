
# Decision Intelligence Frontend

Frontend for the Decision Intelligence system.

Decision Intelligence Platform

A production-deployed decision intelligence dashboard that aggregates live market signals, processes them using a rule-based analysis engine, and presents actionable insights, risks, and alerts in real time.

This project is intentionally non-AI: all insights are deterministic, explainable, and auditable.

🔗 Live Demo

Frontend (Vercel)
👉 https://decision-intelligence-frontend-vercel-4p2q7v1j5.vercel.app/

Backend API (Railway)
👉 https://web-production-4f69.up.railway.app

🧠 What This Project Does

Collects live external signals (news / feeds)

Processes them on an hourly schedule

Classifies sentiment and trend direction

Generates:

📈 Actionable insights

⚠️ Risk signals

🚨 Alerts

Displays everything in a clean, interactive dashboard

This simulates how investment research, strategy, or decision-support systems work in real-world environments.

✨ Key Features
🔍 Market Intelligence

Multiple tracked markets / sectors

Trend direction: Bullish / Neutral / Bearish

Clear rationale for each trend

💡 Actionable Insights

Signal-driven insights (not static text)

Each insight includes:

Description

Recommendation

Source

Timestamp

⚠️ Risk Signals

Explicit risk detection

Severity levels (low / medium / high)

Designed for decision awareness, not prediction

🚨 Alerts

Signal shifts

Rising risk detection

Event-driven (not spam)

⏱️ Hourly Processing

Background scheduler runs automatically

New data updates without redeploys

🏗️ Technical Architecture
┌─────────────────────┐
│   External Signals  │
│  (RSS / News Feeds) │
└─────────┬───────────┘
          │
          ▼
┌────────────────────────┐
│ FastAPI Backend         │
│ (Railway)               │
│                          │
│ • Rule-based engine      │
│ • Sentiment scoring      │
│ • Trend classification  │
│ • Alert generation      │
│ • Hourly scheduler      │
└─────────┬──────────────┘
          │  REST API
          ▼
┌────────────────────────┐
│ Next.js Frontend        │
│ (Vercel)                │
│                          │
│ • Live data fetching    │
│ • Interactive dashboard │
│ • Market selector       │
│ • Insights & alerts UI  │
└────────────────────────┘

Why rule-based (not AI)?

Fully explainable outputs

No black-box decisions

Deterministic behavior

Easier to audit and extend

🧰 Tech Stack
Frontend

Next.js (App Router)

TypeScript

React

Tailwind CSS

Deployed on Vercel

Backend

FastAPI

Python

APScheduler (hourly jobs)

SQLite (local persistence)

Deployed on Railway

📁 Repositories

Frontend (this repo)
👉 https://github.com/halimarman2007-cyber/decision-intelligence-frontend

Backend
👉 https://github.com/halimarman2007-cyber/decision-intelligence-backend

▶️ How to Run Locally
1️⃣ Backend
git clone https://github.com/halimarman2007-cyber/decision-intelligence-backend
cd decision-intelligence-backend

python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python init_db.py
uvicorn app.main:app --reload


Backend runs at:

http://127.0.0.1:8000/markets

2️⃣ Frontend
git clone https://github.com/halimarman2007-cyber/decision-intelligence-frontend
cd decision-intelligence-frontend

npm install


Create .env.local:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000


Run:

npm run dev


Frontend runs at:

http://localhost:3000

🧪 How to Test the System

Open the dashboard

Observe market data

Wait for an hourly cycle (or trigger manually in backend)

Refresh frontend

See updated insights / alerts

You can also test the API directly:

GET /markets

🚀 Deployment

Backend deployed on Railway

Frontend deployed on Vercel

Connected via environment variables

Fully production-ready


👤 Author

Built by Arman | Yashwan
A project focused on clear reasoning, system design, and production deployment, not just UI or demos.
>>>>>>> 27e673a19313529d551975f9d196c7a764a7f8f8
