System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var TodoItem, TodoList, TodoAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "todo", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        template: '<input type="checkbox" [(ngModel)]="todo.done">&nbsp;&nbsp;<span [ngClass]="{strikethru: todo.done}">{{todo.what}}</span>',
                        directives: [common_1.NgClass],
                        styles: ["\n    .strikethru {\n      text-decoration: line-through;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItem);
                return TodoItem;
            }());
            TodoList = (function () {
                function TodoList() {
                    this.todos = [];
                    this.todo = '';
                    this.addTodo = function (todo) {
                        this.todos.push({ done: false, what: todo });
                        this.todo = '';
                        return false;
                    };
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: 'todoapp/todolist.component.html',
                        directives: [TodoItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            }());
            TodoAppComponent = (function () {
                function TodoAppComponent(elementRef) {
                    this.elementRef = elementRef;
                    var native = this.elementRef.nativeElement;
                }
                TodoAppComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        templateUrl: 'todoapp/todoapp.component.html',
                        directives: [TodoList]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TodoAppComponent);
                return TodoAppComponent;
            }());
            exports_1("TodoAppComponent", TodoAppComponent);
        }
    }
});
//# sourceMappingURL=todoapp.component.js.map