/********************************************************************************
 * Copyright (C) 2021 Ericsson and others.
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
/* eslint-disable no-bitwise, max-lines */
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from '@theia/core';
import { KeybindingContribution, KeybindingRegistry } from '@theia/core/lib/browser';
import { CreateNewRegisterViewCommand } from '@theia/cpp-debug/lib/browser/utils/memory-commands';
import { injectable } from 'inversify';

@injectable()
export class RemovedRegisterWindow implements CommandContribution, MenuContribution, KeybindingContribution {
    registerKeybindings(keybindings: KeybindingRegistry): void {
        keybindings.unregisterKeybinding(CreateNewRegisterViewCommand);
    }
    registerMenus(menus: MenuModelRegistry): void {
        menus.unregisterMenuAction(CreateNewRegisterViewCommand);
    }
    registerCommands(commands: CommandRegistry): void {
        commands.unregisterCommand(CreateNewRegisterViewCommand);
    }
}
