const iframeElem = document.getElementById("iframe-elem");

const reflectButton = document.getElementById("reflect-button");
const addResultButton = document.getElementById("add-result-button");
const titleInput = document.getElementById("title-input");
const captionInput = document.getElementById("caption-input");

window.onload = () => {
  const titleOutput = iframeElem.contentDocument.getElementById("title-output");
  const captionOutput =
    iframeElem.contentDocument.getElementById("caption-output");
  const resultWrapper =
    iframeElem.contentDocument.getElementById("result-wrapper");
  reflectButton.onclick = () => {
    titleOutput.textContent = titleInput.value;
    captionOutput.textContent = captionInput.value;
  };
  addResultButton.onclick = () => {
    let resultBox = document.createElement("div");
    resultBox.style.width = "200px";
    resultBox.style.height = "200px";
    resultBox.style.backgroundColor = "lightgreen";
    resultBox.textContent = "ここに結果が表示されます";
    resultWrapper.appendChild(resultBox);
  };
};
