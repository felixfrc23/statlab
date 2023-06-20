//PRIMERA SECCION

// Obtenemos la referencia al elemento de la sección
const section = document.getElementById('porque');
const textElement = document.getElementById('PorQueTexto');
const buttonElement = document.getElementById('aprendegrande');

// Configuramos el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si la sección está en el viewport
        if (entry.isIntersecting) {
            // Añadimos la clase 'show' a la sección
            section.classList.add('show');
        } else {
            // Removemos la clase 'show' de la sección
            section.classList.remove('show');
        }
    });
});

// Observamos la sección
observer.observe(section);

//SEGUNDA SECCION

const sectionProfesion = document.getElementById('profesion');
const textProfesion = document.getElementById('profesiontexto');
const buttonProfesion = document.getElementById('profesionboton');

const observerProfesion = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionProfesion.classList.add('show');
        } else {
            sectionProfesion.classList.remove('show');
        }
    });
});

observerProfesion.observe(sectionProfesion);

//TERCERA SECCION

const sectionAprende = document.getElementById('aprende');
const buttonAprende = document.getElementById('aprendeboton');
const textAprende = document.getElementById('aprendetexto');

const observerAprende = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionAprende.classList.add('show');
        } else {
            sectionAprende.classList.remove('show');
        }
    });
});

observerAprende.observe(sectionAprende);

//CUARTA SECCION

const sectionIA = document.getElementById('ia');
const buttonIA = document.getElementById('iaboton');
const textIA = document.getElementById('iatexto');

const observerIA = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionIA.classList.add('show');
        } else {
            sectionIA.classList.remove('show');
        }
    });
});

observerIA.observe(sectionIA);
