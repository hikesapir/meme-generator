'use strict';
const STORAGE_KEY = 'memesDB';

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
            y: 50,
            isDrag:false
        }
    ]
}
var gImgs;
var gSavedMemes=[];
var gImgId = 0;


function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.txt = txt;
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(color) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.color = color
}

function setFontSize(diff) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
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
    gMeme.selectedLineIdx++
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0;
}

function init() {
    _createImgs();
}

function getImgById(id) {
    return gImgs[id]
}

function getImgs() {
    const imgs = gImgs;
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

function setRendomMeme() {
    const rendomId = getRandomInt(0, gImgs.length - 1)
    console.log(rendomId);
    gMeme.selectedImgId = rendomId
    gMeme.lines[0].txt= getRendomSentence();
}

function getRendomSentence() {
    const memesSentences = [
        'I never eat falafel',
        'DOMS DOMS EVERYWHERE',
        'Stop Using i in for loops',
        'Armed in knowledge',
        'Js error "Unexpected String"',
        'One does not simply write js',
        'I`m a simple man i see vanilla JS, i click like!',
        'JS, HTML,CSS?? Even my momma can do that',
        'May the force be with you',
        'I know JS',
        'JS Where everything is made up and the rules dont matter',
        'Not sure if im good at programming or good at googling',
        'But if we could',
        'JS what is this?',
        'Write hello world , add to cv 7 years experienced',
    ];
    var idx = getRandomInt(0, memesSentences.length - 1)
    return memesSentences[idx]
}

function getSavedMemes(){
    return gSavedMemes;
}

function saveMeme(data){
    console.log('saveMeme wokes too');
    gSavedMemes.push(data)
    _saveToStorge(STORAGE_KEY,gSavedMemes)
}

function _saveToStorge(key,data) {
    saveToStorage(key, data);
}

function getLineByIdx(idx){
    return gMeme.lines[idx]
}