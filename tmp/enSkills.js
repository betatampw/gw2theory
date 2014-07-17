//  comments 
//  Channeled - sum 691
//  Bounces - todo 692
//
//
//
//
//

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
    },{
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
    },{
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
  id: 691, 
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
      value : 97,
      ratio : 0.4,
      multiply : 5
    },{
      type : 'conditionApply',
      target : 'foe',
      condition : 'poison',
      duration: 10,
      stacks: 1
    }]
  }]
},{
  id: 692, 
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
      value : 97,
      ratio : 0.4,
    },{
      type : 'conditionApply',
      target : 'foe',
      condition : 'confusion',
      duration: 3,
      stacks: 2
    },{
      type : 'conditionApply',
      target : 'foe',
      condition : 'blindness', 
      duration: 3,
    }]
  }]
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
  actions : [{
    terms : [],
    effects : [{
      type : 'stateApply',
      state : 'Magnetic Shield'
      target: 'self',  // self ally foe
      duration: 3,
    }]
  }] 
},{
  id : 696,
  actions : [{
     terms : [{
      type: 'radius',
      from: 'self', 
      to: 'foe', 
      value: [0,180] 
    }],
     effects : [{
      type : 'damage',
      target : 'foe',
      value : 61,
      ratio : 0.25,
      multiply : 5
    },{
      type : 'controlApply',
      target : 'foe',
      control : 'knockback', 
      distance: 180
    }] 
  },{
    terms : [{
      type : 'stateExist',
      target : 'self',
      state : 'Magnetic Shield' 
    }],
    effects : [{
      type : 'combofinisher',
      combofinisher: 'Blast', 
    },{
      type : 'stateRemove',
      state : 'Magnetic Shield'
      target: 'self',  
    }]
  }]
},{
  id : 697,
  actions : [{
    terms : [{
      type : 'conditionExist',
      target : 'self', // self ally foe
      condition : 'bleeding', // bleeding blindness burning chilled confusion cripple fear immobilize poison torment vulnerability weakness any
    },{
      type: 'radius',
      from: 'self', // self ally foe
      to: 'ally', // self ally foe
      value: [0,360] // [min, max]
    },{
      type : 'modeInactive',
      mode : 'fire' // fire water air earth
    },{
      type : 'modeActive',
      mode : 'fire' // fire water air earth
    },{
      type: 'range',
      from: 'self',  // self ally foe
      to: 'foe',  // self ally foe
      value: [0,1000]
    },{
      type : 'stateExist',
      target : 'self', // self ally foe
      state : 'Magnetic Shield' // Magnetic Shield
    }],
    effects : [{
      type : 'healing',
      target : 'self', // self ally foe
      value : 3920,
      ratio : 0.6,
    },{
      type : 'conditionRemove',
      target : 'self', // self ally foe
      condition : 'bleeding', // bleeding blindness burning chilled confusion cripple fear immobilize poison torment vulnerability weakness any
      number: 1
    },{
      type : 'summon',
      summon : 'Mistfire Wolf', // Mistfire Wolf | Packaged Antitoxin | Glue Shot
      duration : 60,
      range : 1200
    },{
      type : 'modeChenge',
      mode : 'fire' // fire water air earth
    },{
      type : 'damage',
      target : 'foe', // self ally foe
      value : 158,
      ratio : 0.651,
      multiply : 5
    },{
      type : 'combofinisher',
      combofinisher: 'Physical Projectile', // Physical Projectile | Leap | Blast
      percent : 20,
    },{
      type : 'conditionApply',
      target : 'foe', // self ally foe
      condition : 'immobilize', // bleeding blindness burning chilled confusion cripple fear immobilize poison torment vulnerability weakness any
      duration: 4,
      stacks: 1
    },{
      type : 'controlApply',
      target : 'foe', // self ally foe
      control : 'daze', // daze float knockback knockdown launch quickness sink stealth stun teleport 
      duration: 4,
      distance: 100
    },{
      type : 'action',
      action: 'jump',
      value: [0,700] 
    },{
      type : 'stateApply',
      state : 'Magnetic Shield' // Magnetic Shield
      target: 'self',  // self ally foe
      duration: 3,
    },{
      type : 'stateRemove',
      state : 'Magnetic Shield' // Magnetic Shield
      target: 'self',  // self ally foe
    }]
  }]
}];
