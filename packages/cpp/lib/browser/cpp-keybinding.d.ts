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
import { EditorManager } from '@theia/editor/lib/browser';
import { KeybindingContext, Keybinding, KeybindingContribution, KeybindingRegistry } from '@theia/core/lib/browser';
export declare class CppKeybindingContext implements KeybindingContext {
    protected readonly editorService: EditorManager;
    constructor(editorService: EditorManager);
    id: string;
    /**
     * Determine if the keybinding is enabled.
     * The keybinding is enabled if the editor currently contains an active C/C++ file.
     * @param arg the keybinding.
     *
     * @returns `true` if the keybinding is enabled.
     */
    isEnabled(arg: Keybinding): boolean;
}
export declare class CppKeybindingContribution implements KeybindingContribution {
    protected readonly cppKeybindingContext: CppKeybindingContext;
    constructor(cppKeybindingContext: CppKeybindingContext);
    /**
     * Register keybindings.
     * @param registry the keybinding registry.
     */
    registerKeybindings(registry: KeybindingRegistry): void;
}
//# sourceMappingURL=cpp-keybinding.d.ts.map