/********************************************************************************
 * Copyright (C) 2017-2019 Ericsson and others.
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
import { BaseLanguageServerContribution, IConnection, LanguageServerStartOptions } from '@theia/languages/lib/node';
import { CppStartParameters } from '../common';
/**
 * Representation of C/C++ start options.
 */
export interface CppStartOptions extends LanguageServerStartOptions {
    /**
     * The C/C++ start parameters.
     */
    parameters?: CppStartParameters;
}
export declare class CppContribution extends BaseLanguageServerContribution {
    readonly id = "cpp";
    readonly name = "C/C++";
    /**
     * Start the language server.
     * @param clientConnection the language client connection.
     * @param parameters the startup parameters.
     */
    start(clientConnection: IConnection, { parameters }: CppStartOptions): Promise<void>;
    /**
     * Determine if clang-tidy is supported by the user.
     * @param command the given command.
     *
     * @returns `true` if clang-tidy is supported.
     */
    protected testSupportsClangTidy(command: string): Promise<boolean>;
}
//# sourceMappingURL=cpp-contribution.d.ts.map