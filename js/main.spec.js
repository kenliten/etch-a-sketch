const EtchASketch = require('./main');

describe("Etch A Sketch", function(){
  const eas = new EtchASketch();

  it("Apply width correctly", function() {
    expect(eas.board.size.width).toBe(20);
  });

  it("Apply height correctly", function() {
    expect(eas.board.size.height).toBe(20);
  });

  it("Have 400 tiles", function() {
    expect(eas.board.tiles.length).toBe(400);
  });
})
