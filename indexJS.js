function deletee() {
    document.getElementById("myCanvas").style.color = "white";


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

//4 times because alpha just decreases 4 times
for (i = 0; i <= 3; i++) {
     ctx.strokeStyle = "#FFFFFF";
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
   

}
var x = document.getElementById("myAudio");


function playsound() {
    x.play();


}




function stopsound() {
    x.pause();


}



function draww() {
    document.getElementById("demotxt").innerHTML = "Paragraph changed.";


    var c = document.getElementById("myCanvas");
  //  var ctx = c.getContext("2d");
   var ctx =document.getCSSCanvasContext("2d", "mybackground", 100, 100);/*https://filosophy.org/code/using-html5-canvas-to-make-a-generative-background/*/  ctx.strokeStyle = "#000000";
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}


draww();