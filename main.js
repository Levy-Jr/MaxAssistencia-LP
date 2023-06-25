const moduleBtns = document.querySelectorAll("[data-module-button]")
const modulesList = document.querySelector("[data-modules-lists]")

moduleBtns.forEach(button => {
    button.addEventListener("click", () => {
        const parentButtonElement = button.closest(".module")

        parentButtonElement.querySelector('[data-module-ul-wrapper]').classList.toggle('active')
        parentButtonElement.querySelector('[data-arrow-icon]').classList.toggle('active')
    })
})