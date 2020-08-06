function setup() {
  createCanvas(400, 400);

  background('darkolivegreen');

  // A complex quadratic
  const f = createTeX('h1', 'f(z)=z^2+c');
  f.position(90, 160);
  f.style('color', 'ghostwhite');
}
