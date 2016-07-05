/**
 * Created by pten on 05/07/16.
 */
$(function () {
    var colour = $("body").data("colour");
    console.log(colour);
    $(".print_instructions").append("<h2>Print instructions</h2>\
    <ul>\
        <li>Pages 1-4</li>\
        <li>Paper size: A4</li>\
        <li>2 pages per size</li>\
        <li>double sided flip on short edge</li>\
        <li>include background/graphics or print on coloured paper ("+colour+")</li>\
        <li><button onclick='toggleBGColour()'>Toggle colour</button></li>\
    </ul>");
});



function toggleBGColour() {
    var colour = $("body").data("colour");

    var element = document.body;
    if (element.className !== 'coloured') {
        element.className = 'coloured';
        element.style.backgroundColor = colour;
    } else {
        element.style.backgroundColor = "";
        element.className = '';
    }
}