const frasesBonitas = [
    "No te rindas, cada día es una nueva oportunidad para avanzar ;D.",
    "Eres capaz de superar cualquier desafío que se te presente.",
    "Confía en ti misma y en tu capacidad para lograr tus metas.",
    "Cada obstáculo es una oportunidad para crecer y aprender.",
    "Mantén tu enfoque en lo que deseas y nunca pierdas la esperanza.",
    "La perseverancia es la clave para alcanzar el éxito. Animo",
    "Tu fortaleza interior es mayor de lo que imaginas.",
    "Sigue luchando, tus esfuerzos pronto darán fruto.",
    "La determinación es el primer paso hacia el logro de tus sueños.",
    "Cada pequeño logro es un gran paso hacia tus objetivos.",
    "Tienes el poder de cambiar tu vida para mejor.",
    "Cree en ti misma, y el universo conspirará a tu favor.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No hay límites para lo que puedes lograr si te lo propones.",
    "Hey sonrie ;).",
    "ANIMO ANIMO.",
    "SI SE PUEDE, SI SE PUEDE.",
    "Las bonitas no lloran.",
    "La vida es un viaje, no un destino. Disfruta cada momento del proceso.",
    "Sigue adelante, porque cada paso te acerca más a tu objetivo."
];


function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesBonitas.length);
    return frasesBonitas[indiceAleatorio];
}
const click = document.querySelector('.click');
const giftbox = document.querySelector('.giftBox');
const Shadows = document.querySelector('.shadows');
const Gift = document.querySelector('.gift')
const Text = document.querySelector('.text')

click.addEventListener('click', () => {
    if (click.className===('click')) {
       click.classList.add('active')
       giftbox.classList.add('active')
       Shadows.classList.add('active')
       Gift.classList.add('active')
       Text.classList.add('active')
       Text.classList.remove('active2')

       Text.innerHTML = obtenerFraseAleatoria();


    } 
    else{
        click.classList.remove('active')
        giftbox.classList.remove('active')
        Shadows.classList.remove('active')
        Gift.classList.remove('active')
        Text.classList.remove('active')
        Text.classList.add('active2')
    }
});