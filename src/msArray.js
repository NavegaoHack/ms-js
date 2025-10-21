// store styles
const styles = {
    array: "flex justify-center gap-8",
    unit: "size-8 border-2 grid place-content-center"
}

class MsArray {
    constructor() {
        this.array = null
        this.element = null

    }
    
    create(arr) {
        //early return element if array has created already
        if (this.arr)
            return this.element

        this.array = arr //assign array to the attribute

        this.element = document.createElement("ms-array")
        this.element.className = styles.array

        

        arr.forEach(i => {
            // create each unit element
            const unit = document.createElement("ms-n")
            unit.className = styles.unit
            unit.innerText = i
            
            // append to the array
            this.element.appendChild(unit)
    
        });
        
        return this.element
    }
}

export default MsArray