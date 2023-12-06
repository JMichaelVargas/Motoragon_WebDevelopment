$(document).ready(function () {
    $('[data-bs-toggle="offcanvas"]').offcanvas();
});


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addcart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cartItems = [];
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productContainer = this.closest('.cards_prod');
            const title = productContainer.querySelector('.card_title').textContent;
            const price = parseFloat(productContainer.querySelector('.card_mini_title').textContent.replace(/[^\d.]/g, ''));
            const imageSrc = productContainer.querySelector('.card_img img').src;
            
            let productLink;
            switch (title) {
                case 'Simon Tiktok Beat 27.5':
                    productLink = 'https://buy.stripe.com/test_4gwcNpfAjd6eb723cd';
                    break;
                case 'GT Force 3.0 26r':
                    productLink = 'https://buy.stripe.com/test_8wMaFh5ZJ7LUb727ss';
                    break;
                case 'Simon Trail 27.5':
                    productLink = 'https://buy.stripe.com/test_eVafZBafZfema2Y8wy';
                    break;
                case 'Revel Canyon 29':
                    productLink = 'https://buy.stripe.com/test_bIY3cPbk32rAgrmbIL';
                    break;
                case 'Shunma 26 Lady':
                    productLink = 'https://buy.stripe.com/test_6oE00DdsbaY6dfa004';
                    break;
                case 'Viper Nova Lady':
                    productLink = 'https://buy.stripe.com/test_28o4gTgEn4zI7UQeUZ';
                    break;
                default:
                     productLink = '';
                    break;
                }
    
                const newItem = {
                    title: title,
                    price: price,
                    quantity: 1,
                    imageSrc: imageSrc,
                    productLink: productLink
                };
    
                cartItems.push(newItem);
                updateTotalPrice();
                updateCart();
            });
        });
    
        function updateTotalPrice() {
            totalPrice = cartItems.reduce((total, item) => total + computeItemTotal(item), 0);
        }
    
        function computeItemTotal(item) {
            return item.price * item.quantity;
        }
    
        function updateCart() {
            cartItemsContainer.innerHTML = '';
    
            const cartIcon = document.querySelector('.cart-icon');
            const cartIconCount = cartIcon.querySelector('span');
            cartIconCount.textContent = `${cartItems.length}`;
    
            cartItems.forEach((item, index) => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
    
                cartItemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.title}">
                <div class="cart-details">
                    <h3 class="cart-title">${item.title}</h3>
                    <p class="cart-price">&#8369;${computeItemTotal(item).toFixed(2)}</p>
                    <div class="cart-quantity">
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <button class="delete-btn" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
                `;
    
                cartItemsContainer.appendChild(cartItemElement);
            });
    
            totalPriceElement.innerHTML = `Total: &#8369;${totalPrice.toFixed(2)}`;
        }
    
        function increaseQuantity(index) {
            const item = cartItems[index];
            item.quantity += 1;
            updateTotalPrice();
            updateCart();
        }
    
        function decreaseQuantity(index) {
            const item = cartItems[index];
            if (item.quantity > 1) {
                item.quantity -= 1;
                updateTotalPrice();
                updateCart();
            }
        }
    
        window.removeItem = function(index) {
            const removedItem = cartItems.splice(index, 1)[0];
            updateTotalPrice();
            updateCart();
        };
    
        document.getElementById('checkout-button').addEventListener('click', function () {
            if (cartItems.length > 0) {
                const lastProductLink = cartItems[cartItems.length - 1].productLink;
                initiatePayment(lastProductLink);
            } else {
                alert('No product available. Add items to your cart before checking out.');
            }
        });
    
        function initiatePayment(productLink) {
            console.log('Redirecting to product link:', productLink);
            window.location.href = productLink;
        }
    });