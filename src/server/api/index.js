const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app =express()
const employee = require('./employee')


app.use(bodyParser.urlencoded({extended :false}))

app.use(bodyParser.json())

app.use(morgan('combined'))
  

app.use("/employee",employee)


module.exports= app