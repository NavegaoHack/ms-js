import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([4, 3, 2, 6, 1]))

const storage = {
    storage: [],
    index: 0,
    getCurrent: () => { return [...storage.storage.at(storage.index)] },
    add: (arr) => { storage.storage.push([...arr]) },
    movePos: (forward) => { return forward ? storage.index++ : storage.index--}
}

async function recursiveDivision(arr) {
    
    if (arr.isNomoreDividible()) return


    const { left, right } = arr.divide()


    await left.move(false)
    await right.move(true)

    await recursiveDivision(left)
    await recursiveDivision(right)

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
    
    arrLeft.del()
    arrRight.del()
        
    
}

sortBtn.onclick = () => {
    storage.add(msArray.array)
    recursiveDivision(msArray)
}

unsortBtn.onclick = () => {
    msArray.array = storage.getCurrent()
    msArray.refresh()
    console.log("initial state")
}