let mainNav = document.querySelector(".main-container");
let navbar = document.querySelector(".display");

mainNav.style.height = "80px"
console.log(mainNav.style.height)
let responsive = document.querySelector(".responsive")
navbar.addEventListener("click", () => {
  if (mainNav.style.height == "80px") {

    document.querySelector(".responsiveness").innerHTML = `
        <div class="fa-cars icon-car"><i class="fa-solid  fa-car"></i><span class="name">MOTORS</span></div>
        <div class="fa-build icon-car"><i class="fa-solid fa-building"></i><span class="name">PROPERTY</span></div>
    
        <div class="input">
          <input type="text" class="head-input">
          <span class="magnify-glass"><i class="fa-solid fa-magnifying-glass"></i></span>
    
        </div>
        <button class="sell-btn">+ Sell</button>
        `
    let input = document.querySelector(".input");
    let faCar = document.querySelector(".fa-cars");
    let faBuild = document.querySelector(".fa-build");
    let sellBtn = document.querySelector(".sell-btn");
    let mainContainer = document.querySelector(".main-container")
    mainNav.style.height = "160px";
    input.style.display = "block";
    mainNav.style.position = "absolute !important"
// document.querySelector(".cra").style.position = "absolute !important"
    faCar.style.display = "block";
    sellBtn.style.display = "block"
    mainNav.style.transition = "0.5s"
    faBuild.style.display = "block"


  }

  else if (mainNav.style.height !== "80px") {
    document.querySelector(".responsiveness").innerHTML = `
        <div class="fa-cars icon-car"><i class="fa-solid  fa-car"></i><span class="name">MOTORS</span></div>
        <div class="fa-build icon-car"><i class="fa-solid fa-building"></i><span class="name">PROPERTY</span></div>
    
        <div class="input">
          <input type="text" class="head-input">
          <span class="magnify-glass"><i class="fa-solid fa-magnifying-glass"></i></span>
    
        </div>
        <button class="sell-btn">+ Sell</button>
        `
    let mainNav = document.querySelector(".main-container");
    mainNav.style.height = "10px"
    console.log(mainNav.style.height)
    mainNav.style.height = "80px";
    mainNav.style.transition = "0.5s"
    faCar.style.display = "none"
    sellBtn.style.display = "none"
    faBuild.style.display = "none"
  }
});
