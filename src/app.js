import MsArray from "/src/msArray.js"
import options from "/src/options.js"

const msArray = new MsArray()

const storage = {
    defaultArray: [4, 3, 2, 6, 1],
    storage: [],
    index: 0,
    getCurrent: () => { return storage.isNotEmpty() ? [...storage.storage.at(storage.index)] : storage.defaultArray },
    add: (arr) => { storage.storage.push([...arr]) },
    moveIndex: (forward) => { return forward ? storage.index++ : storage.index-- },
    isNotEmpty: () => storage.storage.length,

}

mainCanvas.appendChild(msArray.create(storage.defaultArray))




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
    if (storage.isNotEmpty()) storage.moveIndex(true)
    storage.add(msArray.array)
    recursiveDivision(msArray)
}

unsortBtn.onclick = () => {
    msArray.array = storage.getCurrent()
    msArray.refresh()
}


rect846.onclick = () => options.refresh()
options.inputValue(storage.getCurrent())
options.saveBtn.onclick = () => {
    options.save()
    msArray.array = storage.getCurrent()
    msArray.refresh()
}
options.saveSpeedBtn.onclick = options.refreshSpeed

export default storage