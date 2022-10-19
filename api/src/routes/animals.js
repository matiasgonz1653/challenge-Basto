const express = require("express");
const router = express.Router();
const {
    createAnimal,
    getAllAnimals,
    updateAnimal,
    deleteAnimal,
    getAnimalById
} = require("../controllers/animals");

//routers animal
router.post('/', createAnimal);
router.get('/all', getAllAnimals);
router.put('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);
router.get('/:id', getAnimalById);

module.exports = router;