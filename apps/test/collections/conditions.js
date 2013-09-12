define(["models/condition"], function (Condition) {
    "use strict";
    
    var Conditions = Backbone.Collection.extend({
        model: Condition
    });
    
    var conditions = new Conditions([]);

    // Adding the only Condition to the collection
    var condition = new Condition();
    condition.fetch();
    conditions.push(condition);
    
    // The collection are fixed all the application
    return conditions;
});