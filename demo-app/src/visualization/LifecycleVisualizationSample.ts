import $ from 'jquery';
import { LifecycleDataProvider, LifecycleVisualization } from '@alkemio/visualization';
import { samples } from '../samples/samples';

 
const LifecycleVisualizationSample = () => {
    const $lifecycleSelectionControl = $('#lifecycle-selector');
    let k: keyof typeof samples.LifecycleVisualization;
    for (k in samples.LifecycleVisualization)
    {
    $lifecycleSelectionControl.append(
        $("<option>").val(samples.LifecycleVisualization[k].url).html(k)
    );
    }


    /// Lifecycle ///////////////////////
    let lifecycleVisualization: LifecycleVisualization;
    async function displayLifecycleWithData() {
    if (lifecycleVisualization) lifecycleVisualization.removeDisplayedLifecycle();
    const lifecycleData = new LifecycleDataProvider();
    const selectedLifecycle = $lifecycleSelectionControl.val()!.toString();
    await lifecycleData.loadUrl(selectedLifecycle);
    lifecycleData.updateState('awaitingApproval');
    lifecycleVisualization = new LifecycleVisualization(
        document.getElementById("lifecycle-svg") as any,
        lifecycleData,
        800,
        600
    );
    lifecycleVisualization.displayLifecycle();
    }
    displayLifecycleWithData();

    $lifecycleSelectionControl.on('change', function () {
    displayLifecycleWithData();
    });
};

export default LifecycleVisualizationSample;