console.log("bkudrku");
const tasks=document.getElementById("tasks");
const input=document.getElementById("input");
const btnnew=document.getElementById("btnnew");
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
    li.setAttribute("class","list-group-item")
   
    const span=document.createElement("span")
    span.style.color='red';
    
  li.setAttribute('todo',i);
    
    span.innerText=newTask.task;

const dlt=document.createElement('button');
dlt.innerText='X';
dlt.onclick=DeleteTodo;
dlt.setAttribute("id","delete");
dlt.setAttribute("class","btn btn-outline-danger");



const up=document.createElement('button');
up.innerText='^';
up.onclick= above;
up.setAttribute("class","btn btn-outline-secondary");

const down=document.createElement('button');
down.innerText='v';
down.onclick= below;
down.setAttribute("class","btn btn-outline-secondary")

    const checkbox=document.createElement("input");
    checkbox.onclick=checkboxes ;
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute("class","check")
    if(newTask.done){
        checkbox.setAttribute('checked',true);
        span.style.textDecoration='line-through';
        span.style.color='green';
    }


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(dlt);
    if(i!==0){
    li.appendChild(up);}
    if(i!==todos.length-1){
    li.appendChild(down);}
    tasks.appendChild(li);
}

function checkboxes(event){
    
    let index= parseInt(event.target.parentElement.getAttribute('todo'));
  
  todos[index].done=!todos[index].done;
  showTodos();
}

function DeleteTodo(event){
   
    let dindex= parseInt(event.target.parentElement.getAttribute('todo'));
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
        if (bindex===todos.length-1){
            return;
        }
        swap(bindex,bindex+1);
        showTodos();
     }
     