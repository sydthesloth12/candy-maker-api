const Sequelize = require('sequelize')
const manufacturersModel = require('./manufacturers')
const productsModel = require('./products')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const manufacturers = manufacturersModel(connection, Sequelize)
const products = productsModel(connection, Sequelize, manufacturers)

manufacturers.hasMany(products)
products.belongsTo(manufacturers)

module.exports = { manufacturers, products }
