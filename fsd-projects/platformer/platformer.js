$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms createPlatform(x,y,width,height,"color"); at least 5

      //layout test
    createPlatform(200,200,200,20,"purple");
    createPlatform(1000,200,200,20,"purple");
    createPlatform(100,400,200,20,"purple");
    createPlatform(1100,400,200,20,"purple");
    createPlatform(200,600,200,20,"purple");
    createPlatform(1000,600,200,20,"purple");

    createPlatform(50,700,100,10,"hotpink");
    createPlatform(400,500,150,10,"hotpink");
    createPlatform(500,100,100,10,"hotpink");
    createPlatform(450,355,50,10,"hotpink");
    createPlatform(500,300,50,10,"hotpink");

    createPlatform(660,100,75,10,"hotpink",600,725,2);

    createPlatform(1250,700,100,10,"hotpink");
    createPlatform(850,500,150,10,"hotpink");
    createPlatform(800,100,100,10,"hotpink");
    createPlatform(900,355,50,10,"hotpink");
    createPlatform(850,300,50,10,"hotpink");

      // bad platforms
    createBadPlatform(600,150,200,10,"red");
    createBadPlatform(1200,200,200,20,"red");
    createBadPlatform(900,400,200,20,"red");

      // silhouette bottom to top
    createPlatform(510,740,380,10,"black");
    createPlatform(500,710,400,30,"black");
    createPlatform(510,700,380,10,"black");
    createPlatform(520,690,360,10,"black");
    createPlatform(520,690,360,10,"black");
    createPlatform(580,680,240,10,"black");
    createPlatform(590,670,220,10,"black");
    createPlatform(600,660,200,10,"black");
    createPlatform(610,650,180,10,"black");
    createPlatform(620,640,160,10,"black");
    createPlatform(630,630,140,10,"black");
    createPlatform(640,620,120,10,"black");
    createPlatform(620,610,160,10,"black");
    createPlatform(610,600,180,10,"black");
    createPlatform(600,590,200,10,"black");
    createPlatform(590,530,220,60,"black");
    createPlatform(600,500,200,30,"black");
    createPlatform(610,490,180,10,"black");
    createPlatform(620,480,160,10,"black");
    createPlatform(630,460,140,20,"black");
    createPlatform(640,440,120,20,"black");

    createPlatform(650,430,20,10,"black");
    createPlatform(690,430,20,10,"black");
    createPlatform(730,430,20,10,"black");

    createPlatform(680,420,40,10,"black");

    createPlatform(640,410,10,10,"black");
    createPlatform(660,410,80,10,"black");
    createPlatform(750,410,10,10,"black");

    createPlatform(610,360,180,50,"black");
    createPlatform(620,350,160,10,"black");
    createPlatform(630,310,140,40,"black");
    createPlatform(640,290,120,20,"black");
    createPlatform(650,280,100,10,"black");
    createPlatform(660,270,80,10,"black");
    createPlatform(670,260,60,10,"black");
    createPlatform(690,250,20,10,"black");

      // side 1 full
    createPlatform(580,370,30,30,"black");
    createPlatform(570,380,10,10,"black");
    createPlatform(530,380,30,10,"black");
    createPlatform(560,390,10,30,"black");
    createPlatform(560,350,10,30,"black");
    createPlatform(550,370,10,10,"black");
    createPlatform(550,390,10,10,"black");
    createPlatform(540,360,10,10,"black");
    createPlatform(540,400,10,10,"black");

    createPlatform(610,370,10,30,"white");
    createPlatform(580,380,30,10,"white");
    createPlatform(560,380,10,10,"white");

      // side 2 full
    createPlatform(790,370,30,30,"black");
    createPlatform(820,380,10,10,"black");
    createPlatform(840,380,30,10,"black");
    createPlatform(830,390,10,30,"black");
    createPlatform(830,350,10,30,"black");
    createPlatform(840,370,10,10,"black");
    createPlatform(840,390,10,10,"black");
    createPlatform(850,360,10,10,"black");
    createPlatform(850,400,10,10,"black");

    createPlatform(780,370,10,30,"white");
    createPlatform(790,380,30,10,"white");
    createPlatform(830,380,10,10,"white");

      // base color yellow bottom to top
    createPlatform(520,740,80,10,"yellow");
    createPlatform(510,730,40,10,"yellow");
    createPlatform(510,720,30,10,"yellow");
    createPlatform(510,710,20,10,"yellow");

    createPlatform(800,740,80,10,"yellow");
    createPlatform(850,730,40,10,"yellow");
    createPlatform(860,720,30,10,"yellow");
    createPlatform(870,710,20,10,"yellow");

    createPlatform(660,560,20,10,"yellow");
    createPlatform(650,550,20,10,"yellow");
    createPlatform(640,480,20,70,"yellow");
    createPlatform(650,460,20,20,"yellow");

    createPlatform(720,560,20,10,"yellow");
    createPlatform(730,550,20,10,"yellow");
    createPlatform(740,480,20,70,"yellow");
    createPlatform(730,460,20,20,"yellow");

      // base color white bottom to top
    createPlatform(600,730,20,10,"white");
    createPlatform(550,710,70,20,"white");
    createPlatform(580,690,30,20,"white");
    createPlatform(610,700,20,10,"white");
    createPlatform(620,650,20,50,"white");
    createPlatform(600,670,20,20,"white");
    createPlatform(640,660,10,10,"white");
    createPlatform(650,610,10,50,"white");
    createPlatform(640,640,10,10,"white");
    createPlatform(660,630,10,10,"white");
    createPlatform(660,610,10,10,"white");

    createPlatform(630,730,170,10,"white");
    createPlatform(630,710,10,20,"white");
    createPlatform(640,700,10,20,"white");
    createPlatform(650,710,200,20,"white");
    createPlatform(650,690,170,20,"white");
    createPlatform(650,670,10,20,"white");
    createPlatform(660,660,30,20,"white");
    createPlatform(670,670,130,20,"white");
    createPlatform(690,650,90,20,"white");
    createPlatform(670,640,10,20,"white");
    createPlatform(680,610,70,40,"white");
    createPlatform(750,640,10,10,"white");
    createPlatform(680,600,10,10,"white");
    createPlatform(700,600,30,10,"white");
    createPlatform(680,590,40,10,"white");
    createPlatform(690,580,20,10,"white");

    createPlatform(620,600,30,10,"white");
    createPlatform(610,590,60,10,"white");
    createPlatform(600,580,80,10,"white");
    createPlatform(600,570,60,10,"white");
    createPlatform(680,570,10,10,"white");
    createPlatform(600,560,50,10,"white");
    createPlatform(600,550,40,10,"white");
    createPlatform(600,540,30,10,"white");
    createPlatform(610,500,20,40,"white");
    createPlatform(620,490,10,10,"white");

    createPlatform(750,600,30,10,"white");
    createPlatform(730,590,60,10,"white");
    createPlatform(720,580,80,10,"white");
    createPlatform(740,570,60,10,"white");
    createPlatform(710,570,10,10,"white");
    createPlatform(750,560,50,10,"white");
    createPlatform(760,550,40,10,"white");
    createPlatform(770,540,30,10,"white");
    createPlatform(770,500,20,40,"white");
    createPlatform(770,490,10,10,"white");

    createPlatform(680,540,10,10,"white");
    createPlatform(670,520,10,20,"white");
    createPlatform(720,500,10,30,"white");
    createPlatform(670,480,10,30,"white");
    createPlatform(690,530,30,10,"white");
    createPlatform(680,510,30,10,"white");
    createPlatform(690,490,30,10,"white");
    createPlatform(720,480,10,10,"white");
    createPlatform(680,470,30,10,"white");
    createPlatform(710,460,10,10,"white");
    createPlatform(700,450,10,10,"white");

    createPlatform(720,450,10,10,"white");
    createPlatform(670,450,10,10,"white");
    createPlatform(730,440,20,10,"white");
    createPlatform(650,440,20,10,"white");

    createPlatform(680,410,40,10,"white");
    createPlatform(660,400,80,10,"white");
    createPlatform(670,360,10,30,"white");
    createPlatform(690,380,30,20,"white");
    createPlatform(700,370,20,10,"white");
    createPlatform(700,360,10,10,"white");
    createPlatform(730,350,10,20,"white");

    createPlatform(630,390,10,10,"white");
    createPlatform(630,350,20,40,"white");
    createPlatform(640,340,10,10,"white");
    createPlatform(650,320,10,30,"white");
    createPlatform(660,310,10,20,"white");
    createPlatform(670,300,10,20,"white");
    createPlatform(680,310,10,10,"white");
    createPlatform(680,320,40,20,"white");//
    createPlatform(680,340,20,10,"white");
    createPlatform(690,350,10,10,"white");
    createPlatform(710,340,20,10,"white");
    createPlatform(710,350,10,10,"white");
    createPlatform(760,390,10,10,"white");//
    createPlatform(750,350,20,40,"white");
    createPlatform(750,340,10,10,"white");
    createPlatform(740,320,10,30,"white");
    createPlatform(730,310,10,20,"white");
    createPlatform(720,300,10,20,"white");
    createPlatform(710,310,10,10,"white");

    createPlatform(640,310,10,10,"white");
    createPlatform(750,310,10,10,"white");
    createPlatform(650,290,10,20,"white");
    createPlatform(740,290,10,20,"white");
    createPlatform(660,280,10,20,"white");
    createPlatform(730,280,10,20,"white");
    createPlatform(670,270,20,20,"white");
    createPlatform(710,270,20,20,"white");
    createPlatform(690,300,10,10,"white");
    createPlatform(680,290,10,10,"white");
    createPlatform(700,290,20,10,"white");
    createPlatform(690,280,10,10,"white");
    createPlatform(700,270,10,10,"white");
    createPlatform(690,260,10,10,"white");

      // wires
    createPlatform(650,410,10,200,"#ff0000")
    createPlatform(740,410,10,200,"#ff0000")
    createPlatform(660,420,10,10,"#00ff00")
    createPlatform(730,420,10,10,"#00ff00")
    createPlatform(670,420,10,20,"#0000ff")
    createPlatform(720,420,10,20,"#0000ff")

    // TODO 3 - Create Collectables createCollectable("type",x,y,gravity,bounce); at least 3
    createCollectable("database",280,550,1,0);
    createCollectable("database",180,350,1,0);
    createCollectable("database",280,150,1,0);
    createCollectable("database",1080,150,1,0);
    createCollectable("database",1180,350,1,0);
    createCollectable("database",1080,550,1,0);

      // moving collectible
    createCollectable("database",0,200,0,0,480,880,5);
    
    // TODO 4 - Create Cannons createCannon("side",position,delayMILLISECONDS); at least 3
    createCannon("left", 200, 2000);
    createCannon("top", 1100, 2000,48,48);
    createCannon("right", 600, 2000);
    createCannon("bottom", 300, 2000,48,48);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
