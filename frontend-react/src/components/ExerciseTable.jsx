
import ExerciseRow from "./ExerciseRow";

function ExerciseTable({ exercises }) {
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {exercises.map((ex) => (
            <ExerciseRow key={ex._id} exercise={ex} />
            ))}
        </tbody>
        </table>
    );
}

export default ExerciseTable;