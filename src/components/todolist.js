import React, { useState } from "react";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (!inputText.trim()) return;

    setItems([...items, inputText]);
    setInputText("");
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
  };

  const handleSave = (index) => {
    const updated = [...items];
    updated[index] = editText;
    setItems(updated);
    setEditIndex(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>Todo List</h3>

      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button onClick={handleAdd} style={{ marginLeft: "10px", padding: "8px" }}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;