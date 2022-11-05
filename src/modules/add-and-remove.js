import Task from './to-do';
import { input } from './html-element';

class functionalty {
  static addNewTask() {
    if (localStorage.getItem('myTasks') === null) {
      localStorage.setItem('myTasks', '[]');
    }

    const newTaskDescription = input.value;
    const checked = false;
    const taskslist = JSON.parse(localStorage.getItem('myTasks'));
    const newTaskId = taskslist.length + 1;

    const task = new Task(newTaskDescription, checked, newTaskId);

    const oldData = JSON.parse(localStorage.getItem('myTasks'));
    oldData.push(task);

    localStorage.setItem('myTasks', JSON.stringify(oldData));
  }

  static removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('myTasks'));
    tasks.splice(index, 1);

    for (let i = 0; i < tasks.length; i += 1) {
      if (i >= index) {
        const updateId = tasks[i].id - 1;
        tasks[i].id = updateId;
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      } else {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      }
    }
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }

  static removeEditedTask(index) {
    const tasks = JSON.parse(localStorage.getItem('myTasks'));
    tasks.splice(index, 1);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }
}

export default functionalty;
