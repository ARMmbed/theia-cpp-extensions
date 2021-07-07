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

import * as React from 'react';
import { injectable } from 'inversify';
import { MWSelect } from '@theia/cpp-debug/lib/browser/utils/memory-widget-components';
import { MWMultiSelect } from '@theia/cpp-debug/lib/browser/utils/multi-select-bar';
import {
    MemoryOptionsWidget,
    BYTES_PER_GROUP_FIELD_ID,
    BYTES_PER_ROW_FIELD_ID, ASCII_TOGGLE_ID,
    AUTO_UPDATE_TOGGLE_ID
} from '@theia/cpp-debug/lib/browser/memory-widget/memory-options-widget';

@injectable()
export class MbsMemoryOptionsWidget extends MemoryOptionsWidget {
    // eslint-disable-next-line max-lines-per-function
    protected renderByteDisplayGroup(): React.ReactNode {
        return (
            <div className='t-mv-group settings-group'>
                <MWSelect
                    id='byte-size-select'
                    label='Byte Size'
                    value={this.byteSize.toString()}
                    onChange={this.onByteSizeChange}
                    options={['8', '16', '32', '64']}
                />
                <MWSelect
                    id={BYTES_PER_GROUP_FIELD_ID}
                    label='Bytes Per Group'
                    value={this.bytesPerGroup.toString()}
                    onChange={this.onBytesPerGroupChange}
                    options={['1', '2', '4', '8', '16']}
                />
                <MWSelect
                    id={BYTES_PER_ROW_FIELD_ID}
                    label='Groups Per Row'
                    value={this.groupsPerRow.toString()}
                    onChange={this.onGroupsPerRowChange}
                    options={['1', '2', '4', '8', '16', '32']}
                />
                <MWMultiSelect
                    id={ASCII_TOGGLE_ID}
                    label='Columns'
                    items={this.getOptionalColumns()}
                    onSelectionChanged={this.handleColumnSelectionChange}
                />
            </div>
        );
    }

    protected renderToolbar(): React.ReactNode {
        return (
            <div className='memory-widget-toolbar'>
                {this.renderEditableTitleField()}
                {this.memoryWidgetOptions.dynamic !== false && (
                    <div className='memory-widget-auto-updates-container'>
                        <div
                            className={`fa fa-${this.doUpdateAutomatically ? 'unlock' : 'lock'}`}
                            id={AUTO_UPDATE_TOGGLE_ID}
                            title={this.doUpdateAutomatically ? 'Freeze memory view' : 'Unfreeze memory view'}
                            onClick={this.toggleAutoUpdate}
                            onKeyDown={this.toggleAutoUpdate}
                            role='button'
                            tabIndex={0}
                        />
                    </div>
                )}
                <div
                    className='toggle-settings-container'
                >
                    <div
                        className='toggle-settings-click-zone'
                        tabIndex={0}
                        aria-label={`${this.doDisplaySettings ? 'Hide settings panel' : 'Show settings panel'}`}
                        role='button'
                        onClick={this.toggleDoShowSettings}
                        onKeyDown={this.toggleDoShowSettings}
                        title={`${this.doDisplaySettings ? 'Hide settings panel' : 'Show settings panel'}`}
                    >
                        <i className='codicon codicon-settings-gear' />
                        <span>{this.doDisplaySettings ? 'Close Settings' : 'Settings'}</span>
                    </div>
                </div>
            </div>
        );
    }
}
