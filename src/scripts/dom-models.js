const parentContainerModel = document.querySelector(".containerContainer").cloneNode()
parentContainerModel.classList.remove("w-min", "m-auto", "left-0", "right-0")
parentContainerModel.classList.add("absolute", "w-full")

const containerModel = document.querySelector(".nodeContainer").cloneNode(true)
containerModel.firstElementChild.innerHTML = ""
containerModel.classList.add("absolute")

const nodeNumberModel = document.querySelector(".nodeNumber").cloneNode()

export {
    parentContainerModel,
    containerModel,
    nodeNumberModel
}