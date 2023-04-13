// // определяем функцию для отправки данных на сервер
// const sendData = (data) => {
//   // делаем POST-запрос к API Django
//   fetch('http://127.0.0.1:8000/api/order_products/', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };




let sendMail = document.getElementById('send-to-tg');

const TOKEN = "6244346100:AAEUIOm0fNzq7rHxiQlMEB4pIHgGzgV6H0M";
const CHAT_ID = "-1001979430357";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;



sendMail.addEventListener('submit', function (e) {
  e.preventDefault();


  // Получаем все товары из localStorage и преобразуем их в объекты JavaScript
  let items = Object.values(localStorage);
  let parsedItems = items.map(item => JSON.parse(item));

  // Создаем пустую строку, которая будет содержать информацию о всех товарах
  let itemsText = "";

  // Проходим по всем товарам и добавляем информацию о каждом товаре в строку itemsText
  parsedItems.forEach(item => {
    let name = item.name.trim();
    let price = item.price.trim();
    let value = item.value;
    itemsText += `<b>${name}</b>, цена: ${price}, количество: ${value}\n`;
  });

  // Добавляем строку с информацией о товарах в текст сообщения для отправки в Telegram


  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>ОТправитель</b> ${this.name.value} \n`;
  message += `<b>Почта</b> ${this.email.value} \n`;
  message += `<b>Телефон</b> ${this.tel.value} \n`;
  message += `<b>Комментарий</b> ${this.comment.value} \n`;
  message += `<b>Улица</b> ${this.street.value} \n`;
  message += `<b>Дом</b> ${this.house.value} \n`;
  message += `<b>Квартира</b> ${this.flat.value} \n`;
  message += `<b>Этаж</b> ${this.floor.value} \n`;
  message += `<b>Подъезд</b> ${this.entrance.value} \n`;
  message += `<b>Домофон</b> ${this.intercom.value} \n`;
  message += `<b>Список товаров:</b>\n${itemsText}`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: `html`,
    text: message,
  })
}
)
