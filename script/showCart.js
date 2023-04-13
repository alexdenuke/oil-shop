function showCart() {
    let cart = document.querySelector('.cart');
    let keys = [];
    let values = []
    let out = '';
  
    function getId() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        keys.push(key);
      }
    }
  
    function parseJSON() {
      for (let i = 0; i < keys.length; i++) {
        let value = JSON.parse(localStorage.getItem(keys[i]));
        values.push(value);
      }
    }
  

    function insertHTMLToCart() {
        let key;
        for (let i = 0; i < values.length; i++) {
          let value = values[i];
          key = keys[i]; // set the key value to the variable
          out += `<div class="cart__item">
            <img src="/img/delete.svg" alt="" class="cart__item-delete" data-product_id="${key}">
            <div class="cart__img-wrap">
              <img src="/img/oil-big.jpg" alt="" class="cart__img">
            </div>
            <div class="cart__info" data-product_id="${key}">
              <a href="/html/product.html" class="cart__name">${value.name}
              </a>
              <div class="cart__price-wrap">
                <img src="/img/minus.svg" alt="" class="cart__minus">
                <div class="cart__quantity">${value.value}</div>
                <img src="/img/plus.svg" alt="" class="cart__plus">
                <div class="cart__price">${value.value * parseFloat(value.price)} р</div>
              </div>
            </div>
          </div> `;


          
        }
        cart.insertAdjacentHTML('afterbegin', out);

        function addDeleteListeners() {
            const deleteButtons = document.querySelectorAll('.cart__item-delete');
            deleteButtons.forEach(button => {
              button.addEventListener('click', () => {
                const infoElem = button.closest('.cart__item-delete');
                const productId = infoElem.getAttribute('data-product_id');
                
                localStorage.removeItem(productId);
                infoElem.closest('.cart__item').remove();
              });
            });
          }
        

        function addMinusListeners() {
            const minusButtons = document.querySelectorAll('.cart__minus');
            minusButtons.forEach(button => {
              button.addEventListener('click', () => {
                const infoElem = button.closest('.cart__info');
                const productId = infoElem.getAttribute('data-product_id');
          
                const value = JSON.parse(localStorage.getItem(productId));
                if (value !== null) {
                  value.value -= 1;
                  if (value.value <= 0) {
                    localStorage.removeItem(productId);
                    infoElem.closest('.cart__item').remove();
                  } else {
                    localStorage.setItem(productId, JSON.stringify(value));
                    infoElem.querySelector('.cart__quantity').textContent = value.value;
                    infoElem.querySelector('.cart__price').textContent = value.value * parseFloat(value.price) + ' р';
                  }
                }
              });
            });
          }
          
          function addPlusListeners() {
            const plusButtons = document.querySelectorAll('.cart__plus');
            plusButtons.forEach(button => {
              button.addEventListener('click', () => {
                const infoElem = button.closest('.cart__info');
                const productId = infoElem.getAttribute('data-product_id');
                const value = JSON.parse(localStorage.getItem(productId));
                value.value += 1;
                localStorage.setItem(productId, JSON.stringify(value));
                infoElem.querySelector('.cart__quantity').textContent = value.value;
                infoElem.querySelector('.cart__price').textContent = value.value * parseFloat(value.price) + ' р';
              });
            });
          }
      
          addMinusListeners();
          addPlusListeners();
          addDeleteListeners();


          
          
      }
  
    getId();
    parseJSON();
    insertHTMLToCart();
    
  }
  
  document.addEventListener("DOMContentLoaded", showCart);






// function loadCart() {
//     // проверя. есть ли в localStorage запись cart
//     if (localStorage.getItem('cart')) {
//        // если есть - расшифровываю и записываю в переменную cart
//        cart = JSON.parse(localStorage.getItem('cart'));
//           showCart();
//        }
//     }










        // function insertHTMLToCart() {
    //   for (let i = 0; i < values.length; i++) {
    //     let value = values[i];
    //     out += `<div class="cart__item">
    //       <img src="/static/img/delete.svg" alt="" class="cart__item-delete">
    //       <div class="cart__img-wrap">
    //         <img src="/static/img/oil-big.jpg" alt="" class="cart__img">
    //       </div>
    //       <div class="cart__info" data-product_id="${key}">
    //         <a href="/html/product.html" class="cart__name">${value.name}
    //         </a>
    //         <div class="cart__price-wrap">
    //           <img src="/static/img/minus.svg" alt="" class="cart__minus">
    //           <div class="cart__quantity">${value.value}</div>
    //           <img src="/static/img/plus.svg" alt="" class="cart__plus">
    //           <div class="cart__price">${value.value * parseFloat(value.price)} р</div>
    //         </div>
    //       </div>
    //     </div> `;
    //   }
    //   cart.insertAdjacentHTML('afterbegin', out);
  

    // }


    // function showCart() {
//     let cart = document.querySelector('.cart');
//     let keys = [];
//     let values = []
//     let out = '';
    
//     function getId() {
//       for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         keys.push(key);
//       }
//     }
    
//     function parseJSON() {
//       for (let i = 0; i < keys.length; i++) {
//         let value = JSON.parse(localStorage.getItem(keys[i]));
//         values.push(value);     
//       }
//     }

//     function insertHTMLToCart() {
//         for (let i = 0; i < values.length; i++) {
//           let value = values[i];
//           out += `<div class="cart__item">
//             <img src="/static/img/delete.svg" alt="" class="cart__item-delete">
//             <div class="cart__img-wrap">
//               <img src="/static/img/oil-big.jpg" alt="" class="cart__img">
//             </div>
//             <div class="cart__info" data-product_id="{{product.id}}">
//               <a href="/html/product.html" class="cart__name">${value.name}
//               </a>
//               <div class="cart__price-wrap">
//                 <img src="/static/img/minus.svg" alt="" class="cart__minus">
//                 <div class="cart__quantity">${value.value}</div>
//                 <img src="/static/img/plus.svg" alt="" class="cart__plus">
//                 <div class="cart__price">${value.value * parseFloat(value.price)} р</div>
//               </div>
//             </div>
//           </div> `;
//         }
//         cart.insertAdjacentHTML('afterbegin', out);

//         function addMinusListeners() {
//             const minusButtons = document.querySelectorAll('.cart__minus');
//             minusButtons.forEach(button => {
//               button.addEventListener('click', () => {
//                 alert('minus');
//               });
//             });
//           }
        
//           function addPlusListeners() {
//             const plusButtons = document.querySelectorAll('.cart__plus');
//             plusButtons.forEach(button => {
//               button.addEventListener('click', () => {
//                 alert('plus');
//               });
//             });
//           }
//       }


      
//     getId();
//     parseJSON();
//     insertHTMLToCart();
//     addMinusListeners();
//     addPlusListeners();

//   }
  
  
//   document.addEventListener("DOMContentLoaded", showCart);