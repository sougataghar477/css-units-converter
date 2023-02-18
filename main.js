const rem = document.querySelector(".rem");
const variableInput = document.querySelector(".ch");
const px = document.querySelector(".px");
const assumption = document.querySelector(".assumption");
const selector = document.querySelector(".selector");
let allowedkeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
variableInput.addEventListener("input", calculatePx);
px.addEventListener("input", calculateCh);
rem.addEventListener("input", calculateBasedonRem);
selector.addEventListener("change", handleSelector);
rem.disabled = selector.value !== "ch";
//Calculate value of pixels from input which has variable value
function calculatePx(e) {
    let b = Number(e.target.value);
    switch (selector.value) {
        case 'ch':
            let remValue = Number(rem.value);
            let chtopx = remValue / 2 * b;
            px.value = chtopx.toFixed(2);
            break;
        case 'cm':
            let cmtoPixels = b * 37.8;
            px.value = cmtoPixels.toFixed(2);
            break;
        case 'mm':
            let mmtoPixels = b * 3.78;
            px.value = mmtoPixels.toFixed(2);
            break;
        case 'Q':
            let qtoPixels = b * 0.945;
            px.value = qtoPixels.toFixed(2);
            break;
        case 'in':
            let intoPixels = b * 96;
            px.value = intoPixels.toFixed(2);
            break;
        case 'pc':
            let pctoPixels = b * 16;
            px.value = pctoPixels.toFixed(2);
            break;
        case 'pt':
            let ptToPixels = b * 1.33;
            px.value = ptToPixels.toFixed(2);
            break;
    }

}
//Calculate value of variable inputs from input which has pixel value
function calculateCh(e) {
    let b = Number(e.target.value);

    switch (selector.value) {
        case 'ch':
            let remValue = Number(rem.value);
            let pxtoCh = b / remValue * 2;
            variableInput.value = pxtoCh.toFixed(2);
            break;
        case 'cm':
            let pxtoCm = b / 37.8;
            variableInput.value = pxtoCm.toFixed(2);
            break;
        case 'mm':
            let pxtoMm = b / 3.78;
            variableInput.value = pxtoMm.toFixed(2);
            break;
        case 'Q':
            let pxToQ = b / 0.945;
            variableInput.value = pxToQ.toFixed(2);
            break;
        case 'in':
            let pxToIn = b / 96;
            variableInput.value = pxToIn.toFixed(2);
            break;
        case 'pc':
            let pxToC = b / 16;
            variableInput.value = pxToC.toFixed(2);
            break;
        case 'pt':
            let pxToPt = b / 1.33;
            variableInput.value = pxToPt.toFixed(2);
            break;
    }
}

//Calculate value of pixels from rem value
function calculateBasedonRem(e) {

    let remValue = Number(e.target.value);
    let chValue = Number(variableInput.value);
    let output = remValue / 2 * chValue;
    assumption.textContent = `If 1 REM is ${e.target.value}px`;
    px.value = output;
}
function handleSelector(e) {
    const { value } = e.target;
    rem.disabled = value !== "ch";
    if (variableInput.value) {
        
        let b = Number(variableInput.value);
        
        
        switch (value) {
            case 'ch':
                let remValue = Number(rem.value);
                let chtopx = remValue / 2 * b;
                px.value = chtopx.toFixed(2);
                break;
            case 'cm':
                let cmtoPixels = b * 37.8;
                px.value = cmtoPixels.toFixed(2);
                break;
            case 'mm':
                let mmtoPixels = b * 3.78;
                px.value = mmtoPixels.toFixed(2);
                break;
            case 'Q':
                let qtoPixels = b * 0.945;
                px.value = qtoPixels.toFixed(2);
                break;
            case 'in':
                let intoPixels = b * 96;
                px.value = intoPixels.toFixed(2);
                break;
            case 'pc':
                let pctoPixels = b * 16;
                px.value = pctoPixels.toFixed(2);
                break;
            case 'pt':
                let ptToPixels = b * 1.33;
                px.value = ptToPixels.toFixed(2);
                break;
        }
    }

}