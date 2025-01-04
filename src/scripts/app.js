const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const nodeNumbers = Array.from(document.querySelectorAll(".nodeNumber"))

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

function mS(arr) {
    if (arr.length < 2) return

    const half = Math.ceil(arr.length / 2)
    const left = arr.slice(0, half)
    const right = arr.slice(half)


    downLeft(left)
    downRight(right)

    mS(left)
    mS(right)

    console.log(left)
    console.log(right)
}