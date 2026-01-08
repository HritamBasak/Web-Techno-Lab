const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Filled Rectangle
ctx.fillStyle = "lightblue";
ctx.fillRect(20, 20, 120, 80);

// Filled Circle
ctx.beginPath();
ctx.arc(250, 70, 40, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

// Straight Line
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Text
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("HTML5 Canvas", 300, 200);
