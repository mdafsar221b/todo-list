

const todoList=[];

// Adds on pressing Enter Key
function handleTodoKeydown(event) {
  if (event.key === 'Enter') {
      addTodo();
  }
}
// display on screen
function renderTodoList(){

  
  let todoListHTML='';
  for(let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
   // const name=todoObject.name;
   //const dueDate=todoObject.dueDate;
   const {name,dueDate}=todoObject;

    //creates HTML elements dynamically in the div
    const html=`
        <div>
           ${name}
        </div> 
        <div>
            ${dueDate}
         </div>
        
          <button class= "delete-todo-btn" onclick="
           todoList.splice(${i},1); 
            renderTodoList();
            
            ">Delete</button>
    `; 
    todoListHTML+=html;
  
  }
  
  //Get div element 
  document.querySelector('.js-todo-box')
  .innerHTML=todoListHTML;
}

function addTodo(){
  
  const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateInputElement=document.querySelector('.js-due-date-input');
   const dueDate=dateInputElement.value;
   // pushing whole object into array
   todoList.push({
    // name:name,
    // dueDate:dueDate,
    name,
    dueDate,
   });
     inputElement.value='';
   renderTodoList();

}
