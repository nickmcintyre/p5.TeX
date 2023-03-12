import katex from 'katex';

import p5Utils from './p5Utils';

/**
 * Renders a TeX expression into the specified p5.Element.
 * 
 * @param {string} tex A TeX expression
 * @param {p5.Element} element The p5.Element to render into
 */
const render = function renderTeX(tex, element) {
  katex.render(tex, element.elt, { output: 'mathml' });
};

/**
 * Creates a DOM element with the given tag and TeX expression.
 * 
 * @param {string} tag The tag for the new element
 * @param {string} tex A TeX expression
 */
p5.prototype.createTeX = function createTeXElement(tag, tex) {
  const elt = p5Utils.p5Instance.createElement(tag);
  render(tex, elt);

  return elt;
};

Object.assign({ p5Utils })

export {
  p5Utils,
  render,
}
