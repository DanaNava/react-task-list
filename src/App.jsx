//Importamos los componentes que vamos a utilizar
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

//Creamos el componente App
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "Nueva tarea"
    }])
  }

  return (
    <div>
      {/*Renderizamos los componentes que importamos*/}
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

//Exportamos el componente App para poder utilizarlo en otros archivos
export default App;
