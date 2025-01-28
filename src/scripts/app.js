import { mS, editArray } from "./algorithm.js"
import { arrayBackups } from "./backups.js"
import { nodeNumberModel } from "./dom-models.js"
import { timeout } from "./animation-utils.js"

const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")
const editBtn = document.querySelector("#editBtn")

const parentContainer = document.querySelector(".containerContainer")
parentContainer.querySelector(".nodeArray").innerHTML = ""

const container = document.querySelector(".nodeContainer")

const arrayEditor = document.querySelector("#editor")


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
    
    container.classList.remove("translate-y-12", "opacity-0")
})

editBtn.addEventListener("click", function() {
    arrayEditor.classList.toggle("-translate-y-24")
    //editArray(container.firstElementChild.children)
})