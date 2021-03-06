$(document).ready(function(){
    var myCanvas = document.getElementById('myCanvas');

    var ctx = myCanvas.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);

    // Phone Back Platform
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(15, 15, 290, 540);
    ctx.stroke();
    grd.addColorStop(0, "#666666");
    grd.addColorStop(1, "#cccccc");
    ctx.fillStyle = grd;
    ctx.fillRect(15, 15, 290, 540)

    // Phone Camera Ring
    ctx.beginPath();
    ctx.arc(150,120,55,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="white";
    ctx.fill();

    // Phone Camera background color
    ctx.beginPath();
    ctx.arc(150,120,50,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#191919";
    ctx.fill();

    // Phone Camera lens color
    ctx.beginPath();
    ctx.arc(150,120,10,0,2*Math.PI);
    ctx.fillStyle="gray";
    ctx.fill();

    // Phone Camera lens Reflection color
    ctx.beginPath();
    ctx.arc(140,105,10,9,1.8*Math.PI);
    ctx.fillStyle="white";
    ctx.fill();

    // Phone brand name color
    ctx.font = "20px arial";
    ctx.fillStyle = "#333";
    ctx.fillText("NOKIA", 120, 210);

    // Dummy function, not working
    $("#brandNameColor").change(function(){
        console.log($(this).val())
    });
})