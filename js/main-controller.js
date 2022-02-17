'use strict';


function onInit() {
    addListeners();
    init();
    addCanvasResizeListener();
    renderGallery();
}

function onHomepage() {
    toggleMenu()
    renderGallery();
    displayHomepage();
}

function onRendomMeme() {
    toggleMenu()
    resetMemeData()
    setRendomMeme();
    renderMeme()
    displayEditorPage()
}

function onDisplaySavedGallery() {
    toggleMenu()
    renderSavedGallery()
    displayHomepage()
}

function displayHomepage() {
    document.querySelector('.homepage').classList.remove('hidden')
    document.querySelector('.meme-editor').classList.add('hidden')
}

function displayEditorPage() {
    document.querySelector('.homepage').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
}

function toggleMenu(){
    document.body.classList.toggle('menu-open');
}