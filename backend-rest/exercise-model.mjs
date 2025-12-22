
import mongoose from 'mongoose';
import 'dotenv/config';

let connection = undefined;


async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true, min: 1},
    weight: {type: Number, required: true, min: 0},
    unit: {type: String, required: true, enum: ['kgs', 'lbs', 'miles']},
    date: {type: Date, required: true, default: Date.now},
},
    {
        collection: 'exercises',
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

// Create exercise
async function createExercise(data) {
    const exercise = new Exercise(data);
    return await exercise.save();
}

// Read exercises
async function getExercises(filter = {}) {
    return await Exercise.find(filter).exec();
}

// Read exercise by id
async function getExerciseById(id) {
    return await Exercise.findById(id).exec();
}

// Update exercise by id
async function updateExerciseById(id, updates) {
    const options = {
        new: true,
        runValidators: true,
    };
    return await Exercise.findByIdAndUpdate(id, updates, options).exec();
}

// Delete exercise by id
async function deleteExerciseById(id) {
    const result = await Exercise.deleteOne({ _id: id }).exec();
    return result.deletedCount;
}

export {
    connect,
    createExercise,
    getExercises,
    getExerciseById,
    updateExerciseById,
    deleteExerciseById,
};