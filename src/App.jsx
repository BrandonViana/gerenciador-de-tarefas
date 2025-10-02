import { useEffect, useState } from "react";
import AddTask from "./components/tasks/AddTask";
import Tasks from "./components/tasks/Tasks";
import { v4 } from "uuid";
import TailwindSwitch from "./components/TailwindSwitch"; // importa o switch

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-w-screen min-h-screen bg-blue-950 dark:bg-blue-50 flex justify-center items-center p-4">
      <div className="w-full max-w-[500px] space-y-4">
        <div className="flex items-center justify-center p-6">
          <div className="absolute top-2 right-2 sm:top-4 sm:left-4">
            <TailwindSwitch />
          </div>
          <h1 className="text-3xl text-slate-100 dark:text-blue-950 font-bold">
            Gerenciador de Tarefas
          </h1>
        </div>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
};

export default App;
