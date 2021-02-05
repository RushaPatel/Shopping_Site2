console.log("11");
const chatbot=document.getElementById("chatbot");
//const chatarea=document.getElementById("chatarea");

const value=document.createElement('div');
value.innerText="You can try typing :";
value.setAttribute('id','options')
chatbot.appendChild(value);

const value1=document.createElement('div');
value1.innerText="hi,hello";
value1.setAttribute('id','options')
value.appendChild(value1);

const value2=document.createElement('div');
value2.innerText="or anything you like";
value2.setAttribute('id','options')
value.appendChild(value2);

let input=document.createElement('input');
input.setAttribute("placeholder","Talk with me :)");
input.setAttribute("id","inputbox");
input.className="col-4";
chatbot.appendChild(input);

const submit=document.createElement('button');
submit.innerText="Submit";
submit.setAttribute("id","submit");
submit.className="col-2 btn btn-primary";
chatbot.appendChild(submit);

const newrow=document.createElement('div');
newrow.className="row"
chatbot.appendChild(newrow);

//const options=document.createElement('button');
//options.className="btn btn-secondary col-2 option";
//options.style.visibility="hidden";
//options.innerText="hi";
//options.onclick=createChat();
//newrow.appendChild(options);

const chatarea=document.createElement('ul');
chatarea.setAttribute("id","chatarea");
chatbot.appendChild(chatarea);

submit.onclick=function createChat(event){
  if(input.value===''){
    return
  };
  let new_message = input.value;
  let userMessageNode = document.createElement("li");
  userMessageNode.className="col-auto question a"
  let textInUserMessageNode = document.createTextNode(new_message);
  userMessageNode.append(textInUserMessageNode);
  userMessageNode.style.textAlign = "left";
  let a=event.target.nextSibling.nextSibling;
  console.log(a);
  chatarea.appendChild(userMessageNode);
  input.value = "";
  let bot_message = getReply(new_message);
  let botMessageNode = document.createElement("li");
  botMessageNode.className="col-auto reply a";
  botMessageNode.style.textAlign = "right";
  let textInBotMessageNode = document.createTextNode(bot_message);
  botMessageNode.append(textInBotMessageNode);
  chatarea.appendChild(botMessageNode);
  input.value = "";
};


function getReply(question) {
  let answer = "Sorry,can you term it in a different way?";
 // question = question.toLowerCase();

  if (question === "hello") {
    answer="hi,how are you?"
  }
  else if(question ==="hi"){
    answer="hi,how are you?"
  }
  else if(question==="good"){
    answer="Thats great"
  }
  else if(question==="okay"){
    answer="oh..can you tell me why is it just ok.....?"
  }
  else if(question==="not fine"){
    answer="Can you tell me why? :)"
  }
  else if(question==="what is your name"){
    answer="My creator hasn't given me a name ,so  you can name me like you wish :D"
  }
  if(answer==="hi,how are you?"){
    value1.innerText="good,okay,not fine";
  }
  else if(answer==="Can you tell me why? :)"){
    value1.innerText="Someone scolded me,someone bullied me,I failed";
  }

  else if(answer==="oh..can you tell me why is it just ok.....?"){
    value1.innerText="Someone scolded me,someone bullied me,I failed";
  }
return answer;}