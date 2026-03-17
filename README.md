# 🚀 DevOps Webinar Project

This project was created as part of a **hands-on DevOps webinar**, بهدف demonstrating real-world DevOps practices including **CI/CD pipelines, automated deployment, monitoring, and modern development workflows**.

---

## 📌 Overview

The goal of this project is to provide a **practical and didactic example** of how a modern application can be developed, tested, and deployed using DevOps principles.

It covers the full lifecycle:

* Code development
* Version control
* Continuous Integration (CI)
* Continuous Deployment (CD)
* Monitoring and logging

---

## 🛠️ Tech Stack

### 💻 Frontend / Backend

* Node.js
* JavaScript / TypeScript

### ⚙️ DevOps & Tools

* Git & GitHub
* GitHub Actions (CI/CD)
* Docker (containerization)
* Render (deployment)
* Monitoring tools (logs & uptime)
* Grafana-style dashboard (for visualization)

---

## 🔄 CI/CD Pipeline

This project includes a complete CI/CD pipeline:

### ✅ Continuous Integration

* Code push triggers automated workflow
* Install dependencies
* Run build
* Run tests (if configured)

### 🚀 Continuous Deployment

* Automatic deploy after successful build
* Hosted on Render
* Environment configuration via variables

---

## 🐳 Docker Support

The application can be containerized using Docker:

```bash
docker build -t projeto-devops .
docker run -p 3000:3000 projeto-devops
```

---

## 🌐 Live Demo

> (Add your Render link here)

Example:

```
https://your-project.onrender.com
```

---

## 📊 Monitoring

This project demonstrates basic monitoring concepts:

* Application logs
* Uptime monitoring
* Performance observation

Optional:

* Dashboard visualization (Grafana-style simulation)

---

## 📁 Project Structure

```
├── src/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── Dockerfile
├── package.json
└── README.md
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/leticia-gomes/projeto-devops.git
cd projeto-devops
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

---

## 🎯 Purpose

This project is designed for:

* Teaching DevOps concepts in a practical way
* Demonstrating CI/CD pipelines
* Showcasing deployment strategies
* Helping beginners understand real-world workflows

---

## 👩‍💻 Author

Developed by **Letícia Gomes Ribeiro**
Fullstack Developer | React | Node.js | DevOps Enthusiast

---

## 📌 License

This project is open-source and available for learning purposes.
