console.log("xxx");
const tasks=document.getElementById("tasks");
const input=document.getElementById("input");
const btnnew=document.getElementById("btnnew");

let a=new Date();
let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
let d=a.getDate();
let m=a.getMonth();
let mm=m+1
let y=a.getFullYear();
let s="-";
let date="Today is ->"+d+s+months[m]+s+y;
document.getElementById("day").innerHTML=date;
console.log(d);
console.log(mm);
console.log(y);

//let todos=[];
let todos=JSON.parse(localStorage.getItem("todolist"));
if( todos === null ) {
    todos = [];
}
showTodos();

btnnew.addEventListener('click',addNew);

function addNew(){
    if(input.value===''){
        return;
    }
    let newTask={
        task:input.value,
        done:false
    };
    
   todos.push(newTask);
   
    input.value='';
   console.log(todos);
    showTodos();
}

function showTodos(){
    tasks.innerHTML='';
    for(let i=0;i<todos.length;i++){
        addToDo(todos[i],i);
      localStorage.setItem("todolist",JSON.stringify(todos))
    }
}
function addToDo(newTask,i){
    const li=document.createElement("li");
    li.className="list-group-item ";

    const span=document.createElement("span");
    span.className="col-auto col-md-12 padding";
    //span.style.color='red';
    
  li.setAttribute('todo',i);
   
    span.innerText=newTask.task;


    const dlticon=document.createElement("i");
    dlticon.className="fas fa-trash";
    const dlt=document.createElement('button');
    dlt.setAttribute("id","delete");
    dlt.className="btn btn-outline-link col-1  red";
    dlt.appendChild(dlticon);
    dlt.onclick=DeleteTodo;




    const up=document.createElement('button');
    const upicon=document.createElement("i");
    upicon.className="fas fa-chevron-up";
    up.appendChild(upicon)
    up.onclick= above;
    up.className="btn btn-outline-link  col-1 up udbtn"
    up.setAttribute("id","upbtn");

    const down=document.createElement('button');
    const downicon=document.createElement("i");
    downicon.className="fas fa-chevron-down";
    down.appendChild(downicon);
    down.onclick= below;
    down.className="btn btn-outline-link col-1 down udbtn";
    down.setAttribute("id","downbtn");

    const checkbox=document.createElement("input");
    checkbox.onclick=checkboxes ;
    checkbox.setAttribute('type','checkbox');
    checkbox.className="check col-1";
    if(newTask.done){
        checkbox.setAttribute('checked',true);
        span.style.textDecoration='line-through';
        span.style.color='green';
    }

    tasks.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    
    if(i!==0){
    li.appendChild(up);}
    if(i!==todos.length-1){
    li.appendChild(down);}
    li.appendChild(dlt);
 
}

function checkboxes(event){
    
    let index= parseInt(event.target.parentElement.getAttribute('todo'));
  
  todos[index].done=!todos[index].done;
  showTodos();
}

function DeleteTodo(event){
  
    let dindex= parseInt(event.target.parentElement.getAttribute('todo'));
    
    if(Number.isNaN(dindex)){
        
       dindex= parseInt(event.target.parentElement.parentElement.getAttribute('todo'));
       
    }
     const TempTodos=[];
     for(let i =0;i<todos.length;i++){
         if(i!==dindex){
             TempTodos.push(todos[i]);
         }
         
     }  
     todos=TempTodos;
     showTodos();}

     function above(event){
        let aindex= parseInt(event.target.parentElement.getAttribute('todo'));    

        if(Number.isNaN(aindex)){
        
            aindex= parseInt(event.target.parentElement.parentElement.getAttribute('todo'));
            
         }
        if (aindex===0){
            return;
        }
        swap(aindex,aindex-1);
        showTodos();
     }
     function swap(index1,index2){
         const index1todos=todos[index1];
         const index2todos=todos[index2];
        todos[index1]=index2todos;
        todos[index2]=index1todos;
     }

     function below(event){
        let bindex= parseInt(event.target.parentElement.getAttribute('todo'));   
        
        if(Number.isNaN(bindex)){
        
            bindex= parseInt(event.target.parentElement.parentElement.getAttribute('todo'));
            
         }
        if (bindex===todos.length-1){
            return;
        }
        swap(bindex,bindex+1);
        showTodos();
     }

     $('.carousel').carousel({
        interval: 11111
      })
     
      