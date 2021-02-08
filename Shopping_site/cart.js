console.log("aa");
const container=document.getElementById("cart-container");

let cart={};
if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

function Products(cartname,cartnu){
  const ul=document.createElement('ul');
  ul.className="row list-group"
    container.appendChild(ul);
  const namediv=document.createElement('li');
    namediv.className=" col-12 list-group-item";
    namediv.innerText=cartname;
    console.log(namediv);
    ul.appendChild(namediv);

    const quantity=document.createElement('div');
    quantity.innerText=cartnu;
    quantity.className=""
    namediv.appendChild(quantity);

    const plus=document.createElement('i');
    plus.className="fas fa-plus-square";
    plus.onclick=plusfunc;
    quantity.appendChild(plus);

    const minus=document.createElement('i');
    minus.className="fas fa-minus-square";
   quantity.appendChild(minus);
}


for(key in cart){
for(let i=0;i<productsarray.length;i++){
    if(parseInt(productsarray[i].id)===parseInt(key)){
       let cartname=productsarray[i].name;
       let cartnu=cart[key];
       console.log(cartnu);
       Products(cartname,cartnu);
    }
   
   }}

function plusfunc(event){
    let uindex=parseInt(event.target.parentElement.innerText);
    uindex=uindex+1;
    console.log(uindex);
    
};