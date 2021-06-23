const cube = document.querySelector("#token")
cube.style.top = "125px"

const jump = () => {
    const position = cube.style.top.replace("px", "")
    let upwards = parseInt(position)
    if (position > 0){
        cube.style.top = `${upwards - 5}px`
        }
    }

const fall = () => {
    const position = cube.style.top.replace("px", "")
    let upwards = parseInt(position)
    if (position < 250 ){
        cube.style.top = `${upwards + 5}px`
        }
    }

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp"){
        // console.log('works')
        jump()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowDown"){
        // console.log('works')
        fall()
    }
})