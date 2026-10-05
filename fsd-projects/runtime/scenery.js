// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: 
    [
      { x: 1300, y: 175, width: 150, height: 150 },
      { x: 1100, y: 225, width: 150, height: 150 },
      { x: 900, y: 175, width: 150, height: 150 },
      { x: 700, y: 225, width: 150, height: 150 },
      { x: 500, y: 175, width: 150, height: 150 },
      { x: 300, y: 225, width: 150, height: 150 },
    ]
  },

  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: 
    [
      { x: 1387, width: 75, height: 100, speedX: -3 },
      { x: 1090, width: 75, height: 100, speedX: -3 },
      { x: 793, width: 75, height: 100, speedX: -3 },
      { x: 496, width: 75, height: 100, speedX: -3 },
      { x: 199, width: 75, height: 100, speedX: -3 },

      { x: 1288, width: 100, height: 200, speedX: -5 },
      { x: 991, width: 100, height: 200, speedX: -5 },
      { x: 694, width: 100, height: 200, speedX: -5 },
      { x: 397, width: 100, height: 200, speedX: -5 },
      { x: 100, width: 100, height: 200, speedX: -5 },

      { x: 1189, width: 150, height: 400, speedX: -10 },
      { x: 892, width: 150, height: 400, speedX: -10 },
      { x: 595, width: 150, height: 400, speedX: -10 },
      { x: 298, width: 150, height: 400, speedX: -10 },
      { x: 0, width: 150, height: 400, speedX: -10 }
    ]
  },

  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: 
    [
      { x: 0, width: 50, height: 150, speedX: -12 },
      { x: 500, width: 50, height: 150, speedX: -12 },
      { x: 1000, width: 50, height: 150, speedX: -12 },
    ]
  },
};
