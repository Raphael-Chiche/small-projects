let boxImage = document.getElementById("boxImage");
let qrImg = document.getElementById("qrCode");
let qrTxt = document.getElementById("qrTxt");
let qrBtn = document.getElementById("telecharger");
function generateQR() {
  if (qrTxt.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrTxt.value;
    boxImage.classList.add("show-img");
    qrBtn.classList.add("show-btn");
  } else { 
    qrTxt.style.animation = "shake 0.5s";
    qrTxt.addEventListener("animationend", () => {
      qrTxt.style.animation = "";
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const boxImage = document.getElementById("boxImage");
  const qrImg = document.getElementById("qrCode");

  // Fonction pour capturer la div
  function captureDiv() {
    html2canvas(qrImg, { useCORS: true }).then(function (canvas) {
      // Créer un lien pour télécharger l'image
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "qrcode.png";
      link.click();
    });
  }

  // Appeler la fonction de capture lorsque vous le souhaitez
  // Par exemple, en réponse à un clic sur un bouton
  document
    .getElementById("telecharger")
    .addEventListener("click", function () {
      // Vérifier si l'image du QR Code est chargée
      if (qrImg.complete) {
        captureDiv();
      } else {
        // Attendre le chargement de l'image avant de capturer la div
        qrImg.onload = function () {
          captureDiv();
        };
      }
    });
});