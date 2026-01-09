# Team-SDK_Secure_Audit_Platform

# SECUREAUDIT  
**Encrypted Audit Logging & Rule-Based Threat Detection Backend**

---

## Team Members

| Name | Role | Responsibility |
|-----|------|----------------|
| Kaustubh Chauhan | Team Leader | Authentication, JWT, Security |
| Dyaneshwar Wagh | Backend Engineer | Log Ingestion, KMS Encryption |
| Shreyash Lambat | Backend Engineer | Threat Detection, Alerts |
| Kaif Kazi | Cloud Engineer | Deployment, Cloud Run, IAM |


## 1. Project Idea

**SECUREAUDIT** is a backend-first cybersecurity platform designed to securely ingest, store, and analyze audit and security logs.

Modern systems generate large volumes of sensitive logs that often contain credentials, IP addresses, internal errors, or access details. Storing these logs in plaintext creates a major security risk.

SECUREAUDIT solves this by:
- Encrypting sensitive log data **before persistence** using **Google Cloud KMS**
- Enforcing **strict authentication and role-based access control**
- Detecting suspicious behavior using **deterministic, rule-based threat detection**
- Exposing clean, RESTful APIs suitable for enterprise environments

This project is intentionally built as:
- A **hackathon-ready MVP**
- An **interview-grade backend project** aligned with real-world practices used at companies like Amazon, Zoho, and Freshworks

No frontend is included. The system is API-only by design.

---

## 2. Core Features

- User authentication with JWT
- Role-based authorization (ADMIN, ANALYST, VIEWER)
- Secure audit log ingestion
- Encryption of sensitive fields using Google Cloud KMS
- Structured log storage in PostgreSQL
- Deterministic threat detection rules (no ML, no fake AI)
- Alert generation and storage
- Clean layered architecture (Controller → Service → Repository)

---

## 3. Tech Stack Used

### Backend
- **Language:** Java 17  
- **Framework:** Spring Boot  
- **Build Tool:** Maven  

### Security
- Spring Security
- JWT (stateless authentication)
- BCrypt password hashing
- Google Cloud KMS (mandatory encryption layer)

### Database
- PostgreSQL (Cloud SQL compatible)
- Spring Data JPA / Hibernate

### Cloud & Deployment
- Google Cloud Platform
- Google Cloud KMS
- Google Cloud Run (containerized deployment)

### Tooling
- VS Code
- Git
- Postman / curl (API testing)

---

## 4. Architecture Overview

```

Client
|
|  JWT
v
Spring Boot API (Cloud Run)
|
|-- Auth & RBAC
|-- Log Ingestion (Encrypt → Store)
|-- Threat Detection (Rule-Based)
|-- Alert Management
|
PostgreSQL (Cloud SQL)
|
Google Cloud KMS

````

Key architectural principles:
- Stateless backend
- Encrypt-before-store invariant
- No sensitive data logged or persisted in plaintext
- Deterministic, explainable threat detection logic

---

## 5. Setup & Run Instructions (Local)

### 5.1 Prerequisites

- Java 17
- Maven
- PostgreSQL
- Google Cloud account (for KMS)
- Git

---

### 5.2 Clone the Repository

```bash
git clone <repository-url>
cd secureaudit
````

---

### 5.3 Configure PostgreSQL

Create database and user:

```sql
CREATE DATABASE secureaudit;
CREATE USER secureaudit WITH PASSWORD 'secureaudit';
GRANT ALL PRIVILEGES ON DATABASE secureaudit TO secureaudit;
```

Create required tables (example: users):

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

---

### 5.4 Configure Environment Variables

Set the following environment variables:

```bash
# JWT
JWT_SECRET=<base64-encoded-secret>
JWT_EXPIRATION_SECONDS=3600

# Database
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/secureaudit
SPRING_DATASOURCE_USERNAME=secureaudit
SPRING_DATASOURCE_PASSWORD=secureaudit

# Google Cloud KMS
GCP_PROJECT_ID=<your-project-id>
KMS_LOCATION=global
KMS_KEY_RING=secureaudit-keyring
KMS_KEY_NAME=audit-log-key
```

No secrets are hardcoded in the codebase.

---

### 5.5 Google Cloud KMS Setup (Once)

* Enable **Cloud KMS API**
* Create:

  * Key Ring: `secureaudit-keyring`
  * Crypto Key: `audit-log-key`
  * Location: `global`
* Grant the service account:

  ```
  roles/cloudkms.cryptoKeyEncrypterDecrypter
  ```

---

### 5.6 Run the Application

```bash
mvn spring-boot:run
```

Application runs on:

```
http://localhost:8080
```

---

## 6. API Overview

| Method | Endpoint     | Description                | Roles                  |
| ------ | ------------ | -------------------------- | ---------------------- |
| POST   | /auth/signup | Register user              | Public                 |
| POST   | /auth/login  | Login and get JWT          | Public                 |
| POST   | /logs        | Ingest encrypted audit log | ADMIN, ANALYST         |
| GET    | /logs        | Query logs (paginated)     | ADMIN, ANALYST, VIEWER |
| GET    | /alerts      | List triggered alerts      | ADMIN, ANALYST         |

---

## 7. Security Design Summary

* Passwords hashed using BCrypt
* JWT used for stateless authentication
* Role-based access enforced at controller and method level
* Sensitive log messages encrypted using Google Cloud KMS
* No plaintext sensitive data stored or logged
* Minimal IAM permissions for service accounts

---

## 8. Scalability Notes

* Stateless API allows horizontal scaling on Cloud Run
* PostgreSQL indexes support high-volume log queries
* Encryption handled by managed KMS service
* Threat detection rules can be moved to async processing if needed

---

## 9. Limitations (MVP Scope)

* Rule-based threat detection only (no ML)
* Synchronous rule evaluation
* No frontend or dashboard
* No alert notifications (email/SMS) in MVP

---

## 10. Intended Use

* Hackathon submission
* Backend internship evaluation project
* Demonstration of secure system design and clean backend architecture

```
```
