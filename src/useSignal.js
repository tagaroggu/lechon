import { AsyncDirective, directive } from 'lit-html/async-directive.js';
import { effect } from '@preact/signals-core';
import { noChange } from 'lit-html';

export const useSignal = directive(class extends AsyncDirective {
    #effect;
    #signal;

    render(signal) {
        this.#signal = signal;
        this.#effect = effect(() => { this.setValue(this.#signal.value) });

        return noChange;
    }

    disconnected() {
        this.#effect();
        this.#effect = null;
    }

    reconnected() {
        this.#effect = effect(() => { this.setValue(this.#signal.value) });
    }
});