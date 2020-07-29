"use strict";
/********************************************************************************
 * Copyright (C) 2018-2019 Ericsson and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var cpp_preferences_1 = require("./cpp-preferences");
var storage_service_1 = require("@theia/core/lib/browser/storage-service");
var browser_1 = require("@theia/workspace/lib/browser");
var cpp_build_configuration_protocol_1 = require("../common/cpp-build-configuration-protocol");
var browser_2 = require("@theia/variable-resolver/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var core_2 = require("@theia/core");
/**
 * Determine if the argument is a C/C++ build configuration.
 *
 * @returns `true` if the argument is a C/C++ build configuration.
 */
// tslint:disable-next-line:no-any
function isCppBuildConfiguration(arg) {
    return arg.name !== undefined && arg.directory !== undefined;
}
exports.isCppBuildConfiguration = isCppBuildConfiguration;
/**
 * Determine if two C/C++ build configurations are equal.
 * @param a the first C/C++ build configuration.
 * @param b the second C/C++ build configuration.
 *
 * @returns `true` if both `a` and `b` are equal.
 */
function equals(a, b) {
    return (a.name === b.name &&
        a.directory === b.directory &&
        a.commands === b.commands);
}
exports.equals = equals;
/**
 * Representation of all saved build configurations per workspace root in local storage.
 */
var SavedActiveBuildConfigurations = /** @class */ (function () {
    function SavedActiveBuildConfigurations() {
    }
    return SavedActiveBuildConfigurations;
}());
exports.CppBuildConfigurationManager = Symbol('CppBuildConfigurationManager');
exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY = 'cpp.buildConfigurations';
/**
 * Entry point to get the list of build configurations and get/set the active
 * build configuration.
 */
var CppBuildConfigurationManagerImpl = /** @class */ (function () {
    function CppBuildConfigurationManagerImpl() {
        /**
         * Resolved configurations, coming from the preferences.
         */
        this.resolvedConfigurations = new Map();
        /**
         * The current active build configurations map.
         */
        this.activeConfigurations = new Map();
        /**
         * @deprecated use `activeConfigChange2Emitter` instead.
         *
         * Emitter for when the active build configuration changes.
         */
        this.activeConfigChangeEmitter = new core_1.Emitter();
        /**
         * Emitter for when an active build configuration changes.
         */
        this.activeConfigChange2Emitter = new core_1.Emitter();
        /**
         * Persistent storage key for the active build configurations map.
         */
        this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY = 'cpp.active-build-configurations-map';
    }
    /**
     * Initialize the manager.
     */
    CppBuildConfigurationManagerImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Try to read the active build config from local storage.
                this.ready = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var loadActiveConfigurations;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                loadActiveConfigurations = this.loadActiveConfigs();
                                return [4 /*yield*/, this.cppPreferences.ready];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, Promise.all([
                                        this.handlePreferencesUpdate(),
                                        loadActiveConfigurations,
                                    ])];
                            case 2:
                                _a.sent();
                                this.cppPreferences.onPreferenceChanged(function () { return _this.handlePreferencesUpdate(); });
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get the C/C++ build configuration from the preferences.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getConfigsFromPreferences = function (root) {
        if (root) {
            return Array.from(this.cppPreferences.get(exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY, [], root));
        }
        return Array.from(this.cppPreferences[exports.CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY] || []);
    };
    /**
     * Load the active build configuration from persistent storage.
     */
    CppBuildConfigurationManagerImpl.prototype.loadActiveConfigs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData(this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY)];
                    case 1:
                        savedConfig = _a.sent();
                        if (savedConfig !== undefined) {
                            // read from local storage and update the map.
                            this.activeConfigurations = new Map(savedConfig.configs);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save the active build configuration to persistent storage.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    CppBuildConfigurationManagerImpl.prototype.saveActiveConfigs = function (configs) {
        this.storageService.setData(this.ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY, { configs: __spread(configs.entries()) });
    };
    /**
     * Update the active build configuration if applicable.
     */
    CppBuildConfigurationManagerImpl.prototype.handlePreferencesUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots, _loop_1, this_1, _a, _b, _c, root, active;
            var e_1, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        roots = this.workspaceService.tryGetRoots();
                        // Resolve variables for all configurations.
                        return [4 /*yield*/, Promise.all(roots.map(function (_a) {
                                var root = _a.uri;
                                return __awaiter(_this, void 0, void 0, function () {
                                    var context, configs, resolvedConfigs;
                                    var _this = this;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                context = new uri_1.default(root);
                                                configs = this.getConfigsFromPreferences(root);
                                                resolvedConfigs = configs.map(function (config) { return core_2.deepClone(config); });
                                                return [4 /*yield*/, Promise.all(resolvedConfigs.map(function (config) { return __awaiter(_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return __generator(this, function (_a) {
                                                            return [2 /*return*/, Promise.all([
                                                                    this.variableResolver.resolve(config.directory, { context: context })
                                                                        .then(function (resolved) { return config.directory = resolved; }),
                                                                    config.commands && Promise.all(Object.keys(config.commands)
                                                                        .map(function (command) { return _this.variableResolver.resolve(config.commands[command], { context: context })
                                                                        .then(function (resolved) { return config.commands[command] = resolved; }); })),
                                                                ])];
                                                        });
                                                    }); }))];
                                            case 1:
                                                _b.sent();
                                                this.resolvedConfigurations.set(root, resolvedConfigs);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        // Resolve variables for all configurations.
                        _e.sent();
                        _loop_1 = function (root, active) {
                            if (!active) {
                                return "continue";
                            }
                            var configs = this_1.getValidConfigs(root);
                            var stillExists = configs.some(function (config) { return _this.equals(config, active); });
                            if (!stillExists) {
                                this_1.setActiveConfig(undefined, root);
                            }
                        };
                        this_1 = this;
                        try {
                            // Look for missing active configurations.
                            for (_a = __values(this.activeConfigurations.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), root = _c[0], active = _c[1];
                                _loop_1(root, active);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if two `CppBuildConfiguration` are equal.
     *
     * @param a `CppBuildConfiguration`.
     * @param b `CppBuildConfiguration`.
     */
    CppBuildConfigurationManagerImpl.prototype.equals = function (a, b) {
        return a.name === b.name && a.directory === b.directory;
    };
    /**
     * Get the active build configuration.
     * @param root the optional workspace root.
     *
     * @returns the active build configuration if it exists, else `undefined`.
     */
    CppBuildConfigurationManagerImpl.prototype.getActiveConfig = function (root) {
        // Get the active workspace root for the given uri, else for the first workspace root.
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return undefined;
        }
        return this.activeConfigurations.get(workspaceRoot);
    };
    /**
     * Get all active build configurations.
     * - If for a given root the build configuration is `undefined`, the root does not contain
     * an active build configuration.
     *
     * @returns the map of all active configurations if available, for each workspace root.
     */
    CppBuildConfigurationManagerImpl.prototype.getAllActiveConfigs = function () {
        return this.activeConfigurations;
    };
    /**
     * Set the active build configuration.
     * @param config the build configuration to be set. If `undefined` there will be no active configuration.
     * @param root the optional workspace root. If unprovided, fallback to the first workspace root if available.
     */
    CppBuildConfigurationManagerImpl.prototype.setActiveConfig = function (config, root) {
        var e_2, _a;
        // Set the active workspace root for the given uri, else for the first workspace root.
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return;
        }
        this.activeConfigurations.set(workspaceRoot, config);
        this.saveActiveConfigs(this.activeConfigurations);
        var activeConfigurations = new Map();
        try {
            for (var _b = __values(this.getAllActiveConfigs()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), source = _d[0], cppConfig = _d[1];
                if (typeof cppConfig !== 'undefined') {
                    activeConfigurations.set(source, cppConfig);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.activeConfigChange2Emitter.fire(activeConfigurations);
        this.activeConfigChangeEmitter.fire(config);
    };
    Object.defineProperty(CppBuildConfigurationManagerImpl.prototype, "onActiveConfigChange", {
        get: function () {
            return this.activeConfigChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppBuildConfigurationManagerImpl.prototype, "onActiveConfigChange2", {
        get: function () {
            return this.activeConfigChange2Emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get all build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getConfigs = function (root) {
        var workspaceRoot = this.getRoot(root);
        if (!workspaceRoot) {
            return [];
        }
        var configs = this.resolvedConfigurations.get(workspaceRoot);
        if (!configs) {
            this.resolvedConfigurations.set(workspaceRoot, configs = []);
        }
        return configs;
    };
    /**
     * Get all valid build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    CppBuildConfigurationManagerImpl.prototype.getValidConfigs = function (root) {
        return this.getConfigs(root)
            .filter(function (a) { return a.name !== '' && a.directory !== ''; })
            .sort(function (a, b) { return (a.name.localeCompare(b.name)); });
    };
    /**
     * Get the merged compilation database.
     */
    CppBuildConfigurationManagerImpl.prototype.getMergedCompilationDatabase = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO: Optimize by caching the merge result, based on the `CppBuildConfiguration.directory` field?
                return [2 /*return*/, this.buildConfigurationServer.getMergedCompilationDatabase(params)];
            });
        });
    };
    /**
     * Get the root directory.
     * @param root the optional workspace root.
     *
     * @returns the root directory if it is present, else `undefined`.
     */
    CppBuildConfigurationManagerImpl.prototype.getRoot = function (root) {
        if (root) {
            return root;
        }
        var roots = this.workspaceService.tryGetRoots();
        if (roots.length > 0) {
            return roots[0].uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "cppPreferences", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], CppBuildConfigurationManagerImpl.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_2.VariableResolverService),
        __metadata("design:type", browser_2.VariableResolverService)
    ], CppBuildConfigurationManagerImpl.prototype, "variableResolver", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configuration_protocol_1.CppBuildConfigurationServer),
        __metadata("design:type", Object)
    ], CppBuildConfigurationManagerImpl.prototype, "buildConfigurationServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CppBuildConfigurationManagerImpl.prototype, "init", null);
    CppBuildConfigurationManagerImpl = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationManagerImpl);
    return CppBuildConfigurationManagerImpl;
}());
exports.CppBuildConfigurationManagerImpl = CppBuildConfigurationManagerImpl;
//# sourceMappingURL=cpp-build-configurations.js.map