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

// Debounce para barra de pesquisa
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

    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function checkResolution() {
        if (!isMobile()) {
            document.body.innerHTML = '<div style="text-align: center; margin-top: 20%; font-family: Montserrat, sans-serif; color: red;"><h1>Erro de Dispositivo</h1><p>Este website não é compatível com dispositivos desktop. Por favor, acesse do seu dispositivo móvel.</p></div>';
        }
    }

    window.onload = function() {
        checkResolution();
        window.addEventListener('resize', function() {
            setTimeout(function() {
                location.reload();
            }, 1500);
        });
    };
