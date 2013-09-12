define([
    "models/condition",
    "views/condition",
    "views/main"], function (Condition, ConditionView, MainView) {
    "use strict";
    
    var Router = Backbone.Router.extend({
       routes: {
           "": "main"
       },
       
       main: function main() {
           this.view = new MainView();
           this.view.render().$el.appendTo("#container");
       }
    });
    
    // Returning an instance of router because we want only one in the app
    return new Router();
});