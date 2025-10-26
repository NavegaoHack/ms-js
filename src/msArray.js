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
        if (this.array)
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

    divide() {
        var h = Math.ceil(this.array.length / 2);    

        const left = this.array.slice(0, h)
        const right = this.array.slice(h)

        return { left, right }
    }
}

export default MsArray