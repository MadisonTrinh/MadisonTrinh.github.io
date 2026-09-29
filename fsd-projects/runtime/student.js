function moveScenery() {
  // TODO 2: Move background scenery based on current level speed

  for (let i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    
    buildingInstance["x"] += buildingInstance["speedX"] + currentLevel.speed;

    leftToRight(buildingInstance, "building");
  }

  for (let i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    
    lampInstance["x"] += lampInstance["speedX"] - currentLevel.speed;

    leftToRight(lampInstance, "lamp");
  }

  function leftToRight(instance, type) {
    if (instance["x"] < -100) {
      if (type === "building") {
        instance["x"] = scenery.building.loopWidth;
      } else if (type === "lamp") {
        instance["x"] = scenery.lamp.loopWidth;
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
    obj["speedX"] = Math.round(Math.random() * 10);
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var typeArray = [];

  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];

    if (currentObject["type"] === type) {
      typeArray.push(currentObject);
    }
  }

  // console.log(typeArray);

  return typeArray;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  
  for (let i = 0; i < objectList.length; i++) {
    var objectSpeed = objectList[i]["speedX"];
    var currentPosition = objectList[i]["x"];

    // console.log(objectSpeed)
    // console.log(currentPosition)
  }


}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
