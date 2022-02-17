'use strict';
const STORAGE_KEY = 'memesDB';

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
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
var gImgs;
var gSavedMemes = [];
var gImgId = 0;


function init() {
    _createImgs();
    _loadSavedMemes();
}

function _createImgs() {
    gImgs = [
        _createImg(['all', 'movie']),
        _createImg(['all', 'trump', 'funny', 'president']),
        _createImg(['all', 'animal', 'cute']),
        _createImg(['all', 'animal', 'cute', 'baby']),
        _createImg(['all', 'animal']),
        _createImg(['all', 'baby', 'funny']),
        _createImg(['all', 'tv show', 'funny']),
        _createImg(['all', 'cute', 'baby']),
        _createImg(['all', 'movie', 'funny']),
        _createImg(['all', 'baby', 'funny', 'cute']),
        _createImg(['all', 'obama', 'funny', 'president']),
        _createImg(['all', 'funny']),
        _createImg(['all', 'tv show']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'trump', 'funny']),
        _createImg(['all', 'funny']),
        _createImg(['all', 'putin', 'president'])
    ]
}

function _createImg(keywords) {
    return {
        id: gImgId,
        url: `imgs/meme-imgs/${gImgId++}.jpg`,
        keywords
    }
}

function getImgs(filterBy) {
    if (filterBy === 'ALL') return gImgs;
    return gImgs.filter(img =>
        img.keywords.some(keyword => keyword === filterBy)
    )

}

function getImgById(id) {
    return gImgs[id]
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

function setRendomMeme() {
    const rendomId = getRandomInt(0, gImgs.length - 1)
    gMeme.selectedImgId = rendomId
    gMeme.lines[0].txt = getRendomSentence();
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

function getSavedMemes() {
    return gSavedMemes;
}

function saveMeme(imgurl) {
    const data = { imgUrl: imgurl, memeData: gMeme }
    gSavedMemes.push(data)
    _saveToStorge(STORAGE_KEY, gSavedMemes)
}

function _saveToStorge(key, data) {
    saveToStorage(key, data);
}

function _loadSavedMemes() {
    if (loadFromStorage(STORAGE_KEY)) gSavedMemes = loadFromStorage(STORAGE_KEY);
    else gSavedMemes = []
}


