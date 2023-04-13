let btnBuy = document.querySelectorAll('.catalog__buy');

btnBuy.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.catalog__item');
        const productId = productCard.getAttribute('data-product_id');

        
        const productName = productCard.querySelector('.catalog__name').textContent;
        const productPrice = productCard.querySelector('.catalog__price').textContent;
        const productValue = 0;

        const product = {
            name: productName,
            price: productPrice,
            value: productValue,
        };
        let test = localStorage.getItem(productId);
        let count = JSON.parse(test);

        if (count) {
            return localStorage.setItem(productId, JSON.stringify({ ...product, value: ++count.value }));
        }
        localStorage.setItem(productId, JSON.stringify({ ...product, value: 1 }));
    })
})







