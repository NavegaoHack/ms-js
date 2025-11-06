import MsArray from "/src/msArray.js"


const msArray = new MsArray()

mainCanvas.appendChild(msArray.create([1, 2, 3, 4]))

async function recursiveDivision(arr) {
    console.log("execute")

    if (arr.isNomoreDividible()) return

    
    const { left, right } = arr.divide()
    const msLeft = new MsArray()
    const msRight = new MsArray()

    msLeft.create(left)
    msRight.create(right)
    arr.childrenContainer.appendChild(msLeft.create())
    arr.childrenContainer.appendChild(msRight.create())

    await msLeft.move(false)
    await msRight.move(true)

    await recursiveDivision(msLeft)
    await recursiveDivision(msRight)

    sortArrays(msLeft, msRight)


}

async function sortArrays(arrLeft, arrRight) {
    [...arrLeft.array, ...arrRight.array].map((arr, i) => {

        arrLeft.array[i] <= arr ? console.log(arr, "from the left") : console.log(arr, "from the right")

    })
        
    
}

sortBtn.onclick = () => {
    recursiveDivision(msArray)
}

unsortBtn.onclick = () => {
    console.log("initial state")
}