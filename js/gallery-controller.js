'use strict';

function renderGallery(filterBy = 'ALL') {
    const imgs = getImgs(filterBy);
    var strHTML = '';
    if (!imgs.length) {
        strHTML = 'Not find results';
    } else {
        var strHTML = imgs.map(img => {
            return `<img class="img" onclick="onImgSelect(${img.id})" src="${img.url}">`;
        })
        strHTML = strHTML.join('');

    }
    document.querySelector('.gallery-container').innerHTML = strHTML;
}

function onImgSelect(imgId) {
    document.getElementById('share-btn').style.display = 'none';
    resetMemeData();
    setMemeImg(imgId);
    renderImgMeme();
    displayEditorPage();
}

function renderSavedGallery() {
    const memes = getSavedMemes();
    var strHTML = '';

    if (!memes.length) {
        strHTML = 'No saved meme';
    } else {
        var savedMemeIdx = 0;
        strHTML = memes.map(meme => {
            return `<img class="img" onclick="onSavedMemeSelect(${savedMemeIdx++})" src="${meme.imgUrl}">`;
        })
        strHTML = strHTML.join('');
    }
    document.querySelector('.gallery-container').innerHTML = strHTML;
}

function onSavedMemeSelect(savedMemeIdx) {

    const memes = getSavedMemes();
    const meme = memes[savedMemeIdx];
    onSuccess(meme.shareImgUrl);
    setSavedMeme(meme.memeData);
    renderImgMeme();
    displayEditorPage();
}

function onSearch(val = 0) {
    var filterBy = val
    if (val === 0) {
        filterBy = document.querySelector('.search-input').value.toLowerCase();
    }
    updateKeywords(filterBy);
    document.querySelector('.search-input').value = filterBy;
    console.log(gKeywordSearchCountMap);
    renderGallery(filterBy);
    renderKeywords();
}

function onSubmit(ev) {
    ev.preventDefault();
    onSearch();
}

function renderKeywords() {
    const keywords = getKeywordSearchCountMap();
    var strHTML = '';
    for (var key in keywords) {
        strHTML += `<li class="keyword" style="font-size: ${keywords[key]}px;" onclick="onSearch('${key}')">${key}</li>`;
    }
    document.querySelector('.keywords').innerHTML = strHTML;
}

