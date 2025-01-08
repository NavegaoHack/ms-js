const nodeNumbers = document.querySelectorAll(".nodeNumber")
const nodeContainer = document.querySelector(".nodeContainer")
const containerContainer = document.querySelector(".containerContainer")

function match(elem1, elem2) {
    const startpos = elem1.getBoundingClientRect()
    const endpos = elem2.getBoundingClientRect()

    // elem2.style.transform = `translateX(${startpos.x}px)`
}

function animDown(node) {
    console.log(node)
    node.animate({transform: "translateY(3em)"}, {
        duration: 250,
        fill: "forwards",
        easing: "ease-in-out"
    })
}
function animLeft(node) {
    console.log(node)
    return node.animate({transform: "translate(-1em, 4em)"}, {
        duration: 250,
        fill: "forwards",
        easing: "ease-in-out"
    })
}
function animRight(node) {
    console.log(node)
    return node.animate({transform: "translate(1em, 4em)"}, {
        duration: 250,
        fill: "forwards",
        easing: "ease-in-out"
    }).isFinished
}

async function mS(nodeNumbers) {
    if (nodeNumbers.length < 2) return

    console.log(nodeNumbers)
    const half = Math.ceil(nodeNumbers.length / 2)
    console.log(half)
    const containerL = nodeContainer.cloneNode()
    const containerR = nodeContainer.cloneNode()
    containerContainer.appendChild(containerL)
    containerContainer.appendChild(containerR)
    containerL.classList.add("absolute", "top-0", "left-0")
    containerR.classList.add("absolute","top-0", "right-0")


    nodeNumbers.forEach((node, i) => {
        if (i < half)
            containerL.appendChild(node.cloneNode(true))
        else 
            containerR.appendChild(node.cloneNode(true))
    })

    match(nodeNumbers[0], containerL)
    match(nodeNumbers[half], containerR)

    await animLeft(containerL)
    await animRight(containerR)

    // mS(Array.from(containerL.children))
    // mS(Array.from(containerR.children))


}

document.querySelector("#sortBtn")
        .addEventListener("click", function () {
            mS(Array.from(nodeNumbers))
})