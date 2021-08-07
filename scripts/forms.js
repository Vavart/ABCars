
// Contact form
const formContact = document.querySelector(".form-contact");
const formContactConfirm = document.querySelector(".form-contact-confirm");
const formContactConfirmBtn = document.querySelector(".form-contact-confirm button");
const allIContactInputs = document.querySelectorAll(".form-group input");
const contactTextArea = document.querySelector(".form-group textarea");

//transform: translateX(-100%);
formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    formContactConfirm.style.transform = "translateX(0)"
    allIContactInputs.forEach(input => {
        input.value = ""
    })
    contactTextArea.value = ""
})

formContactConfirmBtn.addEventListener("click", () => {
    formContactConfirm.style.transform = "translateX(-100%)"
})


// Purchase & Finance Calculator
const inpCarPrice = document.getElementById("carprice");
const inpCarPriceText = document.querySelector(".car-price-text");

const inpDownPayment = document.getElementById("downpayment");
const inpDownPaymentText = document.querySelector(".down-payment-text");

const inpLoanType = document.getElementById("loan");
const inpLoanTypeText = document.querySelector(".loan-type-text");


// Car Price
inpCarPrice.addEventListener("input", (e) => {
    inpCarPriceText.value = `$${e.target.value.slice(0,3)}.${e.target.value.slice(3,6)}`;
})

inpCarPriceText.addEventListener("input", (e) => {
    inpCarPrice.value = `${e.target.value.slice(1,4)}${e.target.value.slice(5,8)}`;
})

inpDownPayment.addEventListener("input", (e) => {
    inpDownPaymentText.value = `$${e.target.value.slice(0,3)}.${e.target.value.slice(3,6)}`;
})

inpDownPaymentText.addEventListener("input", (e) => {
    inpDownPayment.value = `${e.target.value.slice(1,4)}${e.target.value.slice(5,8)}`;
})

// Loan Type
inpLoanType.addEventListener("input", (e) => {
    inpLoanTypeText.value = e.target.value;
})

inpLoanTypeText.addEventListener("input", (e) => {
    inpLoanType.value = e.target.value;
})

const formFinanceCalculator = document.querySelector(".form-finance-calc");
console.log(formFinanceCalculator);

formFinanceCalculator.addEventListener("submit", (e) => {
    e.preventDefault();
})

