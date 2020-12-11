const list=document.getElementById("list");
const input=document.getElementById("input");
const button=document.getElementById("button");

button.addEventListener('click',function(){
 
    var value=input.value  ;
  value=parseInt(value);
  console.log(value);
  FizzBuzz(value);
  input.value=""
})
function FizzBuzz(a){
    var start=new Date().getMilliseconds();
    var st=""
    list.innerHTML=""
for(i=1;i<=a;i++){
if(i%15==0){st+="<li>"+"FizzBuzz"+"</li>"
}
else if(i%5==0){st+="<li>"+"Buzz"+"</li>"}
else if(i%3==0){st+="<li>"+"Fizz"+"</li>"}
else{st+="<li>"+i+"</li>"}

}
list.innerHTML=st;
var end=new Date().getMilliseconds();
console.log("Time taken :"+(end-start))
}