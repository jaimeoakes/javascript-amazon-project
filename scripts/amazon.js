import { cart } from "../data/cart-class.js";
import { products, loadProducts } from "../data/products.js";

// --- SEARCH 
function getSearchFromUrl() {
  const url = new URL(window.location.href);
  const search = url.searchParams.get("search");
  return search ? search.trim() : "";
}

function goToSearch(searchValue) {
  const value = searchValue.trim();
  if (!value) {
    window.location.href = "index.html";
    return;
  }
  window.location.href = `index.html?search=${encodeURIComponent(value)}`;
}

function setupSearchBar() {
  const input = document.querySelector(".search-bar");
  const button = document.querySelector(".search-button");
  if (!input || !button) return;

  // Preenche input com o search da URL
  const search = getSearchFromUrl();
  if (search) input.value = search;

  button.addEventListener("click", () => {
    goToSearch(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      goToSearch(input.value);
    }
  });
}
// --- END SEARCH ---

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  setupSearchBar();

  const search = getSearchFromUrl();
  const lowerSearch = search.toLowerCase();

  let filteredProducts = products;

  if (search) {
    filteredProducts = products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(lowerSearch);

      const keywordMatch = (product.keywords || []).some((keyword) =>
        String(keyword).toLowerCase().includes(lowerSearch)
      );

      return nameMatch || keywordMatch;
    });
  }

  let productsHTML = "";

  filteredProducts.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button 
          class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector(".js-products-grid").innerHTML = productsHTML;

  function updateCartQuantity() {
    const headerElement = document.querySelector(".js-cart-quantity");
    if (headerElement) {
      headerElement.innerHTML = cart.totalCartQuantity();
    }
  }

  const addedMessageTimeoutIds = {};
  const buttons = document.querySelectorAll(".js-add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value);

      cart.addToCart(productId, quantity);
      updateCartQuantity();

      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );

      clearTimeout(addedMessageTimeoutIds[productId]);

      addedMessage.style.opacity = 1;

      addedMessageTimeoutIds[productId] = setTimeout(() => {
        addedMessage.style.opacity = 0;
      }, 2000);
    });
  });

  updateCartQuantity();
}