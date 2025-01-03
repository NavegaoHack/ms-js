const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const nodeNumbers = document.querySelectorAll(".nodeNumber")

sortBtn.addEventListener("click", function() {
    console.log("SORT")

for (let i=0; i < nodeNumbers.length; i++) {
    nodeNumbers[i].style.transform = "translateY(2em)"
}
})
unsortBtn.addEventListener("click", function() {
    console.log("NO SORT")
for (let i=0; i < nodeNumbers.length; i++) {
    nodeNumbers[i].style.transform = "translateY(0em)"
}
})
