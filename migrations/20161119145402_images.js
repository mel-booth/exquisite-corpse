
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('images', function(table){
    table.increments('id')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfNotExists('images')
  .then(function(){
    console.log('images table was dropped')
  })

};
