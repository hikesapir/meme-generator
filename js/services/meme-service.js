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
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getMemeLines() {
    return gMeme.lines
}

function createLine() {
    const currY = gMeme.lines[gMeme.lines.length - 1].y;
    var nextY = currY + 50;
    if (nextY > gCanvas.clientHeight) nextY = 10
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red',
        x: 50,
        y: nextY,
        isDrag: false
    })
    gMeme.selectedLineIdx++
}

function removeLine() {
    const idxLine = gMeme.selectedLineIdx;
    gMeme.lines.splice(idxLine, 1)
}

function switchLine(idx = -1) {
    if (idx === -1) {
        const currIdxLine = gMeme.selectedLineIdx
        const nextIdxLine = (currIdxLine + 1 < gMeme.lines.length) ? currIdxLine + 1 : 0;
        gMeme.selectedLineIdx = nextIdxLine;
    } else {
        gMeme.selectedLineIdx = idx;
    }
}
