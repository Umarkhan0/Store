import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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
if (sellBtn) {

  sellBtn.addEventListener("click", () => {
    let newWindow = window.location.assign("SelectCatagri.html")
    // alert()
    // newWindow.onload(()=>{

  })
  // })
}
else {
  let back = document.querySelector("#back");
  back.addEventListener("click", () => {
    history.back()

  })

}

if (!sellBtn) {
  let tableCells = document.querySelectorAll(".table-data");

  tableCells.forEach((cell) => {


    cell.addEventListener("click", () => {
      console.log(cell.textContent)

      let mainTable = document.querySelector(".main-table");
      mainTable.style.display = "none";
      let table = document.querySelector(".table");
      table.style.display = "unset";
      table.innerHTML = `
      <div class="user-data">
      <h2 class="form-head"> SELECTED CATEGORY</h2>
      <p class="text-contant">${cell.textContent}</p>
      <hr />
      <h3 class="form-includ">INCLUDE SOME DETAILS</h3>
      <div class="set-width">
      
      <div class="titles">
      <div>
      <p class="title-pra">Ad Title</p>
        <input class="user-input title-input" type="name" placeholder="Title" id="title">
        <p class="title-pra">Title should contain at least 5 alphanumeric characters. Please edit the field</p>
        </div></div>


        <div class="titles">
       
      <p class="title-pra">Description</p>
      <div id="text-d" class="editable-content user-input discription-user" contenteditable="true"></div>
      <p class="title-pra">Include condition, features and reason for selling</p>

       
        </div>
       
        <div class="titles">
        <div>
        <p class="title-pra">Mobile Phone Number</p>
        <input class="user-input title-input" type="number" placeholder="Phone number" id="phone"><br>
        </div></div>
        <div class="titles">
        <div>
        <p class="title-pra">Brand</p>
        <input class="user-input title-input" type="text" placeholder="Brand" id="brand"><br>
        </div></div>
        <div class="titles">
        <div>
        <p class="title-pra">Image</p>
        <input class="user-input title-input" type="text" placeholder="Image URL" id="img"><br>
        </div></div>

        <button id="submit" class="post-btn">Post card</button></div>
        
        </div></div>
      `;
      let brand = document.querySelector('#brand')
      let submit = document.querySelector("#submit");
      let name = document.querySelector("#name");
      let title = document.querySelector('#title');
      let descrip = document.querySelector('#text-d');
      let phone = document.querySelector('#phone');
      let img = document.querySelector('#img');
      submit.addEventListener("click", async () => {
        let obj = {
          brand: brand.value,
          title: title.value,
          descrips: descrip.textContent,
          phones: phone.value,
          img: img.value
        }
        console.log(descrip.textContent)


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
let vahiclessSpinner = document.querySelector(".swiper-wrapper");
vahiclessSpinner.innerHTML = `<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>`
const querySnapshot = await getDocs(collection(db, "Vehicles"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => `, doc.data());

  let vahicless = document.querySelector(".vahicle");
  console.log(vahicless)
  document.querySelector(".spinner-border").style.display = "none"
  vahicless.innerHTML += `

           

                  <div class="card swiper-slide">
                        <div class="image-content">
                        <img height="240px" src="${doc.data().img}" alt="" class="card-img">

                           

                            
                        </div>

                        <div class="card-content">
                            <h2 class="name">${doc.data().title}</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                  
                   
                   
                


`
})
const querySnapshotHouse = await getDocs(collection(db, "House"));
querySnapshotHouse.forEach((doc) => {
  console.log(`${doc.id} => `, doc.data());

  let houses = document.querySelector(".houses");
  // console.log(vahicless)
  document.querySelector(".spinner-border").style.display = "none"
  houses.innerHTML += `

           

                  <div class="card swiper-slide">
                        <div class="image-content">
                        <img height="240px" src="${doc.data().img}" alt="" class="card-img">

                           

                            
                        </div>

                        <div class="card-content">
                            <h2 class="name">${doc.data().title}</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                  
                   
                   
                


`


})

var swiper = new Swiper(".houseget", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  speed: 800, // Adjust the speed value as needed
  pagination: {
    el: ".swiper-pagination-house",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-house",
    prevEl: ".swiper-button-prev-house",
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
var swiper = new Swiper(".vahicles-get", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  speed: 800, // Adjust the speed value as needed
  pagination: {
    el: ".swiper-pagination-valhicle",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".button-next-valicle",
    prevEl: ".button-prev-vahicle",
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