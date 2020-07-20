export function add (a, b) {
    return a + b; 
}

export function sub(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

export function resetId(idName) {
    let idedit = document.querySelector(idName);
    idedit.style.cssText = "background-color:#00c8f8; font-size:50px; color: blue;";
}

export function resetClass(className) {
    let classedit = document.querySelector(className);
    classedit.style.cssText = "background-color:#00c8f8;width:100vw; height:100vh;font-size:50px; color: white;";
}

