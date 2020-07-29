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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var parseArgv = require("string-argv");
var inversify_1 = require("inversify");
var task_contribution_1 = require("@theia/task/lib/browser/task-contribution");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var task_definition_registry_1 = require("@theia/task/lib/browser/task-definition-registry");
var task_problem_matcher_registry_1 = require("@theia/task/lib/browser/task-problem-matcher-registry");
var task_problem_pattern_registry_1 = require("@theia/task/lib/browser/task-problem-pattern-registry");
/**
 * The C/C++ build task type key.
 */
var CPP_BUILD_TASK_TYPE_KEY = 'cpp.build';
/**
 * The C/C++ build task source.
 */
var CPP_BUILD_TASK_SOURCE = 'cpp';
var CppTaskProvider = /** @class */ (function () {
    function CppTaskProvider() {
    }
    /**
     * Initialize the task provider.
     */
    CppTaskProvider.prototype.init = function () {
        this.registerTaskDefinition();
        this.problemPatternRegistry.register({
            'name': 'clangTidyPattern',
            'regexp': '^(.+):(\\d+):(\\d+):\\s+(error|warning|info|note):\\s+(.+?)\\s+\\[(.+)\\]$',
            'file': 1,
            'line': 2,
            'character': 3,
            'severity': 4,
            'message': 5,
            'code': 6
        });
        this.problemMatcherRegistry.register({
            'name': 'clangTidyMatcher',
            'label': 'Clang-tidy problems',
            'owner': 'clang-tidy',
            'source': 'clang-tidy-task',
            'applyTo': 'alldocuments',
            'fileLocation': [
                'absolute'
            ],
            'pattern': 'clangTidyPattern'
        });
    };
    /**
     * Register the task provider.
     * @param registry the task provider registry.
     */
    CppTaskProvider.prototype.registerProviders = function (registry) {
        registry.register(CPP_BUILD_TASK_SOURCE, this);
    };
    /**
     * Register the task resolver.
     * @param registry the task resolver registry.
     */
    CppTaskProvider.prototype.registerResolvers = function (registry) {
        registry.register(CPP_BUILD_TASK_TYPE_KEY, this);
    };
    /**
     * Resolve the C/C++ build task configuration.
     * @param task the C/C++ build task configuration.
     *
     * @returns a Promise resolving to the task configuration.
     */
    CppTaskProvider.prototype.resolveTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, buildCommand, argv, command, args, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskResolverRegistry.getResolver('shell')];
                    case 1:
                        resolver = _a.sent();
                        if (!resolver) {
                            throw new Error('No shell resolver found, cannot build.');
                        }
                        buildCommand = task.config.commands && task.config.commands['build'];
                        if (buildCommand === undefined) {
                            throw new Error("No build command defined in build configuration " + task.config.name + ".");
                        }
                        argv = parseArgv(buildCommand);
                        if (argv.length === 0) {
                            throw new Error("Empty build command in the active build configuration (" + task.config.name + ")");
                        }
                        command = argv[0];
                        args = argv.slice(1);
                        resolvedTask = __assign({}, task, { type: 'shell', command: command,
                            args: args, options: {
                                cwd: task.config.directory,
                            } });
                        return [2 /*return*/, resolver.resolveTask(resolvedTask)];
                }
            });
        });
    };
    /**
     * Return a C/C++ build task configuration based on `config`, or undefined
     * if `config` doesn't specify a build command.
     */
    CppTaskProvider.prototype.makeTaskConfiguration = function (config) {
        if (config.commands && config.commands.build) {
            return {
                type: CPP_BUILD_TASK_TYPE_KEY,
                _source: CPP_BUILD_TASK_SOURCE,
                _scope: config.directory,
                label: "C/C++ Build - " + config.name,
                config: config
            };
        }
        return undefined;
    };
    /**
     * Return the C/C++ build tasks (one task per existing build config).
     */
    CppTaskProvider.prototype.provideTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buildConfigs, taskConfigs, buildConfigs_1, buildConfigs_1_1, buildConfig, taskConfig;
            var e_1, _a;
            return __generator(this, function (_b) {
                buildConfigs = this.cppBuildConfigurationManager.getConfigs();
                taskConfigs = [];
                try {
                    for (buildConfigs_1 = __values(buildConfigs), buildConfigs_1_1 = buildConfigs_1.next(); !buildConfigs_1_1.done; buildConfigs_1_1 = buildConfigs_1.next()) {
                        buildConfig = buildConfigs_1_1.value;
                        taskConfig = this.makeTaskConfiguration(buildConfig);
                        if (taskConfig) {
                            taskConfigs.push(taskConfig);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (buildConfigs_1_1 && !buildConfigs_1_1.done && (_a = buildConfigs_1.return)) _a.call(buildConfigs_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, taskConfigs];
            });
        });
    };
    /**
     * Register the task definition.
     */
    CppTaskProvider.prototype.registerTaskDefinition = function () {
        this.taskDefinitionRegistry.register({
            taskType: CPP_BUILD_TASK_TYPE_KEY,
            source: 'cpp',
            properties: {
                required: ['label'],
                all: ['label'],
                schema: {
                    type: CPP_BUILD_TASK_TYPE_KEY,
                    required: ['label'],
                    properties: {
                        label: {
                            type: 'string'
                        }
                    }
                }
            }
        });
    };
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], CppTaskProvider.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], CppTaskProvider.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(cpp_build_configurations_1.CppBuildConfigurationManager),
        __metadata("design:type", Object)
    ], CppTaskProvider.prototype, "cppBuildConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], CppTaskProvider.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(task_problem_pattern_registry_1.ProblemPatternRegistry),
        __metadata("design:type", task_problem_pattern_registry_1.ProblemPatternRegistry)
    ], CppTaskProvider.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CppTaskProvider.prototype, "init", null);
    CppTaskProvider = __decorate([
        inversify_1.injectable()
    ], CppTaskProvider);
    return CppTaskProvider;
}());
exports.CppTaskProvider = CppTaskProvider;
//# sourceMappingURL=cpp-task-provider.js.map