"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var os_1 = require("@theia/core/lib/common/os");
var browser_1 = require("@theia/editor/lib/browser");
var cpp_commands_1 = require("./cpp-commands");
var CppKeybindingContext = /** @class */ (function () {
    function CppKeybindingContext(editorService) {
        this.editorService = editorService;
        this.id = 'cpp.keybinding.context';
    }
    /**
     * Determine if the keybinding is enabled.
     * The keybinding is enabled if the editor currently contains an active C/C++ file.
     * @param arg the keybinding.
     *
     * @returns `true` if the keybinding is enabled.
     */
    CppKeybindingContext.prototype.isEnabled = function (arg) {
        return cpp_commands_1.editorContainsCppFiles(this.editorService);
    };
    CppKeybindingContext = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.EditorManager)),
        __metadata("design:paramtypes", [browser_1.EditorManager])
    ], CppKeybindingContext);
    return CppKeybindingContext;
}());
exports.CppKeybindingContext = CppKeybindingContext;
var CppKeybindingContribution = /** @class */ (function () {
    function CppKeybindingContribution(cppKeybindingContext) {
        this.cppKeybindingContext = cppKeybindingContext;
    }
    /**
     * Register keybindings.
     * @param registry the keybinding registry.
     */
    CppKeybindingContribution.prototype.registerKeybindings = function (registry) {
        [
            {
                command: 'switch_source_header',
                context: this.cppKeybindingContext.id,
                keybinding: os_1.isOSX ? 'option+cmd+o' : 'alt+o'
            }
        ].forEach(function (binding) {
            registry.registerKeybinding(binding);
        });
    };
    CppKeybindingContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(CppKeybindingContext)),
        __metadata("design:paramtypes", [CppKeybindingContext])
    ], CppKeybindingContribution);
    return CppKeybindingContribution;
}());
exports.CppKeybindingContribution = CppKeybindingContribution;
//# sourceMappingURL=cpp-keybinding.js.map