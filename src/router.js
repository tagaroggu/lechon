import { computed, signal } from "@preact/signals-core";
import { html } from "lit-html";
import { useComponent } from "./useComponent";

const route1 = () => {
    return () => html`This is route 1`;
}

const route2 = () => {
    return () => html`This is route 2`;
}

const route3 = () => {
    return () => html`And I am route 3`;
}

export default () => {
    const route = signal('route1');
    const routes = { route1, route2, route3 };

    const current = computed(() => {
        return routes[route.value];
    })
    
    return () => html`<button @click=${() => {route.value = 'route1'}}>Route 1</button>
    <button @click=${() => {route.value = 'route2'}}>Route 2</button>
    <button @click=${() => {route.value = 'route3'}}>Route 3</button>
    ${useComponent(current.value)}`;
}