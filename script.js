// 作者: 韦仙僧

// 登录功能
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        alert('Login succeeded');
        window.location.href = 'shopping-cart.html';
    } else {
        alert('Please enter your username and password');
    }
});

// 加载商品列表
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
];

document.getElementById('productList')?.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const div = document.createElement('div');
        div.textContent = `${product.name} - ¥${product.price}`;
        productList.appendChild(div);
    });
});
const cart = [];

// 处理 "Add to Cart" 按钮点击事件
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('p').textContent;
        const price = parseFloat(button.getAttribute('data-price'));
        const quantity = parseInt(product.querySelector('.quantity').value) || 1;

        // 添加到购物车
        cart.push({ name, price, quantity });
        alert(`${quantity} x ${name} added to cart!`);
    });
});

// 处理确认订单按钮
document.getElementById('confirmOrder').addEventListener('click', () => {
    const orderDetails = document.getElementById('orderDetails');
    const totalPriceElement = document.getElementById('totalPrice');
    orderDetails.innerHTML = ''; // 清空订单详情
    let totalPrice = 0;

    // 显示购物车内容
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        const div = document.createElement('div');
        div.textContent = `${item.quantity} x ${item.name} - $${itemTotal.toFixed(2)}`;
        orderDetails.appendChild(div);
    });

    // 显示总价
    totalPriceElement.textContent = totalPrice.toFixed(2);
});
// 注销功能
if (window.location.pathname.includes('logout.html')) {
    localStorage.clear();
    alert('Logged out');
}