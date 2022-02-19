'use strict';


function onInit() {
    addListeners();
    init();
    renderGallery();
}

function onHomepage() {
    renderGallery();
    displayHomepage();
}

function onRendomMeme() {
    resetMemeData()
    setRendomMeme();
    renderImgMeme()
    displayEditorPage()
}

function onDisplaySavedGallery() {
    renderSavedGallery()
    displayHomepage()
}

function displayHomepage() {
    displayAboutBtn()
    document.querySelector('.homepage').classList.remove('hidden')
    document.querySelector('.meme-editor').classList.add('hidden')
}

function displayEditorPage() {
    hiddenAboutBtn()
    document.querySelector('.homepage').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
    document.querySelector('.share').classList.add('hidden')

}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onImgInput(ev) {
    loadImageFromInput(ev)

}

function hiddenAboutBtn() {
    document.querySelector('.about-btn').style.display = 'none'
}
function displayAboutBtn() {
    document.querySelector('.about-btn').style.display = 'block'
}

