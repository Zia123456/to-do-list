/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/extensions */
import { functionalty } from './add-and-remove';
import { input, enter } from './html-element';
import { displayList } from './display-tasks';

const keypress = input.addEventListener('keypress', (event) => {
  // if the user presses the enter key on the keyboard
  if (event.key === 'Enter' && input.value !== '') {
    // cancel the default action, if needed
    event.preventDefault();
    // invoke the addNewTask method
    functionalty.addNewTask();

    // invoke the displayList function
    displayList();

    // remove content on input
    input.value = '';
  }
});

const clicked = enter.addEventListener('click', (event) => {
  if (input.value === '') {
    event.preventDefault();
  } else {
    // invoke the addNewTask method
    functionalty.addNewTask();

    // invoke the displayList function
    displayList();

    // remove content on input
    input.value = '';
  }
});

const windowContentLoaded = window.addEventListener(
  'DOMContentLoaded',
  displayList,
);

export { keypress, windowContentLoaded, clicked };
