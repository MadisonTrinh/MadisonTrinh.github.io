// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  {
    name: "TOKYO", //3 obstacles, 3 platforms, 2 powerups, 3 enemies, 1 goal
    speed: 2, //speed 2
    gameObjects: [
      {type: "obstacle", kind: "spikes", x: 425, y: groundY, contactHealthChange: -30,},
      {type: "obstacle", kind: "spikes", x: 725, y: groundY, contactHealthChange: -30},
      {type: "obstacle", kind: "spikes", x: 1025, y: groundY, contactHealthChange: -30},

      {type: "platform", kind: "basicPlatform", x: 0, y: groundY - 100},
      {type: "platform", kind: "basicPlatform", x: 200, y: groundY - 150},
      {type: "platform", kind: "basicPlatform", x: 500, y: groundY - 150},
      {type: "platform", kind: "basicPlatform", x: 800, y: groundY - 150},

      {type: "powerup", kind: "healthUp", x: 600, y: groundY},
      {type: "powerup", kind: "healthUp", x: 900, y: groundY},
      {type: "powerup", kind: "star", x: 275, y: groundY - 200},
      {type: "powerup", kind: "star", x: 575, y: groundY - 200},
      {type: "powerup", kind: "star", x: 875, y: groundY - 200},
      {type: "powerup", kind: "painting", x: 1300, y: groundY},


      {type: "enemy", kind: "bug", x: 1200, y: groundY - 210, speedY: 3, minY: groundY - 150, contactHealthChange: -30},
      {type: "enemy", kind: "bug", x: 1300, y: groundY - 140, speedY: 3, minY: groundY - 150, contactHealthChange: -30},
      {type: "enemy", kind: "bug", x: 1400, y: groundY - 70, speedY: 3, minY: groundY - 210, contactHealthChange: -30},

      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "KANDA", //5 obstacles, 4 platforms, 3 powerups, 5 enemies, 1 goal
    speed: 4, //speed 4
    gameObjects: [
      {type: "obstacle", kind: "spikes", x: 83, y: groundY,}, //1st column
      {type: "obstacle", kind: "spikes", x: 83, y: groundY - 50},
      {type: "obstacle", kind: "spikes", x: 83, y: groundY - 100},
      {type: "obstacle", kind: "spikes", x: 83, y: groundY - 150},
      {type: "obstacle", kind: "spikes", x: 363, y: groundY,}, //2nd column
      {type: "obstacle", kind: "spikes", x: 363, y: groundY - 50},
      {type: "obstacle", kind: "spikes", x: 363, y: groundY - 100},
      {type: "obstacle", kind: "spikes", x: 363, y: groundY - 150},
      {type: "obstacle", kind: "spikes", x: 623, y: groundY,}, //3rd column
      {type: "obstacle", kind: "spikes", x: 623, y: groundY - 50},
      {type: "obstacle", kind: "spikes", x: 623, y: groundY - 100},
      {type: "obstacle", kind: "spikes", x: 623, y: groundY - 150},

      {type: "platform", kind: "basicPlatform", x: 100, y: groundY, width: 50, height: 200, hitWidth: 10, hitHeight: 100},
      {type: "platform", kind: "basicPlatform", x: 380, y: groundY, width: 50, height: 200, hitWidth: 10, hitHeight: 100},
      {type: "platform", kind: "basicPlatform", x: 640, y: groundY, width: 50, height: 200, hitWidth: 10, hitHeight: 100},
      {type: "platform", kind: "basicPlatform", x: 1290, y: groundY - 100, width: 400, height: 50, hitWidth: 400},
     
      {type: "powerup", kind: "healthUp", x: 380, y: groundY - 250},
      {type: "powerup", kind: "healthUp", x: 640, y: groundY - 250},
      {type: "powerup", kind: "painting", x: 1450, y: 250},
      {type: "powerup", kind: "star", x: 240, y: 250},
      {type: "powerup", kind: "star", x: 530, y: 250},
      {type: "powerup", kind: "star", x: 820, y: 250},

      {type: "enemy", kind: "bug", x: 1100, y: groundY, speedY: 20, minY: groundY - 120},
      {type: "enemy", kind: "bat", x: 1200, y: groundY, speedY: 20, minY: groundY - 120},
      {type: "enemy", kind: "bug", x: 1450, y: groundY - 150},
      {type: "enemy", kind: "bat", x: 1700, y: groundY, speedY: 20, minY: groundY - 120},
      {type: "enemy", kind: "bug", x: 1800, y: groundY, speedY: 20, minY: groundY - 120},

      { type: "goal", 
        kind: "flag", 
        x: 2000, 
        y: groundY },
    ],
  },
  {
    name: "AKIHABARA", //7 obstacles, 5 platforms, 4 powerups, 6 enemies, 1 goal
    speed: 6, //speed 6
    gameObjects: [
      {type: "obstacle", kind: "spikes", x: 400, y: groundY}, //1st round of ground spikes
      {type: "obstacle", kind: "spikes", x: 450, y: groundY},
      {type: "obstacle", kind: "spikes", x: 500, y: groundY},
      {type: "obstacle", kind: "spikes", x: 550, y: groundY},
      {type: "obstacle", kind: "spikes", x: 600, y: groundY},
      {type: "obstacle", kind: "spikes", x: 650, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1400, y: groundY}, //2nd
      {type: "obstacle", kind: "spikes", x: 1450, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1500, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1550, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1800, y: groundY}, //3rd
      {type: "obstacle", kind: "spikes", x: 1850, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1900, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1950, y: groundY},

      {type: "platform", kind: "basicPlatform", x: 200, y: groundY, width: 200, height: 200, hitWidth: 200, hitHeight: 200},
      {type: "platform", kind: "basicPlatform", x: 700, y: groundY, width: 200, height: 200, hitWidth: 200, hitHeight: 200},
      {type: "platform", kind: "basicPlatform", x: 1000, y: groundY - 300},
      {type: "platform", kind: "basicPlatform", x: 1400, y: groundY - 300},
      {type: "platform", kind: "basicPlatform", x: 1800, y: groundY - 300},
      {type: "platform", kind: "basicPlatform", x: 2200, y: groundY - 300},
      { //evil platform
        type: "platform",
        kind: "basicPlatform",
        x: 5000, 
        y: groundY - 200, 
        width: 50, 
        height: 400, 
        hitWidth: 50, 
        hitHeight: 400, 
        hp: 1, 
        speedX: 1, 
        shadow: "red",
        contactHealthChange: -100
      },

      {type: "powerup", kind: "star", x: 500, y: groundY - 400},
      {type: "powerup", kind: "star", x: 1100, y: groundY - 500},
      {type: "powerup", kind: "star", x: 2600, y: groundY - 500},
      {type: "powerup", kind: "healthUp", x: 1500, y: groundY - 350},
      {type: "powerup", kind: "painting", x: 1875, y: groundY - 350},
      {type: "powerup", kind: "healthUp", x: 2300, y: groundY - 350},

      {type: "enemy", kind: "bug", x: 0, y: groundY},
      {type: "enemy", kind: "bug", x: 300, y: groundY - 200},
      {type: "enemy", kind: "bug", x: 800, y: groundY - 200},
      {type: "enemy", kind: "bat", x: 1300, y: groundY - 300, speedY: 8, minY: 200, maxY: groundY - 200},
      {type: "enemy", kind: "bat", x: 1700, y: groundY - 300, speedY: 8, minY: 200, maxY: groundY - 200},
      {type: "enemy", kind: "bat", x: 2100, y: groundY - 300, speedY: 8, minY: 200, maxY: groundY - 200},

      { type: "goal", 
        kind: "flag", 
        x: 2600, 
        y: groundY },
    ],
  },
  // {                                        //OPTIONAL LEVELS, might come back someday but not now
  //   name: "OKACHIMACHI",
  //   speed: 10,
  //   gameObjects: [
  //     { type: "goal", 
  //       kind: "flag", 
  //       x: 1500, 
  //       y: groundY },
  //   ],
  // },
  // {
  //   name: "UENO",
  //   speed: 10,
  //   gameObjects: [
  //     { type: "goal", 
  //       kind: "flag", 
  //       x: 1500, 
  //       y: groundY },
  //   ],
  // },
  // {
  //   name: "UGUISUDANI",
  //   speed: 10,
  //   gameObjects: [
  //     { type: "goal", 
  //       kind: "flag", 
  //       x: 1500, 
  //       y: groundY },
  //   ],
  // },
];

let currentLevel = LEVELS[0];
let currentLevelIndex = 0;
// === END LEVELS DEFINITIONS ===

// === DEFAULT VALUES FOR EACH "type" AND "kind" OF OBJECT (STUDENT-EDITABLE) ===
const DEFAULT_VALUES = {
  obstacle: {
    spikes: {
      imageUrl: "images/interactable/spikes.png",
      width: 48,
      height: 48,
      hitWidth: 1,
      hitHeight: 1,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -1000,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
      shadow: "red",
    },
  },
  enemy: {
    bug: {
      imageUrl: "images/interactable/bug.png",
      width: 75,
      height: 75,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY,
      contactHealthChange: -20,
      contactScoreChange: -200,
      projectileHealthChange: 0,
      projectileScoreChange: 200,
      hp: 1,
      collect: false,
      shadow: "red",
    },
    bat: {
      imageUrl: "images/interactable/bat.png",
      width: 81,
      height: 40,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY,
      contactHealthChange: -50,
      contactScoreChange: -500,
      projectileHealthChange: 0,
      projectileScoreChange: 500,
      hp: 1,
      collect: false,
      shadow: "red",
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 1,
      hitHeight: 1,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +10,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "green",
    },
    painting: {
      imageUrl: "images/interactable/painting.png",
      width: 56,
      height: 33,
      hitWidth: 100,
      hitHeight: 60,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +50,
      contactScoreChange: +500,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "green",
    },
    star: {
      imageUrl: "images/interactable/star.png",
      width: 50,
      height: 40,
      hitWidth: 50,
      hitHeight: 40,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: 0,
      contactScoreChange: +1000,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "orange",
    },
  },
  goal: {
    flag: {
      imageUrl: "images/interactable/flag.png",
      width: 100,
      height: 100,
      hitWidth: 100,
      hitHeight: 100,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "yellow",
    },
  },
  platform: {
    basicPlatform: {
      imageUrl: "images/interactable/basic-platform.png",
      width: 200,
      height: 50,
      hitWidth: 200,
      hitHeight: 50,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 50,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: Infinity,
      collect: false,
      shadow: "blue",
    },
  },
};
// === END DEFAULT VALUES ===
