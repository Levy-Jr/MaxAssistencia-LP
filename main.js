const modulesBtn = document.querySelector("[data-modules-button]")
const modulesList = document.querySelector("[data-modules-lists]")
const arrowIcon = document.querySelector("[data-arrow-icon]")

modulesBtn.addEventListener("click", () => {
    modulesList.classList.toggle("active")
    arrowIcon.classList.toggle("active")
})