/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { TaskContribution, TaskProvider, TaskProviderRegistry, TaskResolver, TaskResolverRegistry } from '@theia/task/lib/browser/task-contribution';
import { CppBuildConfiguration } from '../common/cpp-build-configuration-protocol';
import { CppBuildConfigurationManager } from './cpp-build-configurations';
import { ContributedTaskConfiguration, TaskConfiguration } from '@theia/task/lib/common/task-protocol';
import { TaskDefinitionRegistry } from '@theia/task/lib/browser/task-definition-registry';
import { ProblemMatcherRegistry } from '@theia/task/lib/browser/task-problem-matcher-registry';
import { ProblemPatternRegistry } from '@theia/task/lib/browser/task-problem-pattern-registry';
/**
 * Representation of a C/C++ build task configuration.
 * Describes the data required to define a C/C++ build task the user could run.
 */
interface CppBuildTaskConfiguration extends ContributedTaskConfiguration {
    /**
     * The C/C++ build configuration.
     */
    config: CppBuildConfiguration;
}
export declare class CppTaskProvider implements TaskContribution, TaskProvider, TaskResolver {
    protected readonly taskResolverRegistry: TaskResolverRegistry;
    protected readonly taskDefinitionRegistry: TaskDefinitionRegistry;
    protected readonly cppBuildConfigurationManager: CppBuildConfigurationManager;
    protected readonly problemMatcherRegistry: ProblemMatcherRegistry;
    protected readonly problemPatternRegistry: ProblemPatternRegistry;
    /**
     * Initialize the task provider.
     */
    protected init(): void;
    /**
     * Register the task provider.
     * @param registry the task provider registry.
     */
    registerProviders(registry: TaskProviderRegistry): void;
    /**
     * Register the task resolver.
     * @param registry the task resolver registry.
     */
    registerResolvers(registry: TaskResolverRegistry): void;
    /**
     * Resolve the C/C++ build task configuration.
     * @param task the C/C++ build task configuration.
     *
     * @returns a Promise resolving to the task configuration.
     */
    resolveTask(task: CppBuildTaskConfiguration): Promise<TaskConfiguration>;
    /**
     * Return a C/C++ build task configuration based on `config`, or undefined
     * if `config` doesn't specify a build command.
     */
    makeTaskConfiguration(config: CppBuildConfiguration): CppBuildTaskConfiguration | undefined;
    /**
     * Return the C/C++ build tasks (one task per existing build config).
     */
    provideTasks(): Promise<CppBuildTaskConfiguration[]>;
    /**
     * Register the task definition.
     */
    private registerTaskDefinition;
}
export {};
//# sourceMappingURL=cpp-task-provider.d.ts.map