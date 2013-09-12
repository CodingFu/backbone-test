define(["hbs!templates/main"], function (template) {
    "use strict";
    
    var MainView = Backbone.View.extend({
        initialize: function(opts) {
            this.conditions = opts.conditions;
        },
        
        render: function render() {
            this.$el.html(template({
                "conditions": this.conditions.toJSON()
            }));
            return this;
        }
    });
    
    return MainView;
});