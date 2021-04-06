const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('mouseover', event => {
        event.target.style.color = "grey";
    })
    menuLink.addEventListener('mouseout', event => {
        event.target.style = "";
    })
})