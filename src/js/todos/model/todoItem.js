import { Model } from "backbone";

export default Model.extend({
    urlRoot: "http://jsonplaceholder.typicode.com/todos",
    validate: function(attrs){
        if(!attrs.title)
            return "Title is required.";
    },
    toggle: function(){
        this.set("completed", !this.get("completed"))
    }
});