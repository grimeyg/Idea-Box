var saveBtn = document.querySelector(".save");
var titleIn = document.querySelector(".title");
var bodyIn = document.querySelector("textarea");
var form = document.querySelector("form");

saveBtn.disabled = true;
form.addEventListener("keyup", checkInputs);

function checkInputs() {
  event.preventDefault();
   if (bodyIn.value.length > 0 && titleIn.value.length > 0) {
    saveBtn.disabled = false;
    saveBtn.id = "active";
  }
}
