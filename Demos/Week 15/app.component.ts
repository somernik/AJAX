import { Component } from '@angular/core';

export class ToDoItem {

  constructor(public description: string, public completed: boolean) {};

}

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})

export class AppComponent  { 

  todos: Array<ToDoItem>;
  

  constructor() {
    this.todos = new Array<ToDoItem>();
    this.todos.push(new ToDoItem("walk the dog", true));
    this.todos.push(new ToDoItem("eat pizza", false));
  }

  toggleComplete(item: ToDoItem, checked: boolean) {
    item.completed = checked;
    console.log(item.description + "completed status is now " + checked);
  }

  completeAll() {
    for(var todo of this.todos) {
      todo.completed = true;
    }
  }

  add(input: any) {
    console.log("adding a new item");
    this.todos.push(new ToDoItem(input.value, false));
    input.value = "";
  }
    
  remove(item: ToDoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

}
