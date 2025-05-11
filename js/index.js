let menuBtn = document.querySelector('.menu__container')
let list = document.querySelector('.list__mobile')
let faqBox = document.querySelectorAll('.faq__body')

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu__container--active")
    list.classList.toggle("list__mobile--open")
})

faqBox.forEach(faq => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle('faq__body--active')
    })
});