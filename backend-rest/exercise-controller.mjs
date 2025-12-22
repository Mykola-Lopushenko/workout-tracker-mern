
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercise-model.mjs';

const app = express();
app.use(express.json())

const PORT = process.env.PORT;

function isValid(body) {
    const {name, reps, weight, unit, date} = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) return false;
    
    const repsNum = Number(reps);
    if (!Number.isInteger(repsNum) || repsNum <= 0) return false;

    const weightNum = Number(weight);
    if (!Number.isInteger(weightNum) || weightNum < 0) return false;

    const units = ['kgs', 'lbs', 'miles'];
    if (!units.includes(unit)) return false;


    if (typeof date !== 'string' && !(date instanceof Date)) return false;
    const time = Date.parse(date);
    if (Number.isNaN(time)) return false;

    return true;
}

app.listen(PORT, async () => {
    await exercises.connect();
    console.log(`Server listening on port ${PORT}...`);
});

app.post('/exercises', asyncHandler(async (req, res) => {
    if (!isValid(req.body)) {
        return res.status(400).json({Error: 'Invalid request'});
    }

    const doc = await exercises.createExercise(req.body);
    return res.status(201).json(doc);
})
);

app.get('/exercises', asyncHandler(async (req, res) => {
    const docs = await exercises.getExercises();
    return res.json(docs);
})
);

app.get('/exercises/:id', asyncHandler(async (req, res) => {
    const doc = await exercises.getExerciseById(req.params.id);
    if (!doc) {
        return res.status(404).json({Error: 'Not found'});
    }
    return res.json(doc);
})
);

app.put('/exercises/:id', asyncHandler(async (req, res) => {
    if (!isValid(req.body)) {
        return res.status(400).json({Error: 'Invalid request'});
    }

    const updated = await exercises.updateExerciseById(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({Error: 'Not found'});
    }

    return res.json(updated);
})
);

app.delete('/exercises/:id', asyncHandler(async (req, res) => {
    const count = await exercises.deleteExerciseById(req.params.id);
    if (count === 0) {
        return res.status(404).json({Error: 'Not found'});
    }

    return res.status(204).send();
})
);