// Navigation : Lang-Menu
const dropDownLangMenu = Array.from(document.querySelectorAll(".lang-menu ul li:not(:first-child)"));
const dropDownBtn = document.querySelector(".lang-menu .chevron");
const dropDownBtnDrapeau = document.querySelector(".lang-menu ul li:first-child");

dropDownBtn.addEventListener("click", () => {
    dropDownLangMenu.forEach(li => {
        li.classList.toggle("active");
    })
    dropDownBtn.classList.toggle("active")
})
dropDownBtnDrapeau.addEventListener("click", () => {
    console.log("CLICK");
    dropDownLangMenu.forEach(li => {
        li.classList.toggle("active");
    })
    dropDownBtn.classList.toggle("active")
})

// Navigation : responsive menu 
const nav = document.querySelector("nav");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {

    if (window.innerWidth <= 1250) {

        nav.classList.toggle("nav--toggle-hiden-anim");

    }

})

window.addEventListener("resize", () => {

    if (window.innerWidth > 1250) {

        nav.style.display = "flex"
        nav.classList.remove("nav--toggle-hiden-anim");

    }
})
