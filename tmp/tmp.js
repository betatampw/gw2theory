skills = [{
  id : 0,
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
      summon : 'Mistfire Wolf', // Mistfire Wolf
      duration : 60,
    }]
  }]
}]; 