import { orders } from "../data/orders.js";
import { getProduct } from "../data/products.js";

const url = new URL(window.location.href);
const orderId = url.searchParams.get("orderId");
const productId = url.searchParams.get("productId");

const order = orders.find(order => order.id === orderId);
const orderProduct = order.products.find(
  product => product.productId === productId
);
const product = getProduct(productId);

const orderTime = new Date(order.orderTime).getTime();
const deliveryTime = new Date(orderProduct.estimatedDeliveryTime).getTime();
const currentTime = Date.now();

let percentProgress =
  ((currentTime - orderTime) / (deliveryTime - orderTime)) * 100;

percentProgress = Math.min(Math.max(percentProgress, 0), 100);

let status = "Preparing";
if (percentProgress >= 50 && percentProgress < 100) status = "Shipped";
if (percentProgress >= 100) status = "Delivered";

const trackingHTML = `
  <div class="tracking-container">
    <a class="back-to-orders-link" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${orderProduct.estimatedDeliveryTime}
    </div>

    <div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${orderProduct.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container">
      <div class="progress-label ${status === "Preparing" ? "current-status" : ""}">
        Preparing
      </div>
      <div class="progress-label ${status === "Shipped" ? "current-status" : ""}">
        Shipped
      </div>
      <div class="progress-label ${status === "Delivered" ? "current-status" : ""}">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div
        class="progress-bar"
        style="width: ${percentProgress}%;">
      </div>
    </div>
  </div>
`;

document.querySelector(".js-tracking-container").innerHTML = trackingHTML;