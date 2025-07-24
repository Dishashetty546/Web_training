import { useState } from "react";

function AddingNewUser() {
  const [names, setnames] = useState([
    { id: 111, name: "Disha" },
    { id: 112, name: "Shetty" },
    { id: 113, name: "Trupthi" },
  ]);

  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");

  const handleDeleteButton = (id) => {
    const newNameList = names.filter((c) => c.id !== id);
    setnames(newNameList);
  };

  const handleAddUser = (e) => {
    e.preventDefault();

  
    if (!newId || !newName) {
      alert("Provide Both ID and Name");
      return;
    }


    if (names.some((user) => user.id === Number(newId))) {
      alert("Already exist");
      return;
    }


    setnames([...names, { id: Number(newId), name: newName }]);

  
    setNewId("");
    setNewName("");
  };

  return (
    <div>
      <h1>Name List :</h1>
      <ul>
        {names.map((c) => (
          <div key={c.id}>
            <li>Id: {c.id}</li>
            <li>Name: {c.name}</li>
            <button onClick={() => handleDeleteButton(c.id)}>Delete</button>
          </div>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="number"
          placeholder="ID"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddingNewUser;
