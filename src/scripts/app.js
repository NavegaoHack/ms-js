import { mS } from "./algorithm.js"
import { arrayBackups } from "./backups.js"
import { nodeNumberModel } from "./dom-models.js"
import { timeout } from "./animation-utils.js"

const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")

const parentContainer = document.querySelector(".containerContainer")
parentContainer.querySelector(".nodeArray").innerHTML = ""

const container = document.querySelector(".nodeContainer")


function nodeNumber(value) {
    const newNode = nodeNumberModel.cloneNode()
    newNode.innerText = value
    return newNode
}

const defaultUnsortList = [4, 2, -1]
// const defaultUnsortList = [1, 2, 3, 4]
// const defaultUnsortList = [4, 2, -1]

defaultUnsortList.forEach(value => {
    parentContainer
        .querySelector(".nodeArray")
        .appendChild(nodeNumber(value))
})

sortBtn.addEventListener("click", function() {
    //cleaning nodeArrayChild element
    arrayBackups.push(document.querySelector(".nodeArray").cloneNode(true))
    document.querySelector(".nodeArrayChild").innerHTML = ""
    mS(container)
})

unsortBtn.addEventListener("click", async function() {
    container.classList.add("translate-y-12", "opacity-0")
    
    await timeout(700)
    
    container.firstElementChild.remove()
    container.prepend(arrayBackups.at(-1))
    
    container.classList.add("translate-y-12", "opacity-0")
})