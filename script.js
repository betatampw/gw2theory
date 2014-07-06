var GW2TheoryModel = require("GW2TheoryModel").GW2TheoryModel;
var enginerData = require("Enginer").data;

GW2Theory = new GW2TheoryModel({
  classData: enginerData,
  playerData: {},
  targetData: {
    armor: 2600
  },
  options: {
    time: 60,
    range: 700
  }
});

GW2Theory.init();








