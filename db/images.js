var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || "development"]
var knex = Knex(knexConfig)

module.exports = {
  getImages,
  addImage
}

function getImages(){
  return knex('images')
}

function addImage(img) {
  return knex('images').insert({img})
}
