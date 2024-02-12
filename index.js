let offset = 0
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
const sliderLine = document.querySelector('.slider')
const slider = document.querySelector('.slider-container')
let clone = sliderLine.cloneNode(true)

let i = 2
next.addEventListener('click', function(){
    offset = offset + 432
    sliderLine.style.left = offset + 'px'
    // i++
    // if (i == 3){
    //     slider.prepend(clone)
    //     i = 0
    // }
    // clone.style.left = offset + 'px'
    // console.log(i)
    
})
prev.addEventListener('click', function(){
    offset = offset - 432
    sliderLine.style.left = offset + 'px'
    // clone.style.left = offset + 'px'
})




