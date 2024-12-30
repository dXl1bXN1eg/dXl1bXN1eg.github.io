document.addEventListener('DOMContentLoaded', () => {
    const matrix = document.querySelector('.matrix');
    const numColumns = Math.floor(window.innerWidth / 18); 
    const characters = '01'; 

    function createMatrix() {
        for (let i = 0; i < numColumns; i++) {
            let span = document.createElement('span');
            span.style.left = `${i * 18}px`; 
            span.style.animationDelay = `${Math.random() * 5}s`; 
            span.innerHTML = randomCharacter();
            matrix.appendChild(span);

            span.style.animation = `fall ${5 + Math.random() * 3}s linear infinite`;  
        }
    }

    function randomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    createMatrix();

    setInterval(() => {
        const spans = document.querySelectorAll('.matrix span');
        spans.forEach(span => {
            if (Math.random() > 1.8) {  
                span.innerHTML = randomCharacter();
            }
        });
    }, 100);
});
