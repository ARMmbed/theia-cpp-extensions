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
var jsdom_1 = require("@theia/core/lib/browser/test/jsdom");
var disableJSDOM = jsdom_1.enableJSDOM();
var inversify_1 = require("inversify");
var chai_1 = require("chai");
var common_1 = require("@theia/filesystem/lib/common");
var storage_service_1 = require("@theia/core/lib/browser/storage-service");
var mock_storage_service_1 = require("@theia/core/lib/browser/test/mock-storage-service");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var node_filesystem_1 = require("@theia/filesystem/lib/node/node-filesystem");
var cpp_preferences_1 = require("./cpp-preferences");
var preference_service_1 = require("@theia/core/lib/browser/preferences/preference-service");
var mock_preference_service_1 = require("@theia/core/lib/browser/preferences/test/mock-preference-service");
var browser_1 = require("@theia/task/lib/browser");
var workspace_service_1 = require("@theia/workspace/lib/browser/workspace-service");
var cpp_build_configuration_protocol_1 = require("../common/cpp-build-configuration-protocol");
var browser_2 = require("@theia/variable-resolver/lib/browser");
var container;
var variableValues;
disableJSDOM();
before(function () {
    disableJSDOM = jsdom_1.enableJSDOM();
});
after(function () {
    disableJSDOM();
});
beforeEach(function () {
    variableValues = {};
    var m = new inversify_1.ContainerModule(function (bind) {
        bind(cpp_build_configurations_1.CppBuildConfigurationManager).to(cpp_build_configurations_1.CppBuildConfigurationManagerImpl).inSingletonScope();
        bind(storage_service_1.StorageService).to(mock_storage_service_1.MockStorageService).inSingletonScope();
        bind(common_1.FileSystem).to(node_filesystem_1.FileSystemNode).inSingletonScope();
        bind(browser_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
        cpp_preferences_1.bindCppPreferences(bind);
        bind(preference_service_1.PreferenceService).to(mock_preference_service_1.MockPreferenceService).inSingletonScope();
        bind(cpp_build_configuration_protocol_1.CppBuildConfigurationServer).to(cpp_build_configuration_protocol_1.MockCppBuildConfigurationServer).inSingletonScope();
        bind(workspace_service_1.WorkspaceService).toConstantValue({
            tryGetRoots: function () { return [{ uri: '/tmp' }]; },
        });
        bind(browser_2.VariableResolverService).toSelf();
        bind(browser_2.VariableRegistry).toConstantValue({
            getVariable: function (name) {
                return name in variableValues ? {
                    name: name, resolve: function () { return variableValues[name]; },
                } : undefined;
            },
            getVariables: function () {
                return Object.keys(variableValues).map(function (name) { return ({
                    name: name, resolve: function () { return variableValues[name]; },
                }); });
            },
            dispose: function () { },
        });
    });
    container = new inversify_1.Container();
    container.load(m);
});
/**
 * Get an instance of the `CppBuildConfigurationManager`.
 */
function getManager() {
    return container.get(cpp_build_configurations_1.CppBuildConfigurationManager);
}
/**
 * Create the .theia/builds.json file with `buildsJsonContent` as its content
 * and create/return an instance of the build configuration service.  If
 * `buildsJsonContent` is undefined, don't create .theia/builds.json.
 * If `activeBuildConfigName` is not undefined, also create an entry in the
 * storage service representing the saved active build config.
 */
function initializeTest(buildConfigurations, activeBuildConfigName) {
    return __awaiter(this, void 0, void 0, function () {
        var preferenceService, storage, configs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preferenceService = container.get(preference_service_1.PreferenceService);
                    preferenceService.get = function (preferenceName, fallback) {
                        if (preferenceName === 'cpp.buildConfigurations') {
                            return buildConfigurations || fallback;
                        }
                        return undefined;
                    };
                    // Save active build config
                    if (activeBuildConfigName !== undefined) {
                        storage = container.get(storage_service_1.StorageService);
                        storage.setData('cpp.active-build-configurations-map', {
                            configs: [[
                                    '/tmp',
                                    {
                                        name: 'Release',
                                        directory: '/tmp/builds/release',
                                    }
                                ]],
                        });
                    }
                    configs = container.get(cpp_build_configurations_1.CppBuildConfigurationManager);
                    return [4 /*yield*/, configs.ready];
                case 1:
                    _a.sent();
                    return [2 /*return*/, configs];
            }
        });
    });
}
describe('build-configurations', function () {
    before(function () {
        disableJSDOM = jsdom_1.enableJSDOM();
    });
    after(function () {
        disableJSDOM();
    });
    it('should work with no preferences', function () {
        return __awaiter(this, void 0, void 0, function () {
            var cppBuildConfigurations, configs, active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, initializeTest(undefined, undefined)];
                    case 1:
                        cppBuildConfigurations = _a.sent();
                        configs = cppBuildConfigurations.getConfigs();
                        active = cppBuildConfigurations.getActiveConfig('/tmp');
                        chai_1.expect(active).eq(undefined);
                        chai_1.expect(configs).lengthOf(0);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should work with an empty list of builds', function () {
        return __awaiter(this, void 0, void 0, function () {
            var cppBuildConfigurations, configs, active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, initializeTest([], undefined)];
                    case 1:
                        cppBuildConfigurations = _a.sent();
                        configs = cppBuildConfigurations.getConfigs();
                        active = cppBuildConfigurations.getActiveConfig('/tmp');
                        chai_1.expect(active).eq(undefined);
                        chai_1.expect(configs).lengthOf(0);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should work with a simple list of builds', function () {
        return __awaiter(this, void 0, void 0, function () {
            var builds, cppBuildConfigurations, configs, active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builds = [{
                                name: 'Release',
                                directory: '/tmp/builds/release',
                            }, {
                                name: 'Debug',
                                directory: '/tmp/builds/debug',
                            }];
                        return [4 /*yield*/, initializeTest(builds, undefined)];
                    case 1:
                        cppBuildConfigurations = _a.sent();
                        configs = cppBuildConfigurations.getConfigs();
                        active = cppBuildConfigurations.getActiveConfig('/tmp');
                        chai_1.expect(active).eq(undefined);
                        chai_1.expect(configs).to.be.an('array').of.lengthOf(2);
                        chai_1.expect(configs).to.have.deep.members(builds);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should work with a simple list of builds and an active config', function () {
        return __awaiter(this, void 0, void 0, function () {
            var builds, cppBuildConfigurations, manager, configs, active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builds = [{
                                name: 'Release',
                                directory: '/tmp/builds/release',
                            }, {
                                name: 'Debug',
                                directory: '/tmp/builds/debug',
                            }];
                        return [4 /*yield*/, initializeTest(builds, 'Debug')];
                    case 1:
                        cppBuildConfigurations = _a.sent();
                        manager = getManager();
                        manager.setActiveConfig(builds[1], '/tmp');
                        configs = cppBuildConfigurations.getConfigs();
                        active = cppBuildConfigurations.getActiveConfig('/tmp');
                        chai_1.expect(active).to.be.deep.eq(builds[1]);
                        chai_1.expect(configs).to.be.an('array').of.lengthOf(2);
                        chai_1.expect(configs).to.have.deep.members(builds);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("should ignore an active config that doesn't exist", function () {
        return __awaiter(this, void 0, void 0, function () {
            var builds, cppBuildConfigurations, manager, configs, active;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builds = [{
                                name: 'Release',
                                directory: '/tmp/builds/release',
                            }, {
                                name: 'Debug',
                                directory: '/tmp/builds/debug',
                            }];
                        return [4 /*yield*/, initializeTest(builds, 'foobar')];
                    case 1:
                        cppBuildConfigurations = _a.sent();
                        manager = getManager();
                        manager.setActiveConfig(undefined, '/tmp');
                        configs = cppBuildConfigurations.getConfigs();
                        active = cppBuildConfigurations.getActiveConfig('/tmp');
                        chai_1.expect(active).to.be.eq(undefined);
                        chai_1.expect(configs).to.be.an('array').of.lengthOf(2);
                        chai_1.expect(configs).to.have.deep.members(builds);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=cpp-build-configurations.spec.js.map