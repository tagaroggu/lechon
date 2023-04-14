import { signal } from "@preact/signals-core";
import { html } from "lit-html";
import { useSignal } from "./useSignal.js";

const globalCount = signal(0);

export default () => {
    const localCount = signal(0);

    return () => html`<button @click=${() => globalCount.value++}>Global: ${useSignal(globalCount)}</button><button @click=${() => localCount.value++}>Local: ${useSignal(localCount)}</button>`;
}