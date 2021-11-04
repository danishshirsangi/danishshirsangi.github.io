let hamburger1 = document.querySelector('i')
let ul = document.querySelector('ul')

const handleToggle = () => {
    if (ul.style.display=='block'){
        ul.style.display='none'
    }else{
        ul.style.display='block'
    }
}
let nav = document.querySelector('nav')

window.onscroll = () => {
    if (document.body.scrollTop > 400){
        scrollfunction()
    }
}

const scrollfunction = () => {
    nav.style.position = 'fixed'
}