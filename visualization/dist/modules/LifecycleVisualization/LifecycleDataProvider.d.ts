export declare class LifecycleDataProvider {
    selectedHubID: string;
    machineDef: any;
    machine: any;
    graph: any;
    state: string;
    constructor();
    static validateLifecycleDefinition(jsonData: string): boolean;
    loadData(jsonData: string): Promise<LifecycleDataProvider>;
    loadUrl(jsonDataFileLocation: string): Promise<LifecycleDataProvider>;
    updateState(newState: string): void;
}
