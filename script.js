let url ="https://striveschool-api.herokuapp.com/api/product/"
let prodottoDaAggiungere = {
    name: "prodotto1",
    description: "descrizione1",
    brand: "brand1",
    imageUrl: "immagine1",
    price:100
  }

document.addEventListener("DOMContentLoaded", async() => {
    await aggiungi(prodottoDaAggiungere)
    await eliminaElemento("666777fa7f6b4b0015428ff5")
    await fetch (url, {
        headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NjJlNDdmNmI0YjAwMTU0MjhmZTAiLCJpYXQiOjE3MTgwNTE1NTYsImV4cCI6MTcxOTI2MTE1Nn0.hkWYZO_0n-vxJug3w9hsncGK_68c0_Kq_YMHmtSKgG4",
        "content-type": "application/json"
        }
    })  
    .then(response => {
        //console.log(response)
       response.json().then(data=>{
            console.log(data)
        })
      })  
    })

    let aggiungi = async function(prodotto){  //do un nome alla funzione così posso richiamarla dovunque - funzione asincrona
     fetch(url,{
        method: "POST",
        headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NjJlNDdmNmI0YjAwMTU0MjhmZTAiLCJpYXQiOjE3MTgwNTE1NTYsImV4cCI6MTcxOTI2MTE1Nn0.hkWYZO_0n-vxJug3w9hsncGK_68c0_Kq_YMHmtSKgG4",
            "content-type": "application/json"
            },
            body: JSON.stringify(prodotto)
     }).then(response=>{
        console.log(response)
     })
    }

    let eliminaElemento = async function(id){ 
        fetch(url +id,{
           method: "DELETE",
           headers: {
               authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NjJlNDdmNmI0YjAwMTU0MjhmZTAiLCJpYXQiOjE3MTgwNTE1NTYsImV4cCI6MTcxOTI2MTE1Nn0.hkWYZO_0n-vxJug3w9hsncGK_68c0_Kq_YMHmtSKgG4",
               "content-type": "application/json"
               }
        }).then(response=>{
           console.log(response)
        })
       }

    
    