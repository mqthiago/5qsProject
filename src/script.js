const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const textarea3 = document.getElementById("textarea3");
const textarea4 = document.getElementById("textarea4");
const textarea5 = document.getElementById("textarea5");

textarea1.addEventListener("input", function () {
  if (textarea1.value) {
    textarea2.removeAttribute("disabled");
  } else {
    textarea2.setAttribute("disabled", true);
    textarea3.setAttribute("disabled", true);
    textarea4.setAttribute("disabled", true);
    textarea5.setAttribute("disabled", true);
  }
});

textarea2.addEventListener("input", function () {
  if (textarea2.value) {
    textarea3.removeAttribute("disabled");
  } else {
    textarea3.setAttribute("disabled", true);
    textarea4.setAttribute("disabled", true);
    textarea5.setAttribute("disabled", true);
  }
});

textarea3.addEventListener("input", function () {
  if (textarea3.value) {
    textarea4.removeAttribute("disabled");
  } else {
    textarea4.setAttribute("disabled", true);
    textarea5.setAttribute("disabled", true);
  }
});

textarea4.addEventListener("input", function () {
  if (textarea4.value) {
    textarea5.removeAttribute("disabled");
  } else {
    textarea5.setAttribute("disabled", true);
  }
});

function copyToClipboard() {
  const textToCopy = textarea5.value;
  const textField = document.createElement("textarea");
  textField.innerText = textToCopy;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  alert("Texto copiado para a área de transferência!");
}
