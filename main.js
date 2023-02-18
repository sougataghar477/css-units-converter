const rem = document.querySelector(".rem");
const remBox = document.querySelector(".remBox");
const assumption = document.querySelector(".assumption");
const middleInput = document.querySelector(".middle-input");
const selector = document.querySelector(".selector");
const bottomselector = document.querySelector(".bottomselector");
const bottomInput = document.querySelector(".bottom-input");
//new 
rem.addEventListener("input", calculateBasedonRem)
selector.addEventListener("change", handleMidSelector);
middleInput.addEventListener("input", handleMidSelector);
bottomselector.addEventListener("change", handleMidSelector);
function handleMidSelector(a) {

    let conversion;
    conversion = typeof a === "string" ? a : selector.value + 'to' + bottomselector.value;
    if (selector.value === "ch" || bottomselector.value === "ch") {
        remBox.style.display = "flex"
    }
    else {
        remBox.style.display = "none"
    }
    //  selector.value === "ch" ||  bottomselector.value === "ch"?rem.disabled=false:rem.disabled=true;
    if (middleInput.value) {
        let b = Number(middleInput.value);
        switch (conversion) {
            case 'chtopx':
                let chtopx = Number(rem.value) / 2 * b;
                bottomInput.value = Number(rem.value) / 2 * b.toFixed(2);
                break;
            case 'chtocm':
                let chtocm = Number(rem.value) / 2 * b / 37.8;
                bottomInput.value = chtocm.toFixed(2);
                break;
            case 'chtomm':
                let chtomm = Number(rem.value) / 2 * b / 37.8 * 10;
                bottomInput.value = chtomm.toFixed(2);
                break;
            case 'chtoQ':
                let chtoQ = Number(rem.value) / 2 * b / 37.8 * 40;
                bottomInput.value = chtoQ.toFixed(2);
                break;
            case 'chtoin':
                let chtoin = Number(rem.value) / 2 * b / 96;
                bottomInput.value = chtoin.toFixed(2);
                break;
            case 'chtopc':
                let chtopc = Number(rem.value) / 2 * b / 16;
                bottomInput.value = chtopc.toFixed(2);
                break;
            case 'chtopt':
                let chtopt = Number(rem.value) / 2 * b / 1.33;
                bottomInput.value = chtopt.toFixed(2);
                break;
            case 'pxtoch':
                let pxtoCh = b / Number(rem.value) * 2;
                bottomInput.value = pxtoCh.toFixed(2);
                break;
            case 'pxtocm':
                let pxtoCm = b / 37.8;
                bottomInput.value = pxtoCm.toFixed(2);
                break;
            case 'pxtomm':
                let pxtomm = b / 37.8 * 10;
                bottomInput.value = pxtomm.toFixed(2);
                break;
            case 'pxtoQ':
                let pxtoQ = b / 37.8 * 10 * 4;
                bottomInput.value = pxtoQ.toFixed(2);
                break;
            case 'pxtoin':
                let pxtoin = b / 96;
                bottomInput.value = pxtoin.toFixed(2);
                break;
            case 'pxtopc':
                let pxtopc = b / 16;
                bottomInput.value = pxtopc.toFixed(2);
                break;
            case 'pxtopt':
                let pxtopt = b / 1.33;
                bottomInput.value = pxtopt.toFixed(2);
                break;
            case 'cmtopx':
                let cmtopx = b * 37.8;
                bottomInput.value = cmtopx.toFixed(2);
                break;
            case 'cmtoch':
                let cmtoch = b * 37.8 / Number(rem.value) * 2;
                bottomInput.value = cmtoch.toFixed(2);
                break;
            case 'cmtomm':
                let cmtomm = b * 10;
                bottomInput.value = cmtomm.toFixed(2);
                break;
            case 'cmtoQ':
                let cmtoQ = b * 40;
                bottomInput.value = cmtoQ.toFixed(2);
                break;
            case 'cmtoin':
                let cmtoin = b * 0.39;
                bottomInput.value = cmtoin.toFixed(2);
                break;
            case 'cmtopc':
                let cmtopc = b * 2.38;
                bottomInput.value = cmtopc.toFixed(2);
                break;
            case 'cmtopt':
                let cmtopt = b * 28.57;
                bottomInput.value = cmtopt.toFixed(2);
                break;
            case 'mmtopx':
                let mmtopx = b * 3.78;
                bottomInput.value = mmtopx.toFixed(2);
                break;
            case 'mmtoch':
                let mmtoch = b * 37.8 / Number(rem.value) * .2;
                bottomInput.value = mmtoch.toFixed(2);
                break;
            case 'mmtoQ':
                let mmtoQ = b * 4;
                bottomInput.value = mmtoQ.toFixed(2);
                break;
            case 'mmtoin':
                let mmtoin = b * 0.0393701;
                bottomInput.value = mmtoin.toFixed(2);
                break;
            case 'mmtopc':
                let mmtopc = b * .238;
                bottomInput.value = mmtopc.toFixed(2);
                break;
            case 'mmtopt':
                let mmtopt = b * 2.857;
                bottomInput.value = mmtopt.toFixed(2);
                break;
            case 'Qtopx':
                let qtopx = b * 0.945;
                bottomInput.value = qtopx.toFixed(2);
                break;
            case 'Qtoch':
                let qtoch = b * 37.8 / Number(rem.value) * 0.05;
                bottomInput.value = qtoch.toFixed(2);
                break;
            case 'Qtocm':
                let qtocm = b * .025;
                bottomInput.value = qtocm.toFixed(3);
                break;
            case 'Qtomm':
                let qtomm = b * .25;
                bottomInput.value = qtomm.toFixed(3);
                break;
            case 'Qtoin':
                let qtoin = b / 101.6;
                bottomInput.value = qtoin.toFixed(3);
                break;
            case 'Qtopc':
                let qtopc = b / 16.93;
                bottomInput.value = qtopc.toFixed(3);
                break;
            case 'Qtopt':
                let qtopt = b / 16.93 / 12;
                bottomInput.value = qtopt.toFixed(3);
                break;
            case 'intopx':
                let intopx = b * 96;
                bottomInput.value = intopx.toFixed(2);
                break;
            case 'intoch':
                let intoch = b / Number(rem.value) * 2 * 96;
                bottomInput.value = intoch.toFixed(2);
                break;
            case 'intocm':
                let intocm = b * 2.54;
                bottomInput.value = intocm.toFixed(2);
                break;
            case 'intomm':
                let intomm = b * 25.4;
                bottomInput.value = intomm.toFixed(2);
                break;
            case 'intoQ':
                let intoq = b * 25.4 * 4;
                bottomInput.value = intoq.toFixed(2);
                break;
            case 'intopc':
                let intopc = b * 6;
                bottomInput.value = intopc.toFixed(2);
                break;
            case 'intopt':
                let intopt = b * 72;
                bottomInput.value = intopt.toFixed(2);
                break;
            case 'pctopx':
                let pctopx = b * 16;
                bottomInput.value = pctopx.toFixed(2);
                break;
            case 'pctoch':
                let pctoch = b / Number(rem.value) * 2 * 16;
                bottomInput.value = pctoch.toFixed(2);
                break;
            case 'pctocm':
                let pctocm = b * 1 / 6 * 2.54;
                bottomInput.value = pctocm.toFixed(2);
                break;
            case 'pctomm':
                let pctomm = b * 1 / 6 * 2.54 * 10;
                bottomInput.value = pctomm.toFixed(2);
                break;
            case 'pctoQ':
                let pctoq = b * 1 / 6 * 2.54 * 40;
                bottomInput.value = pctoq.toFixed(2);
                break;
            case 'pctoin':
                let pctoin = b * 1 / 6;
                bottomInput.value = pctoin.toFixed(2);
                break;
            case 'pctopt':
                let pctopt = b * 12;
                bottomInput.value = pctopt.toFixed(2);
                break;
            case 'pttopx':
                let pttopx = b * 96 / 72;
                bottomInput.value = pttopx.toFixed(3);
                break;
            case 'pttoch':
                let pttoch = b / Number(rem.value) * 2 * 96 / 72;
                bottomInput.value = pttoch.toFixed(2);
                break;
            case 'pttocm':
                let pttocm = b * .03527777777;
                bottomInput.value = pttocm.toFixed(2);
                break;
            case 'pttomm':
                let pttomm = b * .03527777777 * 10;
                bottomInput.value = pttomm.toFixed(2);
                break;
            case 'pttoQ':
                let pttoQ = b * .03527777777 * 40;
                bottomInput.value = pttoQ.toFixed(2);
                break;
            case 'pttoin':
                let pttoin = b * 1 / 72;
                bottomInput.value = pttoin.toFixed(2);
                break;
            case 'pttopc':
                let pttopc = b * 1 / 12;
                bottomInput.value = pttopc.toFixed(2);
                break;

        }
    }
    if (middleInput.value === "") {
        bottomInput.value = "";
    }
}
function calculateBasedonRem(e) {
    let conversion = "";
    if (selector.value === "ch" && bottomselector.value !== "ch") {
        conversion = selector.value + 'to' + bottomselector.value;
    }
    if (selector.value !== "ch" && bottomselector.value === "ch") {
        conversion = selector.value + 'to' + bottomselector.value;
    }
    console.log(conversion)
    handleMidSelector(conversion)
}