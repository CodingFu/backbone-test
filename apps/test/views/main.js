define(["hbs!templates/main"], function (template) {
    "use strict";
    
    var MainView = Backbone.View.extend({
        render: function render() {
            this.$el.html(template({}));
            return this;
        }
    });
    
    return MainView;
});