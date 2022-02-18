'use strict';
var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');

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

function saveMeme(shareImgUrl) {
    const imgUrl = getMemeImgUrl();
    const data = { shareImgUrl, imgUrl, memeData: gMeme }
    gSavedMemes.push(data)
    console.log(data);
    _saveToStorge(STORAGE_KEY, gSavedMemes)
}

function _saveToStorge(key, data) {
    saveToStorage(key, data);
}

function _loadSavedMemes() {
    if (loadFromStorage(STORAGE_KEY)) gSavedMemes = loadFromStorage(STORAGE_KEY);
    else gSavedMemes = []
}

function getMemeImgUrl() {
    return gCanvas.toDataURL("image/jpeg");
}


function uploadImg(imgurl) {
    const imgDataUrl = imgurl;
    console.log(imgDataUrl);

    console.log("doUploadImg first?");
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    console.log(formData);

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            saveMeme(url)
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

// A function to be called if request succeeds
function onSuccess(uploadedImgUrl) {
    console.log("onSuccess first?");
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    console.log(encodedUploadedImgUrl);
    console.log(uploadedImgUrl);
    document.querySelector('.share').innerHTML = `
    <ahref="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">   
    share
    </a>`
    console.log( document.querySelector('.share'));
    
    document.getElementById('share-btn').classList.remove('hidden')
    console.log( document.querySelector('.share').classList);
}


