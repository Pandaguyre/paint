canvas = document.getElementById("myCanvas");
mouseevent = "";
ctx = canvas.getContext("2d");
color = "black";
width = 2;
var last_x;
var last_y;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown() {
color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseevent = "mousedown";



}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave() {
 mouseevent= "mouseleave";



}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup() {
 mouseevent= "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    current_x =e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if(mouseevent == "mousedown" ) {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last_position_of_x_and_y_coordinates=" + last_x +"," + last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current_position_of_x_and_y_coordinates=" + current_x +"," + current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    }
    last_x = current_x;
    last_y = current_y;

}

function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}
