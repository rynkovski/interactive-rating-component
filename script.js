const number = document.querySelectorAll(".number");
const result = document.querySelector(".result")
const submitBtn = document.querySelector(".btn");

let feedbackNumber

number.forEach(nr => {
    nr.addEventListener("click", () => {
        feedbackNumber = nr.innerHTML;
        number.forEach(nr => {
            nr.classList.remove("active")
        })
        nr.classList.add("active")
    })
})







submitBtn.addEventListener("click", () => {

    if (feedbackNumber != undefined) {
        document.querySelector(".rating").style.display = "none";
        document.querySelector(".thanks").style.display = "flex";
        result.innerHTML = `You selected ${feedbackNumber} out of 5`;
    } else {
        alert("Wybierz numer")
    }

})



