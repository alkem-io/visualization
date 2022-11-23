import $ from 'jquery';
import { LifecycleDataProvider, LifecycleVisualization } from '@alkemio/visualization';
import { LifecycleVisualizationSample, samples } from '../samples/samples';

 
const LifecycleVisualizationSample = () => {

    // Combo boxes control
    const $lifecycleSelectionControl = $('#lifecycle-selector');
    const $stateSelectionControl = $('#state-selector');
    let k: keyof typeof samples.LifecycleVisualization;
    // Load available Lifecycle Visualizations
    for (k in samples.LifecycleVisualization)
    {
        $lifecycleSelectionControl.append(
            $("<option>").val(samples.LifecycleVisualization[k].id).html(samples.LifecycleVisualization[k].name)
        );
    }
    function onSelectedLifecycle() {
        const selectedLifecycleId = $lifecycleSelectionControl.val()!.toString();
        samples.LifecycleVisualization.forEach(sample => {
            if (sample.id === selectedLifecycleId)
            {
                loadLifecycleData(sample);
            }
        });
    }

    // Lifecycle Visualization
    const lifecycleData = new LifecycleDataProvider();
    const lifecycleVisualization = new LifecycleVisualization(
        document.getElementById("lifecycle-svg") as any,
        lifecycleData,
        800,
        600
    );

    async function loadLifecycleData(sample: LifecycleVisualizationSample) {
        if (lifecycleVisualization) lifecycleVisualization.removeDisplayedLifecycle();

        await lifecycleData.loadUrl(sample.url);
        $stateSelectionControl.empty().append(sample.states.map(state => $('<option />').val(state).text(state)));
        lifecycleData.updateState(sample.states[0]);
        lifecycleVisualization
        lifecycleVisualization.displayLifecycle();
    }

    // Init:
    onSelectedLifecycle();
    $lifecycleSelectionControl.on('change', function () {
        onSelectedLifecycle();
    });
    $stateSelectionControl.on('change', function() {
        lifecycleData.updateState($stateSelectionControl.val()!.toString());
        lifecycleVisualization.displayLifecycle();
    })
};

export default LifecycleVisualizationSample;