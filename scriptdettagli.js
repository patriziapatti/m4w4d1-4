let url ="https://striveschool-api.herokuapp.com/api/product/"

document.addEventListener("DOMContentLoaded", async () => {
    //console.log("pagina caricata")
    const params= new URLSearchParams(location.search)
    console.log(params)
    let _id = params.get("_id")
    console.log(_id)
    fetch (url +_id,{
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NjJlNDdmNmI0YjAwMTU0MjhmZTAiLCJpYXQiOjE3MTgwNTE1NTYsImV4cCI6MTcxOTI2MTE1Nn0.hkWYZO_0n-vxJug3w9hsncGK_68c0_Kq_YMHmtSKgG4",
                "content-type": "application/json"
                },
    })
    .then((response) =>{
    //console.log(response)
    response.json().then((data)=> {
    //console.log(data._id)
    let container =""  
 
    container += `<div id="${data._id}" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card m-2 " ><div class="card-body text-center"><img src="${data.imageUrl}"class="card-img-top" style="width: 250px; height: 250px"/>
                <h5 class="card-title">${data.name}</h5><h6 class="card-subtitle mb-2 text-body-secondary">${data.brand}</h6><p class="card-text">${data.description}</p><p class="card-text">${data.price}€</p><p class="card-text d-none">${data._id}</p>
                </div>
            </div>
        </div>`
 
         document.getElementById("schedaArticolo").innerHTML+=container
     })
     
     })
 })