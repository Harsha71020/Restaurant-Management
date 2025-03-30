document.addEventListener("DOMContentLoaded", () => {
    const menu = [
        { name: "Burger", price: 5.99 },
        { name: "Pizza", price: 8.99 },
        { name: "Pasta", price: 6.99 },
        { name: "Salad", price: 4.99 }
    ];

    const menuList = document.getElementById("menu");
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout");
    const paymentSection = document.getElementById("payment-section");
    const orderSummary = document.getElementById("order-summary");
    const confirmPaymentBtn = document.getElementById("confirm-payment");

    let cart = [];

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = () => {
                cart.splice(index, 1);
                updateCart();
            };

            li.appendChild(removeBtn);
            cartList.appendChild(li);

            total += item.price;
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    menu.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.onclick = () => {
            cart.push(item);
            updateCart();
        };

        li.appendChild(addButton);
        menuList.appendChild(li);
    });

    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        orderSummary.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            orderSummary.appendChild(li);
        });

        paymentSection.classList.remove("hidden");
    });

    confirmPaymentBtn.addEventListener("click", () => {
        alert("Payment Successful! Your order is confirmed.");
        cart = [];
        updateCart();
        paymentSection.classList.add("hidden");
    });
});
