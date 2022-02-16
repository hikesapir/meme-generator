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
            color: 'red'
        }
    ]
}
var gImgs;
var gImgId = 0;


function getMeme(){
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt;
}

function setMeme(imgId){
    gMeme.selectedImgId=imgId
}


function init() {
    _createImgs();
}

function getImg(id){
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
