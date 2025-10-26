import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([1, 2, 3, 4]))

sortBtn.onclick = () => {
    console.log("execute")
    console.log(msArray.divide())
}

unsortBtn.onclick = () => {
    console.log("initial state")
}