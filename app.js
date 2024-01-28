let moonElement = document.querySelector("#moon");
let sunElement = document.querySelector("#sun");
let h1 = document.querySelector("h1")
let bodyElement = document.querySelector("body");
let button =document.querySelector("button");
moonElement.addEventListener("click", (e) => {
    bodyElement.classList.add("moon");
    bodyElement.classList.remove("sun");
    h1.style.color = "white"
    button.style.color= "white"
})

sunElement.addEventListener("click", (e) => {
    bodyElement.classList.add("sun");
    bodyElement.classList.remove("moon");
    h1.style.color = "black"
    button.style.color= "black"

})















function myFunction() {
    let person = document.getElementById("person");
    let bcle = document.getElementById("bcle");
    let car = document.getElementById("car");
    let plan = document.getElementById("plan");
    let masofa = document.getElementById("masofa");

    let personVal = person.value;
    let carVal = car.value;
    let bcleVal = bcle.value;
    let planVal = plan.value;
    let masofaVal = masofa.value;

    let liPerson = document.querySelector(".a1");
    let liCar = document.querySelector(".a3");
    let libcle = document.querySelector(".a2");
    let liPlan = document.querySelector(".a4");

    let personP = document.createElement("p");
    personP.innerText = masofaVal / personVal + " soat";
    personP.style.color = "red"

    let CarP = document.createElement("p");
    CarP.innerText = masofaVal / carVal + " soat";
    CarP.style.color = "red";

    let bcleP = document.createElement("p");
    bcleP.innerText = masofaVal / bcleVal + " soat";
    bcleP.style.color = "red";

    let planP = document.createElement("p");
    planP.innerHTML = (masofaVal / planVal) + " soat";
    planP.style.color = "red";

    liPerson.append(personP);
    liCar.append(CarP);
    libcle.append(bcleP)
    liPlan.append(planP)
}