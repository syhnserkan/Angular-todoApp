import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodoElement]',
})
export class TodoElementDirective {
  @HostBinding('class.thourghLine') isLine = false;
  @HostListener('click') toggleLine() {
    this.isLine = !this.isLine;
  }
}
