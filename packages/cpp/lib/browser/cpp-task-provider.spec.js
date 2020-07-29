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
var inversify_1 = require("inversify");
var cpp_task_provider_1 = require("./cpp-task-provider");
var task_contribution_1 = require("@theia/task/lib/browser/task-contribution");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var chai_1 = require("chai");
var task_definition_registry_1 = require("@theia/task/lib/browser/task-definition-registry");
var task_problem_matcher_registry_1 = require("@theia/task/lib/browser/task-problem-matcher-registry");
var task_problem_pattern_registry_1 = require("@theia/task/lib/browser/task-problem-pattern-registry");
// The object under test.
var taskProvider;
var MockCppBuildConfigurationManager = /** @class */ (function () {
    function MockCppBuildConfigurationManager() {
        /**
         * Promise resolved when the list of build configurations has been read
         * once, and the active configuration has been set, if relevant.
         */
        this.ready = Promise.resolve();
    }
    /**
     * Get available build configurations.
     *
     * @returns the list of build configurations.
     */
    MockCppBuildConfigurationManager.prototype.getConfigs = function () {
        return [{
                name: 'Build 1',
                directory: '/tmp/build1',
            }, {
                name: 'Build 2',
                directory: '/tmp/build2',
                commands: {
                    build: 'very complex command',
                }
            }];
    };
    /**
     * Get the list of valid build configurations.
     *
     * @returns the list of valid build configurations.
     */
    MockCppBuildConfigurationManager.prototype.getValidConfigs = function () {
        return this.getConfigs();
    };
    /**
     * Get the active build configuration.
     *
     * @returns the active build configuration if it exists.
     */
    MockCppBuildConfigurationManager.prototype.getActiveConfig = function () {
        return undefined;
    };
    /**
     * Change the active build configuration.
     * @param config the build configuration. If `undefined` no active build configuration exists.
     */
    MockCppBuildConfigurationManager.prototype.setActiveConfig = function (config) { };
    MockCppBuildConfigurationManager = __decorate([
        inversify_1.injectable()
    ], MockCppBuildConfigurationManager);
    return MockCppBuildConfigurationManager;
}());
beforeEach(function () {
    var container = new inversify_1.Container();
    container.bind(cpp_task_provider_1.CppTaskProvider).toSelf().inSingletonScope();
    container.bind(cpp_build_configurations_1.CppBuildConfigurationManager).to(MockCppBuildConfigurationManager);
    container.bind(task_contribution_1.TaskResolverRegistry).toSelf().inSingletonScope();
    container.bind(task_definition_registry_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
    container.bind(task_problem_matcher_registry_1.ProblemMatcherRegistry).toSelf().inSingletonScope();
    container.bind(task_problem_pattern_registry_1.ProblemPatternRegistry).toSelf().inSingletonScope();
    taskProvider = container.get(cpp_task_provider_1.CppTaskProvider);
    // Register a task resolver of type 'shell', on which the cpp build tasks
    // depend.  Just return the task as-is, since we only need to verify what
    // CppTaskProvider passed to the shell task resolver.
    container.get(task_contribution_1.TaskResolverRegistry).register('shell', {
        resolveTask: function (task) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, task];
                });
            });
        }
    });
});
describe('CppTaskProvider', function () {
    it('provide a task for each build config with a build command', function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, taskProvider.provideTasks()];
                    case 1:
                        tasks = _a.sent();
                        chai_1.expect(tasks).length(1);
                        chai_1.expect(tasks[0].config.name).to.be.equal('Build 2');
                        return [4 /*yield*/, taskProvider.resolveTask(tasks[0])];
                    case 2:
                        resolvedTask = _a.sent();
                        chai_1.expect(resolvedTask.type === 'shell');
                        chai_1.expect(resolvedTask.options.cwd).to.be.equal('/tmp/build2');
                        chai_1.expect(resolvedTask.command).to.be.equal('very');
                        chai_1.expect(resolvedTask.args).to.deep.equal(['complex', 'command']);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=cpp-task-provider.spec.js.map