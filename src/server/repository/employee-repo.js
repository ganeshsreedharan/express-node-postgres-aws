const Employee = require("../models")['Employee']

const EmployeeRepo = {
    getAll : (callback)=>{
        Employee.findAll().then(data=> {
            callback(data) 
      })
    },
    create : (body,callback) => {
        Employee.create(body).then((employees)=>{
            callback(employees);
        })
    },
    getById : (id,callback)=>{
        Employee.findByPk(id).then((employee)=>{
            callback(employee);
        }) 
    }
    
} 
module.exports =EmployeeRepo;