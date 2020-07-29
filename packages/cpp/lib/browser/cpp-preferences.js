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
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = require("@theia/core/lib/browser/preferences");
var common_1 = require("../common");
/**
 * Representation of the C/C++ preference schema.
 */
exports.cppPreferencesSchema = {
    type: 'object',
    properties: {
        'cpp.buildConfigurations': {
            description: 'List of build configurations',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    'name': {
                        type: 'string'
                    },
                    'directory': {
                        type: 'string'
                    },
                    'commands': {
                        type: 'object',
                        properties: {
                            'build': {
                                type: 'string',
                            }
                        },
                    }
                },
                required: ['name', 'directory'],
            },
            scope: 'resource',
            default: [],
        },
        'cpp.experimentalCompilationDatabaseMap': {
            description: 'Enable experimental support for multiple compilation databases.',
            default: false,
            type: 'boolean'
        },
        'cpp.experimentalCommands': {
            description: 'Enable experimental commands mostly intended for Clangd developers.',
            default: false,
            type: 'boolean'
        },
        'cpp.clangdExecutable': {
            description: 'Specify the executable name/path to run in order to start clangd.',
            default: common_1.CLANGD_EXECUTABLE_DEFAULT,
            type: 'string'
        },
        'cpp.clangdArgs': {
            description: 'Specify the arguments to pass to clangd when starting the language server.',
            default: '',
            type: 'string'
        },
        'cpp.clangTidy': {
            description: 'Enable/disable C/C++ linting.',
            default: false,
            type: 'boolean'
        },
        'cpp.clangTidyChecks': {
            description: 'Specify comma separated arguments to pass to clang-tidy. Activated only if cpp.clang-tidy is enabled',
            default: '',
            type: 'string'
        }
    }
};
/**
 * Representation of C/C++ preference configuration.
 */
var CppConfiguration = /** @class */ (function () {
    function CppConfiguration() {
    }
    return CppConfiguration;
}());
exports.CppConfiguration = CppConfiguration;
exports.CppPreferences = Symbol('CppPreferences');
/**
 * Create the C/C++ preferences.
 * @param preferences the preference service.
 *
 * @returns the C/C++ preferences.
 */
function createCppPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.cppPreferencesSchema);
}
exports.createCppPreferences = createCppPreferences;
/**
 * Bind the C/C++ preferences to the application.
 */
function bindCppPreferences(bind) {
    bind(exports.CppPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createCppPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.cppPreferencesSchema });
}
exports.bindCppPreferences = bindCppPreferences;
//# sourceMappingURL=cpp-preferences.js.map