function getXlen(elem1, elem2) {
    const a = elem1.getBoundingClientRect().x
    const b = elem2.getBoundingClientRect().x
    const num = (b-a) / 16
    return +num.toPrecision(4)
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const animOpts = {
    duration: 700,
    fill: "forwards",
    easing: "ease-in-out"
}

export {
    getXlen,
    timeout,
    animOpts,
}
