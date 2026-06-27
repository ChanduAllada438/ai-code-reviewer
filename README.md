# ⚡ DeepReview AI — Automated QA & Code Optimization Protocol

An AI-powered full-stack developer tool designed to automate code reviews, optimize execution logic, and dynamically generate comprehensive test suites. This project acts as an automated QA engineer, evaluating source code against type-safety gaps, edge cases, and modern architectural standards.

---

## 🚀 Core Features
* **Automated Code Review:** Deep technical analysis highlighting performance bottlenecks, security flaws, and implicit type-coercion issues.
* **Code Optimization & Refactoring:** Rewrites input snippets into clean, documented, and production-ready code blocks adhering to modern ES6+ standards.
* **Dynamic Test Suite Generation:** Automatically creates extensive automated unit tests using the **Jest framework** targeting failure paths, boundary criteria, and edge cases.

---

## 🛠️ System Architecture & Tech Stack

The application relies on a modern decoupled architecture using an Express-based gateway to process and parse token streams from Google's generative frontier models directly into structured UI layouts.

* **Frontend:** React, Vite, Axios
* **Backend:** Node.js, Express.js
* **AI Engine:** Google Gemini API (`gemini-3.5-flash`)
* **Testing Target:** Jest Framework

---

## 📦 Local Setup Instructions

### 1. Clone & Install Dependencies
First, install dependencies for the backend root server:
```bash
npm install