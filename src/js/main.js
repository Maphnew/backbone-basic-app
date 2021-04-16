import TodoItems  from "./todos/model/todoItems";
import $ from 'jquery';
import TodoItemsView from "./todos/view/todoItemsView";

$(function(){
    var todoItems = new TodoItems();
    todoItems.fetch();

    var todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el)
})