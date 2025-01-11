const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")


const parentContainerModel = document.querySelector(".containerContainer").cloneNode()
parentContainerModel.classList.remove("w-min", "m-auto", "left-0", "right-0")
parentContainerModel.classList.add("absolute", "w-full")

const containerModel = document.querySelector(".nodeContainer").cloneNode(true)
containerModel.firstElementChild.innerHTML = ""
containerModel.classList.add("absolute")

const nodeNumberModel = document.querySelector(".nodeNumber").cloneNode()

const parentContainer = document.querySelector(".containerContainer")
parentContainer.querySelector(".nodeArray").innerHTML = ""

const container = document.querySelector(".nodeContainer")


function nodeNumber(value) {
    const newNode = nodeNumberModel.cloneNode()
    newNode.innerText = value
    return newNode
}

const defaultUnsortList = [4, 2, -1, 1]

defaultUnsortList.forEach(value => {
    parentContainer
        .querySelector(".nodeArray")
        .appendChild(nodeNumber(value))
})

sortBtn.addEventListener("click", function() {
    console.log(parentContainer)
    console.log(containerModel)
    mS(container)
})

function aux() {
    container.classList.toggle("translate-x-4")
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mS(container) {
    const nodes = Array.from(container.querySelector(".nodeArray").children)
    if ( nodes.length < 2 ) return

    const half = Math.ceil(nodes.length / 2)
    console.log(half)

    
    container.querySelector(".nodeArrayChild").appendChild(parentContainerModel.cloneNode())
    const leftContainer = containerModel.cloneNode(true)
    leftContainer.classList.add("left-0", "-translate-y-12")
    container.querySelector(".containerContainer").appendChild(leftContainer)
    
    const rightContainer = containerModel.cloneNode(true)
    rightContainer.classList.add("right-0", "-translate-y-12")
    container.querySelector(".containerContainer").appendChild(rightContainer)

    nodes.forEach((node, i) => {
        console.log(i, half)
        if (i < half)
            leftContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
        else
            rightContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
    })


    await timeout(50) //avoiding appending / execution delay
    leftContainer.classList.remove("-translate-y-12")
    leftContainer.classList.add("-translate-x-4", "translate-y-4")
    console.log(leftContainer)
    await timeout(700)
    rightContainer.classList.remove("-translate-y-12")
    rightContainer.classList.add("translate-x-4", "translate-y-4")
    console.log(rightContainer)
    await timeout(700)

    mS(leftContainer)
    mS(rightContainer)
    
}