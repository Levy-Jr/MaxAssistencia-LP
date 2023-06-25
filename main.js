const moduleBtns = document.querySelectorAll("[data-module-button]")
const modulesList = document.querySelector("[data-modules-lists]")

moduleBtns.forEach(button => {
    button.addEventListener("click", () => {
        const parentButtonElement = button.closest(".module")

        parentButtonElement.querySelector('[data-module-ul-wrapper]').classList.toggle('active')
        parentButtonElement.querySelector('[data-arrow-icon]').classList.toggle('active')
    })
})

const buttonThumbImages = document.querySelectorAll("[data-thumb-image-wrapper]")

const changeSlideImage = (index) => {
    const slides = document.querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    activeSlide.querySelector('video').pause()

    slides.children[index].dataset.active = true
    delete activeSlide.dataset.active
}

const changeThumbImage = (index) => {
    const buttonThumbImagesParent = document.querySelector(".thumb-videos-wrapper")

    const activeThumbs = buttonThumbImagesParent.querySelectorAll(".active")

    buttonThumbImagesParent.children[index].classList.add('active')
    activeThumbs.forEach(activeThumb => activeThumb.classList.remove('active'))
}

buttonThumbImages.forEach((element, index) => {
    element.addEventListener('click', () => {
        if(!element.classList.contains('active')){
            changeSlideImage(index)
            changeThumbImage(index)
        }
    })
})