import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todoEl: string;
  @Output() todoSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelectedTodo() {
    this.todoSelected.emit();
  }
}
