
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [unit, setUnit] = useState("kgs");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        const body = {name, reps, weight, unit, date};

        try {
            const response = await fetch("/exercises", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body),
            });

            if (response.status !== 201) {
                alert(`Failed to create exercise! Status code: ${response.status}`);
                return;
            }

            alert("Exercise created!");
            navigate("/");
        }   catch (err) {
            console.error(err);
            setError("Error! Exercise was not created.");
        }
    }

    return (
        <>
        <h2>Create Exercise</h2>

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

            <button type="submit">Save Exercise</button>
        </form>
        </>
    );
}

export default CreatePage;