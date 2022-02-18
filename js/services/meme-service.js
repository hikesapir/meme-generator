'use strict';
const STORAGE_KEY = 'memesDB';

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text',
            size: 20,
            align: 'left',
            font: 'Impact',
            fillColor: 'white',
            strokeColor: 'black',
            x: 10,
            y: 50,
            isDrag: false
        }
    ]
}
var gSavedMemes = [];


function init() {
    _createImgs();
    _loadSavedMemes();
}

function resetMemeData() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter text',
                size: 20,
                align: 'left',
                font: 'Impact',
                fillColor: 'white',
                strokeColor: 'black',
                x: 10,
                y: 50,
                isDrag: false
            }
        ]
    }
}

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(txt) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.txt = txt;
}

function setTextAlignLine(textAlign) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.align = textAlign;
    setLinePos(textAlign);
}

function setLinePos(textAlign) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    if (textAlign === 'center') {
        memeLine.x = gCanvas.width / 2;
    } else if (textAlign === 'left') {
        memeLine.x = 10;
    } else {
        memeLine.x = gCanvas.width - 10;
    }

}

function setColor(color) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.fillColor = color
}

function setStrokeColor(color) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.strokeColor = color
}

function setFont(val) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.font = val;
}

function setFontSize(diff) {
    if (gMeme.selectedLineIdx < 0 || gMeme.lines.length < 0) return;
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.size += diff
}

function setSavedMeme(savedMeme) {
    gMeme = savedMeme;
}

function getMeme() {
    return gMeme
}

function getCurrLine() {
    if (gMeme.selectedLineIdx < 0) return
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getMemeLines() {
    return gMeme.lines
}

function createLine() {
    if (!gMeme.lines.length) {
        var nextY = 10;
    } else {
        const currY = gMeme.lines[gMeme.lines.length - 1].y;
        var nextY = currY + 50;
        if (nextY > gCanvas.clientHeight) nextY = 10
    }
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red',
        x: 10,
        y: nextY,
        isDrag: false
    })
    gMeme.selectedLineIdx++
}

function removeLine() {
    const idxLine = gMeme.selectedLineIdx;
    gMeme.lines.splice(idxLine, 1)
}

function switchLine(idx = -2) {
    if (idx === -2) {
        const currIdxLine = gMeme.selectedLineIdx
        const nextIdxLine = (currIdxLine + 1 < gMeme.lines.length) ? currIdxLine + 1 : 0;
        gMeme.selectedLineIdx = nextIdxLine;
    } else {
        gMeme.selectedLineIdx = idx;
    }
}

function getMarker() {
    if (gMeme.selectedLineIdx < 0 || gMeme.lines.length < 0) return;
    var line = getMemeLines()[gMeme.selectedLineIdx];
    return {
        x: 2,
        y: line.y - line.size - 1,
        width: gCanvas.width - 4,
        height: line.size + 5,
    };
} 
