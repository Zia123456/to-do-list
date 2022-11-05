import { input, listDiv } from './html-element';
import functionalty from './add-and-remove';
import Task from './to-do';
import updateStatus from './status';

const displayList = function display() {
  listDiv.innerHTML = '';

  const list = JSON.parse(localStorage.getItem('myTasks'));

  list.sort((a, b) => a.index - b.index);

  for (let i = 0; i < list.length; i += 1) {
    const status = list[i].checked;
    const toDoDiv = document.createElement('div');
    toDoDiv.className = 'to-do';

    const input = document.createElement('input');
    input.className = 'check-box';
    input.setAttribute('type', 'checkbox');
    input.checked = status;
    input.onclick = () => {
      updateStatus(i);
    };

    toDoDiv.appendChild(input);

    const textDiv = document.createElement('div');
    textDiv.className = 'my-text';
    textDiv.innerHTML = list[i].description;
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

      const editInput = document.createElement('input');
      editInput.setAttribute('type', 'text');
      editInput.classList = 'edit-input';
      toDoDiv.appendChild(editInput);
      textDiv.classList.add('display-none');
      editInput.value = list[i].description;

      editInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && editInput.value !== '') {
          event.preventDefault();
          const editChecked = list[i].checked;
          const editId = list[i].id;
          functionalty.removeEditedTask(i);
          const editTask = new Task(editInput.value, editChecked, editId);
          const oldData = JSON.parse(localStorage.getItem('myTasks'));
          oldData.splice(i, 0, editTask);
          localStorage.setItem('myTasks', JSON.stringify(oldData));
          displayList();
        }
      });
    };
    toDoDiv.appendChild(imgDiv);

    listDiv.appendChild(toDoDiv);
  }
};

export default displayList;
export { input };
