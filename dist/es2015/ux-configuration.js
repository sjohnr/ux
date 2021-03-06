var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-dependency-injection';
import { Loader } from 'aurelia-loader';
import { ViewEngine } from 'aurelia-templating';
import { createDynamicStyleModule } from './styles/dynamic-styles';
import { SyntaxInterpreter } from 'aurelia-templating-binding';
let UXConfiguration = class UXConfiguration {
    constructor(loader, viewEngine) {
        this.loader = loader;
        this.viewEngine = viewEngine;
    }
    defaultConfiguration() {
        this.styleLoaderPlugin();
        this.commandHandler();
        return this;
    }
    styleLoaderPlugin() {
        this.viewEngine.addResourcePlugin('.css#ux', {
            fetch(address) {
                return Promise.resolve(createDynamicStyleModule(address.replace('.css#ux', '.css')));
            }
        });
        this.loader.addPlugin('ux-styles', {
            fetch(address) {
                return Promise.resolve(createDynamicStyleModule(address + '.css'));
            }
        });
        return this;
    }
    commandHandler() {
        const proto = SyntaxInterpreter.prototype;
        const original = proto.handleUnknownCommand;
        /* tslint:disable:only-arrow-functions */
        proto.handleUnknownCommand = function (r, e, i, ei, c) {
            if (i.attrName === 'styles') {
                i.attrName = 'class';
                i.attrValue = '$styles.' + i.command.replace(/\-/g, '_');
                return this['one-way'](r, e, i, ei, c);
            }
            else {
                return original.call(this, r, e, i, ei, c);
            }
        };
        /* tslint:enable:only-arrow-functions */
        return this;
    }
};
UXConfiguration = __decorate([
    inject(Loader, ViewEngine)
], UXConfiguration);
export { UXConfiguration };
