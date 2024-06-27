import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md space-y-4 bg-stone-100">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center py-4 px-4 py-2 rounded-md shadow-sm"
            >
              <span>{task.text}</span>
              <button
                className="ml-4 text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
