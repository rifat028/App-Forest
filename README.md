# 🦸‍♂️ App Forest: The Modern App Platform


## ✨ Overview

App Forest is a comprehensive and responsive web application designed to mimic the functionality and user experience of a modern App Store or Play Store. It serves as a centralized platform for showcasing various applications with detailed statistics, reviews, and a unique installation feature using browser LocalStorage.

This project was built to demonstrate proficiency in modern frontend development, state management, routing, and data visualization.

## 🌟 Key Features

* **Responsive Layout:** Fully optimized design for all devices (mobile, tablet, and desktop).
* **Intuitive Header:** Includes navigation (`Home`, `Apps`, `Installation`) with active route indication and a direct link to the developer's GitHub profile.
* **Dynamic Data:** Applications are loaded from a structured JSON dataset.
* **Live Search & Filtering:** Case-insensitive search on the **All Apps** page that filters results in real-time.
* **App Details Page:** Displays comprehensive app information, including title, rating, reviews, and downloads.
* **Custom Review Chart:** Uses the **Recharts** library to visualize app review data with a responsive bar chart.
* **LocalStorage for Installation (Challenge):**
    * Clicking "Install" saves the app to the browser's LocalStorage.
    * The button dynamically changes to "Installed" and is disabled if already present.
* **My Installation Page (Challenge):** Displays a list of all locally installed apps with an "Uninstall" feature that updates both the UI and LocalStorage.
* **Sort by Downloads (Challenge):** Allows users to sort apps in ascending or descending order based on their download count.
* **Custom Error Pages:** Dedicated pages for invalid routes (`404`) and "App Not Found" messages.
* **Loading States:** Implements loading animations during page navigation and search operations for a better UX.

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React** | For building the user interface with component-based architecture. |
| **Styling** | **Tailwind CSS** | For rapid and utility-first styling. |
| **Routing** | **React Router**  | For client-side routing and navigation. |
| **Data Visualization** | **Recharts** | For creating the responsive App Review Chart. |
| **State Management** | **React Hooks** (e.g., `useState`, `useEffect`) | For managing component state and side effects. |
| **Deployment** | **Netlify**  | For reliable production deployment. |

## 📦 Dependencies

The core project uses the following major packages:

    "@tailwindcss/vite": "^4.1.14",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "recharts": "^3.2.1",
    "tailwindcss": "^4.1.14"
## 💻 Getting Started (Local Setup)

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You need to have **Node.js** and **npm** installed on your system.

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rifat028/App-Forest
    cd App-Forest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm run dev
    ```

The application will now be running locally, typically accessible at `http://localhost:5173` (or the port specified in your setup).

## 🔗 Links

| Resource | URL |
| :--- | :--- |
| **Live Application** | https://app-forest.netlify.app/ |
| **GitHub Repository** | https://github.com/rifat028/App-Forest.git |
| **Developer Profile** | https://github.com/rifat028 |

***

*Created by Istiak Ahmad Rifat*
