const express = require('express');
const bodyParser = require('body-parser')
const detailsRoutes = require('./server/api')
const config =require('./server/config')
const morgan =require('morgan')
const passport = require('passport');

const app =express()

app.use(bodyParser.urlencoded({extended :false}))

app.use(bodyParser.json())

// Configure middleware
app.use(morgan('combined'))


app.use("/employee",detailsRoutes(express.Router()))


app.listen(config.port,(err)=>{
    if(err){
        console.log("Error unable to start application");
    }
    else{
        console.log("Started node app on port #"+config.port);
    }
})