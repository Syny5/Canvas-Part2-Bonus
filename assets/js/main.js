function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.stroke();
    // "E" barre gauche
    ctx.beginPath();
    ctx.moveTo(100, 120);
    ctx.lineTo(100, 380);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "E" haut
    ctx.beginPath();
    ctx.moveTo(100,120);
    ctx.lineTo(180,120);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "E" milieu
    ctx.beginPath();
    ctx.moveTo(100,250);
    ctx.lineTo(180,250);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "E" bas
    ctx.beginPath();
    ctx.moveTo(100,380);
    ctx.lineTo(180,380);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "2" grosse partie - haut
    ctx.beginPath();
    ctx.moveTo(180,120);
    ctx.quadraticCurveTo(680, -150, 140, 450);
    ctx.strokeStyle="#ea4e24";
    ctx.lineWidth=10;
    ctx.stroke();
    // "2"
    ctx.beginPath();
    ctx.moveTo(140, 450);
    ctx.quadraticCurveTo(300,390,300,400);
    ctx.strokeStyle="#ea4e24";
    ctx.lineWidth=10;
    ctx.stroke();
    // "N" barre gauche
    ctx.beginPath();
    ctx.moveTo(406, 120);
    ctx.lineTo(406, 380);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "N" barre droite
    ctx.beginPath();
    ctx.moveTo(600, 120);
    ctx.lineTo(600, 380);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // "N" barre transversale
    ctx.beginPath();
    ctx.moveTo(406, 120);
    ctx.lineTo(600, 380);
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.stroke();
    // Diamant 1 (de gauche à droite puis de haut en bas)
    drawDiamond(670,120,1.5, '#ebebeb');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Diamant 2
    drawDiamond(655,160,1.5, '#dbdadb');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Diamant 3
    drawDiamond(695,160,1.5, '#595656');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Diamant 4
    drawDiamond(670,200,1.5, 'red');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Diamant 5
    drawDiamond(655,240,1.5, '#878787');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Diamant 6
    drawDiamond(695,240,1.5, '#ececec');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Texte part.1
    ctx.font = "40px Times";
    ctx.fillStyle="#8c8c8c";
    ctx.fillText("École du Numérique", 398, 425);
    // Texte part.2
    ctx.font = "40px Times";
    ctx.fillStyle="#8c8c8c";
    ctx.fillText("du Noyonnais", 386, 460);
    // Petit diamant 1
    drawDiamond(720,180,0.5, '#efefef');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Petit diamant 2
    drawDiamond(724,193,0.5, '#a3a3a3');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
    // Petit diamant 3
    drawDiamond(740,186.5,0.4, 'red');
    function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
    };
  }
}
