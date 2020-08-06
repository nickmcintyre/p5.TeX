// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

class P5Util {
  constructor() {
    this.p5Instance = window;
  }

  /**
   * Set p5 instance globally.
   * @param {Object} p5Instance 
   */
  setP5Instance(p5Instance) {
    this.p5Instance = p5Instance;
  }

  /**
   * This function will check if the p5 is in the environment
   * Either it is in the p5Instance mode OR it is in the window 
   * @returns {boolean} if it is in p5 
   */
  checkP5() {
    // typeof this.p5Instance !== 'undefined' && this.p5Instance.p5 && this.p5Instance.p5.Image && typeof this.p5Instance.p5.Image === 'function'
    if (typeof this.p5Instance !== 'undefined' &&
            typeof this.p5Instance.loadImage === 'function' || 
            typeof this.p5Instance.p5 !== 'undefined' &&
            typeof this.p5Instance.p5.Image !== 'undefined' &&
            typeof this.p5Instance.p5.Image === 'function') return true;
    return false
  }
}

const p5Utils = new P5Util();

export default p5Utils;
