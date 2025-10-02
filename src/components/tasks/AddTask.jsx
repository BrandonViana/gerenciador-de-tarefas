import { useState } from "react";
import Input from "../Input";
import Alert from "@mui/material/Alert";
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    if (!title.trim() || !description.trim()) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 text-blue-950 dark:bg-blue-950 dark:text-white transition rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={handleClick}
        className="btn bg-blue-950 text-white dark:bg-slate-200 dark:text-blue-950 px-4 py-2 rounded-md font-medium text-base 
        cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-105 dark:hover:bg-slate-200 hover:bg-blue-900 black:hover:bg- "
      >
        Adicionar Tarefa
      </button>
      {showAlert && (
        <Alert
          severity="info"
          sx={{
            color: "#1d3557",
            variant: "filled",
            borderColor: "#1d3557",
          }}
        >
          Por favor preencha os dois campos
        </Alert>
      )}
    </div>
  );
}

export default AddTask;
