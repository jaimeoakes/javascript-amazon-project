# 🛒 Amazon E-Commerce Project (JavaScript)

Amazon-inspired e-commerce front-end project built with **vanilla JavaScript**, focusing on clean architecture, modular logic, localStorage persistence, and unit testing with Jasmine.

This project is part of my JavaScript learning journey and is actively evolving as new concepts are introduced.

---

## 🚀 Features

### ✔️ Product Rendering
- Products loaded from `data/products.js`
- Dynamic HTML generation
- Product images, ratings, prices and quantity selector

### ✔️ Shopping Cart System
- Add new products to the cart
- Increase quantity for existing products
- Cart state persisted using `localStorage`
- Delivery option support
- Cart quantity indicator in header

### ✔️ Clean Architecture
- Business logic separated from UI logic
- Cart logic isolated inside `data/cart.js`
- DOM manipulation handled only in `scripts/`

### ✔️ Unit Testing (Jasmine)
- Unit tests for cart logic and utility functions
- Mocking `localStorage` using `spyOn`
- Tests validate both state changes and side effects
- Proper mock order to avoid false positives

---

## 🧪 Tests

This project uses **Jasmine** for unit testing.

### How to run tests:
1. Open `tests-jasmine/tests.html` in your browser
2. All specs should pass with no failures

Current test coverage includes:
- `formatCurrency` utility
- `addToCart` logic (new and existing products)

---

## 📁 Project Structure

```
javascript-amazon-project/
│
├── data/
│ ├── cart.js
│ ├── products.js
│ └── deliveryOptions.js
│
├── scripts/
│ ├── amazon.js
│ ├── checkout.js
│ ├── checkout/
│ │ ├── checkoutHeader.js
│ │ ├── orderSummary.js
│ │ └── paymentSummary.js
│ └── utils/
│ └── money.js
│
├── tests-jasmine/
│ ├── data/
│ │ └── cartTest.js
│ ├── utils/
│ │ └── moneyTest.js
│ └── tests.html
│
├── styles/
├── images/
│
├── index.html
├── checkout.html
├── orders.html
├── tracking.html
└── README.md

```
---

## 🛠️ Technologies Used
- JavaScript (ES6+)
- HTML5
- CSS3
- Jasmine (Unit Testing)
- localStorage API

---

## 📌 Next Steps (Planned)
- Improve checkout logic
- Expand cart test coverage
- Add order history handling
- Improve UI responsiveness
- Add filtering and search functionality

---

## 📬 Contact
**GitHub:** https://github.com/jaimeoakes  
**Portfolio:** https://jaimeoakes.github.io/website-portfolio/
