const app = require('./server/api')
const config = require('./server/config')

app.listen(config.port,(err)=>{
    if(err){
        console.log("Error unable to start application");
    }
    else{
        console.log("Started node app on port #"+config.port);
    }
})