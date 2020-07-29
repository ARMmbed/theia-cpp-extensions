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
import { SelectionService } from '@theia/core/lib/common';
import { CommandContribution, CommandRegistry, Command } from '@theia/core/lib/common';
import { OpenerService } from '@theia/core/lib/browser';
import { CppLanguageClientContribution } from './cpp-language-client-contribution';
import { EditorManager } from '@theia/editor/lib/browser';
/**
 * Command to switch between source/header files.
 */
export declare const SWITCH_SOURCE_HEADER: Command;
/**
 * Command that is used to show the references from a CodeLens.
 */
export declare const SHOW_CLANGD_REFERENCES: Command;
/**
 * Command to dump file inclusions.
 */
export declare const DUMP_INCLUSIONS: Command;
/**
 * Command to dump files included the active file.
 */
export declare const DUMP_INCLUDED_BY: Command;
/**
 * Command to re-index the workspace.
 */
export declare const REINDEX: Command;
/**
 * Command to print index statistics.
 */
export declare const PRINT_STATS: Command;
/**
 * Command to open the file path.
 * @param path the file path.
 */
export declare const FILE_OPEN_PATH: (path: string) => Command;
/**
 * Determine if a C/C++ file is currently active (opened).
 * @param editorManager the editor manager if it is defined.
 *
 * @returns `true` if the current active editor is a C/C++ file.
 */
export declare function editorContainsCppFiles(editorManager: EditorManager | undefined): boolean;
export declare class CppCommandContribution implements CommandContribution {
    protected readonly clientContribution: CppLanguageClientContribution;
    protected readonly openerService: OpenerService;
    private editorService;
    protected readonly selectionService: SelectionService;
    private readonly cppPreferences;
    constructor(clientContribution: CppLanguageClientContribution, openerService: OpenerService, editorService: EditorManager, selectionService: SelectionService);
    /**
     * Register commands for C/C++.
     * @param commands the command registry.
     */
    registerCommands(commands: CommandRegistry): void;
    /**
     * Actually switch the source header.
     */
    protected switchSourceHeader(): Promise<void>;
    /**
     * Actually dump file inclusions.
     */
    private dumpInclusions;
    /**
     * Actually dump files including the active file.
     */
    private dumpIncludedBy;
    /**
     * Actually perform re-index.
     */
    private reindex;
    /**
     * Actually perform print stats.
     */
    private printStats;
}
//# sourceMappingURL=cpp-commands.d.ts.map