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
Move into the frontend folder and install its interface dependencies:

Bash
cd frontend
npm install
2. Configure Environment Secrets

Create a .env file in the root directory of your project (same level as server.js) to secure your system parameters:

Code snippet :

PORT=5000
GEMINI_API_KEY=your_google_ai_studio_api_key

(Note: .env is included in .gitignore to prevent private token exposure to remote repositories.)

3. Run the Architecture
Open two terminal instances to boot up both components of the stack simultaneously:

Terminal 1 (Backend Gateway):

Bash
node server.js
Terminal 2 (React Interface):

Bash
cd frontend
npm run dev
Open the local network link (e.g., http://localhost:5173) in your browser to run the application protocol live.
