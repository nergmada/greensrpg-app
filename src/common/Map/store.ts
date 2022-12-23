import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const image_x = writable(0);
export const image_y = writable(0);
export const mouse_x = writable(0);
export const mouse_y = writable(0);

export const mouseHandler = (event: MouseEvent) => {
    if (!browser || !event.target) return;
    const node = event.target as HTMLElement;
    const rect = node.getBoundingClientRect();
    image_x.set(event.clientX - rect.left); //x position within the element.
    image_y.set(event.clientY - rect.top);  //y position within the element.
    mouse_x.set(event.clientX);
    mouse_y.set(event.clientY);
}