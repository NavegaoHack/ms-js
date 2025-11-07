import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([1, 2, 3, 4]))

async function recursiveDivision(arr) {
    
    if (arr.isNomoreDividible()) return


    const { left, right } = arr.divide()


    await left.move(false)
    await right.move(true)

    await recursiveDivision(left)
    await recursiveDivision(right)

    //sortArrays(arr, msLeft, msRight)


}

async function sortArrays(arr, arrLeft, arrRight) {
    
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