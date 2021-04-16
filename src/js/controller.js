import { View } from 'backbone.marionette';
import TodoItems  from "./todos/model/todoItems";
import TodoItemsView from "./todos/view/todoItemsView";

var PostsView = View.extend({
	render: function(){
		this.$el.html("Posts VIEW");

		return this;
	}
});

export default {
    viewTodos(){
        var todoItems = new TodoItems();
        todoItems.fetch();

        var todoItemsView = new TodoItemsView({ el: "#root-element", model: todoItems });
        todoItemsView.render();
    },
    viewPosts(){
        var view = new PostsView({ el: "#root-element" });
		view.render();
    }
}