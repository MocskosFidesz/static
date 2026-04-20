// CSAK ALZÁN TESZTELT!

// Zsidópárti kód (RAM-adó injekció, URL-ről lekérve)
fetch('https://static.fityesz.hu/private-js/foltakx/webstore-mods/ram-ado.html')
.then(response => response.text())
.then(data => {document.querySelector('.nameextc').insertAdjacentHTML('afterend',data);});