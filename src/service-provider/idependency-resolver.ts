import { DependencyParameter, ServiceIdentifier } from "../service-registry";

import "./service-provider-factory";
import { IServiceDependency, ServiceEntry } from "./service-entry";
import { TopologicalGraph } from "@aster-js/iterators";
import { Constructor } from "@aster-js/core";
import { IServiceProvider } from "./iservice-provider";

export const IDependencyResolver = ServiceIdentifier<IDependencyResolver>("IDependencyResolver");

/**
 * Provides methods to retrieve service descriptors and ressolving dependencies
 */
export interface IDependencyResolver {
    resolveProviders(serviceId: ServiceIdentifier): Iterable<IServiceProvider>;

    resolveEntry(serviceId: ServiceIdentifier): ServiceEntry | undefined;

    resolveEntries(serviceId: ServiceIdentifier): Iterable<ServiceEntry>;

    resolveDependencies(ctor: Constructor): Iterable<IServiceDependency>;

    resolveDependencyGraph(entry: ServiceEntry): TopologicalGraph<ServiceEntry>;
}