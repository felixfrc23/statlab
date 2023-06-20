document.addEventListener('DOMContentLoaded', function () {
    const barras = document.querySelectorAll('.barra');

    barras.forEach(function (barra) {
        barra.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.8s';
        });

        barra.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.8s';
        });

        barra.addEventListener('click', function () {
            const destrezas = this.getAttribute('data-destrezas');
            const contenido = document.querySelector('.contenidooculto.' + destrezas);

            // Verificar el estado actual del contenido oculto
            if (contenido.style.display === '' || contenido.style.display === 'none') {
                // Si está oculto, mostrarlo cambiando su estilo display a "block"
                contenido.style.display = 'block';
            } else {
                // Si está visible, ocultarlo cambiando su estilo display a "none"
                contenido.style.display = 'none';
            }
        });
    });
});

