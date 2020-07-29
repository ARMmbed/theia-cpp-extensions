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
import { MessageConnection } from 'vscode-jsonrpc';
import { BaseLanguageClientContribution, LanguageClientFactory, LanguageClientOptions, ILanguageClient } from '@theia/languages/lib/browser';
import { Languages, Workspace } from '@theia/languages/lib/browser';
import { SemanticHighlightingService } from '@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service';
import { ILogger } from '@theia/core/lib/common/logger';
import { WindowService } from '@theia/core/lib/browser/window/window-service';
import { CppStartParameters } from '../common';
import { CppBuildConfigurationManager } from './cpp-build-configurations';
import { CppBuildConfigurationsStatusBarElement } from './cpp-build-configurations-statusbar-element';
import { CppPreferences } from './cpp-preferences';
export declare class CppLanguageClientContribution extends BaseLanguageClientContribution {
    protected readonly workspace: Workspace;
    protected readonly languages: Languages;
    protected readonly languageClientFactory: LanguageClientFactory;
    protected readonly semanticHighlightingService: SemanticHighlightingService;
    readonly id = "cpp";
    readonly name = "C/C++";
    protected readonly cppPreferences: CppPreferences;
    protected readonly cppBuildConfigurations: CppBuildConfigurationManager;
    protected readonly cppBuildConfigurationsStatusBarElement: CppBuildConfigurationsStatusBarElement;
    protected readonly windowService: WindowService;
    protected readonly logger: ILogger;
    constructor(workspace: Workspace, languages: Languages, languageClientFactory: LanguageClientFactory, semanticHighlightingService: SemanticHighlightingService);
    /**
     * Initialize the client contribution.
     */
    protected init(): void;
    /**
     * Handle the language client `onReady` event.
     * @param languageClient the language client.
     */
    protected onReady(languageClient: ILanguageClient): void;
    /**
     * Create a compilation database map.
     * @param mergeCompilationDatabases flag determining whether to merge the compilation databases.
     *
     * @returns the compilation database map.
     */
    protected createCompilationDatabaseMap(mergeCompilationDatabases: boolean): Promise<Map<string, string>>;
    /**
     * Create the language client.
     * @param connection the message connection.
     *
     * @returns the language client.
     */
    protected createLanguageClient(connection: MessageConnection): ILanguageClient;
    /**
     * Update the language initialization options.
     */
    private updateInitializationOptions;
    /**
     * Handle the `activeBuildConfigChanged` event.
     */
    protected onActiveBuildConfigChanged(): void;
    protected readonly documentSelector: string[];
    protected readonly globPatterns: string[];
    protected readonly configurationSection: string[];
    /**
     * Create the language client options.
     *
     * @returns the language client options.
     */
    protected createOptions(): LanguageClientOptions;
    /**
     * Get the language start options.
     *
     * @returns a promise resolving to the `CppStartParameters`.
     */
    protected getStartParameters(): Promise<CppStartParameters>;
}
//# sourceMappingURL=cpp-language-client-contribution.d.ts.map