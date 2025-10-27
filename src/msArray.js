// store styles
const styles = {
    array: "flex justify-center gap-8",
    relativeContainer: "relative flex justify-center",
    childrenContainer: "absolute bottom-0 left-0 right-0",
    unit: "size-8 border-2 grid place-content-center",
    toDown: "translate-y-12",
    toLeft: "-translate-x-8",
    toRight: "translate-x-8"
}

class MsArray {
    constructor() {
        this.array = null
        this.element = null
        this.childrenContainer = null
    }
    
    create(arr=null) {
        //early return element if array has created already
        if (this.array)
            return this.element

        this.array = arr //assign array to the attribute

        this.element = document.createElement("ms-array")
        
        //create array elements container div
        const parent = document.createElement("div")
        //create array children container relative
        const container = document.createElement("div")

        //create array children container absolute
        const childrenContainer = document.createElement("div")
        //nest absolute children container into relative container
        container.appendChild(childrenContainer)

        //store absolute children container only
        this.childrenContainer = childrenContainer

        //set tailwindcss class styles
        parent.className = styles.array
        container.className = styles.relativeContainer
        childrenContainer.className = `${styles.childrenContainer} ${styles.array}`


        arr.forEach(i => {
            // create each unit element
            const unit = document.createElement("ms-n")
            unit.className = styles.unit
            unit.innerText = i
            
            // append to the array
            parent.appendChild(unit)
    
        });

        this.element.appendChild(parent)
        this.element.appendChild(container)
        
        return this.element
    }

    divide() {
        var h = Math.ceil(this.array.length / 2);    

        const left = this.array.slice(0, h)
        const right = this.array.slice(h)

        return { left, right }
    }

    move(to) {
        //true = right , false = left, but ever to down
        this.element.classList.add(styles.toDown)
        to ? this.element.classList.add(styles.toRight) : this.element.classList.add(styles.toLeft)
    }
}

export default MsArray