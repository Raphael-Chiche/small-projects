let boxImage = document.getElementById("boxImage");
let qrImg = document.getElementById("qrCode");
let qrTxt = document.getElementById("qrTxt");

function generateQR() {
  if (qrTxt.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrTxt.value;
    boxImage.classList.add("show-img");
  } else { 
    qrTxt.style.animation = "shake 0.5s";
    qrTxt.addEventListener("animationend", () => {
      qrTxt.style.animation = "";
    });
  }
}