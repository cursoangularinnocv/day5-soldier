describe("Soldier", function () {
  var soldier;
  var strength = 150;
  var health = 300;
  var defaultValuesWhenNoParams = 120

  beforeEach(() => {
    soldier = new Soldier(health, strength);
  });

  describe("constructor function", () => {
    it("if not parameters were supplied, constructor must assume default params", () => {
      var soldierWithDefaultParams = new Soldier();

      expect(soldierWithDefaultParams.strength).toBe(defaultValuesWhenNoParams)
      expect(soldierWithDefaultParams.health).toBe(defaultValuesWhenNoParams)
    });

    it('if the strength param is negative by mistake the strength value must be corrected to 100', () => {
      var soldierWithWrongNegativeValue = new Soldier(100, -1000);

      expect(soldierWithWrongNegativeValue.strength).toBe(100)
    })

    it('if the health param is negative by mistake the health value must be corrected to 100', () => {
      var soldierWithDefaultParams = new Soldier(-100, 100);

      expect(soldierWithDefaultParams.health).toBe(100)
    })

    it('coordinates must be properly set', () => {
      expect(soldier.x).toBe(100)
      expect(soldier.y).toBe(200)
    })
  });

  describe("die()", () => {
    it('when the soldier has died, his health must be zero', () => {
      soldier.die()

      expect(soldier.health).toBe(0)
    })
  })

  describe("getData()", () => {
    it('when calling getData() we must obtain an object with the full soldier details representation', () => {
      var theSoldierData = soldier.getData()

      expect(theSoldierData).toEqual({
        x: 100,
        y: 200,
        strength: strength,
        health: health
      })
    })
  })

  describe('movements in the X axis', ()=> {
    describe("moveLeft()", () => {
      it('when calling moveLeft we expect to x position to be substracted some amount of px', () => {
        soldier.moveLeft()
        var soldierData = soldier.getData();
  
        expect(soldierData.x).toBe(100 - soldier.xAxisAdvance)
      })
    })

    describe("moveRight()", () => {
      it('when calling moveRight we expect to x position to be added some amount of px', () => {
        soldier.moveRight()
        var soldierData = soldier.getData();
  
        expect(soldierData.x).toBe(100 + soldier.xAxisAdvance)
      })
    })
  })
});