let products = JSON.parse(localStorage.getItem("products"))
let keys = Object.keys(products)

let total = 0

for (let i = 0;i< keys.length;i++){
    if (products[keys[i]].incart > 0){
        let p = document.createElement("p")
        p.innerHTML = 
        `
        <div>
            <p class = "checkout-item"> ${products[keys[i]].name} ${products[keys[i]].incart} ${products[keys[i]].incart*products[keys[i]].price}
        </div>
        
       `
        document.getElementById("cart").appendChild(p)
        total += products[keys[i]].incart*products[keys[i]].price
    }
}
