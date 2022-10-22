const iframeElem = document.getElementById("iframe-elem");

const reflectButton = document.getElementById("reflect-button");
const addOmikujiButton = document.getElementById("add-omikuji-button");
const removeOmikujiButton = document.getElementById("remove-omikuji-button");
const titleInput = document.getElementById("title-input");
const captionInput = document.getElementById("caption-input");

const hiddenTemplates = document.getElementById("hidden-templates");

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
