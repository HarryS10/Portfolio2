# Portfolio Dashboard

A sleek, responsive, highly-modern personal portfolio website designed as an interactive dashboard. Built with **Next.js**, **React**, **Vanilla CSS**, and featuring an integrated AI Chatbot powered by **Groq**.

![Portfolio Concept](/README.md) <!-- Replace with an actual screenshot in future -->

## Features

- 📱 **Dashboard Layout**: A premium interface featuring a sticky sidebar and tabbed navigation.
- 🎨 **Glassmorphism Design**: Custom Vanilla CSS (no Tailwind needed) using backdrop filters, CSS variables, and modern aesthetics.
- 🌙 **Dark Mode Default**: Hand-picked color palette for a sleek developer experience.
- 🤖 **AI Assistant**: A floating, minimizable chatbot that knows your resume data and can answer questions contextually using the `llama3-8b-8192` model via the Groq API.
- ⚡ **Optimized Performance**: Statically generated pages with Next.js App Router.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI & Components**: React, [Framer Motion](https://www.framer.com/motion/) (Animations), [Lucide React](https://lucide.dev/) (Icons)
- **Styling**: Vanilla CSS (`globals.css`)
- **AI Integration**: [Groq SDK](https://groq.com/)

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

### 1. Clone & Install
Clone the repository and install the dependencies:
```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root of the project and add your Groq API key:
```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Next.js App Router pages and global layouts.
- `src/app/api/chat/`: API endpoint for the Groq Chatbot.
- `src/components/`: Reusable React components (`Sidebar.js`, `Overview.js`, `Chatbot.js`, etc.).
- `src/data/`: Contains `resumeData.js`, the parsed JSON representation used across the application.

## Customization

To easily change your portfolio data, simply edit the `src/data/resumeData.js` file. The entire dashboard and the AI Chatbot's system prompt will automatically update to reflect the new text!

## License
MIT
