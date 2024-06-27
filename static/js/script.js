function copyValue(event) {
  const target = event.target;
  const copyElement = target.closest(".copy_toggle");

  if (copyElement) {
    const value = copyElement.getAttribute("copy_value");
    navigator.clipboard.writeText(value).then(() => {
      alert("Скопировано");
    });
  }
}

const popupOverlay = document.querySelector(".popup__overlay");
const popupMessage = document.querySelector(".popup");
function togglePopup(event) {
  if (event.target.classList.contains("popup__toggle")) {
    popupOverlay.classList.toggle("active");
    popupMessage.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }
}

document.body.addEventListener("click", copyValue);
document.body.addEventListener("click", togglePopup);
