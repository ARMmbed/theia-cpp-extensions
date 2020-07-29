"use strict";
/********************************************************************************
 * Copyright (C) 2017-2019 Ericsson and others.
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
var node_1 = require("@theia/languages/lib/node");
var utils_1 = require("@theia/process/lib/node/utils");
var common_1 = require("../common");
var CppContribution = /** @class */ (function (_super) {
    __extends(CppContribution, _super);
    function CppContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = common_1.CPP_LANGUAGE_ID;
        _this.name = common_1.CPP_LANGUAGE_NAME;
        return _this;
    }
    /**
     * Start the language server.
     * @param clientConnection the language client connection.
     * @param parameters the startup parameters.
     */
    CppContribution.prototype.start = function (clientConnection, _a) {
        var parameters = _a.parameters;
        return __awaiter(this, void 0, void 0, function () {
            var command, args, clangTidy, clangTidyChecks, supportsClangTidy, serverConnection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        command = process.env.CPP_CLANGD_COMMAND
                            || (parameters && parameters.clangdExecutable)
                            || common_1.CLANGD_EXECUTABLE_DEFAULT;
                        args = utils_1.parseArgs(process.env.CPP_CLANGD_ARGS
                            || (parameters && parameters.clangdArgs)
                            || undefined);
                        clangTidy = parameters && parameters.clangTidy;
                        clangTidyChecks = parameters && parameters.clangTidyChecks;
                        if (!clangTidy) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.testSupportsClangTidy(command)];
                    case 1:
                        supportsClangTidy = _b.sent();
                        if (supportsClangTidy) {
                            args.push('-clang-tidy');
                            if (typeof clangTidyChecks === 'string' && clangTidyChecks.length > 0) {
                                args.push("-clang-tidy-checks=" + clangTidyChecks);
                            }
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.createProcessStreamConnectionAsync(command, args)];
                    case 3:
                        serverConnection = _b.sent();
                        this.forward(clientConnection, serverConnection);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if clang-tidy is supported by the user.
     * @param command the given command.
     *
     * @returns `true` if clang-tidy is supported.
     */
    CppContribution.prototype.testSupportsClangTidy = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var process;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.spawnProcessAsync.call(this, command, ['-clang-tidy', '-version'])];
                    case 1:
                        process = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                process.errorOutput.on('data', function (data) {
                                    if (data.includes('-clang-tidy')) {
                                        resolve(false);
                                    }
                                });
                                process.errorOutput.once('close', function () { return resolve(true); });
                            })];
                }
            });
        });
    };
    CppContribution = __decorate([
        inversify_1.injectable()
    ], CppContribution);
    return CppContribution;
}(node_1.BaseLanguageServerContribution));
exports.CppContribution = CppContribution;
//# sourceMappingURL=cpp-contribution.js.map