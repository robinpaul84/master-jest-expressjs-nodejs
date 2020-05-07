const request = require('supertest');
const app = require('../../app');
const mongodb = require('../../mongodb/mongodb.utils');

const contractUrl = "/api/contacts"

describe("Negative Scenarios -> Validate " + contractUrl, () => {

    beforeEach(async () => {
        await mongodb.connect();
        // delete the collection
        await mongodb.dropCollection("myemployee_"+ process.env.NODE_ENV);
    });

    afterEach(async () => {
        // if you dont disconnect then jest test wont exit eventhough test runs succesfully
        await mongodb.disconnect();
    })

    test("POST " + contractUrl + " create employee , no password", async () => {
        const response = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Tim",
                            email: "Tim@gmail.com"
                        });
        expect(response.statusCode).toBe(400);
    });

    test("POST " + contractUrl + " create employee with existing email", async () => {
        let response = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Tim",
                            email: "Tim@gmail.com",
                            password: "dell123567$"
                        });
        expect(response.statusCode).toBe(201);
        response = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Tim2",
                            email: "Tim@gmail.com",
                            password: "d2ll123567$"
                        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual('Email you provided already exist in our database');
    });
   

    test("GET " + contractUrl + " Get all employees return 404 when empty", (done) => {
        request(app)
        .get(contractUrl)
        .expect(404)
        .then(response => {
            // jest wont exit if done() is not called
            done();
        });
    });

    test("GET " + contractUrl + " Get Employee by ID , with wrong employee id", async () => {
        const responseOfGet = await request(app)
                        .get(contractUrl + "/" + "5eb079566c5baff86c000efd");
        console.log(responseOfGet.body)
        expect(responseOfGet.statusCode).toBe(404);

    });

    test("GET " + contractUrl + " Get Employee by ID , with invalid employee id format", async () => {
        const responseOfGet = await request(app)
                        .get(contractUrl + "/" + "123");
        console.log(responseOfGet.body)
        expect(responseOfGet.statusCode).toBe(500);

    });

    test("PUT"  + contractUrl + " Update Employee by ID , with wrong employee id", async () => {
        const responseOfGet = await request(app)
                        .put(contractUrl + "/" + "5eb079566c5baff86c000efd")
                        .send({gender:"female"});
        console.log(responseOfGet.body)
        expect(responseOfGet.statusCode).toBe(400);

    });
    test("DELETE " + contractUrl + " Employee for wrong ID", async () => {
        const responseOfCreate = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Sera1",
                            email: "Sera1@gmail.com",
                            password: "ttt123567$"
                        });
        expect(responseOfCreate.statusCode).toBe(201);
        const responseOfDelete = await request(app)
                        .delete(contractUrl + "/" + "5eb079566c5baff86c000efd")
                        .send({employee_id:responseOfCreate.body._id});
        expect(responseOfDelete.statusCode).toBe(404);
        expect(responseOfDelete.body).toEqual('User Not Found')
    });


    test("POST " + contractUrl + "/login " + "Employee Login with wrong email", async () => {
        const responseOfCreate = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Sera3",
                            email: "Sera3@gmail.com",
                            password: "ttt123567$",
                            gender: "female"
                        });
        expect(responseOfCreate.statusCode).toBe(201);
       
        const responseOfLogin = await request(app)
                        .post(contractUrl + "/login")
                        .send({
                            name:"Sera3",
                            email: "wrong@gmail.com",
                            password: "ttt123567$",
                            gender: "female"
                        });
        expect(responseOfLogin.statusCode).toBe(400);
        expect(responseOfLogin.body).toEqual('Email you provided doesnt exist in our database')
        
    });

    test("POST " + contractUrl + "/login " + "Employee Login with wrong password", async () => {
        const responseOfCreate = await request(app)
                        .post(contractUrl)
                        .send({
                            name:"Sera3",
                            email: "Sera3@gmail.com",
                            password: "ttt123567$",
                            gender: "female"
                        });
        expect(responseOfCreate.statusCode).toBe(201);
       
        const responseOfLogin = await request(app)
                        .post(contractUrl + "/login")
                        .send({
                            name:"Sera3",
                            email: "Sera3@gmail.com",
                            password: "ttt123567$1",
                            gender: "female"
                        });
        expect(responseOfLogin.statusCode).toBe(400);
        console.log(responseOfLogin)
        expect(responseOfLogin.text).toEqual('you provided an invalid password , please try again')
        
    });
});