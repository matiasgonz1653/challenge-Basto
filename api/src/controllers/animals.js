const animalSchema = require('../models/animal');

//create animal
const createAnimal = (req, res) => {
    console.log(req.body);
    const animal = animalSchema(req.body);
    animal.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

//get all animals
const getAllAnimals = (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

//update animal by id
const updateAnimal = (req, res) => {
    //req.body = ID_SENASA, type, weight, paddockName, deviceType, deviceNumber
    const { id } = req.params;
    console.log(req.body);
    animalSchema.findByIdAndUpdate(id, req.body)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

//delete animal by id 
const deleteAnimal = (req, res) => {
    const { id } = req.params;
    animalSchema.findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

//get animal by id for 
const getAnimalById = (req, res) => {
    const { id } = req.params;
    animalSchema.find(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createAnimal,
    getAllAnimals,
    updateAnimal,
    deleteAnimal,
    getAnimalById
}