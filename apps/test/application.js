define([
    "models/condition",
    "collections/conditions",
    "router"
    ], function (
        Condition,
        conditions,
        Router
    ) {
    "use strict";
    
    function TestApplication() {
        if (typeof this.init === "function") {
            this.init();
        }
    }
    
    TestApplication.prototype.init = function init() {
        Backbone.history.start();
    };
    
    return TestApplication;
});