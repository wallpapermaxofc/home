
function downloadImage(imageUrl) {
    const button = event.target;
    button.innerText = "Baixando...";
    button.disabled = true;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'wallpaper.jpg'; // Nome padrão
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    button.innerText = "Baixar";
    button.disabled = false;
}

function filterCategory(category) {
    const wallpapers = document.querySelectorAll('.wallpaper');
    wallpapers.forEach(wallpaper => {
        const tag = wallpaper.querySelector('.tag').innerText;
        wallpaper.style.display = category === '' || tag === category ? 'block' : 'none';
    });
}

let debounceTimeout;
document.getElementById('searchInput').addEventListener('keyup', function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const searchTerm = this.value.toLowerCase();
        const wallpapers = document.querySelectorAll('.wallpaper');
        wallpapers.forEach(wallpaper => {
            const altText = wallpaper.querySelector('img').alt.toLowerCase();
            wallpaper.style.display = altText.includes(searchTerm) ? 'block' : 'none';
        });
    }, 300);
});
