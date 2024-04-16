const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");
const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", () => {
    if (pwd.value !== pwdConfirm.value) {
        if (!pwd.nextElementSibling) {
            pwd.setCustomValidity("* Passwords do not match");
            pwdConfirm.setCustomValidity("* Passwords do not match");
        }
    }
})