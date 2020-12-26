console.log("123");
const input=document.getElementById("input");
  const list=document.getElementById("tasks");
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



  const todo=[];
  todo.push("1}");
  todo.push("2}");

  function show(){
    for(let i=0;i=todo.length;i++){
      addtask(todo[i]);
    }
  }

  function addtask(tasks){
    const li=document.createElement("li");
    li.innerText=tasks;
    list.appendChild(li);
  }
  show();