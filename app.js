const callUsImage = document.getElementById('call_us');
const newImageURL = 'call_us_black.png'; // Путь к новому изображению

callUsImage.addEventListener('mouseover', function () {
  this.src = newImageURL;
});

callUsImage.addEventListener('mouseout', function () {
  this.src = 'call_us.png'; // Возвращаем исходное изображение при уходе курсора
});



const facebookImage = document.getElementById('facebook');
const newfacebookURL = 'facebook-app-symbol_green.png'; // Путь к новому изображению

facebookImage.addEventListener('mouseover', function () {
  this.src = newfacebookURL;
});

facebookImage.addEventListener('mouseout', function () {
  this.src = 'facebook-app-symbol.png'; // Возвращаем исходное изображение при уходе курсора
});



const whatsappImage = document.getElementById('WhatsApp');
const newwhatsappURL = 'whatsapp_green.png'; // Путь к новому изображению

whatsappImage.addEventListener('mouseover', function () {
  this.src = newwhatsappURL;
});

whatsappImage.addEventListener('mouseout', function () {
  this.src = 'whatsapp.png'; // Возвращаем исходное изображение при уходе курсора
});



const learnImage = document.getElementById('price_png');
const newlearnImage = 'price_green.png'; // Путь к новому изображению

learnImage.addEventListener('mouseover', function () {
  this.src = newlearnImage;
});

learnImage.addEventListener('mouseout', function () {
  this.src = 'price.png'; // Возвращаем исходное изображение при уходе курсора
});



