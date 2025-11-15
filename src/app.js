import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([4, 3, 2, 6]))

async function recursiveDivision(arr) {
    
    if (arr.isNomoreDividible()) return


    const { left, right } = arr.divide()


    await left.move(false)
    await right.move(true)

    await recursiveDivision(left)
    await recursiveDivision(right)
    console.log(arr)
    await sortArrays(arr, left, right)


}

async function sortArrays(arr, arrLeft, arrRight) {
    
    arr.resetIndex()
    arrLeft.resetIndex()
    arrRight.resetIndex()
    
    while (arrLeft.len() && arrRight.len()) {

        arrLeft.head() < arrRight.head() ? await arrLeft.moveUp() : await arrRight.moveUp()

    }

    while (arrLeft.len()) await arrLeft.moveUp()
    
    while (arrRight.len()) await arrRight.moveUp()
        
    
}

sortBtn.onclick = () => {
    recursiveDivision(msArray)
}

unsortBtn.onclick = () => {
    console.log("initial state")
}