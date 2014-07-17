skills = [{
  id : 3,
  actions : [{
    terms : [],
    effects : [{
      type : 'summon',
      summon : 'Mistfire Wolf', // Mistfire Wolf
      duration : 60,
    }]
  }]
}, {
  id : 4,
  actions : [{
    terms : [],
    effects : [{
      type : 'healing',
      target : 'self',
      value : 3920,
      ratio : 0.6,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'self',
      condition : 'poison',
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'self',
      condition : 'poison',
    }, {
      type : 'healing',
      target : 'self',
      value : 481,
      ratio : 0.2,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'self',
      condition : 'torment',
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'self',
      condition : 'torment',
    }, {
      type : 'healing',
      target : 'self',
      value : 481,
      ratio : 0.2,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'self',
      condition : 'confusion',
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'self',
      condition : 'confusion',
    }, {
      type : 'healing',
      target : 'self',
      value : 481,
      ratio : 0.2,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'ally',
      condition : 'poison',
    }, {
      type : 'radius',
      from : 'self',
      to : 'ally',
      value : [0, 360]
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'ally',
      condition : 'poison',
    }, {
      type : 'healing',
      target : 'ally',
      value : 481,
      ratio : 0.2,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'ally',
      condition : 'torment',
    }, {
      type : 'radius',
      from : 'self',
      to : 'ally',
      value : [0, 360]
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'ally',
      condition : 'torment',
    }, {
      type : 'healing',
      target : 'ally',
      value : 481,
      ratio : 0.2,
    }]
  }, {
    terms : [{
      type : 'conditionExist',
      target : 'ally',
      condition : 'confusion',
    }, {
      type : 'radius',
      from : 'self',
      to : 'ally',
      value : [0, 360]
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'ally',
      condition : 'confusion',
    }, {
      type : 'healing',
      target : 'ally',
      value : 481,
      ratio : 0.2,
    }]
  }]
}, {
  id : 5,
  actions : [{
    terms : [],
    effects : [{
      type : 'summon',
      summon : 'Packaged Antitoxin',
      duration : 60,
      range : 1200
    }]
  }]
}, {
  id : 6,
  actions : [{
    terms : [{
      type : 'modeInactive',
      mode : 'fire'
    }],
    effects : [{
      type : 'modeChenge',
      mode : 'fire'
    }]
  }]
}, {
  id : 7,
  actions : [{
    terms : [{
      type : 'modeInactive',
      mode : 'water'
    }],
    effects : [{
      type : 'modeChenge',
      mode : 'water'
    }]
  }]
}, {
  id : 8,
  actions : [{
    terms : [{
      type : 'modeInactive',
      mode : 'air'
    }],
    effects : [{
      type : 'modeChenge',
      mode : 'air'
    }]
  }]
}, {
  id : 9,
  actions : [{
    terms : [{
      type : 'modeInactive',
      mode : 'earth'
    }],
    effects : [{
      type : 'modeChenge',
      mode : 'earth'
    }]
  }]
}];
