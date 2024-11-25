const mongoose = require('mongoose');

const MaterialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unite:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    unitePrice:{
        type: Number,
        required: true
    },
    
});

const Materials = mongoose.model('Materials', MaterialsSchema);

module.exports = Materials;