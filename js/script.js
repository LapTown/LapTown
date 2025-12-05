// قائمة منتجات تجريبية
const products = [
    { name: "HP Pavilion 15", price: "850$", img: "images/laptop1.jpg" },
    { name: "Dell Inspiron 14", price: "780$", img: "images/hhhh.jpg" },
    { name: "Lenovo ThinkPad", price: "920$", img: "images/laptop3.jpg" }
];

// عرض المنتجات في الصفحة
const container = document.getElementById("products");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
    `;

    container.appendChild(card);
});
