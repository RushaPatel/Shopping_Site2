const products=document.getElementById("products");
console.log("bsd");

const productsarray=[
    {
        name:"Sweatshirt",
        price:"Rs.600",
        id:"1",
        image:"download.jpg"
    },{
        name:"Scrunchies",
        price:"Rs.200",
        id:"2",
        image:"scrunchies.jpg"
    },{
    name:"Baggy Jeans",
        price:"Rs.800",
        id:"3",
        image:"cloth4.jfif"
        },
        {
        name:"Flannel Shirt",
        price:"Rs.500",
        id:"4",
        image:"cloth.jfif"
        },
        {
        name:"Skater Pants",
        price:"Rs.850",
        id:"5",
        image:"cloth5.jfif"
        }
];

function showProducts(index){
    const carddiv=document.createElement('div');
    carddiv.className="card col-4";

    const image=document.createElement('img');
   image.setAttribute('src',productsarray[index].image);
   //image.innerText=productsarray[index].image;
    image.className="card-image-top";

    const cardbodydiv=document.createElement('div');
    cardbodydiv.className="card-body";
    
    const title=document.createElement('h5');
    title.innerHTML=productsarray[index].name;
    title.className="card-title";

    const details=document.createElement('div');
    details.innerText="Oversized Sweatshirt";
    details.className="card-text"
        
    const price=document.createElement('h6');
    price.innerText=productsarray[index].price;


    const cartbtn=document.createElement('button');
    cartbtn.innerText="Add to Cart";
    cartbtn.className="btn btn-primary";

    const openbtn=document.createElement('button');
    openbtn.innerText="Open>";
    openbtn.className="btn btn-primary";

    cardbodydiv.appendChild(title);
    cardbodydiv.appendChild(details);
    cardbodydiv.appendChild(price);
    cardbodydiv.appendChild(openbtn);
    cardbodydiv.appendChild(cartbtn);
   

    carddiv.append(image);
    carddiv.append(cardbodydiv);
    products.append(carddiv)
    
}

for(let i=0;i<productsarray.length;i++){
    showProducts(i);
}


