"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@theia/core");
var inversify_1 = require("inversify");
var quick_open_service_1 = require("@theia/core/lib/browser/quick-open/quick-open-service");
var common_1 = require("@theia/filesystem/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/preferences/lib/browser");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var browser_2 = require("@theia/editor/lib/browser");
var browser_3 = require("@theia/core/lib/browser");
var quick_pick_service_1 = require("@theia/core/lib/common/quick-pick-service");
var browser_4 = require("@theia/workspace/lib/browser");
var CppBuildConfigurationChanger = /** @class */ (function () {
    function CppBuildConfigurationChanger() {
        /**
         * Item used to trigger creation of a new build configuration.
         */
        this.createItem = ({
            label: 'Create New',
            value: 'createNew',
            description: 'Create a new build configuration',
            iconClass: 'fa fa-plus'
        });
        /**
         * Item used to trigger reset of the active build configuration.
         */
        this.resetItem = ({
            label: 'None',
            value: 'reset',
            description: 'Reset the active build configuration',
            iconClass: 'fa fa-times'
        });
    }
    /**
     * Change the build configuration for a given root.
     * If multiple roots are available, prompt users a first time to select their desired root.
     * Once a root is determined, prompt users to select an active build configuration if applicable.
     */
    CppBuildConfigurationChanger.prototype.change = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectWorkspaceRoot()];
                    case 1:
                        root = _a.sent();
                        if (!root) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.selectCppAction(root)];
                    case 2:
                        action = _a.sent();
                        if (!action) {
                            return [2 /*return*/];
                        }
                        // Perform desired action.
                        if (action === 'createNew') {
                            this.commandService.executeCommand(exports.CPP_CREATE_NEW_BUILD_CONFIGURATION.id);
                        }
                        if (action === 'reset') {
                            this.cppBuildConfigurations.setActiveConfig(undefined, root);
                        }
                        if (action && cpp_build_configurations_1.isCppBuildConfiguration(action)) {
                            this.cppBuildConfigurations.setActiveConfig(action, root);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pick a workspace root using the quick open menu.
     */
    CppBuildConfigurationChanger.prototype.selectWorkspaceRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            var _this = this;
            return __generator(this, function (_a) {
                roots = this.workspaceService.tryGetRoots();
                return [2 /*return*/, this.quickPick.show(roots.map(function (_a) {
                        var root = _a.uri;
                        var active = _this.cppBuildConfigurations.getActiveConfig(root);
                        return {
                            // See: WorkspaceUriLabelProviderContribution
                            // It will transform the path to a prettier display (adding a ~, etc).
                            label: _this.labelProvider.getName(new uri_1.default(root).withScheme('file')),
                            description: active ? active.name : 'undefined',
                            value: root,
                        };
                    }), { placeholder: 'Select workspace root' })];
            });
        });
    };
    /**
     * Lists the different options for a given root if specified, first else.
     * In this case, the options are to set/unset/create a build configuration.
     *
     * @param root the workspace root.
     */
    CppBuildConfigurationChanger.prototype.selectCppAction = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var items, configs, active;
            return __generator(this, function (_a) {
                items = [];
                // Add the 'Create New' item at all times.
                items.push(this.createItem);
                // Add the 'Reset' item if there currently is an active config.
                if (this.cppBuildConfigurations.getActiveConfig(root)) {
                    items.push(this.resetItem);
                }
                configs = this.cppBuildConfigurations.getValidConfigs(root);
                active = this.cppBuildConfigurations.getActiveConfig(root);
                configs.map(function (config) {
                    items.push({
                        label: config.name,
                        description: config.directory,
                        iconClass: active && cpp_build_configurations_1.equals(config, active) ? 'fa fa-check' : 'fa fa-empty-item',
                        value: {
                            name: config.name,
                            directory: config.directory,
                            commands: config.commands
                        },
                    });
                });
                return [2 /*return*/, this.quickPick.show(items, { placeholder: 'Select action' })];
            });
        });
    };
    /** Create a new build configuration with placeholder values.  */
    CppBuildConfigurationChanger.prototype.createConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commandService.executeCommand(browser_3.CommonCommands.OPEN_PREFERENCES.id, browser_1.PreferenceScope.Workspace);
                        configs = this.cppBuildConfigurations.getConfigs().slice(0);
                        configs.push({ name: '', directory: '' });
                        return [4 /*yield*/, this.preferenceService.set(cpp_build_configurations_1.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY, configs, browser_1.PreferenceScope.Workspace)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(core_1.CommandService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "cppBuildConfigurations", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], CppBuildConfigurationChanger.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_3.LabelProvider),
        __metadata("design:type", browser_3.LabelProvider)
    ], CppBuildConfigurationChanger.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], CppBuildConfigurationChanger.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationChanger.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(browser_4.WorkspaceService),
        __metadata("design:type", browser_4.WorkspaceService)
    ], CppBuildConfigurationChanger.prototype, "workspaceService", void 0);
    CppBuildConfigurationChanger = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationChanger);
    return CppBuildConfigurationChanger;
}());
exports.CppBuildConfigurationChanger = CppBuildConfigurationChanger;
exports.CPP_CATEGORY = 'C/C++';
/**
 * Reset active build configuration if applicable.
 * Set active build configuration to `None`.
 */
exports.CPP_RESET_BUILD_CONFIGURATION = {
    id: 'cpp.resetBuildConfiguration',
    category: exports.CPP_CATEGORY,
    label: 'Reset Build Configuration'
};
/**
 * Create a new build configuration, and trigger opening the preferences widget.
 */
exports.CPP_CREATE_NEW_BUILD_CONFIGURATION = {
    id: 'cpp.createNewBuildConfiguration',
    category: exports.CPP_CATEGORY,
    label: 'Create New Build Configuration'
};
/**
 * Open the quick open menu to let the user change the active build configuration.
 */
exports.CPP_CHANGE_BUILD_CONFIGURATION = {
    id: 'cpp.change-build-configuration',
    category: exports.CPP_CATEGORY,
    label: 'Change Build Configuration'
};
var CppBuildConfigurationsContributions = /** @class */ (function () {
    function CppBuildConfigurationsContributions() {
    }
    /**
     * Register build configurations commands for C/C++.
     * Available commands include:
     * - Resetting C/C++ build configurations.
     * - Creating new C/C++ build configurations.
     * - Updating C/C++ build configurations.
     * @param commands the command registry.
     */
    CppBuildConfigurationsContributions.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.CPP_RESET_BUILD_CONFIGURATION, {
            isEnabled: function () { return !!_this.cppManager.getActiveConfig(); },
            isVisible: function () { return !!_this.cppManager.getActiveConfig(); },
            execute: function () { return _this.cppManager.setActiveConfig(undefined); }
        });
        commands.registerCommand(exports.CPP_CREATE_NEW_BUILD_CONFIGURATION, {
            execute: function () { return _this.cppChangeBuildConfiguration.createConfig(); }
        });
        commands.registerCommand(exports.CPP_CHANGE_BUILD_CONFIGURATION, {
            execute: function () { return _this.cppChangeBuildConfiguration.change(); }
        });
    };
    __decorate([
        inversify_1.inject(CppBuildConfigurationChanger),
        __metadata("design:type", CppBuildConfigurationChanger)
    ], CppBuildConfigurationsContributions.prototype, "cppChangeBuildConfiguration", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppBuildConfigurationsContributions.prototype, "cppManager", void 0);
    CppBuildConfigurationsContributions = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationsContributions);
    return CppBuildConfigurationsContributions;
}());
exports.CppBuildConfigurationsContributions = CppBuildConfigurationsContributions;
//# sourceMappingURL=cpp-build-configurations-ui.js.map