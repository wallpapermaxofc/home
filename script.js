
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

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function checkResolution() {
    if (!isMobile()) {
        document.body.innerHTML = '<div style="text-align: center; margin-top: 20%; font-family: Montserrat, sans-serif; color: red;"><h1>Erro de Dispositivo</h1><p>Este website não é compatível com dispositivos desktop. Por favor, acesse do seu dispositivo móvel.</p></div>';
    }
}
