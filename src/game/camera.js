'use strict';

const { GAME_WIDTH, GAME_HEIGHT } = require('../util/constants');
module.exports = class Camera {
   constructor(x = GAME_WIDTH / 2, y = GAME_HEIGHT / 2, speed = 5) {
      this.x = x;
      this.y = y;
      this.speed = speed;
   }
   interp(x, y, delta) {
      if (delta > 1) {
         this.x += (x - this.x) * 0.2;
         this.y += (y - this.y) * 0.2;
      } else {
         this.x += (x - this.x) * 0.2 * delta * this.speed;
         this.y += (y - this.y) * 0.2 * delta * this.speed;
      }
   }
   setTo(x, y) {
      this.x = x;
      this.y = y;
   }
};
