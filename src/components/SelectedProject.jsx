import React from "react";
import Tasks from "./Tasks";

function SelectedProject({ project, onProjectDelete, tasks, onDelete, onAdd }) {
  const formateedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onProjectDelete}
            className="text-stone-600 hover:text-stone-950 bg-stone-400 p-2 rounded-md"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 txt-stone-400">{formateedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onDelete={onDelete} onAdd={onAdd} />
    </div>
  );
}

export default SelectedProject;
