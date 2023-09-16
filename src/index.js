//Add an event listener in order to change the default behavior of the <form> so it does not refresh the page
document.addEventListener("DOMContentLoaded", () => { //Attaches an Event Listener to the <document> to be run after the DOM loads
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => { //After the DOM loads, attaches an event listener to the to do list...
    e.preventDefault() //which prevents refreshing of the page upon input.
    handleSubmit(e.target.todo.value, e.target.priority.value); //handleSubmit triggers and captures the input via the ID of the input (n-t-d) on the target <form>
    form.reset();
  });
});

//Initialize variables for elemnents that will need to be accessed.
const form = document.querySelector('form');
const toDoList = document.querySelector('#list');

//Captures and posts task from user
const handleSubmit = (input, priority) => {
  const newTask = createTask(input, priority);
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
  };
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

//Creates a sort button for users to sort tasks based on their priority
//It's possible that this could be destructured, now that I know what that is?
const sortTasks = () => {
  const allTasks = []; //Create four divs for high, med, and low priority

  const createNodeList = (class, id) => {
    const listId = 
  }

  const hiPri = document.createElement('div'); //This is where an object would be handy to iterate through for the right keys instead of hard coding all the high, low, etc.
  hiPri.id = 'hiPriDiv';
  const hiNodes = document.querySelectorAll('.high-priority');
  allTasks.push(hiPri);

  const medPri = document.createElement('div');
  medPri.id = 'medPriDiv';
  const medNodes = document.querySelectorAll('.medium-priority');
  allTasks.push(medPri);

  const lowPri = document.createElement('div');
  lowPri.id = 'lowPriDiv';
  const lowNodes = document.querySelectorAll('.low-priority');
  allTasks.push(lowPri);

  const noPri = document.createElement('div');
  noPri.id = 'noPriDiv';
  const noNodes = document.querySelectorAll('.no-priority');
  allTasks.push(noPri);
  return allTasks;
};


const sortBtn = document.querySelector('#sort');
sortBtn.addEventListener('click', sortTasks);

//   makePriorities();

  //If statement querying for class selector
  //Task gets removed and appended accordingly
// };



//Iterate through the elements
// const sort = (e) => {

//   for (child in nodeList.);
// };