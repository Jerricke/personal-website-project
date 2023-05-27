const socialicons = document.querySelector(".socialbox .icons img")

socialicons.addEventListener('mouseenter', () => {
    socialicons.classList.add("hovered");
})

socialicons.addEventListener('mouseleave', () => {
    socialicons.classList.remove("hovered");
})