import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([1, 2, 3, 4]))

sortBtn.onclick = () => {
    console.log("execute")
    console.log(msArray.divide())
    
    const { left, right } = msArray.divide()
    const msLeft = new MsArray()
    const msRight = new MsArray()

    msLeft.create(left)
    msRight.create(right)
    msArray.childrenContainer.appendChild(msLeft.create())
    msArray.childrenContainer.appendChild(msRight.create())

    msLeft.move(false)
    msRight.move(true)

}

unsortBtn.onclick = () => {
    console.log("initial state")
}