# 🍲 Sakkat Oota — Namma Bengaluru Food Registry

### 🔗 Live Deployment: [food-delivery017.vercel.app](https://food-delivery017.vercel.app)

A minimalist, premium editorial broadsheet registry application bringing the legendary flavors of Bengaluru straight to your screen. Built with a paper-and-ink aesthetic inspired by classic newsprints, featuring vibrant highlighter-lime highlights, bold offsets, and hard ink borders.

## 🔗 Developer Credits
Created and maintained by **Manoj Kumar S**:
*   **GitHub:** [@Manojkumars-dev](https://github.com/Manojkumars-dev)
*   **LinkedIn:** [manojkumars-dev](https://www.linkedin.com/in/manojkumars-dev/)

---

## ✨ Core Features

*   **24 Authentic Bengaluru Dishes:** Curated catalog sourced from iconic culinary spots like *CTR (Shree Sagar), MTR (Mavalli Tiffin Room), Vidyarthi Bhavan, Brahmins Coffee Bar, Veena Stores, Hari Super Sandwich, and Corner House*.
*   **Interactive Logo Switcher:** Choose your favorite brand mark directly in the header:
    *   *Steaming Clay Pot* (Minimal hot food icon)
    *   *Ghee Dosa Swirl* (Spiral line-art dosa with melting butter)
    *   *Kannada Heritage Token* (Classic Darshini style brass token enclosing "ಊಟ")
*   **Kannada Copy & Localization:** Bilingual headers, local subtitles, and category button listings.
*   **Invoice-Style Invoice Cart:** Real-time billing calculates subtotal, GST, local delivery fees, and accepts local discount codes (like `SAKKAT` or `OORU15`).
*   **Chained Scroll Viewport:** Catalog listing behaves as a custom-scrollbar viewport, transitioning scroll events dynamically once bounds are reached.
*   **OoruPay Gateway:** Integrated checkout mock banking animation resulting in finalized order tickets.

---

## 🛠️ Tech Stack
*   **Core:** React (Functional components, hooks)
*   **Build Tooling:** Vite
*   **Styling:** Custom CSS Custom Properties (Design tokens)
*   **Icons:** Lucide React

---

## 🚀 Setup & Installation

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Manojkumars-dev/Food-delivery.git
    cd Food-delivery
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

4.  **Build for Production:**
    ```bash
    npm run build
    ```
