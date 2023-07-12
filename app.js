
let sellBtn = document.querySelector(".sell-btn");
if(sellBtn){

sellBtn.addEventListener("click", () => {
// alert()
  window.location.assign("SelectCatagri.html")
})
}
else{
let back = document.querySelector("#back");
back.addEventListener("click",()=>{
  history.back()

})

//   let postCard = document.querySelector("#imgListner")

//   postCard.addEventListener("click", () => {

//     mainNav.style.display = "block"
//     document.querySelector(".cra").style.display = "block"
//     document.querySelector(".image-catagized").style.display = "block"
//     postCard1.style.display = "none"
//   })
//   let mobiles = document.querySelector("#mobiles");

//   mobiles.addEventListener("click", () => {
//     // mainNav.style.display = "none"
//     let choseCatagri = document.querySelector(".choseCatagri")
//     choseCatagri.style.display = "none"
//     let back = document.querySelector("#back")
//     back.innerHTML = `
// <img id="imgListne" class="olx-logo" height="30px" src="./images/th.jpg">
// `
//     let baksBaks = document.querySelector("#imgListne")
//     console.log(baksBaks)
//     let form = document.querySelector(".table")
//     // form.innerHTML = `
//     // <div class="form-mobiles">
//     // <table><th>
//     // INCLUDE SOME DETAILS</th>
//     // <tr><td>Ad title
//     // </div>
//     // `
//     baksBaks.addEventListener("click", () => {
//       alert()
      
//       // let choseCatagris = document.querySelector(".table")

//       choseCatagri.style.display = "block"

//       // let formMobiles = document.querySelector(".form-mobiles");
//       // formMobiles.style.display = "none"
//       // console.log(formMobiles)
//       // console.log(choseCatagri)
//       back.innerHTML = `
// <img id="imgListner" class="olx-logo" height="30px" src="./images/th.jpg">
// `



//       let postCard = document.querySelector("#imgListner")
//       postCard.addEventListener("click", () => {

//         mainNav.style.display = "block"
//         document.querySelector(".cra").style.display = "block"
//         document.querySelector(".image-catagized").style.display = "block"
//         postCard1.style.display = "none"
//       })

//       // document.querySelector(".cra").style.display = "block"
//       // document.querySelector(".image-catagized").style.display = "block"
//       // postCard1.style.display = "none"
//     })

//   })
// })


}