
const toggle = function (elem) {
    elem.classList.toggle('hide');
};

const toggleVisibility = function (element1, element2) {
    document.getElementById(element1).classList.toggle('hide');
    document.getElementById(element2).classList.toggle('hide');
};


function showAndHidePassword() {
    const iconsArray = document.getElementsByName("eye-icon");
      for (let i = 0; i < iconsArray.length; i++) {
        
          iconsArray[i].addEventListener("click", () => {
              const input = iconsArray[i].previousElementSibling;
              const type = input.getAttribute("type") === 'password' ? 'text' : 'password';
              input.setAttribute('type', type);
          });
          
      }
  }

document.addEventListener("DOMContentLoaded", function() {

    
    
    
    const signInLink = document.getElementById("sign-in-link");
    const signInButton = document.getElementById("sign-in-button-mobile");
    const signInLinkMobile = document.getElementById("sign-in-link-mobile");
    const signInWithSocial = document.getElementById("sign-in-with-social");
    const signInWithSocial2 = document.getElementById("sign-in-with-social-2");

    const registerLink = document.getElementById("register-link");
    const registerLinkMobile = document.getElementById("register-link-mobile");
    const registerLinkMobile2 = document.getElementById("register-link-mobile-2");
    const registerWithSocial = document.getElementById("register-with-social");
    

    const desktopRegisterForm = document.getElementById("register-form-desktop");
    const desktopRegisterMobile = document.getElementById("register-form-mobile");

    const sectionCredentials = document.getElementById("section-credentials");

    const goBack1 = document.getElementById("go-back--1");
    const goBack2 = document.getElementById("go-back--2");

    const settingsMenuButton = document.getElementById("settings-menu-btn");
    const menuSlideUp = document.getElementById("menu-slide-up");
    const closeMenuSlideUp = document.getElementById("close-slide-up-menu");

    const greyOverlayContainer = document.getElementById("grey-overlay-container");

    showAndHidePassword();

    function preventSubmitAndDeployNotification(event, device){
        event.preventDefault();
        
        switch (device) {
            case "desktop":
                desktopRegisterForm.reset();
                toggle(document.getElementById("user-credentials-register"));
                toggle(document.getElementById("user-credentials-sign-in"));
                toggle(document.getElementById("notification"));
                setTimeout(() => {
        
                    toggle(document.getElementById("notification"));
                    
                }, 5000)
                break;
            case "phone":
                desktopRegisterMobile.reset();
                toggle(document.getElementById("user-credentials-mobile-register"));
                toggle(document.getElementById("user-credentials-mobile-sign-in"));
                toggle(document.getElementById("notification-mobile"));
                setTimeout(() => {
                    
                    toggle(document.getElementById("notification-mobile"));
                    
                }, 5000)
                break;
        }
    
    }


    desktopRegisterForm.onsubmit = (event) => {preventSubmitAndDeployNotification(event, "desktop")}
    desktopRegisterMobile.onsubmit = (event) => {preventSubmitAndDeployNotification(event, "phone")}


    //DESKTOP
  
    signInLink.addEventListener("click", () =>  toggleVisibility("user-credentials-sign-in", "user-credentials-register"));
    registerLink.addEventListener("click", () => toggleVisibility("user-credentials-register", "user-credentials-sign-in"));
  

    //MOBIlE
    registerLinkMobile.addEventListener("click", () => {
        toggleVisibility("login-mobile", "user-credentials-mobile-register");
        sectionCredentials.style.backgroundColor = "#FFFFFF";
    });
    
    registerLinkMobile2.addEventListener("click", () => toggleVisibility("user-credentials-mobile-sign-in", "user-credentials-mobile-register"));
   
    signInButton.addEventListener("click", () => {
        toggleVisibility("login-mobile", "user-credentials-mobile-sign-in");
        sectionCredentials.style.backgroundColor = "#FFFFFF";
    });

    signInLinkMobile.addEventListener("click", () => toggleVisibility("user-credentials-mobile-sign-in", "user-credentials-mobile-register"));
    
    goBack1.addEventListener("click", () => {
        toggleVisibility("user-credentials-mobile-sign-in", "login-mobile");
        sectionCredentials.style.backgroundColor = "#FBEFEC";
    });

    goBack2.addEventListener("click", () => {
        toggleVisibility("user-credentials-mobile-register", "login-mobile");
        sectionCredentials.style.backgroundColor = "#FBEFEC";
    });

    settingsMenuButton.addEventListener("click", () => {
        greyOverlayContainer.classList.toggle('u-grey-overlay-mobile');
        menuSlideUp.classList.toggle('navToggle');
    });
    
    closeMenuSlideUp.addEventListener("click", ()=>{
        greyOverlayContainer.classList.toggle('u-grey-overlay-mobile');
        menuSlideUp.classList.toggle('navToggle');
    });

    signInWithSocial.addEventListener("click", () => {
        greyOverlayContainer.classList.toggle('u-grey-overlay-mobile');
        menuSlideUp.classList.toggle('navToggle');
        
    });

    signInWithSocial2.addEventListener("click", () => {
        greyOverlayContainer.classList.toggle('u-grey-overlay-mobile');
        menuSlideUp.classList.toggle('navToggle');
    });

    registerWithSocial.addEventListener("click", () => {
        greyOverlayContainer.classList.toggle('u-grey-overlay-mobile');
        menuSlideUp.classList.toggle('navToggle');
    });

  
  });



  

  