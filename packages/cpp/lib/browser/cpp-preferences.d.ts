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
import { interfaces } from 'inversify';
import { PreferenceSchema, PreferenceProxy, PreferenceService } from '@theia/core/lib/browser/preferences';
import { CppBuildConfiguration } from '../common/cpp-build-configuration-protocol';
/**
 * Representation of the C/C++ preference schema.
 */
export declare const cppPreferencesSchema: PreferenceSchema;
/**
 * Representation of C/C++ preference configuration.
 */
export declare class CppConfiguration {
    'cpp.buildConfigurations': CppBuildConfiguration[];
    'cpp.experimentalCompilationDatabaseMap': boolean;
    'cpp.clangdExecutable': string;
    'cpp.clangdArgs': string;
    'cpp.clangTidy': boolean;
    'cpp.clangTidyChecks': string;
}
export declare const CppPreferences: unique symbol;
export declare type CppPreferences = PreferenceProxy<CppConfiguration>;
/**
 * Create the C/C++ preferences.
 * @param preferences the preference service.
 *
 * @returns the C/C++ preferences.
 */
export declare function createCppPreferences(preferences: PreferenceService): CppPreferences;
/**
 * Bind the C/C++ preferences to the application.
 */
export declare function bindCppPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=cpp-preferences.d.ts.map