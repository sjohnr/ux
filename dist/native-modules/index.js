import { PLATFORM } from 'aurelia-framework';
import { AureliaUX } from './aurelia-ux';
export { swatches } from './colors/swatches';
export { shadows } from './colors/shadows';
export { UxButtonTheme } from './button/ux-button-theme';
export { UxInputTheme } from './input/ux-input-theme';
export { UxInputInfoTheme } from './input-info/ux-input-info-theme';
export { UxTextareaTheme } from './textarea/ux-textarea-theme';
export { UxFormTheme } from './form/ux-form-theme';
export { UxFieldTheme } from './form/ux-field-theme';
export { UxChipInputTheme } from './chip-input/ux-chip-input-theme';
export { UxTagTheme } from './chip-input/ux-tag-theme';
export { UxChipTheme } from './chip-input/ux-chip-theme';
export { UxCheckboxTheme } from './checkbox/ux-checkbox-theme';
export { UxIconTheme } from './icons/ux-icon-theme';
export * from './styles/decorators';
export { AureliaUX } from './aurelia-ux';
export { UXConfiguration } from './ux-configuration';
export function configure(config, callback) {
    config.globalResources([
        PLATFORM.moduleName('./button/ux-button'),
        PLATFORM.moduleName('./input/ux-input'),
        PLATFORM.moduleName('./input-info/ux-input-info'),
        PLATFORM.moduleName('./textarea/ux-textarea'),
        PLATFORM.moduleName('./form/ux-form'),
        PLATFORM.moduleName('./form/ux-field'),
        PLATFORM.moduleName('./form/ux-submit-attribute'),
        PLATFORM.moduleName('./chip-input/ux-chip-input'),
        PLATFORM.moduleName('./chip-input/ux-chip'),
        PLATFORM.moduleName('./chip-input/ux-tag'),
        PLATFORM.moduleName('./checkbox/ux-checkbox'),
        PLATFORM.moduleName('./icons/ux-icon')
    ]);
    var ux = config.container.get(AureliaUX);
    if (typeof callback === 'function') {
        return Promise.resolve(callback(ux))
            .then(function () { return ux.start(config); });
    }
    else {
        ux.use.defaultConfiguration();
        return ux.start(config);
    }
}
