/* eslint-disable import/prefer-default-export */
// Task class

class Task {
  constructor(todo, check, id) {
    this.description = todo;
    this.checked = check;
    this.id = id;
  }
}

export { Task };
