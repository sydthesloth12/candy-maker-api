const { manufacturers, products } = require('../models/index')

const getAllProductsWithManufacturers = async (request, response) => {
    try {
      const listOfProductsWithManufacturers = await products.findAll({
          include: [{ model: manufacturers }]
      })
  
      return response.send(listOfProductsWithManufacturers)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
  
      return response.sendStatus(500)
    }
  }

  const getProductByIdWithManufacturer = async (request, response) => {
    const { id } = request.params
  
    const product = await products.findOne({
      where: { id },
      include: [{ model: manufacturers }]
    })
  
    return response.send(product)
  }

module.exports = { getAllProductsWithManufacturers, getProductByIdWithManufacturer }
