import $ from 'jquery';
import { LifecycleDataProvider, LifecycleVisualization, MyButton } from '@alkemio/visualization';
import { MyWrapper } from './src/visualization/MyWrapper';
import { samples } from './src/samples/samples';
 
// print out the values
const el = document.getElementById('app');
el!.innerHTML = `NPM Test:<br/>
${MyButton({ title: "Test button"} )}
${MyWrapper({title: "Test 2"})}
`;

let selectorId = String('#lifecycle-selector');


const $lifecycleSelectionControl = $(selectorId);
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
    document.getElementById("#lifecycle-svg") as SVGSVGElement,
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
