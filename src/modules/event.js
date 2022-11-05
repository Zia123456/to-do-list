import functionalty from './add-and-remove';
import { input, enter } from './html-element';
import displayList from './display-tasks';

const keypress = input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    event.preventDefault();
    functionalty.addNewTask();
    displayList();
    input.value = '';
  }
});

const clicked = enter.addEventListener('click', (event) => {
  if (input.value === '') {
    event.preventDefault();
  } else {
    functionalty.addNewTask();
    displayList();
    input.value = '';
  }
});

const windowContentLoaded = window.addEventListener(
  'DOMContentLoaded',
  displayList,
);

export { keypress, windowContentLoaded, clicked };
