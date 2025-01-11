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
    //mS(parentContainer)
})



function mS(container) {
    const nodes = container.querySelector(".nodeArray").children
    if ( nodes.length < 2 ) return

    const half = Math.ceil(nodeslength)
    console.log(half)

    const leftContainer = containerModel.cloneNode(true)
    const rightContainer = containerModel.cloneNode(true)


    nodes.forEach((node, i) => {
        if (i < half)
            leftContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
        else
            rightContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
    })


    
}