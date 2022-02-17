'use strict';
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function onDown(ev) {
    ev.preventDefault()
    const pos = getEvPos(ev)
    console.log(pos);
    console.log('onDown()');
    console.log(isLineClicked(pos));
    if (!isLineClicked(pos)) return
    setLineDrag(true)
    document.body.style.cursor = 'grabbing'
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

function isLineClicked(clickedPos) {

    const memeLine = gMeme.lines[0];
    var xStart = memeLine.x;
    var xEnd = gCtx.measureText(memeLine.txt).width + memeLine.x;
    var yStart = memeLine.y;
    var yEnd = memeLine.y - memeLine.size;
    console.log('sx,sy', xStart, yStart);
    console.log('ex,ey', xEnd, yEnd);
    return (clickedPos.x <= xEnd && clickedPos.x >= xStart && clickedPos.y <= yStart && clickedPos.y >= yEnd)

}

function setLineDrag(isDrag) {
    gMeme.lines[0].isDrag = isDrag
}

function onMove(ev) {
    console.log('onMove()');
    const line = getLineByIdx(0);
    if (line.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - line.x
        const dy = pos.y - line.y
        moveLine(dx, dy, line)
        renderMeme()
    }
}

function moveLine(dx, dy, line) {
    line.x += dx
    line.y += dy
}

function onUp() {
    console.log('onUp()');
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}