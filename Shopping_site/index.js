const mainproducts=document.getElementById("products");
console.log("bsd");

const productsarray=[
    {
        name:"Sweatshirt",
        price:"Rs.600",
        id:"1",
        image:"download.jpg",
        detail:"White Oversized Sweatshirt"
    },{
        name:"Scrunchies",
        price:"Rs.200",
        id:"2",
        image:"scrunchies.jpg",
        detail:"Pack of 4- Nude Shades"
    },{
        name:"Baggy Jeans",
        price:"Rs.800",
        id:"3",
        image:"cloth4.jfif",
        detail:"Light Wash Denims"
        },
        {
        name:"Flannel Shirt",
        price:"Rs.500",
        id:"4",
        image:"cloth.jfif",
        detail:"Pastel Colored Flannel"
        },
        {
        name:"Skater Pants",
        price:"Rs.850",
        id:"5",
        image:"cloth5.jfif",
        detail:"Khaki color pants"
        }
];

let cart={};

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
    details.innerText=productsarray[index].detail;
    details.className="card-text"
        
    const price=document.createElement('h6');
    price.innerText=productsarray[index].price;


    const cartbtn=document.createElement('button');
    cartbtn.innerText="Add to Cart";
    cartbtn.className="btn btn-primary";
    cartbtn.addEventListener("click",function(){
        const productId=productsarray[index].id;
        if(cart.hasOwnProperty(productId)){

        cart[productId]+=1;}
        else{
            cart[productId]=1 
        }
        console.log(cart);
    })

    const openbtn=document.createElement('button');
    openbtn.innerText="Open>";
    openbtn.className="btn btn-primary";

    const cartdetails=document.createElement("span");
    if(cart.hasOwnProperty(productsarray[index].id)){
    cartdetails.innerText=productsarray[index].id;
    }

    cardbodydiv.appendChild(title);
    cardbodydiv.appendChild(details);
    cardbodydiv.appendChild(price);
    cardbodydiv.appendChild(openbtn);
    cardbodydiv.appendChild(cartbtn);
   cardbodydiv.appendChild(cartdetails);
   

    carddiv.append(image);
    carddiv.append(cardbodydiv);
    mainproducts.append(carddiv);
    
}

for(let i=0;i<productsarray.length;i++){
    showProducts(i);
}


