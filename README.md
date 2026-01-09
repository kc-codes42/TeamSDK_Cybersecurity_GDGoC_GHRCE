# NetShield — AI-Assisted Network Threat Monitoring Platform

---

## Project Idea

**NetShield** is a cybersecurity monitoring platform designed to help organizations detect and respond to network-level security threats more efficiently.

Modern systems generate large volumes of security events such as failed login attempts, suspicious access patterns, and abnormal activity spikes. These events often go unanalyzed due to lack of tooling, time, or expertise. NetShield addresses this gap by acting as a lightweight **Security Operations Center (SOC)**-style system.

The platform ingests security events, analyzes them using **Google Gemini AI** to assess threat severity and risk, and presents actionable insights through a centralized dashboard. Instead of relying on black-box predictions, NetShield uses AI as a **decision-support layer**, providing explainable severity levels, risk scores, and mitigation suggestions.

The goal is to improve visibility, prioritization, and response time for cybersecurity incidents in a scalable and practical way.

---

## Tech Stack Used

### Backend & Cloud
- **Google Firebase**
  - Firebase Authentication (user access)
  - Firestore (event and alert storage)
- **Google Cloud Functions** (event processing and AI invocation)
- **Google Cloud Run** (service deployment)
- **Google Cloud IAM** (secure service access)

### AI
- **Google Gemini API**
  - Threat severity classification
  - Risk scoring
  - Human-readable explanations
  - Suggested mitigation actions

### Visualization
- **Google Maps Platform**
  - Geographic visualization of threat origins
  - Severity-based markers and filtering

### Language & Tools
- Python (backend logic)
- JavaScript / React (dashboard UI)

---

## Setup / Run Instructions

### Prerequisites
- Google Cloud account
- Firebase project
- Gemini API access enabled
- Node.js and Python installed
- Google Maps API key

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/netshield.git
cd netshield
````

---

### 2. Firebase Setup

* Create a Firebase project
* Enable:

  * Firebase Authentication (Email/Password)
  * Firestore Database
* Download Firebase service account key
* Configure environment variables:

```bash
FIREBASE_PROJECT_ID=your_project_id
GOOGLE_APPLICATION_CREDENTIALS=path/to/serviceAccount.json
```

---

### 3. Gemini API Setup

* Enable Gemini API in Google Cloud Console
* Generate API key
* Set environment variable:

```bash
GEMINI_API_KEY=your_gemini_api_key
```

---

### 4. Google Maps Setup

* Enable Google Maps Platform
* Generate Maps API key
* Add key to frontend configuration:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_maps_key
```

---

### 5. Backend (Cloud Functions / API)

```bash
cd backend
pip install -r requirements.txt
```

Run locally:

```bash
python main.py
```

Or deploy to Cloud Run:

```bash
gcloud run deploy netshield-backend
```

---

### 6. Frontend (Dashboard)

```bash
cd frontend
npm install
npm start
```

---

### 7. Demo Data

* Use the provided script to insert simulated security events
* Events will automatically be analyzed by Gemini and reflected on the dashboard

---

## Team Members

| Name             | Role             | Responsibility                |
| ---------------- | ---------------- | ----------------------------- |
| Kaustubh Chauhan | Team Leader      | Authentication, JWT, Security |
| Dyaneshwar Wagh  | Backend Engineer | Log Ingestion, KMS Encryption |
| Shreyash Lambat  | Backend Engineer | Threat Detection, Alerts      |
| Kaif Kazi        | Cloud Engineer   | Deployment, Cloud Run, IAM    |

---

## Summary

NetShield demonstrates how modern cloud infrastructure and AI can be combined to build a practical, explainable cybersecurity monitoring system. The project focuses on correctness, clarity, and real-world applicability, making it suitable both as a hackathon MVP and as an industry-aligned cybersecurity solution.

```
```
