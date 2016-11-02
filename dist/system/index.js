System.register(['./aurelia-xp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_xp_1;
    function configure(config, callback) {
        config.globalResources([
            './button/xp-button'
        ]);
        var xp = config.container.get(aurelia_xp_1.AureliaXP);
        if (typeof callback === 'function') {
            return Promise.resolve(callback(xp))
                .then(function () { return xp.start(config); });
        }
        else {
            xp.use.defaultConfiguration();
            return xp.start(config);
        }
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (aurelia_xp_1_1) {
                aurelia_xp_1 = aurelia_xp_1_1;
            }],
        execute: function() {
        }
    }
});
