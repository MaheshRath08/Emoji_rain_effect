function rain(){
    let obj = document.createElement("div")
    document.body.appendChild(obj)
    obj.classList.add("rain")
    obj.innerHTML += "🔥"
    obj.style.left = Math.random()*100 + "vw"
    obj.style.animationDuration = 2 - Math.random() + "s"

    setTimeout(()=>{
        obj.remove()
    }, 2500)
}
setInterval(rain, 100)

let colors = ["black", "white", "brown"] 
function changeColors(){
    let r = Math.floor(Math.random()*3)
    document.body.style.backgroundColor = `${colors[r]}`    
    document.body.style.transition = "0.3s background ease-in-out"
}

setInterval(changeColors, 2000)
