requirejs.config({
    "baseUrl": "apps/test",
    "hbs": {
        "templateExtension": "hbs",
        "disableI18n": true
    },
    "paths": {
        "hbs": "../../lib/hbs",
        "Handlebars": "../../lib/Handlebars",
        "underscore" : "../../lib/hbs/underscore",
        "i18nprecompile" : "../../lib/hbs/i18nprecompile",
        "json2" : "../../lib/hbs/json2"
    }
});

require(["application"], function (Application) {
   "use strict";
   new Application();
});