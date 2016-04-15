System.register(['angular2/platform/browser', './todoapp.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, todoapp_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todoapp_component_1_1) {
                todoapp_component_1 = todoapp_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todoapp_component_1.TodoAppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map