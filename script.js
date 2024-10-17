const b1 = document.getElementById("increase")
const b2 = document.getElementById("decrease")
const count = document.getElementById("count")
const counter = document.getElementById("counter")
let r = 255
let g = 255
let b = 255


function setColor(r,g,b)
{
    return `rgb(${r} ${g} ${b})`
}

function something()
{
    alert(`you applied to ${count.textContent} companies today!!`)
}


b1.addEventListener("click", ()=> {

    count.textContent = +count.textContent + 1
    g-=1
    b-=2
    newcolor = setColor(r,g,b)
    counter.style.backgroundColor = newcolor
})

b2.addEventListener("click", ()=> {
    count.textContent = +count.textContent - 1
    g+=1
    b+=2
    newcolor = setColor(r,g,b)
    counter.style.backgroundColor = newcolor
})


