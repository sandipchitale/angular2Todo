import {Component, ElementRef, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';


@Component({
  selector: 'todo-item',
  templateUrl: 'todoapp/todoitem.component.html',
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
    todo = '';
    addTodo = function(todo) {
            this.todos.push({done: false, what: todo});
            this.todo = '';
            return false;
        };
}

@Component({
    selector: 'todo-app',
    templateUrl: 'todoapp/todoapp.component.html',
    directives: [TodoList]
})
export class TodoAppComponent {

		constructor(public elementRef: ElementRef) {
      var native = this.elementRef.nativeElement;
    }
}
