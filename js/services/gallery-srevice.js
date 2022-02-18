'use strict';
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs;
var gImgId = 0;

function _createImgs() {
    gImgs = [
        _createImg(['all', 'movie']),
        _createImg(['all', 'trump', 'funny', 'president']),
        _createImg(['all', 'animal', 'cute', 'dog']),
        _createImg(['all', 'animal', 'cute', 'baby', 'dog']),
        _createImg(['all', 'animal', 'cat']),
        _createImg(['all', 'baby', 'funny']),
        _createImg(['all', 'tv show', 'funny']),
        _createImg(['all', 'cute', 'baby']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'baby', 'funny', 'cute']),
        _createImg(['all', 'obama', 'funny', 'president']),
        _createImg(['all', 'funny']),
        _createImg(['all', 'tv show']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'putin', 'president']),
        _createImg(['all', 'animal','dog']),
        _createImg(['all', 'funny']),
        _createImg(['all', 'funny']),
        _createImg(['all', 'freedom']),
        _createImg(['all', 'movie']),
        _createImg(['all', 'trump', 'funny']),
        _createImg(['all', 'tv show', 'funny']),

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