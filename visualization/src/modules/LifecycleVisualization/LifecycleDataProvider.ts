import * as d3 from 'd3';

import { createMachine } from 'xstate';
import { toDirectedGraph } from '@xstate/graph';

export class LifecycleDataProvider {

  selectedHubID = '';
  machineDef: any = undefined;
  machine: any;
  graph: any;
  state = "";

  constructor() {}

  static validateLifecycleDefinition(jsonData: string): boolean {
    if (!jsonData) return false;
    try {
      const jsonDef = JSON.parse(jsonData);
      const machine = createMachine(jsonDef);
      toDirectedGraph(machine);
    } catch (e) {
      return false;
    }
    return true;
  };

  loadData(jsonData: string): Promise<LifecycleDataProvider> {
    return new Promise((resolve, reject) => {
      if (!LifecycleDataProvider.validateLifecycleDefinition(jsonData)) reject('Invalid machine definition');

      this.machineDef = JSON.parse(jsonData);
      this.machine = createMachine(this.machineDef);
      this.graph = toDirectedGraph(this.machine);
      this.updateState(this.machine.initialState);
  
      resolve(this);
    });
 }

  async loadUrl(jsonDataFileLocation: string): Promise<LifecycleDataProvider> {
    this.machineDef = await d3.json(jsonDataFileLocation);
    
    this.machine = createMachine(this.machineDef);
    this.graph = toDirectedGraph(this.machine);
    this.updateState(this.machine.initialState);

    return this;
  }

  updateState(newState: string) {
    this.state = newState;
  }
}