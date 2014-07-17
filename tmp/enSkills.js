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
},{
  id : 685,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self', 
      to: 'foe', 
      value: [0,1000]
    }],
    effects : [{
      type : 'damage',
      target : 'foe',
      value : 158,
      ratio : 0.651,
    },{
      type : 'combofinisher',
      combofinisher: 'Physical Projectile',
      percent : 20,
    }]
  }]
},{
  id : 686,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self', 
      to: 'foe',  
      value: [0,1000]
    }],
    effects : [{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'immobilize',
      duration: 2
    }]
  }]
},{
  id : 687,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self',  
      to: 'foe',  
      value: [0,200]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', 
      value : 390,
      ratio : 1.602,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'bleeding', 
      duration: 4,
      stacks: 4
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self',  
      to: 'foe',  
      value: [201,300]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', 
      value : 341,
      ratio : 1.402,
    },{
      type : 'conditionApply',
      target : 'foe',
      condition : 'bleeding', 
      duration: 4,
      stacks: 3
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self',  
      to: 'foe',  
      value: [301,400]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', 
      value : 292,
      ratio : 1.201,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'bleeding', 
      duration: 4,
      stacks: 2
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self', 
      to: 'foe', 
      value: [401,500]
    }],
    effects : [{
      type : 'damage',
      target : 'foe',
      value : 244,
      ratio : 1.001,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'bleeding', 
      duration: 4,
    }]
  }]
},{
  id : 688,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self', 
      to: 'foe', 
      value: [0,400]
    }],
    effects : [{
      type : 'conditionRemove',
      target : 'self',
      condition : 'immobilize', 
    },{
      type : 'conditionRemove',
      target : 'self',
      condition : 'cripple', 
    },{
      type : 'conditionRemove',
      target : 'self',
      condition : 'chilled', 
    },{
      type : 'damage',
      target : 'foe', 
      value : 244,
      ratio : 1.001,
    },{
      type : 'controlApply',
      target : 'foe', 
      control : 'launch', 
      distance: 450
    },{
      type : 'controlApply',
      target : 'self',
      control : 'knockback', 
      distance: 300
    }]
  }]
},{
  id : 689,
  actions : [{
    terms : [{
      type: 'radius',
      from: 'self',
      to: 'ally', 
      value: [0,240] 
    }],
    effects : [{
      type : 'damage',
      target : 'foe', 
      value : 219,
      ratio : 0.901,
    },{ // TODO check
      type : 'conditionApply',
      target : 'foe', 
      condition : 'vulnerability', 
      duration: 7,
      stacks: 3
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self',  
      to: 'foe',
      value: [0,700]
    }],
    effects : [{
      type : 'action',
      action: 'jump',
      value: [0,700] 
    },{
      type : 'combofinisher',
      combofinisher: 'Leap'
    }]
  },{
    terms : [{
      type: 'radius',
      from: 'self',
      to: 'ally', 
      value: [0,240] 
    }],
    effects : [{
      type : 'damage',
      target : 'foe', 
      value : 438,
      ratio : 1.8022,
    },{ // TODO check
      type : 'conditionApply',
      target : 'foe', 
      condition : 'vulnerability', 
      duration: 7,
      stacks: 3
    }]
  }]
},{
  id : 690,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self', 
      to: 'foe', 
      value: [0,900]
    }],
    effects : [{
      type : 'damage',
      target : 'foe',
      value : 85,
      ratio : 0.351,
    },{
      type : 'combofinisher',
      combofinisher: 'Physical Projectile', 
      percent : 20,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'bleeding', 
      duration: 2
    }]
  },{
    terms : [{
      type: 'radius',
      from: 'foe', 
      to: 'foe',
      value: [0,120]
    }],
    effects : [{
      type : 'damage',
      target : 'foe',
      value : 85,
      ratio : 0.351,
    }]
  }]
},{
  id: 691, // TODO DO Channeled
  actions : [] // TODO DO Channeled
},{
  id: 692, // TODO DO Bounces
  actions : [] // TODO DO Bounces
},{
  id : 0,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self',  // self ally foe
      to: 'foe',  // self ally foe
      value: [0,200]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', // self ally foe
      value : 244,
      ratio : 1.001,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'burning', 
      duration: 6,
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self',  // self ally foe
      to: 'foe',  // self ally foe
      value: [201,400]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', // self ally foe
      value : 161,
      ratio : 0.662,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'burning', 
      duration: 4,
    }]
  },{
    terms : [{
      type: 'range',
      from: 'self',  // self ally foe
      to: 'foe',  // self ally foe
      value: [401,600]
    }],
    effects : [{
      type : 'damage',
      target : 'foe', // self ally foe
      value : 80,
      ratio : 0.33,
    },{
      type : 'conditionApply',
      target : 'foe', 
      condition : 'burning', 
      duration: 2,
    }]
  }]
},{
  id : 694,
  actions : [{
    terms : [{
      type: 'range',
      from: 'self',  // self ally foe
      to: 'foe',  // self ally foe
      value: [0,700]
    }],
    effects : [{
      type : 'conditionApply',
      target : 'foe', // self ally foe
      condition : 'immobilize', // bleeding blindness burning chilled confusion cripple fear immobilize poison torment vulnerability weakness any
      duration: 1
    },{
      type : 'summon',
      summon : 'Glue Shot', // Mistfire Wolf | Packaged Antitoxin
      duration : 5,
      range : 700
    }]
  }]
},{
  id : 695,
  actions : [] // TODO 
}];
