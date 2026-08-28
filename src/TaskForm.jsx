function TaskForm() {
  return (
    //No ocupa estar dentro de un div, ya que solo hay un elemento, el form.
    <form>
      <input placeholder="Escribe tu tarea" />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
