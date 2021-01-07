import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todoElements: string[] = [
    'Watch Angular Videos',
    'Read documentation',
    'Join the meeting',
  ];
  booleanError: boolean = false;
  todoCount: number = this.todoElements.length;
  ngOnInit() {
    setInterval(() => {
      this.booleanError = false;
    }, 3000);
  }
  onAddTodo(todo: HTMLInputElement) {
    const addedTodo = this.todoElements.find((item) => item === todo.value);
    if (addedTodo || todo.value.length === 0) {
      this.booleanError = true;
    } else {
      this.todoElements.push(todo.value);
      this.todoCount++;
    }
    todo.value = '';
  }
  onTodoDeleted(deletedWasTodo: string) {
    // First way
    // const index = this.todoElements.findIndex(
    //   (item) => item === deletedWasTodo
    // );
    // this.todoElements.splice(index, 1);
    // Second way
    this.todoElements = this.todoElements.filter(
      (item) => item !== deletedWasTodo
    );
    this.todoCount--;
  }
}
