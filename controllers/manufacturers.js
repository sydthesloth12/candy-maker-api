const { manufacturers, products } = require('../models/index')


const getAllManufacturers = async (request, response) => {
  try {
    const listOfManufacturers = await manufacturers.findAll()

    return response.send(listOfManufacturers)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

const getManufacturerByIdWithProducts = async (request, response) => {
  const { id } = request.params

  const manufacturer = await manufacturers.findOne({
    where: { id },
    include: [{ model: products }]
  })

  return response.send(manufacturer)
}

module.exports = { getAllManufacturers, getManufacturerByIdWithProducts }
