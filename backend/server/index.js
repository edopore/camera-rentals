const express = require("express");
const server = express();
const cors = require("cors");
const {Camera,Customer,Film,Rental} = require("../models");

server.use(express.json());
server.use(express.static(__dirname+"/../public"));
server.use(cors());


//cameras
server.get("/api/v1/cameras",async (request,response) => {
    let cameras = await Camera.find();
    return response.send({error:false,data:cameras});
})

server.get("/api/v1/cameras/:id",async (request,response) => {
    const {id} = request.params;
    let camera = await Camera.findById(id);
    return response.send({error:false, data:camera});
})


//films
server.get("/api/v1/films",async (request,response) => {
    let films = await Film.find();
    return response.send({error:false,data:films});
})

//rentals
server.get("/api/v1/rentals",async (request,response) => {
    let rentals = await Rental.find();
    return response.send({error:false,data:rentals});
})

server.get("/api/v1/rentals/:id",async (request,response) => {
    const {id} = request.params;
    let rental = await Rental.findById(id);
    return response.send({error:false, data:rental});
})

server.post("/api/v1/rentals",async (request,response) => {
    const {customer_id} = request.body;
    let customer_rental = await Rental.findOne({customer_id: customer_id});
    if(!customer_rental){
        console.log("Está disponible");
        Rental.create(request.body).then(()=>{
            console.log("rental created")
        }).catch(console.log)
        return response.status(201).send("Camara alquilada correctamente");
    }
    return response.send({error:"Camara no puede ser alquilada"});
})

//customers
server.get("/api/v1/customers/:id",async (request,response) => {
    console.log(request.params)
    const {id} = request.params;
    let customer = await Customer.findById(id);
    return response.send({error:false, data:customer});
})

server.get("/api/v1/customers",async (request,response) => {
    let customers = await Customer.find();
    return response.send({error:false,data:customers});
})

server.post("/api/v1/customers",async (request,response)=>{
    console.log(request.body);
    Customer.create(request.body).then(()=>{
        console.log("customer created");
    }).catch(console.log)
    response.send("received");
})

module.exports = server;
