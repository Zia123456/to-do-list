import { deletecompletedTasks } from './html-element';
import displayList from './display-tasks';

const deleteChecked = () => {
  const oldData = JSON.parse(localStorage.getItem('myTasks'));
  const result = oldData.filter((task) => task.checked === false);
  if (result.length === 0) {
    localStorage.setItem('myTasks', JSON.stringify([]));
  } else {
    for (let i = 0; i < result.length; i += 1) {
      result[i].id = i + 1;
      localStorage.setItem('myTasks', JSON.stringify(result));
    }
  }
  displayList();
};

deletecompletedTasks.addEventListener('click', deleteChecked);
