/********************************************************************************
 * Copyright (C) 2018-2019 Ericsson
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
import { StatusBar } from '@theia/core/lib/browser';
import { CppBuildConfigurationManager } from './cpp-build-configurations';
import { WorkspaceService } from '@theia/workspace/lib/browser';
export declare class CppBuildConfigurationsStatusBarElement {
    protected readonly cppManager: CppBuildConfigurationManager;
    protected readonly statusBar: StatusBar;
    protected readonly workspaceService: WorkspaceService;
    protected readonly cppIdentifier = "cpp-configurator";
    /**
     * Display the `CppBuildConfiguration` status bar element,
     * and listen to changes to the active build configuration.
     */
    show(): void;
    /**
     * Set the `CppBuildConfiguration` status bar element
     * used to create a new cpp build configuration and set the active build configuration.
     *
     * @param config the active `CppBuildConfiguration`.
     */
    protected setCppBuildConfigElement(count: number): void;
    /**
     * Get the valid active configuration count.
     */
    protected getValidActiveCount(): number;
}
//# sourceMappingURL=cpp-build-configurations-statusbar-element.d.ts.map