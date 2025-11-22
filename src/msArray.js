// store styles
const styles = {
    array: "flex justify-center gap-8",
    relativeContainer: "relative flex justify-center",
    childrenContainer: "absolute bottom-0 left-0 right-0",
    unit: "size-8 border-2 grid place-content-center",
    toDown: "translate-y-12",
    toLeft: "-translate-x-8",
    toRight: "translate-x-8",
    translateLeft: "translate(-2rem, 3rem)",
    translateRight: "translate(2rem, 3rem)",
    translateUp: "translate(0rem, -3rem)"
}

//element.animate({ transform: "translate(-2rem, 3rem)" }, { duration: 1000, fill: 'forwards' })

class MsArray {
    constructor(parent = null) {
        this.parent = parent
        this.array = null
        this.element = null
        this.childrenContainer = null
        this.index = 0
    }

    del() {
        this.element.remove()
    }

    resetIndex() {
        this.index = 0
    }

    head() {
        return this.array.at(this.index)
    }

    dx() {
        const x2 = this.parent.nodes(this.parent.index).getBoundingClientRect().x
        const x1 = this.nodes(this.index).getBoundingClientRect().x

        return (x2 - x1) / 16 //transform pixel to rem
    }

    translateUp() {
        return `translate(${this.dx()}rem, -3rem)`
    }

    nodes(n) {
        return this.element.firstElementChild.children[n]
    }

    moveUp() {
        //console.log(this.parent.nodes(this.parent.index))
        //console.log(this.translateUp())

        

        const promise = this.nodes(this.index).animate({ transform: this.translateUp() }, { duration: 1000, fill: 'forwards' })

        //change the value of the parent by the new ordered value in both array and element
        this.parent.nodes(this.parent.index).innerText = this.nodes(this.index).innerText
        this.parent.array[this.parent.index] = this.array[this.index]

        //elevate index of parent and child
        this.parent.index++
        this.index++
        
        return promise.finished
    }

    len() {
        return this.index < this.array.length 
    }

    isNomoreDividible() {
        return this.array.length < 2
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
        
        
        const left = new MsArray(this)
        const right = new MsArray(this)

        left.create(this.array.slice(0, h))
        right.create(this.array.slice(h))

        this.childrenContainer.appendChild(left.create())
        this.childrenContainer.appendChild(right.create())


        return { left, right }
    }

    move(to) {
        //true = right , false = left, but ever to down

        //this.element.classList.add(styles.toDown)
        //to ? this.element.classList.add(styles.toRight) : this.element.classList.add(styles.toLeft)
    
        const animation = this.element.animate({ transform: to ? styles.translateRight : styles.translateLeft }, { duration: 1000, fill: 'forwards' })

        return animation.finished
    }
}

export default MsArray