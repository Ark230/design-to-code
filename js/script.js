
const toggle = function (elem) {
    elem.classList.toggle('hide');
};

const toggleVisibility = function (element1, element2) {
    document.getElementById(element1).classList.toggle('hide');
    document.getElementById(element2).classList.toggle('hide');
};

document.addEventListener("DOMContentLoaded", function() {

    const signInLink = document.getElementById("sign-in-link");
    const registerLink = document.getElementById("register-link");
    const registerButton = document.getElementById("register-button");

    signInLink.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-sign-in"));
        toggle(document.getElementById("user-credentials-register"));
        // toogleVisibility("user-credentials-sign-in", "user-credentials-register");
    });

    registerLink.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-register"));
        toggle(document.getElementById("user-credentials-sign-in"));
    });


    registerButton.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-register"));
        toggle(document.getElementById("user-credentials-sign-in"));

        // toggle(document.getElementById("notification"));



    });





  });