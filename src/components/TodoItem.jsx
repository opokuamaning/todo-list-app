import React, { useState } from "react";
import { FaTrashCan, FaCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({ text, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSaveEdit = () => {
    onEdit(editedText)
    setIsEdit(false);
  };
  return (
    <div className="todo-item">
      <div className="item">
        {isEdit ? (
          <div className="input-section">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleSaveEdit}>
              <FaCheck  />
            </button>
          </div>
        ) : (
          <>
            {text}{" "}
            <div className="icons">
              <FaRegEdit onClick={handleEdit} />
              <FaTrashCan onClick={onDelete} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
