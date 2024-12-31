const container = document.getElementById('root');

function createFlyingText() {
 const textElement = document.createElement('div');
 textElement.classList.add('flying-text');
 textElement.textContent = Math.random() > 0.5 ? '0' : '1'; // Rastgele 0 veya 1

 // Başlangıç pozisyonu
 textElement.style.left = Math.random() * 100 + 'vw'; // Ekranın genişliği

 container.appendChild(textElement);
 // Animasyonu başlat
 const duration = Math.random() * 3 + 2; // 2-5 saniye arası
 textElement.style.animationDuration = duration + 's';

 // Animasyon bittiğinde elemanı kaldır
 setTimeout(() => {
 textElement.remove();
 }, duration * 1000);
 }

 // Yeni yazı oluşturma süresi
setInterval(createFlyingText, 500); // Her 500 ms'de bir yeni yazı oluştur
