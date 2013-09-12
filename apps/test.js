requirejs.config({
    baseUrl: "/apps/test"
});

require("application", function (application) {
   "use strict";
   
   application.init();
});