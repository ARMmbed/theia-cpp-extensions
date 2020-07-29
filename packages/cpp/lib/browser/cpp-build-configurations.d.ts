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
import { Emitter, Event } from '@theia/core';
import { CppPreferences } from './cpp-preferences';
import { StorageService } from '@theia/core/lib/browser/storage-service';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { CppBuildConfiguration, CppBuildConfigurationServer } from '../common/cpp-build-configuration-protocol';
import { VariableResolverService } from '@theia/variable-resolver/lib/browser';
/**
 * @deprecated Import from `@theia/cpp/lib/common` instead
 */
export { CppBuildConfiguration };
/**
 * Determine if the argument is a C/C++ build configuration.
 *
 * @returns `true` if the argument is a C/C++ build configuration.
 */
export declare function isCppBuildConfiguration(arg: any): arg is CppBuildConfiguration;
/**
 * Determine if two C/C++ build configurations are equal.
 * @param a the first C/C++ build configuration.
 * @param b the second C/C++ build configuration.
 *
 * @returns `true` if both `a` and `b` are equal.
 */
export declare function equals(a: CppBuildConfiguration, b: CppBuildConfiguration): boolean;
export declare const CppBuildConfigurationManager: unique symbol;
/**
 * Representation of a C/C++ build configuration manager.
 */
export interface CppBuildConfigurationManager {
    /**
     * Get the list of defined build configurations.
     *
     * @returns an array of defined `CppBuildConfiguration`.
     */
    getConfigs(root?: string): CppBuildConfiguration[];
    /**
     * Get the list of valid defined build configurations.
     *
     * @returns an array of valid defined `CppBuildConfiguration`.
     * A `CppBuildConfiguration` is considered valid if it has a `name` and `directory`.
     */
    getValidConfigs(root?: string): CppBuildConfiguration[];
    /**
     * Get the active build configuration.
     *
     * @param root the optional workspace root.
     * @returns the active `CppBuildConfiguration` if it exists, else `undefined`.
     */
    getActiveConfig(root?: string): CppBuildConfiguration | undefined;
    /**
     * Set the active build configuration.
     *
     * @param config the active `CppBuildConfiguration`. If `undefined` no active build configuration will be set.
     * @param root the optional workspace root.
     */
    setActiveConfig(config: CppBuildConfiguration | undefined, root?: string): void;
    /**
     * Get the active build configurations for all roots.
     */
    getAllActiveConfigs?(): Map<string, CppBuildConfiguration | undefined>;
    /**
     * Experimental:
     *
     * Get a filesystem path to a `compile_commands.json` file which will be the result of all
     * configurations merged together (provided through the `configs` parameter).
     *
     * This covers the case when `clangd` is not able to take multiple compilation database
     * in its initialization, so this is mostly a hack-around to still get diagnostics for all
     * projects and most importantly being able to cross reference project symbols.
     */
    getMergedCompilationDatabase?(configs: {
        directories: string[];
    }): Promise<string>;
    /**
     * @deprecated use `onActiveConfigChange2` instead.
     *
     * Event emitted when the active build configuration changes.
     *
     * @returns an event with the active `CppBuildConfiguration` if it exists, else `undefined`.
     */
    onActiveConfigChange: Event<CppBuildConfiguration | undefined>;
    /**
     * Updated `onActiveConfigChange` to support multi-root.
     *
     * @returns all the configurations to use.
     */
    onActiveConfigChange2: Event<Map<string, CppBuildConfiguration>>;
    /**
     * Promise resolved when the list of build configurations has been read
     * once, and the active configuration has been set, if relevant.
     */
    ready: Promise<void>;
}
export declare const CPP_BUILD_CONFIGURATIONS_PREFERENCE_KEY = "cpp.buildConfigurations";
/**
 * Entry point to get the list of build configurations and get/set the active
 * build configuration.
 */
export declare class CppBuildConfigurationManagerImpl implements CppBuildConfigurationManager {
    protected readonly cppPreferences: CppPreferences;
    protected readonly storageService: StorageService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly variableResolver: VariableResolverService;
    protected readonly buildConfigurationServer: CppBuildConfigurationServer;
    /**
     * Resolved configurations, coming from the preferences.
     */
    protected resolvedConfigurations: Map<string, CppBuildConfiguration[]>;
    /**
     * The current active build configurations map.
     */
    protected activeConfigurations: Map<string, CppBuildConfiguration | undefined>;
    /**
     * @deprecated use `activeConfigChange2Emitter` instead.
     *
     * Emitter for when the active build configuration changes.
     */
    protected readonly activeConfigChangeEmitter: Emitter<CppBuildConfiguration | undefined>;
    /**
     * Emitter for when an active build configuration changes.
     */
    protected readonly activeConfigChange2Emitter: Emitter<Map<string, CppBuildConfiguration>>;
    /**
     * Persistent storage key for the active build configurations map.
     */
    readonly ACTIVE_BUILD_CONFIGURATIONS_MAP_STORAGE_KEY = "cpp.active-build-configurations-map";
    ready: Promise<void>;
    /**
     * Initialize the manager.
     */
    init(): Promise<void>;
    /**
     * Get the C/C++ build configuration from the preferences.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    protected getConfigsFromPreferences(root?: string): CppBuildConfiguration[];
    /**
     * Load the active build configuration from persistent storage.
     */
    protected loadActiveConfigs(): Promise<void>;
    /**
     * Save the active build configuration to persistent storage.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    protected saveActiveConfigs(configs: Map<string, CppBuildConfiguration | undefined>): void;
    /**
     * Update the active build configuration if applicable.
     */
    protected handlePreferencesUpdate(): Promise<void>;
    /**
     * Determine if two `CppBuildConfiguration` are equal.
     *
     * @param a `CppBuildConfiguration`.
     * @param b `CppBuildConfiguration`.
     */
    protected equals(a: CppBuildConfiguration, b: CppBuildConfiguration): boolean;
    /**
     * Get the active build configuration.
     * @param root the optional workspace root.
     *
     * @returns the active build configuration if it exists, else `undefined`.
     */
    getActiveConfig(root?: string): CppBuildConfiguration | undefined;
    /**
     * Get all active build configurations.
     * - If for a given root the build configuration is `undefined`, the root does not contain
     * an active build configuration.
     *
     * @returns the map of all active configurations if available, for each workspace root.
     */
    getAllActiveConfigs(): Map<string, CppBuildConfiguration | undefined>;
    /**
     * Set the active build configuration.
     * @param config the build configuration to be set. If `undefined` there will be no active configuration.
     * @param root the optional workspace root. If unprovided, fallback to the first workspace root if available.
     */
    setActiveConfig(config: CppBuildConfiguration | undefined, root?: string): void;
    readonly onActiveConfigChange: Event<CppBuildConfiguration | undefined>;
    readonly onActiveConfigChange2: Event<Map<string, CppBuildConfiguration>>;
    /**
     * Get all build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    getConfigs(root?: string): CppBuildConfiguration[];
    /**
     * Get all valid build configurations.
     * @param root the optional workspace root.
     *
     * @returns an array of build configurations.
     */
    getValidConfigs(root?: string): CppBuildConfiguration[];
    /**
     * Get the merged compilation database.
     */
    getMergedCompilationDatabase(params: {
        directories: string[];
    }): Promise<string>;
    /**
     * Get the root directory.
     * @param root the optional workspace root.
     *
     * @returns the root directory if it is present, else `undefined`.
     */
    protected getRoot(root?: string): string | undefined;
}
//# sourceMappingURL=cpp-build-configurations.d.ts.map