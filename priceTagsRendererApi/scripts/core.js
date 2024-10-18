
function pxTomm(px) {
    if (!window.posSavedMmHeight) {
        var element = document.getElementById('my_mm');
        element.style.display = 'block';
        window.posSavedMmHeight = element.getBoundingClientRect().height;
        element.style.display = 'none';
    }
    //небольшая погрешность из-за особенностей перевода мм в PX браузером
    return (px - 0.005) / (window.posSavedMmHeight / 100);
}
function pxTopt(px) {
    if (!window.posSavedPtHeight) {
        var element = document.getElementById('my_pt');
        element.style.display = 'block';
        window.posSavedPtHeight = element.getBoundingClientRect().height;
        element.style.display = 'none';
    }
    //небольшая погрешность из-за особенностей перевода pt в PX браузером
    return (px - 0.005) / (window.posSavedPtHeight / 100);
}
const FontSizeNums = {};
var iters = [];
function getFontSizeNum(fontSize) {
    return FontSizeNums[fontSize] || (FontSizeNums[fontSize] = fontSize.replace('pt', '') * 1);
}
function notSmallerThanMin(fontSize, minSizeNum) {
    if (!minSizeNum) { return fontSize; }
    return fontSize < minSizeNum ? minSizeNum : fontSize;
}
function getNodeScrollHeight(node) {
    var n = getNodeForCalculation(node);
    if (n) {
        return normilizeRoundedPx(n.scrollHeight);
    }
    return 0;
}
function getNodeFactHeight(node) {
    var n = getNodeForCalculation(node);
    if (n) {
        return n.getBoundingClientRect().height;
    }
    return 0;
}
function normilizeRoundedPx(px) {
    //scrollWidth - это округленное значение, поэтому вычитаем 0.5
    //что бы получить значение равное или меньшее фактического на 0.5
    //например 9.75 -> 10 -> 9.5
    //например 9.5 -> 10 -> 9.5
    //например 9.49 -> 9 -> 8.5
    //то есть максимальное отклонение от фактического значения в меньшую сторону будет 0.99
    //отклонения в большую сторону нет
    return px - 0.5;
}
function getNodeScrollWidth(node) {
    var n = getNodeForCalculation(node);
    if (n) {
        return normilizeRoundedPx(n.scrollWidth);
    }
    return 0;
}
function getNodeForCalculation(node) {
    if (node) {
        if (node.children.length > 0) {
            return node.children[0];
        }
        return node;
    }
    return null;
}
function doResizeIteration(node, actual, limitH, limitW, minSize, maxSize) {
    if (node.style.fontSize === minSize) return;
    let fontSizeInPt = node.style.fontSize.replace('pt', '');
    let percDif = ((actual.h - limitH) / limitH);
    if (percDif > 0.05) {
        let multiplier = 0.9;
        if (percDif > 3) { multiplier = 0.60; } else
            if (percDif > 1) { multiplier = 0.645; } else
                if (percDif > 0.7) { multiplier = 0.68; } else
                    if (percDif > 0.6) { multiplier = 0.75; } else
                        if (percDif > 0.40) { multiplier = 0.8; } else { multiplier = 0.85; }
        node.style.fontSize = notSmallerThanMin(Math.min(fontSizeInPt - maxSize * 0.1, fontSizeInPt * multiplier), minSize) + 'pt';
    } else {
        node.style.fontSize = notSmallerThanMin(fontSizeInPt - maxSize * 0.1, minSize) + 'pt';
    }
    return getActualSize(node);
}

function getActualSize(node) {
    return { h: pxTomm(getNodeScrollHeight(node)), w: pxTomm(getNodeScrollWidth(node)) };
}
function fixFontSize(callback) {
    const startDate = new Date();
    const maxIterationCount = 5;
    console.log('Fix font size started');
    document.querySelectorAll('[auto-font-size]').forEach(node => {
        var limitH = parseFloat(node.style.height.replace('mm', ''));
        var limitW = parseFloat(node.style.width.replace('mm', ''));
        var actual = getActualSize(node);
        let minSize = node.getAttribute('auto-font-size');
        let iter = 0;
        while (actual.h > limitH || actual.w > limitW) {
            if (iter > maxIterationCount) {
                //set min font size to a node
                node.style.fontSize = minSize;
                actual.h = pxTomm(getNodeFactHeight(node));
                actual.w = pxTomm(getNodeScrollWidth(node));
                break;
            }
            iter++;
            actual = doResizeIteration(node, actual, limitH, limitW, getFontSizeNum(minSize), getFontSizeNum(node.style.fontSize));
        }
        iters.push(iter);
        if (actual.h > limitH) {
            node.style.lineHeight = '0.98';
        } else if (actual.w > limitW) {
            node.style.wordWrap = 'break-word';
            var actual = getActualSize(node);
            actual = doResizeIteration(node, actual, limitH, limitW, minSize);
        }
    });

    const endDate = new Date();
    console.log('fixFontSize finished: ' + (endDate - startDate));
    return callback();
}


function renderBarCodes(callback) {
    const startDate = new Date();
    console.log('Bar codes render started');
    document.querySelectorAll('[bwipjs-apply]').forEach(node => {
        let options = {};
        node.getAttributeNames().forEach(attr => {
            if (attr.indexOf('bwip-') == 0) {
                options[attr.replace('bwip-', '')] = node.getAttribute(attr);
            }
        });
        bwipjs.toCanvas(node, options);
    });

    const endDate = new Date();
    console.log('Bar codes rendered: ' + (endDate - startDate));
    return callback();
}