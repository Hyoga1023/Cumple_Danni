//colores para las letras//
const text = document.getElementById('dynamic-text');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const textContent = text.textContent;

text.innerHTML = textContent
    .split('')
    .map((letter, index) => 
        letter === ' ' 
            ? ' '
            : `<span class="colorful-letter" style="color: ${colors[index % colors.length]}">${letter}</span>`
    )
    .join('');
