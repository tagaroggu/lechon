# lechon
Very small starting point for making a web app.

## Features
- `lit-html` for small yet flexible templating with additional Features
- `@preact/signals-core` for state
- `open-props` for atomic css-like styling
- `unhead` for head management
- `vite` for building/bundling the app
- `pnpm` for space saving (I don't have much storage, tbh)
- `useComponent` and `useSignal` directives to directly use the value of a signal; you don't have to call render twice

## Why???
- Personally, I just like using Lit HTML
- This is mainly if I want to make a quick experimental project that I won't mind getting rid of very quickly
- I am considering slowly but surely fleshing out this as a sort-of meta-framework, but currently I am content with this as is, since it just works

## Roadmap
- I might change from Preact signals to Vue reactivity if I feel that it would benefit more from it, but for now Preact signals work perfectly fine