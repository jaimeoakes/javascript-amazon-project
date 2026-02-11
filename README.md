🛒 Amazon E-Commerce Project (JavaScript)

Amazon-inspired full front-end application built with vanilla JavaScript, featuring OOP architecture, state management, backend integration via Fetch API, dynamic routing with URL parameters, and unit testing using Jasmine.

This project evolved from a basic DOM app into a structured, multi-page application with clean separation of concerns and simulated backend communication.

---

## 🚀 Features

### ✔️ Product Rendering

- Products loaded from backend (https://supersimplebackend.dev/products)
- Dynamic HTML generation
- Product images, ratings, pricing, quantity selector
- Multiple product types using OOP (Clothing, Appliance)
- Extra product-specific UI (Size chart, Instructions, Warranty)

## ✔️ Advanced Search System

- Search using URL parameters (?search=)
- Case-insensitive filtering
- Keyword-based filtering (not only product name)
- Search works across pages
- URL-driven state (reload-safe)

Example:
index.html?search=socks

### ✔️ Shopping Cart (OOP Architecture)

- Cart implemented using a Cart class
- Add, update, remove products
- Delivery options per item
- Multiple cart instances supported
- Cart persisted in localStorage
- Header auto-updates with cart quantity

### ✔️ Checkout Flow

- Products and cart loaded in parallel using Promise.all
- Dynamic order summary
- Delivery option selection per item
- Automatic total recalculation
- Independent payment summary rendering
- Fully reactive UI based on cart state

### ✔️ Orders Page

- Orders persisted in localStorage
- Displays:
  Order date
  Total amount
  Product list
  Quantity
- “Buy it again” button
- “Track package” button with dynamic URL parameters

### ✔️ Tracking Page

- Reads orderId and productId from URL
- Calculates delivery progress dynamically
- Shows delivery status:
- Preparing
- Shipped
- Delivered
- Progress bar updates based on time
- Fully dynamic rendering

### ✔️ Backend Integration (Simulated API)

- This project integrates with a mock backend:
  https://supersimplebackend.dev

- Fetch usage includes:
  - Loading products
  - Loading cart
  - Submitting orders (POST request)

- Modern async patterns:
  - fetch()
  - async/await
  - Promise.all
  - Error handling via try/catch

## 🧪 Unit Testing (Jasmine)

Behavior-driven unit testing implemented using Jasmine.

### ✔️ Tested Components

- formatCurrency utility
- Cart class logic
- Order summary rendering
- DOM updates after cart mutations

### ✔️ Testing Techniques

- spyOn for mocking localStorage
- Direct cart state manipulation
- DOM validation
- No real browser storage dependency

All tests pass with 0 failures.

## 🧠 Architecture Principles

Clear Separation of Concerns
data/ → business logic & state
scripts/ → UI rendering & DOM manipulation

Key Design Decisions

- No DOM logic inside business layer
- UI reacts to state
- Single source of truth for cart state
- URL parameters used for state-driven rendering
- OOP used for product extensibility

---

## 📁 Project Structure

```
javascript-amazon-project/
│
├── data/
│   ├── cart-class.js
│   ├── cart.js
│   ├── products.js
│   ├── deliveryOptions.js
│   └── orders.js
│
├── scripts/
│   ├── amazon.js
│   ├── checkout.js
│   ├── orders.js
│   ├── tracking.js
│   ├── checkout/
│   │   ├── checkoutHeader.js
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/
│       └── money.js
│
├── tests/
│   ├── checkout/
│   ├── data/
│   ├── utils/
│   └── tests.html
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

- avaScript (ES6+)
- Object-Oriented Programming (OOP)
- Fetch API
- Async / Await
- Promise.all
- URLSearchParams
- HTML5
- CSS3
- localStorage API
- Jasmine (Unit Testing)

---

## 🔥 What This Project Demonstrates

- Building a multi-page application without frameworks
- State-driven UI rendering
- Modular architecture
- Backend communication via REST API
- Dynamic routing using URL parameters
- Time-based progress calculations
- Behavior-driven testing

---

## 📌 Future Improvements

- Full backend replacement (Node/Express)
- Authentication system
- Persistent database integration
- Cart synchronization with backend
- UI enhancements
- Migration to React architecture
- Pagination & advanced filtering
- Performance optimizations

---

▶️ How to Run
Run App

Open:
index.html

Run Tests

Open:
tests/tests.html

All specs should pass.

---

## 📬 Contact

**GitHub:** https://github.com/jaimeoakes  
**Portfolio:** https://jaimeoakes.github.io/website-portfolio/
