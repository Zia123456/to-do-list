import functionalty from './add-and-remove';
import Task from './to-do';

export default function updateStatus(index) {
  const list = JSON.parse(localStorage.getItem('myTasks'));
  if (list[index].checked === true) {
    const checked = false;
    const checkedId = list[index].id;
    const checkedDescription = list[index].description;

    functionalty.removeEditedTask(index);

    const task = new Task(checkedDescription, checked, checkedId);
    const oldData = JSON.parse(localStorage.getItem('myTasks'));

    oldData.splice(index, 0, task);

    localStorage.setItem('myTasks', JSON.stringify(oldData));
  } else {
    const checked = true;
    const checkedId = list[index].id;
    const checkedDescription = list[index].description;

    functionalty.removeEditedTask(index);

    const task = new Task(checkedDescription, checked, checkedId);
    const unChecked = JSON.parse(localStorage.getItem('myTasks'));

    unChecked.splice(index, 0, task);

    localStorage.setItem('myTasks', JSON.stringify(unChecked));
  }
}
