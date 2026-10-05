// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  {
    name: "TOKYO", //3 obstacles, 3 platforms, 2 powerups, 3 enemies, 1 goal
    speed: 2,
    gameObjects: [
      {type: "obstacle", kind: "spikes", x: 425, y: groundY},
      {type: "obstacle", kind: "spikes", x: 725, y: groundY},
      {type: "obstacle", kind: "spikes", x: 1025, y: groundY},

      {type: "platform", kind: "basicPlatform", x: 0, y: groundY - 100},
      {type: "platform", kind: "basicPlatform", x: 200, y: groundY - 150},
      {type: "platform", kind: "basicPlatform", x: 500, y: groundY - 150},
      {type: "platform", kind: "basicPlatform", x: 800, y: groundY - 150},

      {type: "powerup", kind: "healthUp", x: 600, y: groundY},
      {type: "powerup", kind: "healthUp", x: 900, y: groundY},

      {type: "enemy", kind: "bug", x: 1200, y: groundY - 210, speedY: 3, minY: groundY - 210},
      {type: "enemy", kind: "bug", x: 1300, y: groundY - 140, speedY: 3, minY: groundY - 210},
      {type: "enemy", kind: "bug", x: 1400, y: groundY - 70, speedY: 3, minY: groundY - 210},

      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "KANDA",
    speed: 10,
    gameObjects: [
      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "AKIHABARA",
    speed: 10,
    gameObjects: [
      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "OKACHIMACHI",
    speed: 10,
    gameObjects: [
      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "UENO",
    speed: 10,
    gameObjects: [
      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
  {
    name: "UGUISUDANI",
    speed: 10,
    gameObjects: [
      { type: "goal", 
        kind: "flag", 
        x: 1500, 
        y: groundY },
    ],
  },
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
      hitWidth: 40,
      hitHeight: 44,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
      shadow: "red"
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
      contactHealthChange: -30,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 50,
      hp: 3,
      collect: false,
      shadow: "red"
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 0,
      hitHeight: 0,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "green"
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
      contactScoreChange: +100,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
      shadow: "yellow"
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
      shadow: "blue"
    },
  },
};
// === END DEFAULT VALUES ===
