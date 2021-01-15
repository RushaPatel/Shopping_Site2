console.log("xx")
const product=document.getElementById("main");

const array=[];
const div=document.createElement('div');
div.className="card col-4";

const title=document.createElement('h5');
title.innerHTML="Sweat Shirt";
title.className="card-title";

const brk=document.createElement('br');

const image=document.createElement('img');
image.setAttribute('src','download.jpg');
image.className="card-image-top"

const desc=document.createElement('div');
desc.innerText="Oversized Sweatshirt";
desc.className="card-text"

const price=document.createElement('h6');
price.innerText="Rs. 600";


const cartbtn=document.createElement('button');
cartbtn.innerText="Add to Cart";
cartbtn.className="btn btn-primary";

const no=document.createElement('a');
no.innerText="x 0";
no.className="border";
product.appendChild(div);
div.appendChild(title);
title.appendChild(brk);
title.appendChild(image);
title.appendChild(desc);
title.appendChild(price);
title.appendChild(cartbtn);
title.appendChild(no);
array.push(title);

const abc=document.createElement('div');
div.className="card col-4";

const title2=document.createElement('h5');
title2.innerHTML="Sweat Shirt";
title2.className="card-title";


product.appendChild(abc);
abc.appendChild(title2);  

console.log(array);

let a = 0;
cartbtn.onclick= indexno;

function indexno(event){
let i=array.indexOf(event.target.parentElement);
a=a+1
let t=event.target.parentElement;
let final={
    product:t,
    index:i,
    number:a
}
let btn=event.target.nextSibling;
console.log(btn);
btn.innerText="x"+" " +a;

const finalArray=[];
finalArray.push(final);
console.log(finalArray);
localStorage.setItem("Cart",JSON.stringify(final));
console.log(Cart);
}
