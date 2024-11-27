function downloadImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'wallpaper.jpg'; // Nome do arquivo padrão
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Filtragem da galeria com base no termo de pesquisa
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const wallpapers = document.querySelectorAll('.wallpaper');

    wallpapers.forEach(wallpaper => {
        const category = wallpaper.getAttribute('data-category').toLowerCase();
        const name = wallpaper.getAttribute('data-name').toLowerCase();

        if (category.includes(searchTerm) || name.includes(searchTerm)) {
            wallpaper.style.display = 'block';
        } else {
            wallpaper.style.display = 'none';
        }
    });
});