import { signal } from "@preact/signals-core";
import { html } from "lit-html";
import { useHead } from "unhead";
import counter from "./counter.js";
import { useComponent } from "./useComponent.js";
import router from "./router.js";

export default () => {
    const count = signal(0);

    useHead({
        titleTemplate: title => `${title} - Lechon App`
    });


    return () => {
        useHead({
            title: String(count.value)
        });
        return html`<h1>Hello, Lechon</h1><button @click=${() => count.value++}>${count.value}</button><br>${useComponent(counter)}${useComponent(counter)}
        <br>${useComponent(router)}`;
    }
}