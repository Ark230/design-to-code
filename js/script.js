
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

    const signInLinkMobile = document.getElementById("sign-in-link-mobile");
    const signInLinkMobile2 = document.getElementById("sign-in-link-mobile-2");

    const registerLinkMobile = document.getElementById("register-link-mobile");
    const registerLinkMobile2 = document.getElementById("register-link-mobile-2");

    const desktopRegisterForm = document.getElementById("register-form-desktop");
    const desktopRegisterMobile = document.getElementById("register-form-mobile");

    function preventSubmitAndDeployNotification(event, device){
        event.preventDefault();
        
        switch (device) {
            case "desktop":
                desktopRegisterForm.reset();
                toggle(document.getElementById("user-credentials-register"));
                toggle(document.getElementById("user-credentials-sign-in"));
                toggle(document.getElementById("notification"));
                setTimeout(() => {
                    //aparece la notificacion, se oculta el registro y se muestra el login
                    toggle(document.getElementById("notification"));
                    
                }, 5000)
                break;
            case "phone":
                desktopRegisterMobile.reset();
                toggle(document.getElementById("user-credentials-mobile-register"));
                toggle(document.getElementById("user-credentials-mobile-sign-in"));
                toggle(document.getElementById("notification-mobile"));
                setTimeout(() => {
                    //aparece la notificacion, se oculta el registro y se abre el login
                    toggle(document.getElementById("notification-mobile"));
                    
                }, 5000)
                break;
        }
    
    }

    desktopRegisterForm.onsubmit = (event) => {preventSubmitAndDeployNotification(event, "desktop")}
    desktopRegisterMobile.onsubmit = (event) => {preventSubmitAndDeployNotification(event, "phone")}


    //DESKTOP
    signInLink.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-sign-in"));
        toggle(document.getElementById("user-credentials-register"));
        // toogleVisibility("user-credentials-sign-in", "user-credentials-register");
    });

    registerLink.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-register"));
        toggle(document.getElementById("user-credentials-sign-in"));
    });


    // registerButton.addEventListener("click", () => {
    //     toggle(document.getElementById("user-credentials-register"));
    //     toggle(document.getElementById("user-credentials-sign-in"));
    // });



    //MOBIlE
    registerLinkMobile.addEventListener("click", () => {
        toggle(document.getElementById("login-mobile"));
        toggle(document.getElementById("user-credentials-mobile-register"));
    });

    registerLinkMobile2.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-mobile-sign-in"));
        toggle(document.getElementById("user-credentials-mobile-register"));
        
    });

    signInLinkMobile.addEventListener("click", () => {
        toggle(document.getElementById("user-credentials-mobile-sign-in"));
        toggle(document.getElementById("user-credentials-mobile-register"));
    });

    // signInLinkMobile2.addEventListener("click", () => {
    //     toggle(document.getElementById("user-credentials-mobile-register"));
    //     toggle(document.getElementById("user-credentials-mobile-sign-in"));
    // });
    

    

  });



  

  