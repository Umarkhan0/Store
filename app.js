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
        <div class="titles">
        <div>
        <p class="title-pra">Price</p>
        <input class="user-input title-input" type="text" placeholder="price" id="price"><br>
        </div></div>
        <button id="submit" class="post-btn">Post card</button></div>
        
        </div></div>
      `;
      let prcie = document.querySelector("#price")
      let brand = document.querySelector('#brand')
      let submit = document.querySelector("#submit");
      let name = document.querySelector("#name");
      let title = document.querySelector('#title');
      let descrip = document.querySelector('#text-d');
      let phone = document.querySelector('#phone');
      let img = document.querySelector('#img');
      submit.addEventListener("click", async () => {
        let obj = {
          prcie: prcie.value,
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
                            <p class="description">${doc.data().descrips}</p>
                            <p>Rs<b>${doc.data().prcie}</b><p>
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
    dynamicBullets: false,
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

let logBtn = document.querySelector(".log-btn")
let cardPrint = document.querySelector(".log-card-print")
logBtn.addEventListener("click", () => {
  cardPrint.innerHTML = ` <div class="card-log">
  <div class="cardlog1">
  <span class="cut-log"><svg width="25" height="25" fill-rule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024"><path d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z" class="rui-22SD7"></path></svg></span>
  <img class="img-log-card" src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg">
  <p class="well-come">WELCOME TO OLX</p>
  <p class="text-log">The trusted community of buyers and sellers.</p>
<button class="carass continu-google-phone-email"><img class="img1 icon-log-card" src="	https://www.olx.com.pk/assets/iconGoogleLogin_noinline.633b1f5afb5219bedca01d2367642a28.svg">Continu with google</button>
<button class="continu-google-phone-email carass2"><img class=" icon-log-card btns img2" src="	https://www.olx.com.pk/assets/iconFacebookLogin_noinline.70f71af03bbf63ca01a044ff5c5eb342.svg">Continu with Facebook</button>
<button class="continu-google-phone-email carass3 google"><img class="icon-log-card img3" src="	https://www.olx.com.pk/assets/iconMailLogin_noinline.248b2cbda65d833f5f8f87f18a346cc9.svg"> 	Continu with Email</button>
</div></div></div>
`
  let cardLogRemove = document.querySelector(".card-log")
  let cardLog1 = document.querySelector(".cardlog1");
  let continuGooglePhoneEmail3 = document.querySelector(".carass3")
  let google = document.querySelector(".google");

  google.addEventListener("click", () => {
    cardLog1.style.display = "none"
cardLogRemove.innerHTML=`
<div class="back-btn-remove-btn">
<span><img src="images/4780026.png" alt="back"></span>
<span class="cut-log"><svg width="25" height="25" fill-rule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024"><path d="M878.3 85.3L512 451.6 145.7 85.3H85.3v60.4L451.7 512 85.3 878.3v60.4h60.4L512 572.3l366.3 366.4h60.4v-60.4L572.4 512l366.3-366.3V85.3z" class="rui-22SD7"></path></svg></span></div>
<img class="img-log-card" src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg">
<p class="text-log mt-3">Enter your Email</p>
<input class="email-input" type="text">
<p class="text-l mt-3">Enter your Email</p>
<input class="email-input" type="text">
<button class="log-btn">Log in</button>
`

document.addEventListener("click", (event) => {
  
})
  })
// })
  let body = document.querySelector(".body");
  body.style.overflow = "hidden";
  document.addEventListener("click", (event) => {
    console.log(event.target)
    let imgLogCard = document.querySelector(".img-log-card");
    let well = document.querySelector(".well-come");
    let textCota = document.querySelector(".text-log");
    let continuGooglePhoneEmail = document.querySelector(".carass")
    let continuGooglePhoneEmail2 = document.querySelector(".carass2")
    let continu = document.querySelector(".btns")
    let text1 = document.querySelector(".text1")
    let text2 = document.querySelector(".text2")
    let text3 = document.querySelector(".text3")
    let img1 = document.querySelector(".img1")
    let img2 = document.querySelector(".img2")
    let img3 = document.querySelector(".img3")
    let logBtnEmail = document.querySelector(".email-input");
    let emailInput = document.querySelector(".log-btn")
    if (event.target !== cardLogRemove && event.target != logBtn &&
      event.target != cardPrint && event.target != imgLogCard && event.target != textCota && event.target != well &&
      event.target != continuGooglePhoneEmail && event.target != continuGooglePhoneEmail2 &&
      event.target != continu && event.target !== text1 && event.target != text2 && event.target != img1 && event.target !=
      img2 && event.target != img3 && event.target !== text3 && event.target != continuGooglePhoneEmail3  ) {
      body.style.overflow = "auto";
      cardLogRemove.style.display = "none";
    }
  });
  console.log()

})
// })