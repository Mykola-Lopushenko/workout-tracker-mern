
import { useEffect, useState } from "react";
import ExerciseTable from "../components/ExerciseTable";

function RetrievePage() {
    const [exercises, setExercises] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchExercises() {
        try {
            const response = await fetch("/exercises");
            if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
            }
            const data = await response.json();
            setExercises(data);
        }   catch (err) {
            console.error(err);
            setError("Could not load exercises from the server.");
        }
        }

        fetchExercises();
    }, []);

    return (
        <>
        <h2>All Exercises</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {exercises.length === 0 && !error && (
            <p>No exercises found. Try adding one on the Create page.</p>
        )}

        {exercises.length > 0 && <ExerciseTable exercises={exercises} />}
        </>
    );
}

export default RetrievePage;