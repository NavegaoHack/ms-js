import { mS } from "./algorithm.js"
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

const asideBackups = document.querySelector("#arrayBackups")
const asideWindow = document.querySelector("#asideWindow")
const btnAsideWindow = document.querySelectorAll("#toggleAsideWindow")
const arrayInput = document.querySelector("#arrayInput")

const currentState = {
    isSorted: false,
    isUnsorted: true,
    inEditMode: false,
    onProcess: false,
    switch: () => {
        currentState.isSorted = !currentState.isSorted
        currentState.isUnsorted = !currentState.isUnsorted
    },
    switchEdit: () => {
        currentState.inEditMode = !currentState.inEditMode
    },
    switchProcess: () => {
        currentState.onProcess = !currentState.onProcess
    }
}


btnAsideWindow[0].addEventListener("click", function() {
    asideWindow.classList.toggle("translate-x-80")
})
btnAsideWindow[1].addEventListener("click", function() {
    asideWindow.classList.toggle("translate-x-80")
})

async function updateArray() {
    if (currentState.inEditMode) {
        console.log("edit mode")
        messageAlert("on Edit Mode", "close edit first")
        return
    }

    if (currentState.onProcess) {
        console.log("on process")
        messageAlert("on Process")
        return
    }

    container.classList.add("translate-y-12", "opacity-0")
    
    await timeout(700)
    
    const arrayContainer = container.firstElementChild.cloneNode()
    container.firstElementChild.remove()

    const array = arrayInput.value.split(',').filter(i => i !== '')
    array.forEach(digit => {
        arrayContainer.appendChild(nodeNumber(digit))
    })
    container.prepend(arrayContainer)


    container.classList.remove("translate-y-12", "opacity-0")


    currentState.isSorted = false
    currentState.isUnsorted = true
}

function watchInput() {
    let timer;              // Timer identifier

    arrayInput.addEventListener('input', (e) => {

        clearTimeout(timer);

        // Initiate the search request after a delay
        timer = setTimeout(() => {
            updateArray();
        }, 500);
    });
}

watchInput()

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

function refreshBackups() {
    const backupContainer = document.createElement("div")
    backupContainer.classList.add("flex", "justify-center" ,"hover:bg-slate-100", "group", "h-8")
    backupContainer.appendChild(arrayBackups.at(-1))
    asideBackups.appendChild(backupContainer)

}

function storeOnBackup(arrayStored) {
   arrayStored.classList.add("w-max", "scale-50", "group-hover:scale-[0.6]", "h-2")
   
   arrayStored.dataset.index = arrayBackups.length
   arrayBackups.push(arrayStored)
}

let messageTimer = null
function messageAlert(messageA, messageB = "please wait") {
    
    if (messageTimer != null) return
    
    messageLabel.classList.remove("opacity-0")
    messageLabelText.innerText = messageA
    messageLabelText2.innerText = messageB

    messageTimer = setTimeout(()=>{

        messageLabel.classList.add("opacity-0")
        messageTimer = null
    }, 2000)

}



async function reSort(container) {
    currentState.switchProcess()
    await mS(container)
    console.log("b")
    currentState.switchProcess()
    currentState.switch()
}

sortBtn.addEventListener("click", function() {
    //cleaning nodeArrayChild element
    if (currentState.inEditMode) {
        console.log("edit mode")
        messageAlert("on Edit Mode", "close edit first")
        return
    }

    if (currentState.isSorted) {
        console.log("already sorted")
        messageAlert("already Sorted", "unsort first")
        return
    }

    if (currentState.onProcess) {
        console.log("on process")
        messageAlert("on Process")
        return
    }

    storeOnBackup(document.querySelector(".nodeArray").cloneNode(true))
    refreshBackups()
    document.querySelector(".nodeArrayChild").innerHTML = ""
    reSort(container)

})

unsortBtn.addEventListener("click", async function() {
    if (currentState.inEditMode) {
        console.log("edit mode")
        messageAlert("on Edit Mode", "close edit first")
        return
    }

    if (currentState.isUnsorted) {
        console.log("already unsorted")
        messageAlert("already Unsorted", "sort first")
        return
    }


    if (currentState.onProcess) {
        console.log("on process")
        messageAlert("on Process")
        return
    }
    
    currentState.switchProcess()

    container.classList.add("translate-y-12", "opacity-0")
    
    await timeout(700)
    
    container.firstElementChild.remove()

    const array = arrayBackups.at(-1).cloneNode(true)

    array.classList.remove("scale-50", "group-hover:scale-[0.6]", "h-2")

    container.prepend(array)
    console.log(arrayBackups)
    
    container.classList.remove("translate-y-12", "opacity-0")

    currentState.switch()
    currentState.switchProcess()
})

editBtn.addEventListener("click", function() {
    if (currentState.onProcess) {
        console.log("on process")
        messageAlert("on Process")
        return
    }

    currentState.switchEdit()
    arrayEditor.classList.toggle("-translate-y-24")
    container.firstElementChild.children[+arrayEditor.dataset.currentindex].classList.toggle("translate-y-8")
    arrayEditor.dataset.currentindex = 0
    currentState.isSorted = false
    currentState.isUnsorted = true
})

arrayEditor.addEventListener("click", async function(e) {
    const nodeArray = container.firstElementChild.children
    let i = +arrayEditor.dataset.currentindex
    if (e.target.dataset.move) {
        console.log("ok")


        nodeArray[i]?.classList.remove("translate-y-8")
        i += +e.target.dataset.move
        
        if (i < 0) i = nodeArray.length - 1
        else if (i == nodeArray.length) i = 0

        nodeArray[i]?.classList.add("translate-y-8")


        arrayEditor.dataset.currentindex = i
        console.log(arrayEditor.dataset.currentindex)
    }
    else if (e.target.dataset.chvalue) {
        nodeArray[i].innerText = +nodeArray[i].innerText + +e.target.dataset.chvalue
    }

    console.log(+e.target.dataset.chvalue)
})

asideBackups.addEventListener("click", async function(e) {
    if (currentState.inEditMode) {
        console.log("edit mode")
        messageAlert("on Edit Mode", "close edit first")
        return
    }

    if (currentState.onProcess) {
        console.log("on process")
        messageAlert("on Process")
        return
    }

    const index = e.target.firstElementChild.dataset.index 
    container.classList.add("translate-y-12", "opacity-0")
    
    await timeout(700)
    
    container.firstElementChild.remove()
    const array = arrayBackups.at(index).cloneNode(true)

    array.classList.remove("scale-50", "group-hover:scale-[0.6]", "h-2")
    container.prepend(array)
    console.log(arrayBackups)
    
    container.classList.remove("translate-y-12", "opacity-0")

    currentState.isSorted = false
    currentState.isUnsorted = true
})