import { Collection } from "backbone";
import TodoItem from "./todoItem";

export default Collection.extend({
    model: TodoItem,

    url: "http://jsonplaceholder.typicode.com/todos"
})