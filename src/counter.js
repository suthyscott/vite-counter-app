const setupCounter = el => {
    console.log("hit")
    let counter = 0 
    const setCounter = count => {
        counter = count
        el.innerHTML = `Count is ${counter}`
    }
    el.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}

export default setupCounter