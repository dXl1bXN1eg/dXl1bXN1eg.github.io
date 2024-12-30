document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.querySelector('.matrix');
    const numColumns = Math.floor(window.innerWidth / 18);
    const characters = '01';
    
    const spanElements = [];

    function randomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Matrix'in başlangıcını oluştur
    function createMatrix() {
        for (let i = 0; i < numColumns; i++) {
            let span = document.createElement('span');
            span.style.left = `${i * 18}px`;
            span.style.animationDelay = `${Math.random() * 5}s`;
            span.innerHTML = randomCharacter();
            matrix.appendChild(span);
            spanElements.push(span);

            span.style.animation = `fall ${5 + Math.random() * 3}s linear infinite`;
        }
    }

    // Animasyon başlatılmadan önce gerekli olanları hemen yükleyelim
    createMatrix();

    // Karakter güncelleme işlemini optimize et
    function updateMatrix() {
        for (let i = 0; i < spanElements.length; i++) {
            if (Math.random() > 0.95) {
                spanElements[i].innerHTML = randomCharacter();
            }
        }
    }

    // İlk animasyonu hemen başlatmak yerine bir süre sonra başlatabiliriz
    setTimeout(() => {
        function animate() {
            updateMatrix();
            requestAnimationFrame(animate);
        }

        animate();
    }, 100);  // 100ms sonra animasyonu başlat
});



