"use strict";
/********************************************************************************
 * Copyright (C) 2018-2019 Ericsson
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var cpp_build_configurations_ui_1 = require("./cpp-build-configurations-ui");
var browser_2 = require("@theia/workspace/lib/browser");
var CppBuildConfigurationsStatusBarElement = /** @class */ (function () {
    function CppBuildConfigurationsStatusBarElement() {
        this.cppIdentifier = 'cpp-configurator';
    }
    /**
     * Display the `CppBuildConfiguration` status bar element,
     * and listen to changes to the active build configuration.
     */
    CppBuildConfigurationsStatusBarElement.prototype.show = function () {
        var _this = this;
        this.setCppBuildConfigElement(this.getValidActiveCount());
        this.cppManager.onActiveConfigChange2(function (configs) { return _this.setCppBuildConfigElement(configs.size); });
    };
    /**
     * Set the `CppBuildConfiguration` status bar element
     * used to create a new cpp build configuration and set the active build configuration.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    CppBuildConfigurationsStatusBarElement.prototype.setCppBuildConfigElement = function (count) {
        this.statusBar.setElement(this.cppIdentifier, {
            text: "$(wrench) C/C++ Build Config (" + count + " of " + this.workspaceService.tryGetRoots().length + ")",
            tooltip: 'C/C++ Build Config',
            alignment: browser_1.StatusBarAlignment.RIGHT,
            command: cpp_build_configurations_ui_1.CPP_CHANGE_BUILD_CONFIGURATION.id,
            priority: 0.5,
        });
    };
    /**
     * Get the valid active configuration count.
     */
    CppBuildConfigurationsStatusBarElement.prototype.getValidActiveCount = function () {
        var items = [];
        if (this.cppManager.getAllActiveConfigs) {
            items = __spread(this.cppManager.getAllActiveConfigs().values()).filter(function (config) { return !!config; });
        }
        return items.length;
    };
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsStatusBarElement.prototype, "cppManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsStatusBarElement.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], CppBuildConfigurationsStatusBarElement.prototype, "workspaceService", void 0);
    CppBuildConfigurationsStatusBarElement = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationsStatusBarElement);
    return CppBuildConfigurationsStatusBarElement;
}());
exports.CppBuildConfigurationsStatusBarElement = CppBuildConfigurationsStatusBarElement;
//# sourceMappingURL=cpp-build-configurations-statusbar-element.js.map