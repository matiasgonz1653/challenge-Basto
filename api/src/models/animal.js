const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    ID_SENASA: {
        type: String,
        unique: true,
        required: true,
        maxLength: 16,
    },
    type: {
        type: String,
        required: true,
        enum: ["Novillo", "Toro", "Vaquillona"],
    },
    weight: {
        type: Number,
        required: false,
    },
    paddockName: {
        type: String,
        required: true,
        maxlength: 200,
    },
    deviceType: {
        type: String,
        required: true,
        enum: ["COLLAR", "CARAVANA"],
    },
    deviceNumber: {
        type: String,
        required: true,
        maxlength: 8,
    }
},
    { timestamps: { createdAt: true, updatedAt: true } }
);
module.exports = mongoose.model("Animal", animalSchema);