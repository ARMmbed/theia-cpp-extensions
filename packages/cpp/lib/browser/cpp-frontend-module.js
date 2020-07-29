"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var cpp_commands_1 = require("./cpp-commands");
var browser_2 = require("@theia/languages/lib/browser");
var cpp_language_client_contribution_1 = require("./cpp-language-client-contribution");
var cpp_keybinding_1 = require("./cpp-keybinding");
var cpp_preferences_1 = require("./cpp-preferences");
var cpp_build_configurations_ui_1 = require("./cpp-build-configurations-ui");
var cpp_build_configurations_1 = require("./cpp-build-configurations");
var cpp_build_configurations_statusbar_element_1 = require("./cpp-build-configurations-statusbar-element");
var cpp_task_provider_1 = require("./cpp-task-provider");
var task_contribution_1 = require("@theia/task/lib/browser/task-contribution");
var cpp_build_configuration_protocol_1 = require("../common/cpp-build-configuration-protocol");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_1.CommandContribution).to(cpp_commands_1.CppCommandContribution).inSingletonScope();
    bind(cpp_keybinding_1.CppKeybindingContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(cpp_keybinding_1.CppKeybindingContext);
    bind(browser_1.KeybindingContribution).to(cpp_keybinding_1.CppKeybindingContribution).inSingletonScope();
    bind(cpp_language_client_contribution_1.CppLanguageClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(cpp_language_client_contribution_1.CppLanguageClientContribution);
    bind(cpp_task_provider_1.CppTaskProvider).toSelf().inSingletonScope();
    bind(cpp_build_configurations_1.CppBuildConfigurationManager).to(cpp_build_configurations_1.CppBuildConfigurationManagerImpl).inSingletonScope();
    bind(cpp_build_configurations_ui_1.CppBuildConfigurationChanger).toSelf().inSingletonScope();
    bind(cpp_build_configurations_ui_1.CppBuildConfigurationsContributions).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskContribution).toService(cpp_task_provider_1.CppTaskProvider);
    bind(common_1.CommandContribution).toService(cpp_build_configurations_ui_1.CppBuildConfigurationsContributions);
    bind(cpp_build_configurations_statusbar_element_1.CppBuildConfigurationsStatusBarElement).toSelf().inSingletonScope();
    bind(cpp_build_configuration_protocol_1.CppBuildConfigurationServer).toDynamicValue(function (ctx) {
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, cpp_build_configuration_protocol_1.cppBuildConfigurationServerPath);
    }).inSingletonScope();
    cpp_preferences_1.bindCppPreferences(bind);
});
//# sourceMappingURL=cpp-frontend-module.js.map