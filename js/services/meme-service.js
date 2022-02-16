'use strict';
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            x: 10,
            y: 50
        }
    ]
}
var gImgs;
var gImgId = 0;


function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    const memeLine =gMeme.lines[gMeme.selectedLineIdx]
    memeLine.txt = txt;
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(color) {
    const memeLine =gMeme.lines[gMeme.selectedLineIdx]
    memeLine.color = color
}

function setFontSize(diff) {
    const memeLine =gMeme.lines[gMeme.selectedLineIdx]
    memeLine.size += diff
    console.log(gMeme.lines[0].size);
}

function createLine() {
    gMeme.lines.push({
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red',
        x: 50,
        y: 150
    })
}

function switchLine(){
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx===0)? 1:0;
}


function init() {
    _createImgs();
}

function getImgById(id) {
    return gImgs[id]
}

function getImgs() {
    const imgs = gImgs;
    console.log('imgs', gImgs);
    return imgs;
}

function _createImgs() {
    gImgs = [
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny']),
        _createImg(['trump', 'funny'])
    ]
}

function _createImg(keywords) {
    return {
        id: gImgId,
        url: `imgs/meme-imgs/${gImgId++}.jpg`,
        keywords
    }
}
