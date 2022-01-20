exports.up = function(knex) {
    return knex.schema.createTable('services', (table) => {
      table.increments('id');
      table.string('title');
      table.string('description');
      table.string('customer');
      table.enum('state', ['OPEN', 'CLOSED']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('services');
  };