const express = require('express');
const detailRepo = require('../repository/employee-repo')
const employeeRouter =express.Router();

employeeRouter.get("/details",(req,res,next)=>{
    detailRepo.getAll((data)=>{
        if(!data){
            next({"status":204,"message":"No data found"})
        }
        res.send(data);
    })
})
employeeRouter.post("/details",(req,res,next)=>{
   detailRepo.create(req.body,(employees)=>{
        res.send(employees)
   })
})
employeeRouter.put("/details-put",(req,res,next)=>{
    res.send("put inside employeee")
})

employeeRouter.delete("/details-delete",(req,res,next)=>{
    res.send("delet inside employeee")
})
module.exports =employeeRouter