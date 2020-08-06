describe('p5.TeX', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
    tex.p5Utils.setP5Instance(pInst);
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('render()', function () {
    it('Should render into a p5.Element', function () {
      const expr = 'f(z)=z^2+c';
      const elt = pInst.createP();
      tex.render(expr, elt);
      expect(elt.html()).to.have.string(expr);
    });
  });

  describe('createTeX()', function () {
    it('Should return a p5.Element', function () {
      const f = pInst.createTeX('h1', 'f(z)=z^2+c');
      expect(f).to.be.an.instanceof(p5.Element);
    });
  });

  describe('p5Utils', function() {
    describe('setP5Instance()', function () {
      it('Should set the p5 instance', function () {
        expect(tex.p5Utils.p5Instance).to.equal(pInst);
      });
    });

    describe('checkP5()', function() {
      it('Should detect p5 in the environment', function () {
        expect(tex.p5Utils.checkP5()).to.equal(true);
      });
    });
  });
});
