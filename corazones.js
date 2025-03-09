// Función para crear los corazones 
function crearCorazon() {
    // Crear un elemento div para el corazón
    const corazon = document.createElement('div');
    
    // Agregar clase para estilizar
    corazon.className = 'corazon';
    
    // Establecer posición inicial aleatoria en el eje X
    corazon.style.left = Math.random() * 100 + 'vw';
    
    // Establecer un tamaño aleatorio
    const tamano = Math.random() * 20 + 10;
    corazon.style.fontSize = tamano + 'px';
    
    // Establecer opacidad aleatoria para que sea transparente
    corazon.style.opacity = Math.random() * 0.5 + 0.3;
    
    // Establecer un color aleatorio con transparencia
    const hue = Math.random() * 360;
    corazon.style.color = `hsla(${hue}, 100%, 50%, 0.7)`;
    
    // Agregar el símbolo del corazón
    corazon.innerHTML = '❤';
    
    // Agregar el corazón al body
    document.body.appendChild(corazon);
    
    // Establecer una duración aleatoria para la animación
    const duracion = Math.random() * 5 + 3;
    corazon.style.animationDuration = duracion + 's';
    
    // Remover el corazón después de que termine la animación
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// Crear un corazón cada 300ms
setInterval(crearCorazon, 300);

// Crear algunos corazones iniciales
for (let i = 0; i < 20; i++) {
    setTimeout(crearCorazon, Math.random() * 2000);
}

// Reproducir sonido al cargar la página
window.onload = function() {
    const audio = new Audio('./sound/Cumpleaños.wav');
    audio.play();
};
