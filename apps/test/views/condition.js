define(["hbs!templates/condition"], function (template) {
    "use strict";
    
    var ConditionView = Backbone.View.extend({
        render: function() {
            this.$el.html(template(this.model.toJSON()));
            return this;
        }
    });
    
    return ConditionView;
});