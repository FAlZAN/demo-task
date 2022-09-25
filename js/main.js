console.log("JS is up & running..");
console.log(window.innerWidth);

window.onresize = function () {
  location.reload();
};

if (window.innerWidth < 1280) {
  const container = document.querySelector(".container");
  container.style.display = "none";

  const message = document.createElement("h2");
  message.className = "errorMessage";
  message.style.color = "gray";
  message.innerText =
    "sorry for the inconvenience, we are working on mobile version.";
  document.body.appendChild(message);
}

const categoryProducts = document.querySelector(".category-products");

for (let count = 0; count < 12; count++) {
  const categoryProduct = document.createElement("div");
  const anchor = document.createElement("a");
  anchor.href = "../pages/product-page.html";
  const productImg = document.createElement("img");
  productImg.src = "../assets/sample/sample20.png";
  const productName = document.createElement("p");
  productName.innerText = "Name of product";
  const productPrice = document.createElement("p");
  productPrice.innerText = "$ 24.95";

  categoryProduct.className = "category-product";
  anchor.appendChild(productImg);
  anchor.appendChild(productName);
  anchor.appendChild(productPrice);
  categoryProduct.appendChild(anchor);

  categoryProducts.appendChild(categoryProduct);
}
