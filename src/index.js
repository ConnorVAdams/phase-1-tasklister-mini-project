//Add an event listener in order to change the default behavior of the <form> so it does not refresh the page
document.addEventListener("DOMContentLoaded", () => { //Attaches an Event Listener to the <document> to be run after the DOM loads
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => { //After the DOM loads, attaches an event listener to the to do list...
    e.preventDefault() //which prevents refreshing of the page upon input.
    handleSubmit(e.target.todo.value, e.target.priority.value); //handleSubmit triggers and captures the input via the ID of the input (n-t-d) on the target <form>
    form.reset();
  });
});

//Initialize variables for elements that will need to be accessed.
const form = document.querySelector('form');
const toDoList = document.querySelector('#list');

//Captures and posts task from user
const handleSubmit = (input, priority) => {
  const newTask = createTask(input, priority);``
  newTask.className = 'task'
  priorityColor(newTask, priority);
};

// Delete handler to remove p and button elements when X is clicked.
const handleDelete = (e) => {
    e.target.parentNode.remove();
};

//Assigns a color to each task based on priority.
const priorityColor = (task, priority) => {
  if (priority === 'high') {
    task.classList.add('high-priority');
  } else if (priority === 'medium') {
    task.classList.add('medium-priority');
  } else if (priority === 'low') {
    task.classList.add('low-priority');
  } else {
    task.classList.add('no-priority')
  }
};

//Creates a div for the task elements to live in.
const createTask = (input, priority) => {
  let task = document.createElement('div'); //Creates a div element which will hold the input task and a delete button.
  toDoList.appendChild(task); 
  let p = document.createElement('p'); //Creates p element 
  let btn = document.createElement('button'); //Creates button element
  btn.className = 'delete'
  btn.addEventListener('click', handleDelete) //Invokes handleDelete when X is clicked
  task.appendChild(p); //Appends task to to-do list node
  task.appendChild(btn); //Appends X button beside task
  p.textContent = input; //Populates new p element with task
  btn.textContent = 'X';
  return task;
};

// removeTaskFromDocument = (task) => {
//   tasks = document.getElementsByClassName('task');
//   for (task of tasks) {

//   }
// }

//Creates a sort button for users to sort tasks based on their priority
//It's possible that this could be destructured, now that I know what that is?
const sortTasks = () => {
  //Creates a div for priority class.
  const createPriorities = (nodeClass, divId) => {
    const priDiv = document.createElement('div');
    priDiv.id = divId.toString();
    priDiv.className = "priDiv";
    priDiv.textContent = `${divId}`;
  //  
    const taskElements = document.getElementsByClassName('task')
    for (element of taskElements) {
    element.remove();
    };


    // if (toDoList.childNodes.length > 7) {
    //   console.log('already created');
    // } else {
    //   console.log('not yet created');

    // };
  };
  //
  // const divyNodes = () => {
  // const nodeList = document.querySelectorAll(nodeClass);
  // nodeList.forEach((task) => {priDiv.appendChild(task)});
  // toDoList.appendChild(priDiv);
  // };

  createPriorities('.high-priority', 'High');
  createPriorities('.medium-priority', 'Medium');
  createPriorities('.low-priority', 'Low');
  createPriorities('.no-priority', 'None');
};


const sortBtn = document.querySelector('#sort');
sortBtn.addEventListener('click', sortTasks);