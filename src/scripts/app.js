const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const nodeNumbers = Array.from(document.querySelectorAll(".nodeNumber"))
const nodeContainer = document.querySelector(".nodeContainer").cloneNode()
const containerNodeContainer = document.querySelector(".containerNodeContainer")

console.log(nodeContainer)

const anim = {
    keyframeLeft: [{ transform: 'translate(-1rem, 2rem)' }],
    keyframeRight: [{ transform: 'translate(1rem, 2rem)' }],
    opts: {
        duration: 250,
        easing: 'ease-out',
        fill: 'forwards'
    }
}

sortBtn.addEventListener("click", function() {
    console.log("SORT")

    mS(nodeNumbers)
})

unsortBtn.addEventListener("click", function() {
    console.log("NO SORT")
for (let i=0; i < nodeNumbers.length; i++) {
    nodeNumbers[i].style.transform = "translateY(0em)"
}
})

function downLeft(arr) {
    arr.forEach(node => {
        node.animate(anim.keyframeLeft, anim.opts)
    })
}

function downRight(arr) {

    arr.forEach(node => {
        node.animate(anim.keyframeRight, anim.opts)
    })
}

function cloneNodes(arrLeft, arrRight) {
    let container1 = nodeContainer.cloneNode()
    let container2 = nodeContainer.cloneNode()
    
    arrLeft.forEach(node => {
        container1.appendChild(node.cloneNode(true))
    })
    arrRight.forEach(node => {
        container2.appendChild(node.cloneNode(true))
    })

    containerNodeContainer.appendChild(container1)
    containerNodeContainer.appendChild(container2)

}

function mS(arr) {
    if (arr.length < 2) return

    const arrCopy = []

    arr.forEach(node => {
        arrCopy.push(node.cloneNode(true))
    })

    const half = Math.ceil(arr.length / 2)
    const left = arrCopy.slice(0, half)
    const right = arrCopy.slice(half)

    cloneNodes(left, right)

    downLeft(left)
    downRight(right)


    //mS(left)
    //mS(right)

    console.log(left)
    console.log(right)
}