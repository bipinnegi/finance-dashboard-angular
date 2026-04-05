# 💰 Finance Dashboard (Angular)

A modern, responsive **Finance Dashboard UI** built using Angular, Tailwind CSS, and Chart.js to help users track and understand their financial activity.

---

## 🚀 Live Demo

🔗 https://finance-dashboard-angular.vercel.app/

---

## ✨ Features

### 📊 Dashboard Overview

* Real-time **Total Balance, Income, and Expenses**
* Interactive **Balance Trend (Line Chart)**
* **Spending Breakdown (Pie Chart)**

### 💳 Transactions Management

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* 🔍 Search & filter transactions
* 🔽 Sort by amount

### 🔐 Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add & delete transactions

### 🧠 Insights Section

* Highest spending category with percentage
* Monthly expense comparison
* Average daily expense

### 💾 Data Persistence

* Data stored in **localStorage**
* Transactions remain after refresh

---

## 🧩 Tech Stack

* **Framework:** Angular (Standalone Components)
* **Styling:** Tailwind CSS
* **Charts:** Chart.js
* **State Management:** Angular Services
* **Persistence:** localStorage

---

## 🏗️ Architecture & Approach

* Centralized state using a **Transaction Service**
* Modular component structure:

  * Dashboard
  * Transactions
  * Shared UI (Sidebar, Header)
* Clean separation of concerns
* SSR-safe implementation for browser APIs

---

## 🎨 UI / UX Highlights

* Modern **glassmorphism design**
* Responsive layout (mobile + desktop)
* Smooth hover interactions
* Clean typography & spacing
* Empty state handling

---

## ⚙️ How to Run Locally

```bash
# Clone repo
git clone https://github.com/your-username/finance-dashboard-angular.git

# Install dependencies
npm install

# Run project
ng serve
```

Visit:

```
http://localhost:4200
```

---

## 📌 Key Highlights

* Focused on **real-world UI patterns**
* Designed for **clarity and usability**
* Demonstrates **state management & data flow**
* Built with **scalable structure**

---

## 🙌 Author

**Bipin Negi**
Frontend Developer

---

## ⭐ Feedback

If you like this project, feel free to star ⭐ the repository!
