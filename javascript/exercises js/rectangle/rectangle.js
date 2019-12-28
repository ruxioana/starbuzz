var rectangle = document.querySelector("div");

function minimize () {
    var computedStyle = window.getComputedStyle(rectangle); /* se ia valoarea in pixeli */
    current = computedStyle.height;
    // console.log(rectangle.style); /* proprietatile sunt goale in style, pentru ca este inline si inca nu am schimbat nimic acolo */
    var n = current.substring(0, current.length - 2); /* substring poate sa extraga o bucatica dintr-un string (0, 5) vine pana la pozitia anterioara lui 5 */
    n = Math.round(b);
    var newHeight = --n + "px";
    rectangle.style.height = --n + "px";
    if(n > 0) {
        setTimeout(minimize, 30);
    }
}

minimize();