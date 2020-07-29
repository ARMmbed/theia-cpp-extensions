/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { CppBuildConfigurationServer } from '../common/cpp-build-configuration-protocol';
import { FileSystem } from '@theia/filesystem/lib/common';
import { ILogger } from '@theia/core/lib/common/logger';
export declare class CppBuildConfigurationServerImpl implements CppBuildConfigurationServer {
    protected readonly logger: ILogger;
    protected readonly fileSystem: FileSystem;
    /**
     * Get the merged compilation database.
     * @param params the passed arguments including the list of directories to search from.
     */
    getMergedCompilationDatabase(params: {
        directories: string[];
    }): Promise<string>;
}
//# sourceMappingURL=cpp-build-configuration-server.d.ts.map