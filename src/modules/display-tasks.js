/* eslint-disable import/prefer-default-export */
import { listDiv } from './html-element';
import { functionalty } from './add-and-remove';

// function to display to do list
const displayList = function display() {
  listDiv.innerHTML = '';

  // receiving data from local storage
  const list = JSON.parse(localStorage.getItem('myTasks'));

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

    const removeIconDiv = document.createElement('div');
    removeIconDiv.className = 'remove';
    removeIconDiv.className = 'display-none';
    removeIconDiv.onclick = () => {
      functionalty.removeTask(i);
      displayList();
    };
    toDoDiv.appendChild(removeIconDiv);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'dots-icon';
    imgDiv.onclick = () => {
      removeIconDiv.classList.remove('display-none');
      removeIconDiv.classList.add('remove');
      imgDiv.classList.remove('dots-icon');
      toDoDiv.classList.add('color');
    };
    toDoDiv.appendChild(imgDiv);

    listDiv.appendChild(toDoDiv);
  }
};

export { displayList };
