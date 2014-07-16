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
    },{
      type : 'modeInactive',
      mode : 'fire' // fire water air earth
    },{
      type : 'modeActive',
      mode : 'fire' // fire water air earth
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
      summon : 'Mistfire Wolf', // Mistfire Wolf | Packaged Antitoxin
      duration : 60,
      range : 1200
    },{
      type : 'modeChenge',
      mode : 'fire' // fire water air earth
    }]
  }]
}]; 



var infoKeys = {
      '%i'     : ['img', 0],
      '%n'     : ['name', 1],
      '%d'     : ['description', 1],
      '%c'     : ['cost', 0],
      '%cd'    : ['recharge', 0],
      '%ct'    : ['casttime', 0],
      '%ce'    : ['pve_cost', 0],
      '%cde'   : ['pve_recharge', 0],
      '%cte'   : ['pve_casttime', 0],
      '%cw'    : ['wvw_cost', 0],
      '%cdw'   : ['wvw_recharge', 0],
      '%ctw'   : ['wvw_casttime', 0],
      '%g'   : ['group', 1],
      '%t'     : ['type', 1],
      '%p'   : ['profession', 1],
      '%r'   : ['race', 1],
      '%w'   : ['weapon', 1],
      '%w2'    : ['weapon_2', 1],
      '%a'   : ['aqua', 0],
      '%s'   : ['slot', 0],
      '%s2'    : ['slot2', 0],
      '%ot'    : ['overtype', 0],
      '%m'   : ['mode', 0],
      '%h'   : ['hands', 0],
      '%ch'    : ['chain', 0],
      '%pf'    : ['pet_family', 1],
      '%pt'    : ['pet', 1],
      '%rp'    : ['replace', 1],
      '%ri'    : ['replace_img', 0],
      '%st'    : ['skill_stat', 0],
      '%stl'   : ['skill_stat_loc', 0]
         };