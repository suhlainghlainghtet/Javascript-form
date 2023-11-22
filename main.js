const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const button = document.querySelector("#btn");
const ul = document.querySelector("ul");
const smg = document.querySelectorAll("#smg");

// Submitting From
const submitForm = (e) => {
  e.preventDefault();
  const userName = nameInput.value;
  const userEmail = emailInput.value;
  if (userName === "" || userEmail === "") {
    smg.forEach((item) => {
      item.textContent = "Please fill your information!";
      setTimeout(() => {
        item.textContent = "";
      }, 3000);
    });
  } else {
    const liTag = document.createElement("li");
    liTag.append(`${userName + ": " + userEmail}`);
    ul.append(liTag);
    nameInput.value = "";
    emailInput.value = "";
  }
};

// For Click
button.addEventListener("click", submitForm);

// For Enter Key
button.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitForm();
  }
});
