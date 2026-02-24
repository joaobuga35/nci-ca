// Some repositories that I used as a reference from my own GitHub and open source free to use.
// Source: https://github.com/joaobuga35/Pet-info
// Source: https://github.com/joaobuga35/Open-music-dark-mode

// created this function to handle all the buttons once because if I add a new one this is alreay made to deal with this situation.
function initializeFilter() {
  // Here we select all buttons with the data-filter attribute and all product cards
  const filterButtons = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll(".products-card");
  // I used a for each to add an event listener to each button avoiding to write a new event every time that I add a new filter
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // We get the filter value from the clicked button
      const filterValue = this.getAttribute("data-filter");
      // For each to reset the button styles after the user clicks on it.
      filterButtons.forEach((btn) =>
        btn.classList.remove("btn-adventure-primary-medium"),
      );
      filterButtons.forEach((btn) =>
        btn.classList.add("btn-outline-adventure"),
      );
      // And here I used "this" to change the style of the clicked button.
      this.classList.remove("btn-outline-adventure");
      this.classList.add("btn-adventure-primary-medium");

      productCards.forEach((card) => {
        if (filterValue.toLowerCase() === "all") {
          card.classList.remove("d-none");
        } else {
          const cardTitle = card
            .querySelector(".card-title")
            .textContent.toLowerCase();
          if (cardTitle.includes(filterValue)) {
            card.classList.remove("d-none");
          } else {
            card.classList.add("d-none");
          }
        }
      });
    });
  });
}

// This function is responsible for handling the form submission, validating the input fields and providing messages to inform the user.
function handleSubmit(event) {
  // Prevent the refresh of the page and the default behavior of the form submission.
  event.preventDefault();
  event.stopPropagation();
  // Selecting all the input fields and the textarea to validate them later.
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const queryType = document.getElementById("queryType");
  const message = document.getElementById("message");
  // I created a list with all to avoid to write several lines of if and else statements.
  const listOfFields = [name, email, phone, queryType, message];
  // I selected succes and error messages to show them later depending on the validation of the fields.
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg");

  let allFieldsValid = true;
  // For each to check all the fields and set a new class to help the user to identify which field is wrong also has been added a regex to validade the email.
  // I also used this to add the class and remove it when the user corrects the fields.
  // Regex is pattern matching that is used to validate the format.
  // This was the link which helped me to create this regex:
  // https://medium.com/swlh/how-to-validate-an-email-address-in-javascript-78d33f87f5c6
  // Author: Tyler McGinnis
  listOfFields.forEach((field) => {
    field === email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
      ? field.classList.add("border-error")
      : field.classList.remove("border-error");
    if (
      !field.value.trim() ||
      (field === message && field.value.trim().length < 20)
    ) {
      field.classList.add("border-error");
      allFieldsValid = false;
    }
  });
  // Validation to check if the state of all the fields are correct and setting the messages.
  if (allFieldsValid) {
    successMsg.classList.remove("d-none");
    errorMsg.classList.add("d-none");
    form.reset();
  } else {
    successMsg.classList.add("d-none");
    errorMsg.classList.remove("d-none");
  }
}

initializeFilter();
