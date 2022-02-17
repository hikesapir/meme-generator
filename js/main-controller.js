'use strict';


function onInit() {
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