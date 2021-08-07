// Slider

const allPics = Array.from(document.querySelectorAll(".img-slider-inner"));
const allVignettes = Array.from(document.querySelectorAll(".img-slider-vignette"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let imgEnCours = 1;

function clearClasses() {
    allPics.forEach(pic => {
        pic.classList.remove("active-img");
    })
    allVignettes.forEach(vignette => {
        vignette.classList.remove("active-vignette");
    })
}

prevBtn.addEventListener("click", () => {

    clearClasses();
    
    if (index === 0) {
        imgEnCours = 5;
        index = 4;
    }
    
    else {
        imgEnCours--
        index--
        
    }


    allVignettes[index].classList.add("active-vignette");
    allPics[index].classList.add("active-img")
})

nextBtn.addEventListener("click", () => {

    clearClasses();
    
    if (index === 4) {
        imgEnCours = 1;
        index = 0;
    }
    
    else {
        imgEnCours++
        index++
        
    }
    
    allVignettes[index].classList.add("active-vignette");
    allPics[index].classList.add("active-img")
})


// Au click d'une vignette
allVignettes.forEach(vignette => {

    vignette.addEventListener("click", () => {
        clearClasses();

        imgEnCours = vignette.getAttribute("data-pic");
        index = imgEnCours - 1;

        allVignettes[index].classList.add("active-vignette");
        allPics[index].classList.add("active-img")
    })

})

