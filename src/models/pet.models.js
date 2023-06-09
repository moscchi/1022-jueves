const { Schema, mongoose } = require("mongoose");

const PetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatirio'],
    },
    animal: {
        type: String,
        required: [true, 'El tipo de animal es obligatorio.']
    }, 
    createAt: {
        type: Date,
        default: Date.now
    }
})

const PetModel = mongoose.model('Pet', PetSchema);
module.exports = PetModel;