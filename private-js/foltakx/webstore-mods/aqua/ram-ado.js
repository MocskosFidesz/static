// CSAK AQUÁN TESZTELT!

// Antizsidó kód (RAM-adó injekció, URL-ről lekérve)
fetch('https://static.fityesz.hu/private-js/foltakx/webstore-mods/ram-ado.html')
.then(response => response.text())
.then(data => {document.querySelector('.shipping-carousel.keszleten').insertAdjacentHTML('beforeend',data);});