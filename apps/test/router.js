define([
    "collections/conditions",
    "views/condition",
    "views/main"
    ], function (
        conditions,
        ConditionView,
        MainView
    ) {
    "use strict";
    
    var Router = Backbone.Router.extend({
       routes: {
           "": "main",
           "conditions/:id": "condition"
       },
       
       main: function main() {
           this.view = new MainView({conditions: conditions});
           $("#container").html(this.view.render().$el);
       },
       
       condition: function condition(slug) {
           var condition = conditions.findWhere({name: "Aneurysm"});
           this.view = new ConditionView({model: condition});
           $("#container").html(this.view.render().$el);
       }
    });
    
    // Returning an instance of router because we want only one in the app
    return new Router();
});