'use strict';
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function onDown(ev) {
    ev.preventDefault()
    const pos = getEvPos(ev)
    console.log(pos);
    console.log(getIdxLineBypos(pos));
    const idx = getIdxLineBypos(pos)
    if (idx < 0) return
    switchLine(idx)
    setLineDrag(true)
    document.querySelector('.canvas-container').style.cursor = 'grabbing'
    renderTxtInput()
}

function onMove(ev) {
    const line = getCurrLine()
    if (line.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - line.x
        const dy = pos.y - line.y
        moveLine(dx, dy, line)
        renderImgMeme()
    }
}

function onUp() {
    setLineDrag(false)
    document.querySelector('.canvas-container').style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function getIdxLineBypos(clickedPos) {
    const memeLines = getMemeLines();
    return memeLines.findIndex(memeLine => {
        var xStart = memeLine.x;
        var xEnd = gCtx.measureText(memeLine.txt).width + memeLine.x;
        var yStart = memeLine.y;
        var yEnd = memeLine.y - memeLine.size;
        return (clickedPos.x <= xEnd && clickedPos.x >= xStart && clickedPos.y <= yStart && clickedPos.y >= yEnd)
    })
}

function setLineDrag(isDrag) {
    const memeLine = getCurrLine()
    memeLine.isDrag = isDrag
}

function moveLine(dx, dy, line) {
    line.x += dx
    line.y += dy
}

