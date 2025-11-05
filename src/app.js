import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([1, 2, 3, 4]))

function recursiveDivision(arr) {
    console.log("execute")

    if (arr.isNomoreDividible()) return

    
    const { left, right } = arr.divide()
    const msLeft = new MsArray()
    const msRight = new MsArray()

    msLeft.create(left)
    msRight.create(right)
    arr.childrenContainer.appendChild(msLeft.create())
    arr.childrenContainer.appendChild(msRight.create())

    msLeft.move(false)
    msRight.move(true)

    recursiveDivision(msLeft)
    recursiveDivision(msRight)


}

sortBtn.onclick = () => {
    recursiveDivision(msArray)
}

unsortBtn.onclick = () => {
    console.log("initial state")
}