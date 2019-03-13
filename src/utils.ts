export function add(a, b) {
    return a + b;
}

export const PI = 3.1415;

//make something global by adding it to window object. only use for debugging.
window["add"] = add;