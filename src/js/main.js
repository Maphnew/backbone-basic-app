import TodoItems  from "./todos/model/todoItems";
import TodoItemsView from "./todos/view/todoItemsView";
import { Application, View } from "backbone.marionette";
import _ from "underscore";
import Router from "./router";
import $ from 'jquery';

const App = Application.extend({
    region: '#root-element',

    onStart() {
        var todoItems = new TodoItems();
        todoItems.fetch();

        var todoItemsView = new TodoItemsView({ model: todoItems });
        this.showView(todoItemsView);
    }
});

App.router = new Router();

const myApp = new App();
myApp.start();