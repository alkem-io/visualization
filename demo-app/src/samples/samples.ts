import InnovationFlow from './LifecycleVisualization/innovation-flow.json';
import OrganizationVerification from './LifecycleVisualization/organization-verification.json';
import UserApplication from './LifecycleVisualization/user-application.json';

export type LifecycleVisualizationSample = {
    id: string;
    name: string;
    data: any;
    url: string;
    states: string[];
}

export const samples = {
    "LifecycleVisualization": [
        {
            id: "InnovationFlow",
            name: "Innovation Flow",
            data: InnovationFlow,
            url: "./src/samples/LifecycleVisualization/innovation-flow.json",
            states: Object.keys(InnovationFlow.states)
        },
        {   
            id: "OrganizationVerification",
            name: "Organization Verification",
            data: OrganizationVerification,
            url: "./src/samples/LifecycleVisualization/organization-verification.json",
            states: Object.keys(OrganizationVerification.states)
        },
        {   
            id: "UserApplication",
            name: "User Application",
            data: UserApplication,
            url: "./src/samples/LifecycleVisualization/user-application.json",
            states: Object.keys(UserApplication.states)
        },
    ] as LifecycleVisualizationSample[]
};