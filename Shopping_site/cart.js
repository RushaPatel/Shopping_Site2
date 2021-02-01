console.log("aa");
const container=document.getElementById("cart-container");

let cart={};
if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
console.log(productsarray[1].id);
function Products(index){
    const namediv=document.createElement('div');
    namediv.className=" col-12";
    namediv.innerText=productsarray[index].name;
    console.log(namediv);

    container.appendChild(namediv);
}


for(i=0;i<=cart.lenght;i++){
    console.log("a")
   for(a=0;a<=productsarray.lenght;a++){
       console.log(Object.keys(cart)[i])
       if((Object.keys(cart)[i])==productsarray[a].id){
           console.log(productsarray[a].id)
       }
   } 
}
//console.log(Object.keys(cart)[0]);