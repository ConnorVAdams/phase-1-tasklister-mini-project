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
const sortTasks = () => {
  console.log('hi');
};

const sortBtn = document.querySelector('#sort');
sortBtn.addEventListener('click', sortTasks);

//   makePriorities();

  //If statement querying for class selector
  //Task gets removed and appended accordingly
// };

//Create three divs for high, med, and low priority
// const makePriorities = () => {
//   let counter = 0;
//   while (counter < 3) {
//   const newDiv = document.createElement('div');
//   toDoList.appendChild(newDiv);
//   counter ++;
//   };
// };

//Iterate through the elements
// const sort = (e) => {

//   for (child in nodeList.);
// };