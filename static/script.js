const omikujiButton = document.getElementById("omikuji-button");
const omikujiImage = document.getElementById("omikuji-image");

omikujiButton.onclick = () => {
    const r = Math.random();
    if (r < 0.2) {
        omikujiImage.src = "./omikuji_daikichi.png"
    } else if (r < 0.7) {
        omikujiImage.src = "./omikuji_kichi.png"
    } else {
        omikujiImage.src = "./omikuji_kyou.png"
    }
};

