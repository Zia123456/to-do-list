// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import './style.css';

// js to access html elements
const listDiv = document.querySelector('.to-do-list-container');

// array of to do object
const list = [
  { description: 'was the dishes-4', completed: false, index: 4 },
  { description: 'was the dishes-1', completed: false, index: 1 },
  { description: 'was the dishes-3', completed: false, index: 3 },
  { description: 'was the dishes-2', completed: false, index: 2 },
];

// function to display to do list
const displayList = function display() {
  // js to sort array of objects by index value
  list.sort((a, b) => a.index - b.index);
  // js to iterate through array of object and display sorted array
  for (let i = 0; i < list.length; i += 1) {
    const toDoDiv = document.createElement('div');
    toDoDiv.className = 'to-do';

    const input = document.createElement('input');
    input.className = 'check-box';
    input.id = i;
    input.setAttribute('type', 'checkbox');
    toDoDiv.appendChild(input);
    const textDiv = document.createElement('div');
    textDiv.className = 'my-text';
    textDiv.innerHTML = `${list[i].description}`;
    toDoDiv.appendChild(textDiv);
    const imgDiv = document.createElement('div');
    imgDiv.className = 'dots-icon';
    toDoDiv.appendChild(imgDiv);

    listDiv.appendChild(toDoDiv);
  }
};

displayList();
