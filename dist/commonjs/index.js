"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_ux_1 = require("./aurelia-ux");
var swatches_1 = require("./colors/swatches");
exports.swatches = swatches_1.swatches;
var shadows_1 = require("./colors/shadows");
exports.shadows = shadows_1.shadows;
var ux_button_theme_1 = require("./button/ux-button-theme");
exports.UxButtonTheme = ux_button_theme_1.UxButtonTheme;
var ux_input_theme_1 = require("./input/ux-input-theme");
exports.UxInputTheme = ux_input_theme_1.UxInputTheme;
var ux_input_info_theme_1 = require("./input-info/ux-input-info-theme");
exports.UxInputInfoTheme = ux_input_info_theme_1.UxInputInfoTheme;
var ux_textarea_theme_1 = require("./textarea/ux-textarea-theme");
exports.UxTextareaTheme = ux_textarea_theme_1.UxTextareaTheme;
var ux_form_theme_1 = require("./form/ux-form-theme");
exports.UxFormTheme = ux_form_theme_1.UxFormTheme;
var ux_field_theme_1 = require("./form/ux-field-theme");
exports.UxFieldTheme = ux_field_theme_1.UxFieldTheme;
var ux_chip_input_theme_1 = require("./chip-input/ux-chip-input-theme");
exports.UxChipInputTheme = ux_chip_input_theme_1.UxChipInputTheme;
var ux_tag_theme_1 = require("./chip-input/ux-tag-theme");
exports.UxTagTheme = ux_tag_theme_1.UxTagTheme;
var ux_chip_theme_1 = require("./chip-input/ux-chip-theme");
exports.UxChipTheme = ux_chip_theme_1.UxChipTheme;
var ux_checkbox_theme_1 = require("./checkbox/ux-checkbox-theme");
exports.UxCheckboxTheme = ux_checkbox_theme_1.UxCheckboxTheme;
var ux_icon_theme_1 = require("./icons/ux-icon-theme");
exports.UxIconTheme = ux_icon_theme_1.UxIconTheme;
__export(require("./styles/decorators"));
var aurelia_ux_2 = require("./aurelia-ux");
exports.AureliaUX = aurelia_ux_2.AureliaUX;
var ux_configuration_1 = require("./ux-configuration");
exports.UXConfiguration = ux_configuration_1.UXConfiguration;
function configure(config, callback) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./button/ux-button'),
        aurelia_framework_1.PLATFORM.moduleName('./input/ux-input'),
        aurelia_framework_1.PLATFORM.moduleName('./input-info/ux-input-info'),
        aurelia_framework_1.PLATFORM.moduleName('./textarea/ux-textarea'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-form'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-field'),
        aurelia_framework_1.PLATFORM.moduleName('./form/ux-submit-attribute'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip-input'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-chip'),
        aurelia_framework_1.PLATFORM.moduleName('./chip-input/ux-tag'),
        aurelia_framework_1.PLATFORM.moduleName('./checkbox/ux-checkbox'),
        aurelia_framework_1.PLATFORM.moduleName('./icons/ux-icon')
    ]);
    var ux = config.container.get(aurelia_ux_1.AureliaUX);
    if (typeof callback === 'function') {
        return Promise.resolve(callback(ux))
            .then(function () { return ux.start(config); });
    }
    else {
        ux.use.defaultConfiguration();
        return ux.start(config);
    }
}
exports.configure = configure;
