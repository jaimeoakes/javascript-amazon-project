🛒 Amazon E-Commerce Project (JavaScript)

Amazon-inspired e-commerce front-end project built with vanilla JavaScript, focusing on clean architecture, object-oriented design (OOP), state management, localStorage persistence, and unit testing with Jasmine.

This project is part of my JavaScript learning journey and evolves as more advanced concepts are introduced and refactored into the codebase.

---

## 🚀 Features

### ✔️ Product Rendering

- Products loaded from `data/products.js`
- Dynamic HTML generation using JavaScript
- Product images, ratings, prices and quantity selector
- Support for different product types via classes (e.g. Clothing, Appliance)

### ✔️ Shopping Cart System (OOP)

- Cart implemented using a Cart class
- Multiple cart instances supported (e.g. user cart, business cart)
- Add new products to the cart
- Update quantities and delivery options
- Remove products from the cart
- Cart state persisted using `localStorage`
- Delivery option support
- Cart quantity indicator in header

### ✔️ Checkout Flow

- Dynamic order summary rendering
- Update quantity inline
- Change delivery options per product
- Automatic recalculation of totals
- Payment summary rendered independently
- Header updates based on cart state

### ✔️ Clean Architecture

- Clear separation of concerns:
- data/ → business logic and state
- scripts/ → UI rendering and DOM manipulation
- Cart logic encapsulated inside a class (data/cart-class.js)
- No direct DOM manipulation inside business logic
- UI reacts to state changes, not the other way around

### 🧪 Unit Testing (Jasmine)

This project uses Jasmine for unit testing and focuses on behavior-driven tests, not implementation details.

✔️ What is tested

- formatCurrency utility
- Cart logic (add, remove, update, totals)
- Order summary rendering
- DOM updates after cart mutations

✔️ Testing Highlights

- localStorage mocked using spyOn
- Tests interact directly with the Cart instance state
- No reliance on real browser storage
- All tests pass with 0 failures

---

### ▶️ How to run tests

1. Open tests/tests.html in your browser
2. Jasmine Spec Runner will load automatically
3. All specs should pass

---

## 📁 Project Structure

```
javascript-amazon-project/
│
├── data/
│ ├── cart-class.js
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
│   └── money.js
│
├── tests/
│ ├── checkout/
│ │ └── orderSummaryTest.js
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
- Object-Oriented Programming (OOP)
- HTML5
- CSS3
- Jasmine (Unit Testing)
- localStorage API

---

## 📌 Next Steps (Planned)

- Expand test coverage for checkout edge cases
- Improve cart class extensibility
- Add order history persistence
- Improve UI responsiveness
- Add product filtering and search
- Prepare project for React migration

---

## 📬 Contact

**GitHub:** https://github.com/jaimeoakes  
**Portfolio:** https://jaimeoakes.github.io/website-portfolio/
