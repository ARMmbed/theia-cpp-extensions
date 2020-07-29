"use strict";
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var crypto = require("crypto");
var inversify_1 = require("inversify");
var os_1 = require("os");
var path_1 = require("path");
var common_1 = require("@theia/filesystem/lib/common");
var node_1 = require("@theia/core/lib/node");
var logger_1 = require("@theia/core/lib/common/logger");
var CppBuildConfigurationServerImpl = /** @class */ (function () {
    function CppBuildConfigurationServerImpl() {
    }
    /**
     * Get the merged compilation database.
     * @param params the passed arguments including the list of directories to search from.
     */
    CppBuildConfigurationServerImpl.prototype.getMergedCompilationDatabase = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var directories, hash, entries, directories_1, directories_1_1, directory, databaseFolder, databasePath;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        directories = params.directories.sort();
                        hash = crypto.createHash('sha256');
                        entries = [];
                        try {
                            for (directories_1 = __values(directories), directories_1_1 = directories_1.next(); !directories_1_1.done; directories_1_1 = directories_1.next()) {
                                directory = directories_1_1.value;
                                hash.update(directory);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (directories_1_1 && !directories_1_1.done && (_a = directories_1.return)) _a.call(directories_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, Promise.all(directories.map(function (directory) { return __awaiter(_this, void 0, void 0, function () {
                                var file, parsed;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fileSystem.resolveContent(node_1.FileUri.create(directory).resolve('compile_commands.json').toString())];
                                        case 1:
                                            file = _a.sent();
                                            parsed = JSON.parse(file.content);
                                            if (!Array.isArray(parsed)) {
                                                throw new Error("content is not a JSON array: " + file.stat.uri);
                                            }
                                            entries.push.apply(entries, __spread(parsed));
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        databaseFolder = path_1.join(os_1.tmpdir(), 'theia-cpp-databases', hash.digest('hex').toLowerCase());
                        databasePath = node_1.FileUri.create(databaseFolder)
                            .resolve('compile_commands.json').toString();
                        return [4 /*yield*/, this.fileSystem.exists(databasePath)];
                    case 2:
                        if (!_b.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.delete(databasePath)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.fileSystem.createFile(databasePath, {
                            content: JSON.stringify(entries) + os_1.EOL
                        })];
                    case 5:
                        _b.sent();
                        this.logger.debug("Wrote merged compilation database into " + databaseFolder);
                        return [2 /*return*/, databasePath];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger), inversify_1.named('cpp'),
        __metadata("design:type", Object)
    ], CppBuildConfigurationServerImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], CppBuildConfigurationServerImpl.prototype, "fileSystem", void 0);
    CppBuildConfigurationServerImpl = __decorate([
        inversify_1.injectable()
    ], CppBuildConfigurationServerImpl);
    return CppBuildConfigurationServerImpl;
}());
exports.CppBuildConfigurationServerImpl = CppBuildConfigurationServerImpl;
//# sourceMappingURL=cpp-build-configuration-server.js.map