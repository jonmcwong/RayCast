//alert("importing FirstTry.js")
var canvas = document.getElementById("GameCanvas");
var ctx = canvas.getContext("2d");
[canvas.width,canvas.height] = [window.innerWidth,window.innerHeight];
//[canvas.width,canvas.height] = [1080,720];
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "black";
ctx.fill();
