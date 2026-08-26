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
    toggleGrid();


    // TODO 2 - Create Platforms createPlatform(x,y,width,height,"color"); at least 5

    //layout test
    createPlatform(200,200,200,20,"purple");
    createPlatform(1000,200,200,20,"purple");
    createPlatform(100,400,200,20,"purple");
    createPlatform(1100,400,200,20,"purple");
    createPlatform(200,600,200,20,"purple");
    createPlatform(1000,600,200,20,"purple");

    createPlatform(50,700,100,10,"pink");
    createPlatform(400,500,150,10,"pink");
    createPlatform(500,100,100,10,"pink");
    createPlatform(450,355,50,10,"pink");
    createPlatform(500,300,50,10,"pink");

    createPlatform(650,150,100,10,"pink");

    createPlatform(1250,700,100,10,"pink");
    createPlatform(850,500,150,10,"pink");
    createPlatform(800,100,100,10,"pink");
    createPlatform(900,355,50,10,"pink");
    createPlatform(850,300,50,10,"pink");

    // TODO 3 - Create Collectables createCollectable("type",x,y,gravity,bounce); at least 3
    createCollectable("database",280,550,1,0);
    createCollectable("database",180,350,1,0);
    createCollectable("database",280,150,1,0);
    createCollectable("database",1080,150,1,0);
    createCollectable("database",1180,350,1,0);
    createCollectable("database",1080,550,1,0);
    
    // TODO 4 - Create Cannons createCannon("side",position,delayMILLISECONDS); at least 3
    createCannon("left", 200, 2000);
    createCannon("top", 1100, 2000);
    createCannon("right", 600, 2000);
    createCannon("bottom", 300, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
