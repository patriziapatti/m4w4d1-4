let url ="https://striveschool-api.herokuapp.com/api/product/"
let carrello = []
document.addEventListener("DOMContentLoaded",() => {
        let sezioneProdotti = document.getElementById("prodotti")
        fetch(url,{
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NjJlNDdmNmI0YjAwMTU0MjhmZTAiLCJpYXQiOjE3MTgwNTE1NTYsImV4cCI6MTcxOTI2MTE1Nn0.hkWYZO_0n-vxJug3w9hsncGK_68c0_Kq_YMHmtSKgG4",
                "content-type": "application/json"
                },
        }).then(response=>{
            response.json().then(data=>{
                //console.log(data)
                data.forEach(element => {
                  //console.log(element.price)
                sezioneProdotti.innerHTML += `<div id="${element._id}" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card m-2 " ><div class="card-body text-center"><img src="${element.imageUrl}"class="card-img-top" style="width: 250px; height: 250px"/>
                <h5 class="card-title">${element.name}</h5><h6 class="card-subtitle mb-2 text-body-secondary">${element.brand}</h6><p class="card-text">${element.description}</p><p class="card-text">${element.price}€</p>
                    <div class="d-flex justify-content-center"><button type="button" class="btn btn-primary p-2"onclick="aggiungiAlCarrello(${element.name},${element.price})">Aggiungi al carrello</button>
                   <a href="./dettagli.html?_id="${element.id} class="ps-2 pt-2">Altre info</a> </div>
                </div>
            </div>
        </div>`
                });
            })
            
        })
    })

    