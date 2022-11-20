
import { MyButton } from '@alkemio/visualization';
import { MyWrapper } from './src/visualization/MyWrapper';

// print out the values
const el = document.getElementById('app');
el!.innerHTML = `NPM Test:<br/>
${MyButton({ title: "Test button"} )}
${MyWrapper({title: "Test 2"})}
`;


