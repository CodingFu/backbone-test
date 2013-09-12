require([], function () {
    "use strict";
    
    var Router = Backbone.Router.extend({
       routes: {
           
       }
    });
    
    // Returning an instance of router because we want only one in the app
    return new Router();
});