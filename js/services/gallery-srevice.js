'use strict';
const STORAGE_KEY_images = 'imagesDB';

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 14 }
var gImgs = [];
var gImgId = 0;

function updateKeywords(keyword) {
    const keywords = getKeywordSearchCountMap();
    for (var key in keywords) {
        if (key === keyword) {
            gKeywordSearchCountMap[key] += 2;
            return
        } 
    }
    
    gKeywordSearchCountMap[keyword] = 10;


}

function getKeywordSearchCountMap() {
    return gKeywordSearchCountMap;
}

function _createImgs() {
    gImgs = loadFromStorage(STORAGE_KEY_images);

    if (!gImgs) {

        gImgs = [
            _createImg(['all', 'movie']),
            _createImg(['all', 'trump', 'funny', 'president']),
            _createImg(['all', 'animal', 'cute', 'dog']),
            _createImg(['all', 'animal', 'cute', 'baby', 'dog']),
            _createImg(['all', 'animal', 'cat']),
            _createImg(['all', 'baby', 'funny']),
            _createImg(['all', 'tv', 'funny']),
            _createImg(['all', 'cute', 'baby']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'baby', 'funny', 'cute']),
            _createImg(['all', 'obama', 'funny', 'president']),
            _createImg(['all', 'funny']),
            _createImg(['all', 'tv']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'putin', 'president']),
            _createImg(['all', 'animal', 'dog']),
            _createImg(['all', 'funny']),
            _createImg(['all', 'funny']),
            _createImg(['all', 'freedom']),
            _createImg(['all', 'movie']),
            _createImg(['all', 'trump', 'funny']),
            _createImg(['all', 'tv', 'funny']),
        ]
    }

    saveToStorage(STORAGE_KEY_images, gImgs);

}

function _createImg(keywords, imgUrl = 0) {
    if (!gImgs) {
        var imgId = gImgId++;
    } else imgId = gImgs[gImgs.length - 1].id + 1;
    const image = {
        id: imgId,
        url: `imgs/meme-imgs/${imgId}.jpg`,
        keywords
    }
    if (imgUrl !== 0) image.url = imgUrl;

    return image
}

function getImgs(filterBy) {
    if (filterBy === 'ALL') return gImgs;
    return gImgs.filter(img =>
        img.keywords.some(keyword => keyword === filterBy)
    )
}

function getImgById(id) {
    return gImgs[id];
}

function addImage(keywords, imgUrl = 0) {
    const image = _createImg(keywords, imgUrl);
    gImgs.push(image);
    saveToStorage(STORAGE_KEY_images, gImgs);
}

function loadImageFromInput(ev) {
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        // Render on canvas
        img.src = event.target.result
        addImage('my-images', img.src)
        var imgId = gImgs.length - 1
        onImgSelect(imgId);
    }
    reader.readAsDataURL(ev.target.files[0])
}