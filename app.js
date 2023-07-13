import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {getFirestore,collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNBoAZI1Sj4WYFgj1Jw05kXfPRB8q-Q5Y",
  authDomain: "e-commers-web.firebaseapp.com",
  projectId: "e-commers-web",
  storageBucket: "e-commers-web.appspot.com",
  messagingSenderId: "510132111199",
  appId: "1:510132111199:web:3e68ccf789bd74a0e7d8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();






let sellBtn = document.querySelector(".sell-btn");
if(sellBtn){

sellBtn.addEventListener("click", () => {
// alert()
let newWindow =   window.location.assign("SelectCatagri.html")
// alert()
// newWindow.onload(()=>{
  
})
// })
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

if(!sellBtn){
  let tableCells = document.querySelectorAll(".table-data");

  tableCells.forEach((cell) => {
    

    cell.addEventListener("click", () => {
    console.log(cell.textContent)

      let mainTable = document.querySelector(".main-table");
      mainTable.style.display = "none";
      let table = document.querySelector(".table");
      table.style.display = "unset";
      table.innerHTML = `
        <input type="name" placeholder="Name" id="name"><br>
        <input type="text" placeholder="Title" id="title"><br>
        <input type="text" placeholder="Description" id="descrip"><br>
        <input type="number" placeholder="Phone" id="phone"><br>
        <input type="text" placeholder="Image" id="img"><br>
        <button id="submit">submit</button>
      `;

      let submit = document.querySelector("#submit");
      let name = document.querySelector("#name");
      let title  = document.querySelector('#title');
      let descrip = document.querySelector('#descrip');
      let phone = document.querySelector('#phone');
      let img = document.querySelector('#img');
      submit.addEventListener("click", async()=>{
      let obj = {
        name: name.value,
        title: title.value,
        descrips: descrip.value,
        phones: phone.value,
        img: img.value
      }
    
    
    
    try {
      const docRef = await addDoc(collection(db, cell.textContent), {
       ...obj
       
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    })
    
    });
  });
}

const querySnapshot = await getDocs(collection(db, "Vehicles"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => `,doc.data());

let vahicless = document.querySelector(".swiper-wrapper");
console.log(vahicless)
vahicless.innerHTML += `

           

                  <div class="card swiper-slide">
                        <div class="image-content">
                        <img src="${doc.data().img}" alt="" class="card-img">

                           

                            
                        </div>

                        <div class="card-content">
                            <h2 class="name">${doc.data().title}</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                  
                   
                   
                


`

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  speed: 800, // Adjust the speed value as needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


});
// const querySnapshot = await getDocs(collection(db, "user"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ` 
//   ,doc.data())
// })





