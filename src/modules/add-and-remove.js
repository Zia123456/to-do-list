/* eslint-disable import/prefer-default-export */
import { Task } from './to-to';
import { input } from './html-element';
// js for add and delete functionalities

class functionalty {
  static addNewTask() {
    // js to create a new task
    // js to setup local storage
    if (localStorage.getItem('myTasks') === null) {
      localStorage.setItem('myTasks', '[]');
    }

    const newTaskDescription = input.value;
    const checked = false;
    const taskslist = JSON.parse(localStorage.getItem('myTasks'));
    const newTaskId = taskslist.length;

    const task = new Task(newTaskDescription, checked, newTaskId);

    // getting old data and merging with new data
    const oldData = JSON.parse(localStorage.getItem('myTasks'));
    oldData.push(task);

    // updating local storage
    localStorage.setItem('myTasks', JSON.stringify(oldData));
  }

  // js to remove a task
  static removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('myTasks'));
    tasks.splice(index, 1);
    // js to update tasks Id
    for (let i = 0; i < tasks.length; i += 1) {
      if (i >= index) {
        const updateId = tasks[i].id - 1;
        tasks[i].id = updateId;
        // js to update local storage after removing a task
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      } else {
        // js to update local storage after removing a task
        localStorage.setItem('myTasks', JSON.stringify(tasks));
      }
    }
    // js to update local storage after removing a task
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }
}

export { functionalty };
