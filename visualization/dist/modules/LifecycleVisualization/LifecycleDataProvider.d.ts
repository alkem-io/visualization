export declare class LifecycleDataProvider {
    selectedHubID: string;
    machineDef: any;
    machine: any;
    graph: any;
    state: string;
    constructor();
    loadData(jsonData: string): Promise<any>;
    loadUrl(jsonDataFileLocation: string): Promise<any>;
    updateState(newState: string): void;
}
