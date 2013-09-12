define(["hbs!templates/condition"], function (template) {
    "use strict";
    
    var ConditionView = Backbone.View.extend({        
        events: {
            "click .tabs a": "onTabClick"
        },
        
        render: function() {
            this.$el.html(template(this.model.toJSON()));
            this.cacheElements();
            this.selectFirstTab();
            return this;
        },
        
        cacheElements: function() {
            this.$tabs = this.$(".tabs li");
            this.$tabContents = this.$('.tab-content');
        },
        
        selectFirstTab: function() {
            this.$tabs.find("a").eq(0).click();
        },
        
        // Event handlers
        onTabClick: function (e) {
            this.$tabs.removeClass('active');
            $(e.target).parent().addClass('active');
            
            var href = $(e.target).attr('href');
            this.$tabContents.hide();
            this.$(href).show();
            return false;
        }
    });
    
    return ConditionView;
});