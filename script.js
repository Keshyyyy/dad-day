function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 25000);
}

function createGiftBox() {
    const giftBox = document.createElement('div');
    giftBox.className = 'gift-box';
    
    giftBox.style.left = Math.random() * 90 + '%';
    giftBox.style.top = Math.random() * 90 + '%';
    giftBox.style.animationDelay = Math.random() * 5 + 's';
    
    document.getElementById('giftContainer').appendChild(giftBox);
}

function createFallingStar() {
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 15}px;
        left: ${Math.random() * 100}vw;
        top: -50px;
        pointer-events: none;
        z-index: 1000;
        animation: starFall ${Math.random() * 2 + 3}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
    `;
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Show stars falling function
function showMessage() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFallingStar();
        }, i * 100); 
    }
}


setInterval(createParticle, 500);

for (let i = 0; i < 6; i++) {
    createGiftBox();
}


document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #87ceeb;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: sparkleAnim 1s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes sparkleAnim {
        0% { opacity: 1; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
    
    @keyframes starFall {
        0% { 
            transform: translateY(-50px) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(calc(100vh + 50px)) rotate(720deg); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(animationStyle);
