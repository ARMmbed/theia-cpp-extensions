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
import { MemoryDockpanelPlaceholder } from '@theia/cpp-debug/lib/browser/wrapper-widgets/memory-dockpanel-placeholder-widget';
import { injectable, postConstruct } from 'inversify';
import * as React from 'react';

@injectable()
export class MbsMemoryDockpanelPlaceholder extends MemoryDockpanelPlaceholder {
    static ID = 'memory-dockpanel-placeholder';

    @postConstruct()
    init(): void {
        this.id = MbsMemoryDockpanelPlaceholder.ID;
        this.addClass(MbsMemoryDockpanelPlaceholder.ID);
        this.update();
    }

    render(): React.ReactNode {
        return (
            <div className='t-mv-memory-fetch-error'>
                Click the
                {' '}
                <i className='memory-view-icon toolbar' />
                {' '}
                icon to add a new memory view.
            </div>
        );
    }
}
