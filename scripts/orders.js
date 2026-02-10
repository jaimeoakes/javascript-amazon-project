import { orders } from "../data/orders.js";
import { getProduct } from "../data/products.js";
import { cart } from "../data/cart.js";
import { formatCurrency } from "./utils/money.js";

let ordersHTML = "";

orders.forEach((order) => {
  ordersHTML += `
    <div class="order-container">
      <div class="order-header">
        <div>Order Placed: ${order.orderTime}</div>
        <div>Total: $${formatCurrency(order.totalCostCents)}</div>
        <div>Order ID: ${order.id}</div>
      </div>

      <div class="order-details">
        ${order.products.map((orderProduct) => {
          const product = getProduct(orderProduct.productId);

          return `
            <div class="order-product">
              <img src="${product.image}">
              <div class="order-product-details">
                <div>${product.name}</div>
                <div>Quantity: ${orderProduct.quantity}</div>

                <button 
                  class="buy-again-button js-buy-again"
                  data-product-id="${product.id}">
                  Buy it again
                </button>

                <a
                  class="track-package-button"
                  href="tracking.html?orderId=${order.id}&productId=${product.id}">
                  Track package
                </a>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
});

document.querySelector(".js-orders-grid").innerHTML = ordersHTML;

document.querySelectorAll(".js-buy-again").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    cart.addToCart(productId, 1);
  });
});