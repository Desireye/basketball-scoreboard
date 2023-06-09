const hScreen = document.getElementById("h-screen")
const gScreen = document.getElementById("g-screen")
const hBtn1 = document.getElementById("hbtn-1")
const hBtn2 = document.getElementById("hbtn-2")
const hBtn3 = document.getElementById("hbtn-3")
const gBtn1 = document.getElementById("gbtn-1")
const gBtn2 = document.getElementById("gbtn-2")
const gBtn3 = document.getElementById("gbtn-3")
const newBtn = document.getElementById("new-btn")
const leadBtn = document.getElementById("lead-btn")
const hLeadEl = document.getElementById("h-lead-el")
const gLeadEl = document.getElementById("g-lead-el")

hScreen.textContent = 0
gScreen.textContent = 0

let sum = 0
let count = 0

hBtn1.addEventListener("click", function() {
    sum += 1
    hScreen.textContent = sum
})

hBtn2.addEventListener("click", function() {
    sum += 2
    hScreen.textContent = sum
})

hBtn3.addEventListener("click", function() {
    sum += 3
    hScreen.textContent = sum
})

gBtn1.addEventListener("click", function() {
    count += 1
    gScreen.textContent = count
})

gBtn2.addEventListener("click", function() {
    count += 2
    gScreen.textContent = count
})

gBtn3.addEventListener("click", function() {
    count += 3
    gScreen.textContent = count
})

newBtn.addEventListener("click", function() {
    sum = 0
    count = 0
    hScreen.textContent = 0
    gScreen.textContent = 0
    hLeadEl.textContent = " "
    gLeadEl.textContent = " "
})

leadBtn.addEventListener("click", function() {
    if (hScreen.textContent > gScreen.textContent) {
        hLeadEl.textContent = "In the Lead!"
    } else if (gScreen.textContent > hScreen.textContent) {
        gLeadEl.textContent = "In the Lead!"
    }
})