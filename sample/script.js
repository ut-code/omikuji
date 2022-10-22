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
  const r = Math.random();
  if (r < daikichi) {
    omikujiImage.src = "./img/omikuji_daikichi.png";
    setTimeout(() => {
      omikujiImage.src = "./img/omikuji-box.png";
    }, 1000);
  } else if (r < daikichi + kichi) {
    omikujiImage.src = "./img/omikuji_kichi.png";
    setTimeout(() => {
      omikujiImage.src = "./img/omikuji-box.png";
    }, 1000);
  } else {
    omikujiImage.src = "./img/omikuji_kyou.png";
    setTimeout(() => {
      omikujiImage.src = "./img/omikuji-box.png";
    }, 1000);
  }
};
