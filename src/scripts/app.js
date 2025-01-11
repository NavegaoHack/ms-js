const sortBtn = document.querySelector("#sortBtn")
const unsortBtn = document.querySelector("#unsortBtn")

const parentContainer = document.querySelector(".containerContainer")
const nodeNumberModel = document.querySelector(".nodeNumber").cloneNode()


parentContainer.firstElementChild.firstElementChild.innerHTML = ""

function nodeNumber(value) {
    const newNode = nodeNumberModel.cloneNode()
    newNode.innerText = value
    return newNode
}

const defaultUnsortList = [4, 2, -1, 1]

defaultUnsortList.forEach(value => {
    parentContainer
        .firstElementChild
        .firstElementChild
        .appendChild(nodeNumber(value))
})

sortBtn.addEventListener("click", function() {
    console.log(parentContainer)
})