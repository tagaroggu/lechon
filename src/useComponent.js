import { effect } from "@preact/signals-core";
import { noChange } from "lit-html";
import { AsyncDirective, directive } from "lit-html/async-directive.js";

export const useComponent = directive(class extends AsyncDirective {
    #componentConstructor
    #instance;
    #effect;

    render(componentConstructor) {
        if (this.#componentConstructor !== componentConstructor) {
            this.#componentConstructor = componentConstructor
            this.#instance = this.#componentConstructor();
        }

        this.#effect = effect(() => { this.setValue(this.#instance()) });

        return noChange;
    }

    disconnected() {
        this.#effect();
        this.#effect = null;
    }

    reconnected() {
        this.#effect = effect(() => { this.setValue(this.#instance()) });
    }
})