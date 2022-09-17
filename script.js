let number = 0;
const submitButton = document.querySelector(".submit");
const numberButtons = document.querySelectorAll(".number");
const screenRate = document.querySelector(".screen-rate");
const screenThankyou = document.querySelector(".screen-thankyou");
const chosen = document.querySelector(".chosen");

numberButtons.forEach((node) => node.addEventListener("click", handleClick));
submitButton.addEventListener("click", handleSubmit);

function handleClick(e) {
  number = e.target.innerText;
  numberButtons.forEach((button) => button.classList.remove("number-active"));
  e.target.classList.add("number-active");
  submitButton.classList.add("submit-active");
}

function handleSubmit(e) {
  if (number == 0) return;
  chosen.innerText = number;
  screenRate.classList.add("hide");
  screenThankyou.classList.remove("hide");
}
