define(["router"], function (Router) {
    "use strict";
    
    function TestApplication() {}
    
    TestApplication.prototype.init = function init() {
        Backbone.history.start();
    };
    
    return new TestApplication();
});