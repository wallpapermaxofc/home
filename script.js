function downloadImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'wallpaper.jpg'; // Nome do arquivo padrão
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Filtro na barra de pesquisa
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const wallpapers = document.querySelectorAll('.wallpaper');

    wallpapers.forEach(wallpaper => {
        const imgAlt = wallpaper.querySelector('img').alt.toLowerCase();
        if (imgAlt.includes(searchTerm)) {
            wallpaper.style.display = 'block';
        } else {
            wallpaper.style.display = 'none';
        }
    });
});

// Aguarda o carregamento de imagens
window.addEventListener('load', () => {
    const gallery = document.getElementById('gallery');
    const images = gallery.querySelectorAll('img');

    images.forEach(img => {
        img.onload = () => {
            img.parentElement.style.visibility = 'visible';
        };
    });
});

window.addEventListener('load', () => {
    const gallery = document.querySelector('.gallery');
    const wallpapers = document.querySelectorAll('.wallpaper');

    wallpapers.forEach(item => {
        const img = item.querySelector('img');
        img.onload = () => {
            const height = img.getBoundingClientRect().height;
            item.style.flexBasis = `${height}px`;
        };
    });
});
