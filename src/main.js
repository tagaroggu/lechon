import 'open-props/style';
import 'open-props/normalize';
import { createHead } from 'unhead';
import { effect, signal, computed } from '@preact/signals-core';
import { render, html } from 'lit-html';
import { useComponent } from './useComponent.js';

import App from './App.js';

createHead();

render(html`${useComponent(App)}`, document.body);