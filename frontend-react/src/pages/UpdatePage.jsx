
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [unit, setUnit] = useState("kgs");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchExercise() {
            try {
                const response = await fetch(`/exercises/${id}`);
                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }

                const ex = await response.json();

                setName(ex.name ?? "");
                setReps(ex.reps ?? "");
                setWeight(ex.weight ?? "");
                setUnit(ex.unit ?? "kgs");

                const dateOnly = ex.date ? ex.date.split("T")[0] : "";
                setDate(dateOnly);
            }   catch (err) {
                console.error(err);
                setError("Could not load exercise for editing.");
            }
        }

        fetchExercise();
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        const body = {name, reps, weight, unit, date};

        try {
            const response = await fetch(`/exercises/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                alert(`Failed to edit exercise! Status code: ${response.status}`);
                return;
            }

            alert("Exercise updated successfully.");
            navigate("/");
        }   catch (err) {
            console.error(err);
            setError("Could not update exercise. Please check your input.");
        } 
    }

    return (
        <>
            <h2>Edit Exercise</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <p>
                    <label> Name:
                        <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        />
                    </label>
                </p>

                <p>
                    <label> Reps:
                        <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)}
                        required
                        />
                    </label>
                </p>

                <p>
                    <label> Weight:
                        <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        required
                        />
                    </label>
                </p>

                <p>
                    <label> Unit:
                        <select
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        required
                        >
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                        <option value="miles">miles</option>
                        </select>
                    </label>
                </p>

                <p>
                    <label> Date:
                        <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                        />
                    </label>
                </p>

                <button type="submit">Update Exercise</button>
            </form>
        </>
    );
}

export default UpdatePage;