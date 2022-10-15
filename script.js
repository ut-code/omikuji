const omikujiButton = document.getElementById("omikuji-button");
const omikujiImage = document.getElementById("omikuji-image");

const sendButton = document.getElementById("send-button");

let daikichi = Number(document.getElementById("daikichi").value);
let kyou = Number(document.getElementById("kyou").value);
let kichi = 1 - daikichi - kyou;

sendButton.onclick = () => {
  daikichi = Number(document.getElementById("daikichi").value);
  kyou = Number(document.getElementById("kyou").value);
  kichi = 1 - daikichi - kyou;
};

omikujiButton.onclick = () => {
  // 切り替え方は改善必要
  const r = Math.random();
  if (r < daikichi) {
    omikujiImage.src = "./omikuji_daikichi.png";
    setTimeout(() => {
      omikujiImage.src = "./omikuji-box.png";
    }, 1000);
  } else if (r < daikichi + kichi) {
    omikujiImage.src = "./omikuji_kichi.png";
    setTimeout(() => {
      omikujiImage.src = "./omikuji-box.png";
    }, 1000);
  } else {
    omikujiImage.src = "./omikuji_kyou.png";
    setTimeout(() => {
      omikujiImage.src = "./omikuji-box.png";
    }, 1000);
  }
};
