    exports.seed = function (knex, Promise) {
  return knex('teams').insert([  
    { id: 1, name: 'Island Bay United AFC Seagulls',},
    { id: 2, name: 'Petone Reserves'},
    { id: 3, name: 'Wellington Olympic'},
    { id: 4, name: 'Wellington Marist AFC' },
    { id: 5, name: 'Waikanae Association Football Club 1sts'},
    { id: 6, name: 'Brooklyn Northern United Reserves'},
    { id: 7, name: 'Island Bay United AFC Reserves'},
    { id: 8, name: 'Victoria University Mens Reserves'},
    { id: 9, name: 'Waterside Karori Thirds'},
    { id: 0, name: 'Naenae Soccer Club'}
    ])
}
