fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())       
           .then(res => {
            for(var i = 0; i < res.length; i++ ){
                for(getItems in res[i])
                console.log(res[i].price)
                document.getElementById("cardsPrint").innerHTML += `
                <div class="card" style="width: 18rem;">
        <img " src="${res[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">${res[i].price}</a>
        </div>
      </div>`
            }
           })
            
            

