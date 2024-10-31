document.addEventListener('DOMContentLoaded', function() {
    const tituloGaleria = document.getElementById('titulo-galeria');
    const galery = document.getElementById('galery');

    tituloGaleria.addEventListener('click', function() {
        if (galery.style.display === 'none' || galery.style.display === '') {
            galery.style.display = 'flex';
        } else {
            galery.style.display = 'none';
        }
    });
});