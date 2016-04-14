import {Component, ElementRef, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';


@Component({
  selector: 'todo-item',
  template: '<input type="checkbox" [(ngModel)]="todo.done">&nbsp;<span [ngClass]="{strikethru: todo.done}">{{todo.what}} </span>',
  directives: [NgClass],
  styles: [`
    .strikethru {
      text-decoration: line-through;
    }
  `]
})
class TodoItem {
    @Input() todo;
}

@Component({
  selector: 'todo-list',
  templateUrl: 'todoapp/todolist.component.html',
  directives: [TodoItem]
})
class TodoList {
    todos = [];
    todo = 'Do ';
    addTodo = function(todo) {
            this.todos.push({done: false, what: todo});
            this.todo = 'Do ';
            return false;
        };
}

@Component({
    selector: 'todo-app',
    templateUrl: 'todoapp/todoapp.component.html',
    directives: [TodoList]
})
export class TodoAppComponent {
		who = 'mundo';

		constructor(public elementRef: ElementRef) {
      var native = this.elementRef.nativeElement;
      this.who = native.getAttribute("who");
    }

		helloWho() {
			alert('Hello there ' + this.who);
		}
}
