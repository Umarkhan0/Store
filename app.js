let navbar = document.querySelector(".display");
let mainNav = document.querySelector(".main-nav");
let input = document.querySelector(".input");

mainNav.style.height = "80px"
console.log(mainNav.style.height)

navbar.addEventListener("click", () => {
    if (mainNav.style.height == "80px") {
        mainNav.style.height = "190px";
        input.style.display = "block"
mainNav.style.transition = "0.5s"
        
    }

    else if (mainNav.style.height !== "80px") {
        let mainNav = document.querySelector(".main-nav");
        mainNav.style.height = "10px"
        console.log(mainNav.style.height)
        mainNav.style.height = "80px";
        input.style.display = "none"
mainNav.style.transition = "0.5s"
    }
});
