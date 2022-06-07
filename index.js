const express = require('express')
const { getAllManufacturers, getManufacturerByIdWithProducts } = require('./controllers/manufacturers')
const { getAllProductsWithManufacturers, getProductByIdWithManufacturer } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:id', getManufacturerByIdWithProducts)

app.get('/products', getAllProductsWithManufacturers)

app.get('/products/:id', getProductByIdWithManufacturer)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('app is up http://localhost:1337 ...')
})


