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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var browser_1 = require("@theia/core/lib/browser");
var cpp_language_client_contribution_1 = require("./cpp-language-client-contribution");
var cpp_protocol_1 = require("./cpp-protocol");
var browser_2 = require("@theia/languages/lib/browser");
var browser_3 = require("@theia/editor/lib/browser");
var common_2 = require("../common");
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
var cpp_preferences_1 = require("./cpp-preferences");
/**
 * The C/C++ command category.
 */
var CPP_CATEGORY = 'C/C++';
/**
 * Command to switch between source/header files.
 */
exports.SWITCH_SOURCE_HEADER = {
    id: 'switch_source_header',
    category: CPP_CATEGORY,
    label: 'Switch Between Source/Header File',
};
/**
 * Command that is used to show the references from a CodeLens.
 */
exports.SHOW_CLANGD_REFERENCES = {
    id: 'clangd.references'
};
/**
 * Command to dump file inclusions.
 */
exports.DUMP_INCLUSIONS = {
    id: 'clangd.dumpinclusions',
    category: CPP_CATEGORY,
    label: 'Dump File Inclusions (Debug)',
};
/**
 * Command to dump files included the active file.
 */
exports.DUMP_INCLUDED_BY = {
    id: 'clangd.dumpincludedby',
    category: CPP_CATEGORY,
    label: 'Dump Files Including this File (Debug)',
};
/**
 * Command to re-index the workspace.
 */
exports.REINDEX = {
    id: 'clangd.reindex',
    category: CPP_CATEGORY,
    label: 'Reindex Workspace (Debug)',
};
/**
 * Command to print index statistics.
 */
exports.PRINT_STATS = {
    id: 'clangd.printstats',
    category: CPP_CATEGORY,
    label: 'Print Index Statistics (Debug)',
};
/**
 * Command to open the file path.
 * @param path the file path.
 */
exports.FILE_OPEN_PATH = function (path) { return ({
    id: 'file:openPath'
}); };
/**
 * Determine if a C/C++ file is currently active (opened).
 * @param editorManager the editor manager if it is defined.
 *
 * @returns `true` if the current active editor is a C/C++ file.
 */
function editorContainsCppFiles(editorManager) {
    if (editorManager && editorManager.activeEditor) {
        var uri_2 = editorManager.activeEditor.editor.document.uri;
        return common_2.HEADER_AND_SOURCE_FILE_EXTENSIONS.some(function (value) { return uri_2.endsWith('.' + value); });
    }
    return false;
}
exports.editorContainsCppFiles = editorContainsCppFiles;
var CppCommandContribution = /** @class */ (function () {
    function CppCommandContribution(clientContribution, openerService, editorService, selectionService) {
        this.clientContribution = clientContribution;
        this.openerService = openerService;
        this.editorService = editorService;
        this.selectionService = selectionService;
    }
    /**
     * Register commands for C/C++.
     * @param commands the command registry.
     */
    CppCommandContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(exports.SWITCH_SOURCE_HEADER, {
            isEnabled: function () { return editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.switchSourceHeader(); }
        });
        commands.registerCommand(exports.SHOW_CLANGD_REFERENCES, {
            execute: function (doc, pos, locs) {
                return commands.executeCommand(browser_3.EditorCommands.SHOW_REFERENCES.id, doc.uri, pos, locs);
            }
        });
        commands.registerCommand(exports.REINDEX, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands']; },
            execute: function () { return _this.reindex(); }
        });
        commands.registerCommand(exports.DUMP_INCLUSIONS, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands'] && editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.dumpInclusions(); }
        });
        commands.registerCommand(exports.DUMP_INCLUDED_BY, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands'] && editorContainsCppFiles(_this.editorService); },
            execute: function () { return _this.dumpIncludedBy(); }
        });
        commands.registerCommand(exports.PRINT_STATS, {
            isEnabled: function () { return _this.cppPreferences['cpp.experimentalCommands']; },
            execute: function () { return _this.printStats(); }
        });
    };
    /**
     * Actually switch the source header.
     */
    CppCommandContribution.prototype.switchSourceHeader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, languageClient, sourceUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        return [4 /*yield*/, languageClient.sendRequest(cpp_protocol_1.SwitchSourceHeaderRequest.type, docIdentifier)];
                    case 2:
                        sourceUri = _a.sent();
                        if (sourceUri !== undefined) {
                            browser_1.open(this.openerService, new uri_1.default(sourceUri.toString()));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually dump file inclusions.
     */
    CppCommandContribution.prototype.dumpInclusions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        params = { command: exports.DUMP_INCLUSIONS.id, arguments: [docIdentifier] };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually dump files including the active file.
     */
    CppCommandContribution.prototype.dumpIncludedBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, docIdentifier, params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/];
                        }
                        docIdentifier = browser_2.TextDocumentIdentifier.create(uri.toString());
                        params = { command: exports.DUMP_INCLUDED_BY.id, arguments: [docIdentifier] };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually perform re-index.
     */
    CppCommandContribution.prototype.reindex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { command: exports.REINDEX.id };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Actually perform print stats.
     */
    CppCommandContribution.prototype.printStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { command: exports.PRINT_STATS.id };
                        return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        languageClient = _a.sent();
                        languageClient.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(cpp_preferences_1.CppPreferences),
        __metadata("design:type", Object)
    ], CppCommandContribution.prototype, "cppPreferences", void 0);
    CppCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(cpp_language_client_contribution_1.CppLanguageClientContribution)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(browser_3.EditorManager)),
        __metadata("design:paramtypes", [cpp_language_client_contribution_1.CppLanguageClientContribution, Object, browser_3.EditorManager,
            common_1.SelectionService])
    ], CppCommandContribution);
    return CppCommandContribution;
}());
exports.CppCommandContribution = CppCommandContribution;
//# sourceMappingURL=cpp-commands.js.map