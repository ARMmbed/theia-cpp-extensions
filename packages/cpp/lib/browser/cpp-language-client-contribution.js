"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var browser_1 = require("@theia/languages/lib/browser");
var browser_2 = require("@theia/languages/lib/browser");
var semantic_highlighting_service_1 = require("@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service");
var logger_1 = require("@theia/core/lib/common/logger");
var window_service_1 = require("@theia/core/lib/browser/window/window-service");
var common_1 = require("../common");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var cpp_build_configurations_statusbar_element_1 = require("./cpp-build-configurations-statusbar-element");
var cpp_preferences_1 = require("./cpp-preferences");
var uri_1 = require("@theia/core/lib/common/uri");
var CppLanguageClientContribution = /** @class */ (function (_super) {
    __extends(CppLanguageClientContribution, _super);
    function CppLanguageClientContribution(workspace, languages, languageClientFactory, semanticHighlightingService) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.semanticHighlightingService = semanticHighlightingService;
        _this.id = common_1.CPP_LANGUAGE_ID;
        _this.name = common_1.CPP_LANGUAGE_NAME;
        return _this;
    }
    /**
     * Initialize the client contribution.
     */
    CppLanguageClientContribution.prototype.init = function () {
        var _this = this;
        this.cppBuildConfigurations.onActiveConfigChange2(function () { return _this.onActiveBuildConfigChanged(); });
        this.cppPreferences.onPreferenceChanged(function () { return _this.restart(); });
    };
    /**
     * Handle the language client `onReady` event.
     * @param languageClient the language client.
     */
    CppLanguageClientContribution.prototype.onReady = function (languageClient) {
        _super.prototype.onReady.call(this, languageClient);
        // Display the C/C++ build configurations status bar element to select active build config
        this.cppBuildConfigurationsStatusBarElement.show();
    };
    /**
     * Create a compilation database map.
     * @param mergeCompilationDatabases flag determining whether to merge the compilation databases.
     *
     * @returns the compilation database map.
     */
    CppLanguageClientContribution.prototype.createCompilationDatabaseMap = function (mergeCompilationDatabases) {
        return __awaiter(this, void 0, void 0, function () {
            var activeConfigurations, databaseMap, _a, _b, _c, source, config, configs, mergedDatabaseUri, _d, error_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        activeConfigurations = new Map();
                        databaseMap = new Map();
                        try {
                            for (_a = __values(this.cppBuildConfigurations.getAllActiveConfigs().entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), source = _c[0], config = _c[1];
                                if (config) {
                                    activeConfigurations.set(source, config);
                                    databaseMap.set(source, config.directory);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!(activeConfigurations.size > 1 && mergeCompilationDatabases)) return [3 /*break*/, 4];
                        databaseMap.clear(); // Use only one configuration.
                        configs = __spread(activeConfigurations.values());
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        _d = uri_1.default.bind;
                        return [4 /*yield*/, this.cppBuildConfigurations.getMergedCompilationDatabase({
                                directories: configs.map(function (config) { return config.directory; }),
                            })];
                    case 2:
                        mergedDatabaseUri = new (_d.apply(uri_1.default, [void 0, _f.sent()]))();
                        databaseMap.set('undefined', mergedDatabaseUri.parent.path.toString());
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _f.sent();
                        this.logger.error(error_1);
                        databaseMap.set('undefined', configs[0].directory);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, databaseMap];
                }
            });
        });
    };
    /**
     * Create the language client.
     * @param connection the message connection.
     *
     * @returns the language client.
     */
    CppLanguageClientContribution.prototype.createLanguageClient = function (connection) {
        var client = Object.assign(_super.prototype.createLanguageClient.call(this, connection), { languageId: this.id });
        client.registerFeature(semantic_highlighting_service_1.SemanticHighlightingService.createNewFeature(this.semanticHighlightingService, client));
        return client;
    };
    /**
     * Update the language initialization options.
     */
    CppLanguageClientContribution.prototype.updateInitializationOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clangdParams, experimentalCompilationDatabaseMap, databaseMap, lc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clangdParams = {};
                        experimentalCompilationDatabaseMap = this.cppPreferences['cpp.experimentalCompilationDatabaseMap'];
                        return [4 /*yield*/, this.createCompilationDatabaseMap(!experimentalCompilationDatabaseMap)];
                    case 1:
                        databaseMap = _a.sent();
                        if (databaseMap.size === 1) {
                            clangdParams.compilationDatabasePath = __spread(databaseMap.values())[0];
                        }
                        else if (databaseMap.size > 1 && experimentalCompilationDatabaseMap) {
                            clangdParams.compilationDatabaseMap = __spread(databaseMap.entries()).map(function (_a) {
                                var _b = __read(_a, 2), sourceDir = _b[0], dbPath = _b[1];
                                return ({ sourceDir: new uri_1.default(sourceDir).path.toString(), dbPath: dbPath, });
                            });
                        }
                        return [4 /*yield*/, this.languageClient];
                    case 2:
                        lc = _a.sent();
                        lc.clientOptions.initializationOptions = clangdParams;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle the `activeBuildConfigChanged` event.
     */
    CppLanguageClientContribution.prototype.onActiveBuildConfigChanged = function () {
        this.restart();
    };
    Object.defineProperty(CppLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            // This is used (at least) to determine which files, when they are open,
            // trigger the launch of the C/C++ language server.
            return common_1.HEADER_AND_SOURCE_FILE_EXTENSIONS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            // This is used (at least) to determine which files we watch.  Change
            // notifications are forwarded to the language server.
            return [
                '**/*.{' + common_1.HEADER_AND_SOURCE_FILE_EXTENSIONS.join() + '}',
                '**/compile_commands.json',
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CppLanguageClientContribution.prototype, "configurationSection", {
        get: function () {
            return [this.id];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create the language client options.
     *
     * @returns the language client options.
     */
    CppLanguageClientContribution.prototype.createOptions = function () {
        var _this = this;
        var clientOptions = _super.prototype.createOptions.call(this);
        clientOptions.initializationFailedHandler = function () {
            var READ_INSTRUCTIONS_ACTION = 'Read Instructions';
            var ERROR_MESSAGE = 'Error starting C/C++ language server. ' +
                "Please make sure 'clangd' is installed on your system. " +
                'You can refer to the clangd page for instructions.';
            _this.messageService.error(ERROR_MESSAGE, READ_INSTRUCTIONS_ACTION).then(function (selected) {
                if (READ_INSTRUCTIONS_ACTION === selected) {
                    _this.windowService.openNewWindow('https://clang.llvm.org/extra/clangd.html', { external: true });
                }
            });
            _this.logger.error(ERROR_MESSAGE);
            return false;
        };
        return clientOptions;
    };
    /**
     * Get the language start options.
     *
     * @returns a promise resolving to the `CppStartParameters`.
     */
    CppLanguageClientContribution.prototype.getStartParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // getStartParameters is one of the only async steps in the LC
                    // initialization sequence, so we will update asynchronously the
                    // options here
                    return [4 /*yield*/, this.updateInitializationOptions()];
                    case 1:
                        // getStartParameters is one of the only async steps in the LC
                        // initialization sequence, so we will update asynchronously the
                        // options here
                        _a.sent();
                        return [2 /*return*/, {
                                clangdExecutable: this.cppPreferences['cpp.clangdExecutable'],
                                clangdArgs: this.cppPreferences['cpp.clangdArgs'],
                                clangTidy: this.cppPreferences['cpp.clangTidy'],
                                clangTidyChecks: this.cppPreferences['cpp.clangTidyChecks']
                            }];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "cppPreferences", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "cppBuildConfigurations", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement),
        __metadata("design:type", cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement)
    ], CppLanguageClientContribution.prototype, "cppBuildConfigurationsStatusBarElement", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], CppLanguageClientContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CppLanguageClientContribution.prototype, "init", null);
    CppLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.Workspace)),
        __param(1, inversify_1.inject(browser_2.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(3, inversify_1.inject(semantic_highlighting_service_1.SemanticHighlightingService)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory,
            semantic_highlighting_service_1.SemanticHighlightingService])
    ], CppLanguageClientContribution);
    return CppLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.CppLanguageClientContribution = CppLanguageClientContribution;
//# sourceMappingURL=cpp-language-client-contribution.js.map