const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const nodeNumbers = Array.from(document.querySelectorAll(".nodeNumber"))
const nodeContainer = document.querySelector(".nodeContainer").cloneNode()
const containerNodeContainer = document.querySelector(".containerNodeContainer")

console.log(nodeContainer)

const anim = {
    keyframeLeft: [{ transform: 'translate(-1rem, 2rem)' }],
    keyframeRight: [{ transform: 'translate(1rem, 2rem)' }],
    keyframeDown: [{ transform: 'translate(0, 4rem' }],
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
function downBottom(arr) {

    arr.forEach(node => {
        node.animate(anim.keyframeDown, anim.opts)
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

function copy(arr) {
    let arrclone = []
    arr.forEach(node => {
        nodecloned = node.cloneNode(true)
        arrclone.push(nodecloned)
        container = nodeContainer.cloneNode()
        container.appendChild(nodecloned)
        containerNodeContainer.appendChild(container)
    })
    return arrclone
}

function mS(arr) {
    //if (arr.length < 2) return

    arrCloned = copy(arr)
    //const half = Math.ceil(arr.length / 2)
    //const left = arr.slice(0, half)
    //const right = arr.slice(half)


    //downLeft(left)
    //downRight(right)
    
    downBottom(arrCloned)

    //mS(left)
    //mS(right)

}