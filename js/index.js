const codeIcon = document.querySelector(".code-icon");

const codeIconValue = "</developer>";

const dateSpan = document.querySelector(".date");

const footerYear = new Date();
dateSpan.innerText = footerYear.getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  codeIcon.innerText = ` ${codeIconValue}`;
});
