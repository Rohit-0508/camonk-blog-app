# CA Monk – Blog Application (Frontend Assignment)

This project is my implementation of the **CA Monk Blog Application frontend assignment**.  
The goal was to build a modern, clean, and user-friendly blog interface using React and modern frontend tooling.

---

## ✨ Features Implemented

- 📄 Blog list and blog detail layout (master–detail view)
- ⚡ Data fetching and caching using **TanStack Query**
- ➕ Create new blogs using a modal form
- 🧠 Client-side validation (title required)
- ⏳ Skeleton loaders for better loading experience
- 🎨 Category tags with dynamic colors
- 🖼️ Default image and fallback icon for broken image URLs
- 📌 Sticky “Add Blog” action in the blog list
- 📱 Responsive layout for smaller screens
- 🔄 Newly created blogs appear at the top (sorted by date)

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **TanStack Query** – server state management
- **Tailwind CSS** – styling
- **shadcn/ui** – reusable UI components
- **JSON Server** – mock backend API
- **Lucide React** – icons

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Git

### Setup Instructions

```bash
# Install dependencies
npm install

# Start JSON Server (Backend API)
npm run server
# API runs on http://localhost:3001

# Start the development server
npm run dev
# App runs on http://localhost:5173
