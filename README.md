# 🚀 Shashwat Sinha – Portfolio Dashboard

A modern, AI-powered personal portfolio built with **Next.js App Router**.
Designed as an interactive dashboard experience with an integrated AI assistant that can answer questions about my resume in real time.

> ⚡ Built to showcase both frontend craftsmanship and backend AI integration skills.

---

## 🌐 Live Demo

🔗 **Live Site:** [https://portfolio2-5ypj.onrender.com](https://portfolio2-5ypj.onrender.com)
📂 **Repository:** [https://github.com/HarryS10/Portfolio2](https://github.com/HarryS10/Portfolio2)

---

## ✨ Key Features

* 🧭 **Interactive Dashboard UI**
  Sticky sidebar navigation with tab-based content switching.

* 🎨 **Modern Glassmorphism Design**
  Custom Vanilla CSS using backdrop filters, CSS variables, and responsive layouts.

* 🌙 **Dark Mode by Default**
  Carefully selected developer-centric color palette.

* 🤖 **AI Resume Assistant (Groq Powered)**
  A floating, minimizable chatbot trained on structured resume data.

    * Injected system prompt from `resumeData.js`
    * Uses Groq LLM via server-side API route
    * Handles fallback errors gracefully

* ⚡ **Optimized Performance**

    * Next.js App Router
    * Server-side API route for AI requests
    * Clean component-based architecture

---

## 🧠 How the AI Chatbot Works

1. Resume data is stored in:

   ```
   src/data/resumeData.js
   ```

2. The backend API route:

   ```
   src/app/api/chat/route.js
   ```

    * Injects structured resume context
    * Sends conversation to Groq LLM
    * Returns AI-generated response

3. The frontend chatbot component:

   ```
   src/components/Chatbot.js
   ```

    * Manages conversation state
    * Sends user messages to `/api/chat`
    * Displays AI response

This ensures:

* No resume hallucination
* Controlled AI knowledge scope
* Secure API key handling (server-side only)

---

## 🛠 Tech Stack

| Layer      | Technology             |
| ---------- | ---------------------- |
| Framework  | Next.js (App Router)   |
| Frontend   | React                  |
| Styling    | Vanilla CSS            |
| Animations | Framer Motion          |
| Icons      | Lucide React           |
| Backend    | Next.js API Route      |
| AI         | Groq SDK (LLaMA Model) |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Portfolio-2.git
cd Portfolio-2
npm install
```

---

### 2️⃣ Environment Variables

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

⚠️ This file is ignored via `.gitignore`.

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🚀 Deployment (Render)

1. Push project to GitHub.
2. Create a new **Web Service** on Render.
3. Connect the repository.
4. Add environment variable:

```
GROQ_API_KEY
```

5. Deploy.

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── api/chat/route.js
 │   ├── layout.js
 │   └── page.js
 ├── components/
 │   ├── Sidebar.js
 │   ├── Overview.js
 │   ├── Chatbot.js
 └── data/
     └── resumeData.js
```

---

## 🎯 Customization

To update portfolio content:

Edit:

```
src/data/resumeData.js
```

The dashboard UI and chatbot context update automatically.

---

## 🔐 Security Notes

* API key is stored server-side only
* `.env.local` is ignored in Git
* Chatbot does not expose sensitive system prompt
* Resume context is controlled to prevent hallucinations

---

## 📈 Future Improvements

* Add message streaming for faster responses
* Add analytics tracking
* Add typing animation indicator
* Add PDF resume download button
* Improve SEO metadata

---

## 📄 License

MIT License