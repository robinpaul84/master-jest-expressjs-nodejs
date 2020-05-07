
const controller = require('../controller/employee.controller')
let router = require('express').Router();
const { verifytoken } = require('../routes/jwt-token-verify')

router.get('/', (req,res)=>{
    res.json({
        status: 'API is working',
        message: "Hoi Welcome to the employe api router , here we define all functions"
    })
})

router.post('/contacts', controller.createEmployee);
router.get('/contacts', controller.getAllEmployees);
router.get('/contacts', controller.getAllEmployees);
router.get('/contacts/:employee_id', controller.getEmployeeById);
router.put('/contacts/:employee_id',
            // uncomment below function 'verifytoken' if you want to verify jwt token , 
            //make sure you pass the jwt token that you got by calling loginEmployee
            //verifytoken, 
            controller.updateEmployeeById);
router.delete('/contacts/:employee_id', controller.deleteEmployeeById);
router.post('/contacts/login', controller.loginEmployee);

module.exports = router;