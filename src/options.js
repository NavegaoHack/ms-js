import storage from "./app.js"

const options = {
    input: viewOpts.childNodes[3].childNodes[3].childNodes[3],
    saveBtn: document.querySelector('#refreshArrayBtn'),
    inputValue: (newArr) => { options.input.value = newArr },
    refresh: () => {
        viewOpts.classList.toggle("translate-x-72")
        options.inputValue(storage.getCurrent())
    },
    save: () => {
        const arr = options.input.value.split(",")
        const farr = arr.filter(i => i != "")
        storage.add(farr)
        storage.moveIndex(true)

    }
}

export default options