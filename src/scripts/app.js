const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const animOpts = {
    duration: 700,
    fill: "forwards",
    easing: "ease-in-out"
}


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
// const defaultUnsortList = [1, 2, 3, 4]
// const defaultUnsortList = [4, 2, -1]

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

function getXlen(elem1, elem2) {
    const a = elem1.getBoundingClientRect().x
    const b = elem2.getBoundingClientRect().x
    const num = (b-a) / 16
    return +num.toPrecision(4)
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function chvalue(elem1, elem2) {
    elem1.innerText = elem2.innerText
}


async function jS(containerLeft, containerRight, parentContainer, parentNodes) {
    console.log(containerLeft)
    console.log(containerRight)
    const left = Array.from(containerLeft.querySelectorAll(".nodeNumber"))
    const right = Array.from(containerRight.querySelectorAll(".nodeNumber"))
    const length = parentNodes.length

    console.log(
        left,
        right,
        parentNodes
    )

    console.log(+left.at(0).innerText)
    console.log(+right.at(0).innerText)
    console.log(length)

    for (let i = 0; i < length + 1; i++) {

        if (left.length && right.length) {
            if (+left.at(0).innerText < +right.at(0).innerText) {
                const l = left.shift()
                l.animate({transform: `translate(${getXlen(l, parentNodes[i])}rem, -${4}rem)`}, animOpts)
                await timeout(700)
                chvalue(parentNodes[i], l)
            } else {
                const r = right.shift()
                r.animate({transform: `translate(${getXlen(r, parentNodes[i])}rem, -${4}rem)`}, animOpts)
                await timeout(700)
                chvalue(parentNodes[i], r)
            }

        } else {

            if (left.length) {
                const l = left.shift()
                l.animate({transform: `translate(${getXlen(l, parentNodes[i])}rem, -${4}rem)`}, animOpts)
                await timeout(700)
                chvalue(parentNodes[i], l)
            }
            else if (right.length) {
                const r = right.shift()
                r.animate({transform: `translate(${getXlen(r, parentNodes[i])}rem, -${4}rem)`}, animOpts)
                await timeout(700)
                chvalue(parentNodes[i], r)
            } else {
                parentContainer.querySelector(".nodeArray").classList.remove("opacity-75")
                containerLeft.remove()
                containerRight.remove()
            }
        }

    }

    return parentContainer
}

    

async function mS(container) {
    const nodes = Array.from(container.querySelector(".nodeArray").children)
    if ( nodes.length < 2 ) return container

    const half = Math.ceil(nodes.length / 2)
    // console.log(half)

    
    container.querySelector(".nodeArrayChild").appendChild(parentContainerModel.cloneNode())
    const leftContainer = containerModel.cloneNode(true)
    leftContainer.classList.add("left-0", "-translate-y-12")
    container.querySelector(".containerContainer").appendChild(leftContainer)
    
    const rightContainer = containerModel.cloneNode(true)
    rightContainer.classList.add("right-0", "-translate-y-12")
    container.querySelector(".containerContainer").appendChild(rightContainer)

    nodes.forEach((node, i) => {
        // console.log(i, half)
        if (i < half)
            leftContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
        else
            rightContainer.querySelector(".nodeArray").appendChild(node.cloneNode(true))
    })

    await timeout(50) //avoiding appending / execution delay
    container.querySelector(".nodeArray").classList.add("opacity-75")
    leftContainer.classList.remove("-translate-y-12")
    leftContainer.classList.add("-translate-x-4", "translate-y-4")
    //console.log(leftContainer)
    await timeout(700)
    rightContainer.classList.remove("-translate-y-12")
    rightContainer.classList.add("translate-x-4", "translate-y-4")
    //console.log(rightContainer)
    await timeout(700)

    const containerLeft = await mS(leftContainer)
    const containerRight = await mS(rightContainer)

    const sortContainer = await jS(containerLeft, containerRight, container, nodes)
    return sortContainer
    
}