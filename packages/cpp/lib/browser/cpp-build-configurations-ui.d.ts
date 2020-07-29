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
import { Command, CommandContribution, CommandRegistry, CommandService } from '@theia/core';
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { FileSystem } from '@theia/filesystem/lib/common';
import { PreferenceService } from '@theia/preferences/lib/browser';
import { CppBuildConfigurationManager } from './cpp-build-configurations';
import { EditorManager } from '@theia/editor/lib/browser';
import { LabelProvider } from '@theia/core/lib/browser';
import { QuickPickService, QuickPickItem } from '@theia/core/lib/common/quick-pick-service';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { CppBuildConfiguration } from '../common/cpp-build-configuration-protocol';
export declare class CppBuildConfigurationChanger {
    protected readonly commandService: CommandService;
    protected readonly cppBuildConfigurations: CppBuildConfigurationManager;
    protected readonly editorManager: EditorManager;
    protected readonly fileSystem: FileSystem;
    protected readonly labelProvider: LabelProvider;
    protected readonly quickPick: QuickPickService;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly preferenceService: PreferenceService;
    protected readonly workspaceService: WorkspaceService;
    /**
     * Item used to trigger creation of a new build configuration.
     */
    protected readonly createItem: QuickPickItem<'createNew'>;
    /**
     * Item used to trigger reset of the active build configuration.
     */
    protected readonly resetItem: QuickPickItem<'reset'>;
    /**
     * Change the build configuration for a given root.
     * If multiple roots are available, prompt users a first time to select their desired root.
     * Once a root is determined, prompt users to select an active build configuration if applicable.
     */
    change(): Promise<void>;
    /**
     * Pick a workspace root using the quick open menu.
     */
    protected selectWorkspaceRoot(): Promise<string | undefined>;
    /**
     * Lists the different options for a given root if specified, first else.
     * In this case, the options are to set/unset/create a build configuration.
     *
     * @param root the workspace root.
     */
    protected selectCppAction(root: string | undefined): Promise<string | CppBuildConfiguration | undefined>;
    /** Create a new build configuration with placeholder values.  */
    createConfig(): Promise<void>;
}
export declare const CPP_CATEGORY = "C/C++";
/**
 * Reset active build configuration if applicable.
 * Set active build configuration to `None`.
 */
export declare const CPP_RESET_BUILD_CONFIGURATION: Command;
/**
 * Create a new build configuration, and trigger opening the preferences widget.
 */
export declare const CPP_CREATE_NEW_BUILD_CONFIGURATION: Command;
/**
 * Open the quick open menu to let the user change the active build configuration.
 */
export declare const CPP_CHANGE_BUILD_CONFIGURATION: Command;
export declare class CppBuildConfigurationsContributions implements CommandContribution {
    protected readonly cppChangeBuildConfiguration: CppBuildConfigurationChanger;
    protected readonly cppManager: CppBuildConfigurationManager;
    /**
     * Register build configurations commands for C/C++.
     * Available commands include:
     * - Resetting C/C++ build configurations.
     * - Creating new C/C++ build configurations.
     * - Updating C/C++ build configurations.
     * @param commands the command registry.
     */
    registerCommands(commands: CommandRegistry): void;
}
//# sourceMappingURL=cpp-build-configurations-ui.d.ts.map