let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }
}

let imgBg = document.querySelector(".img-bg");

function toggleColor() {
    imgBg.classList.toggle('bg-reddish');
}

imgBg.addEventListener('click', toggleColor);


let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    alert("Submitted!")
})