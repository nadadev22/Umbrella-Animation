
for (let i = 0; i < 100; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    document.body.appendChild(raindrop);
    
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = (0.5 + Math.random() * 1) + 's';
    raindrop.style.animationDelay = (Math.random() * 2) + 's';
}
