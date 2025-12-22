
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function ExerciseRow({ exercise }) {
    const handleDelete = async () => {
        await fetch(`/exercises/${exercise._id}`, { method: "DELETE" });
        window.location.reload();
    };

    return (
        <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.unit}</td>
        <td>{exercise.date?.split("T")[0]}</td>

        <td className="action-buttons">
                <Link to={`/edit/${exercise._id}`}>
                    <button className="icon-btn edit-btn">
                        <FaEdit className="icon" /> Edit
                    </button>
                </Link>

                <button className="icon-btn delete-btn" onClick={handleDelete}>
                    <FaTrash className="icon" /> Delete
                </button>
            </td>
        </tr>
    );
}

export default ExerciseRow;