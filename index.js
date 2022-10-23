const iframeElem = document.getElementById("iframe-elem");

const titleInput = document.getElementById("title-input");
const captionInput = document.getElementById("caption-input");
const reflectButton = document.getElementById("reflect-button");

const addOmikujiButton = document.getElementById("add-omikuji-button");
const removeOmikujiButton = document.getElementById("remove-omikuji-button");

const downloadSection = document.getElementById("download-section");
const hiddenTemplates = document.getElementById("hidden-templates");

// エディタにDOMの状態を再現できるならそれと同時に考えたほうが良い
// const blob = new Blob(["<h1>sample text</h1>"], { type: "text/html" });
// const dlAnker = document.createElement("a");
// dlAnker.href = URL.createObjectURL(blob);
// dlAnker.download = "Original App.html";
// dlAnker.textContent = "ダウンロード";
// downloadSection.appendChild(dlAnker);

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
  addOmikujiButton.onclick = () => {
    const omikujiTemplate = document.getElementById("omikuji-template");
    resultWrapper.appendChild(omikujiTemplate);
  };
  removeOmikujiButton.onclick = () => {
    const omikujiTemplateInPreview =
      iframeElem.contentDocument.getElementById("omikuji-template");
    hiddenTemplates.appendChild(omikujiTemplateInPreview);
  };
};
