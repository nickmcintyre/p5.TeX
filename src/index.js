import katex from 'katex';

import p5Utils from './p5Utils';

/**
 * Renders a TeX expression into the specified p5.Element.
 * 
 * @param {string} tex A TeX expression
 * @param {p5.Element} element The p5.Element to render into
 * @param {Object} options KaTeX options (optional)
 */
const render = function renderTeX(tex, element, options) {
  katex.render(tex, element.elt, options);
};

/**
 * Creates a DOM element with the given tag and TeX expression.
 * 
 * @param {string} tag The tag for the new element
 * @param {string} tex A TeX expression
 * @param {Object} options KaTeX options (optional)
 */
p5.prototype.createTeX = function createTeXElement(tag, tex, options) {
  const elt = p5Utils.p5Instance.createElement(tag);
  render(tex, elt, options);

  return elt;
};

Object.assign({ p5Utils })

export {
  p5Utils,
  render,
}
