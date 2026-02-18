import storage from "./app.js"

const options = {
    input: document.querySelector('#inputArray'),
    inputSpeed: document.querySelector('#inputSpeed'),
    speed: 700,
    saveBtn: document.querySelector('#refreshArrayBtn'),
    saveSpeedBtn: document.querySelector('#refreshSpeedBtn'),
    inputValue: (newArr) => { options.input.value = newArr },
    refresh: () => {
        viewOpts.classList.toggle("translate-x-72")
        options.inputValue(storage.getCurrent())
    },
    refreshSpeed: () => {
        options.speed = +inputSpeed.value
    },
    save: () => {
        const arr = options.input.value.split(",")
        const farr = arr.filter(i => i != "")
        storage.add(farr)
        storage.moveIndex(true)

    }

}

export default options