function Modal({
    type = "success",
    title,
    message,
    onClose,
    onConfirm,
}) {
    const isDelete = type === "delete";

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <div className={`modal-icon ${isDelete ? "danger" : "success"}`}>
                    {isDelete ? "!" : "✓"}
                </div>

                <h3>{title}</h3>
                <p>{message}</p>

                <div className="modal-actions">
                    {isDelete ? (
                        <>
                            <button
                                type="button"
                                className="modal-cancel"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="modal-delete"
                                onClick={onConfirm}
                            >
                                Delete
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="modal-done"
                            onClick={onClose}
                        >
                            Done
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;