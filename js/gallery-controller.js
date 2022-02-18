'use strict';

function renderGallery(filterBy = 'ALL') {
    const imgs = getImgs(filterBy);
    var strHTML = imgs.map(img => {
        return `<img class="img" onclick="onImgSelect(${img.id})" src="imgs/meme-imgs/${img.id}.jpg">`
    })
    document.querySelector('.gallery-container').innerHTML = strHTML.join('');
}

function onImgSelect(imgId) {
    document.querySelector('.share').classList.add('hidden')

    resetMemeData()
    setMemeImg(imgId)
    renderImgMeme()
    displayEditorPage()
}

function renderSavedGallery() {
    const memes = getSavedMemes();
    console.log(memes);
    var strHTML = '';

    if (!memes.length) {
        strHTML = 'No saved meme'
    } else {
        var savedMemeIdx = 0;
        strHTML = memes.map(meme => {
            // console.log(meme.memeData);
            return `<img class="img" onclick="onSavedMemeSelect(${savedMemeIdx++})" src="${meme.imgUrl}">`
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

function onSearch() {
    const filterBy = document.querySelector('.search-input').value.toLowerCase()
    console.log('Filtering By:', filterBy);
    renderGallery(filterBy)
}