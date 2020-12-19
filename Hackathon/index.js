const input=document.getElementById("input");
const tasks=document.getElementById("tasks");
const add=document.getElementById("add");
const up=document.getElementsByClassName("up");
const close=document.getElementsByClassName("close");
var a;
for(a=0;a<close.length;a++){
    close[a].onclick=function(){
     var i=this.parentElement;   
        i.style.display="none";
    }
}



add.onclcik=
    function add() {
  var li = document.createElement("li");
 
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
 
    document.getElementById("tasks").appendChild(li);
    console.log(input.value);
  
  document.getElementById("input").value = "";

    }
var ul=tasks.innerHTML;
up.onclick=
function up(){
  var li=this.parentElement;
  if((this).parent.is(':first-child')){

  }
}