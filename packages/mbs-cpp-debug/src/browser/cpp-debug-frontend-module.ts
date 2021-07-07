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

import { ContainerModule } from 'inversify';
import { WidgetFactory, KeybindingContribution } from '@theia/core/lib/browser';
import { CommandContribution, MenuContribution } from '@theia/core';
import { EditableMemoryWidget, MemoryEditableTableWidget } from '@theia/cpp-debug/lib/browser/editable-widget/memory-editable-table-widget';
import { MemoryTableWidget } from '@theia/cpp-debug/lib/browser/memory-widget/memory-table-widget';
import { MemoryWidget } from '@theia/cpp-debug/lib/browser/memory-widget/memory-widget';
import { MemoryWidgetOptions } from '@theia/cpp-debug/lib/browser/utils/memory-widget-utils';
import { MbsMemoryOptionsWidget } from './memory-widget/memory-settings';
import { RemovedRegisterWindow } from './utils/cpp-debug-frontend-contributions-mughees';
import { MbsMemoryDockpanelPlaceholder } from './wrapper-widgets/memory-dockpanel-placeholder-widget-mughees';

// eslint-disable-next-line max-lines-per-function
export default new ContainerModule(bind => {
    bind(CommandContribution).toService(RemovedRegisterWindow);
    bind(MenuContribution).toService(RemovedRegisterWindow);
    bind(KeybindingContribution).toService(RemovedRegisterWindow);
    bind(RemovedRegisterWindow).toSelf().inSingletonScope();
    bind(MbsMemoryDockpanelPlaceholder).toSelf().inSingletonScope();

    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: MemoryWidget.ID,
        createWidget: (options: MemoryWidgetOptions): MemoryWidget => MemoryWidget.createWidget<MbsMemoryOptionsWidget, MemoryTableWidget>(
            container,
            MbsMemoryOptionsWidget,
            MemoryTableWidget,
            MemoryWidgetOptions,
            options,
        ),
    }));

    bind(WidgetFactory).toDynamicValue(({ container }) => ({
        id: EditableMemoryWidget.ID,
        createWidget: (options: MemoryWidgetOptions): EditableMemoryWidget => MemoryWidget
            .createWidget<MbsMemoryOptionsWidget, MemoryEditableTableWidget>(
                container,
                MbsMemoryOptionsWidget,
                MemoryEditableTableWidget,
                MemoryWidgetOptions,
                options,
            ),
    }));
});
