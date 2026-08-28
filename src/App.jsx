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

  return (
    <div>
      {/*Renderizamos los componentes que importamos*/}
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

//Exportamos el componente App para poder utilizarlo en otros archivos
export default App;
