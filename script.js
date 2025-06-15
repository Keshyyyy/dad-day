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

// Show message function
function showMessage() {
    const messages = [
        "Dad, you're our superhero! 🦸‍♂️",
        "Thanks for all the dad jokes! 😄",
        "You're the best father ever! 🏆",
        "Love you to the moon and back! 🌙",
        "Happy Father's Day, champion! 🎉"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create floating message
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #4682b4, #5f9ea0);
        color: white;
        padding: 20px 40px;
        border-radius: 25px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 1000;
        animation: messagePopup 3s ease-in-out forwards;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        text-align: center;
    `;
    
    // Add animation keyframes
    if (!document.getElementById('messageAnimation')) {
        const style = document.createElement('style');
        style.id = 'messageAnimation';
        style.textContent = `
            @keyframes messagePopup {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(style);
    }
    
    messageDiv.textContent = randomMessage;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
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

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% { opacity: 1; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(sparkleStyle);