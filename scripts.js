

// page height and width

window.addEventListener('resize', function() {

    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;

    const viewportHeight = document.getElementById('viewportHeight');
    const viewportWidth = document.getElementById('viewportWidth');
    viewportHeight.innerHTML = 'Page Heigth: ' + clientHeight;
    viewportWidth.innerHTML = 'Page Width: ' + clientWidth;

});

// object height position

document.addEventListener('scroll', function() {

    const mainSquare = document.getElementById('mainSquare');
    
    const mainSquareTopEdge = mainSquare.getBoundingClientRect().top;
    const mainSquareBottomEdge = mainSquare.getBoundingClientRect().bottom;
    const mainSquareLeftEdge = mainSquare.getBoundingClientRect().left;
    const mainSquareRightEdge = mainSquare.getBoundingClientRect().right;


    const objectTop = document.getElementById('objectTop');
    const objectBottom = document.getElementById('objectBottom');
    const objectLeft = document.getElementById('objectLeft');
    const objectRight = document.getElementById('objectRight');

    objectTop.innerHTML = 'Object Top: ' + Math.round(mainSquareTopEdge);
    objectBottom.innerHTML = 'Object Bottom: ' + Math.round(mainSquareBottomEdge);
    objectLeft.innerHTML = 'Object Left: ' + Math.round(mainSquareLeftEdge);
    objectRight.innerHTML = 'Object Right: ' + Math.round(mainSquareRightEdge);
    
}); 