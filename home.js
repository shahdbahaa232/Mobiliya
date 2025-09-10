const Button= document.getElementById('dark-mode');
const body = document.body;
const logo = document.getElementById('logo-img');

function update(theme) {
    if (theme === 'dark') {
        logo.src = './photos/mobiliya3.png';
    } else {
        logo.src = './photos/mobiliya1.png';
    }
}

 Button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    Button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', currentTheme);
    update(currentTheme);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        Button.textContent = '☀️';
    } else {
        Button.textContent = '🌙';
    }
    update(savedTheme);
});

// ------------------------------------------------------------------------------------
const cartCounter = document.getElementById("cart-count");
updateCartCounter();
const buyButtons = document.querySelectorAll(".card button");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const card = button.parentElement;
    const imgSrc = card.querySelector("img").src;
    const price = card.querySelector("span").textContent;
    let existingProduct = cart.find(item => item.img === imgSrc);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        img: imgSrc,
        price: price,
        quantity: 1
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  });
});
function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCounter.textContent = cart.length;
}

window.addEventListener("storage", function(event) {
  if (event.key === "cart") {
    updateCartCounter();
  }
});
