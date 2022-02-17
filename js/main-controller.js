'use strict';


function onInit() {
    addListeners();
    init();
    addCanvasResizeListener();
    renderGallery();
}

function onRendomMeme(){
    setRendomMeme();
    renderMeme()
    toggelHomepage()
}

function onDisplaySavedGallery(){
    renderSavedGallery()
}