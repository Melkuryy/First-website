const products = [
    { id: 1, name: 'Футболка 1', price: 300, description: 'Це чудова футболка для щоденного використання.', },
    { id: 2, name: 'Футболка 2', price: 350, description: 'Ще одна стильна футболка для вас.',  },
    { id: 3, name: 'Джинси 1', price: 700, description: 'Класичні джинси з високоякісного матеріалу.',},
    { id: 4, name: 'Джинси 2', price: 750, description: 'Модні джинси на кожен день.',  },
    { id: 5, name: 'Куртка 1', price: 1500, description: 'Тепла куртка для осінньої погоди.',  },
    { id: 6, name: 'Куртка 2', price: 1600, description: 'Стильна куртка для ваших пригод.',  },
    { id: 7, name: 'Спідниця 1', price: 500, description: 'Міні-спідниця для легкого літа.',  },
    { id: 8, name: 'Спідниця 2', price: 550, description: 'Чарівна спідниця для вашого гардеробу.', },
    { id: 9, name: 'Світшот 1', price: 400, description: 'Зручний світшот для активного відпочинку.', },
    { id: 10, name: 'Світшот 2', price: 450, description: 'Класичний світшот на кожен день.', },
    { id: 11, name: 'Штани 1', price: 600, description: 'Стрункі штани для бізнесу та відпочинку.', },
    { id: 12, name: 'Штани 2', price: 650, description: 'Сучасні штани зі зручним кроєм.', }
];

const productList = document.getElementById('productList');

function renderProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-3', 'product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Ціна: ${product.price} грн</p>
            <button onclick="showProductDetails(${product.id})">Детальніше</button>
        `;
        productList.appendChild(productItem);
    });
}

function showProductDetails(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(prod => prod.id == productId);

    if (product) {
        const productDetail = document.getElementById('productDetail');
        productDetail.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; max-width: 400px;">
            <h2>${product.name}</h2>
            <p>Ціна: ${product.price} грн</p>
            <p>${product.description}</p>
            <p> замовляй цей товар,ти не пошкодуєш.</p>
        `;
    }
}

function orderProduct() {
    alert('Замовлення товару. Будь ласка, зв\'яжіться з нами для завершення покупки.');
}


if (document.getElementById('productList')) {
    renderProducts();
} else if (document.getElementById('productDetail')) {
    loadProductDetails();
}
