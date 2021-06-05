let carts  = document.querySelectorAll('.add-cart');



products = JSON.parse(localStorage.getItem("products"))

if (products == undefined){
    products = {
        "babyagl": {
            name: "Baby Agl",
            price: 162000,
            incart: 0
        },
        "babyalo": {
            name: 'Baby Alo',
            price: 162000,
            incart: 0 
        },
        "babycal" : {
            name: "Baby Cal",
            price:162000,
            incart:0,
        },
        "babyphil":{
            name: 'Baby Phil',
            price: 393000,
            incart: 0 
        },
        "babysen": {
            name: 'Baby Sen',
            price: 134000,
            incart: 0 
        },
        "babysyn" : {
            name: 'Baby Syn',
            price: 134000,
            incart: 0 
        },
        "bigcal" : {
            name: 'Big cal',
            price: 648000,
            incart: 0 
        },
        "bigpilea" : {
            name: 'Big pilea',
            price: 648000,
            incart: 0 
        },
        "bigsansev" : {
            name: 'Big sansev',
            price: 648000,
            incart: 0 
        },
        "ceramicpotl" : {
            name: 'Ceramic potl',
            price: 411000,
            incart: 0 
        },
        "ceramicpotm" :{
            name: 'Ceramic pot m',
            price: 150000,
            incart: 0 
        },
        "ceramicpots" :{
            name: 'Ceramic pot s',
            price: 108000,
            incart: 0 
        },
        "dragonscale" :{
            name: 'Dragonscale',
            price: 648000,
            incart: 0 
        },
        "hangingpot" :{
            name: 'Hanging pot',
            price: 148000,
            incart: 0 
        },
        "mediumpilea" :{
            name: 'Medium pilea',
            price: 648000,
            incart: 0 
        },
        "mediumsansev" :{
            name: 'Medium sansev',
            price: 648000,
            incart: 0 
        },
        "verrucosum" :{
            name: 'Verrucosum',
            price: 648000,
            incart: 0 
        },
        "animalpot" :{
            name: 'Animals pot',
            price: 650000,
            incart: 0 ,
        }
    }
}



for (let i=0 ; i < carts.length ; i++) {
    carts[i].addEventListener('click', (e) =>{
        // cartNumbers();
        let item = e.target.value
        console.log(item)
        products[item].incart += 1
        localStorage.setItem("products",JSON.stringify(products))
    })
} 

function cartNumbers() {
    let productNumerbers = localStorage.getItem('cartNumbers');
    
    productNumerbers= parseInt(productNumerbers);

    if( productNumerbers ){
        localStorage.setItem('cartNumbers',productNumerbers + 1);
        document.querySelector('.cart  span').textContent = productNumerbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart  span').textContent = 1;
    }
}
