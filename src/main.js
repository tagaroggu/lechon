import { render } from 'lit-html';
import state from './stores/state.js';
import App from './App.js';

state.subscribe(value => render(App(value), document.body));