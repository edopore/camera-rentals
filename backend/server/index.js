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
    if(!cameras){
       return response(404).send({message:"There's no cameras available"}); 
    }
    return response.status(200).send({error:false,data:cameras});
})

server.get("/api/v1/cameras/:id",async (request,response) => {
    const {id} = request.params;
    let camera = await Camera.findById(id);
    if(!camera){
        return response.status(404).send({message:"The camera does not exist"});
    }
    return response.status(200).send({error:false, data:camera});
})

//films
server.get("/api/v1/films",async (request,response) => {
    let films = await Film.find();
    if(!films){
        return response.status(404).send({message:"There's no films available"})
    }
    return response.status(200).send({data:films});
})
server.get("/api/v1/films/:id",async (request,response) => {
    const {id} = request.params;
    let film = await Film.findById(id);
    if(!film){
        return response.status(404).send({message:"The film does not exist"})
    }
    return response.status(200).send({data:film});
})

//rentals
server.get("/api/v1/rentals",async (request,response) => {
    let rentals = await Rental.find();
    if(!rentals){
        return response.status(404).send({message:"There's no leases available"})
    }
    return response.send({data:rentals});
})

server.get("/api/v1/rentals/:id",async (request,response) => {
    const {id} = request.params;
    let rental = await Rental.findById(id);
    if(!rental){
        return response.status(404).send({message: "The lease does no exist"})
    }
    return response.status(200).send({data:rental});
})

server.post("/api/v1/rentals",async (request,response) => {
    const {customer_id} = request.body;
    let customer_rental = await Rental.findOne({customer_id: customer_id});
    if(!customer_rental){
        Rental.create(request.body).then(()=>{
            console.log("lease created")
        }).catch(console.log)
        return response.status(201).send("Camera leased successfully");
    }
    return response.send({message:"Camera can not be leased"});
})

//customers
server.get("/api/v1/customers/:id",async (request,response) => {
    console.log(request.params)
    const {id} = request.params;
    let customer = await Customer.findById(id);
    if(!customer){
        return response.status(404).send({message:"The customer does not exist"})
    }
    return response.status(200).send({data:customer});
})

server.get("/api/v1/customers",async (request,response) => {
    let customers = await Customer.find();
    if(!customers){
        return response.status(404).send({message:"There's no customers available"})
    }
    return response.status(200).send({data:customers});
})

server.post("/api/v1/customers",async (request,response)=>{
    console.log(request.body);
    const {nuip} = request.body;
    let customer = await Customer.findOne({nuip:nuip})
    console.log(customer)
    if(!customer){
        Customer.create(request.body).then(()=>{
        console.log("customer created successfully");
        }).catch(console.log);
        return response.status(201).send({message:"customer created successfully"}); 
    }
    return response.send({message:"Customer cannot be created, customer already exist"})
})

module.exports = server;
