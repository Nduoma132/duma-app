// const email_input = document.querySelector(".email-input");
// const email_err = document.querySelector(".email-err");
// const password_input = document.querySelector(".password-input");
// const password_err = document.querySelector(".password-err");
// const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const sign_in_btn = document.querySelector(".sign-in-btn");
// sign_in_a.href = "./sign_in_validate.html";

// sign_in_btn.addEventListener('click', () => {
//   event.preventDefault();

//   let isValid = true;

//   // Email validation
//   if (email_input.value.trim() === "") {
//     email_err.textContent = "This field is required";
//     email_input.classList.add("invalid");
//     isValid = false;
//   } else if (!emailReg.test(email_input.value.trim())) {
//     email_err.textContent = "Email is invalid";
//     email_input.classList.add("invalid");
//     isValid = false;
//   } else {
//     email_err.textContent = ""; 
//     email_input.classList.remove("invalid");
//   }

//   // Password validation
//   if (password_input.value.trim() === "") {
//     password_err.textContent = "This field is required";
//     password_input.classList.add("invalid");
//     isValid = false;
//   } else if (/^\d/.test(password_input.value.trim())) {
//     password_err.textContent = "Password cannot start with a number";
//     password_input.classList.add("invalid");
//     isValid = false;
//   } else {
//     password_err.textContent = "";
//     password_input.classList.remove("invalid");
//   }

//   if (isValid) {
//     window.location.href = "./sign_in_validate.html";
//   }
// });

const email_input = document.querySelector(".email-input");
const password_input = document.querySelector(".password-input");
const sign_in_btn = document.querySelector(".sign-in-btn");
const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateInputs() {
  const emailValid = emailReg.test(email_input.value.trim());
  const passwordValid = password_input.value.trim() !== "" && !/^\d/.test(password_input.value.trim());

  sign_in_btn.disabled = !(emailValid && passwordValid);
}

email_input.addEventListener('input', validateInputs);
password_input.addEventListener('input', validateInputs);


document.querySelector(".sign-in").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    if (!sign_in_btn.disabled) {
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = "./sign_in_validate.html";
      }, 300); // Time matches the CSS transition duration
    }
  });
  
