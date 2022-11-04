/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
// access html elements
const listDiv = document.querySelector('.to-do-list-container');
const input = document.querySelector('.input');
const taskDiv = document.querySelector('.to-do');
const dots = document.querySelector('dots-icon');
const remove = document.querySelector('.remove');
const enter = document.querySelector('.enter-icon');

export { input, listDiv, dots, taskDiv, remove, enter };
