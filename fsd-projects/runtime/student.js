function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  score++;
  health -= 0.01;

  for (let i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    
    buildingInstance["x"] += buildingInstance["speedX"] * (currentLevel.speed * 0.1);

    leftToRight(buildingInstance, "building");
  }

  for (let i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    
    lampInstance["x"] += lampInstance["speedX"] * (currentLevel.speed * 0.1);

    leftToRight(lampInstance, "lamp");
  }

  for (let i = 0; i < scenery.butterfly.instances.length; i++) {
    var butterflyInstance = scenery.butterfly.instances[i];
    
    butterflyInstance["x"] += butterflyInstance["speedX"] * (currentLevel.speed * 0.1);

    leftToRight(butterflyInstance, "butterfly");
  }

  function leftToRight(instance, type) {
    if (instance["x"] < -150) {
      if (type === "building") {
        instance["x"] = scenery.building.loopWidth;
      } else if (type === "lamp") {
        instance["x"] = scenery.lamp.loopWidth;
      } else if (type === "butterfly") {
        instance["x"] = scenery.butterfly.loopWidth;
      }
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects

  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];

    create(currentObject);
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind

  if (obj["type"] === "obstacle") {
    makeObstacle(obj);
  } else if (obj["type"] === "enemy") {
    makeEnemy(obj);
  } else if (obj["type"] === "powerup") {
    makePowerup(obj);
  } else if (obj["type"] === "goal") {
    makeGoal(obj);
  } else if (obj["type"] === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var typeArray = [];

  for (let i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    if (currentObject["type"] === type) {
      typeArray.push(currentObject);
    }
  }

  return typeArray;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  
  for (let i = 0; i < objectList.length; i++) {
    var currentObject = objectList[i];
    
    if (currentObject["speedX"] > 0) {
    currentObject["x"] -= currentObject["speedX"] * (currentLevel.speed * 2);
    } else if (currentObject["speedX"] === 0) {
      currentObject["x"] -= currentLevel.speed;
    }

    var going;
    var permSpeedY = currentObject.speedY;

    if (currentObject["speedY"] !== 0) {
      if (currentObject["type"] === "enemy" && going === "down") {
          currentObject["speedY"] -= gravity;                              
          /*attempting to add gravity, i'm gonna move on for now so i don't get too behind on the other TODOs*/
          // console.log(currentObject.speedY + "speedY")
          // console.log(permSpeedY + "perm")
        }
          currentObject["y"] += currentObject["speedY"];

      if (currentObject["y"] < currentObject["minY"]) {
        going = "down";
        currentObject["y"] = currentObject["minY"];
        currentObject["speedY"] *= -1;
      }

      if (currentObject["y"] > currentObject["maxY"]) {
        going = "up";
        currentObject["y"] = currentObject["maxY"];
        currentObject["speedY"] = permSpeedY;
        currentObject["speedY"] *= -1;
      }
    }

    // console.log(currentObject["hp"])
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (let i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    for (let j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];

      if (isCollidingWithProjectile(currentObject, currentProjectile) === true) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (let i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    if (currentObject["type"] !== "platform") { 
      if (isGenericCollision(currentObject) === true) {
        handleHallebotGenericCollision(i);                        //UNCOMMENT TO ENABLE COLLISION---COMMENT TO DISABLE
        
      }
    }
  }
}

var addSpeed = 0;

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  if (currentLevelIndex === LEVELS.length - 1) { //loops back to first level
    currentLevelIndex = 0;
    addSpeed++;                                                 //COMMENT TO PLAYTEST AT BASE SPEED
  } else {
    currentLevelIndex++;
  }

  currentLevel = LEVELS[currentLevelIndex];
  currentLevel.speed += addSpeed;
  gameObjects = [];
  generateLevel();
  health += 25;
}