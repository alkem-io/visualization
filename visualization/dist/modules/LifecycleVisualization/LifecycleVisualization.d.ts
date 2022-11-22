import { LifecycleVisualizationOptions } from './LifecycleVisualizationOptions';
import { LifecycleDataProvider } from './LifecycleDataProvider';
export declare class LifecycleVisualization {
    lifecycleData: LifecycleDataProvider;
    svg: any;
    node: any;
    width: number;
    height: number;
    nodesGroup: any;
    linksGroup: any;
    textGroup: any;
    link: any;
    linkWidthScale: any;
    simulation: any;
    text: any;
    options: LifecycleVisualizationOptions;
    constructor(svg: string | SVGSVGElement, dataLoader: LifecycleDataProvider, width: number, height: number, options?: LifecycleVisualizationOptions);
    removeDisplayedLifecycle(): void;
    displayLifecycle(): void;
}
