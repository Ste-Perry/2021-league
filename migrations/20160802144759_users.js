exports.up = (knex, Promise) => {
  return knex.schema.createTable('Teams', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.interger('team_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
