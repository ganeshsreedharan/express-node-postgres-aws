
const errorHandler = require("./error-handler")
const Employee = require('../repository/employee-repo')
const employee = require("../models/employee")

module.exports = (router ) =>{

    router.get("/details",(req, res, next) =>{
        Employee.getAll(users=>res.send(users))
    })
    
    router.get("/details/:id", (req, res, next) =>{
       Employee.getById(req.params.id,(employee)=>req.send(employee))
    })
    
    router.post("/details", (req, res, next) =>{
        Employee.create(req.body,(response)=>{
            res.send(response);
        })
    })
    
    router.put("/details/", (req, res, next) =>{})
    
    router.delete("/details/:id", (req, res, next) =>{})
    
    router.delete("/details/", (req, res, next) =>{})
    
    router.use(errorHandler)

    return router
}

