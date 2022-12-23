import { browser } from '$app/environment';
import {writable} from 'svelte/store';

export const x = writable(0);
export const y = writable(0);
let handlerRegistered = false;
export const trackMouse = () => {
    if (!browser || handlerRegistered) return;
    handlerRegistered = true;
    window.addEventListener('mousemove', (ev) => {
        x.set(ev.x);
        y.set(ev.y);
    });
}