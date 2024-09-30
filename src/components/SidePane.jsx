import React from "react";
import Button from "./Button";

function SidePane({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl overflow-hidden">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((ele) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover: text-stone-200 hover:bg-stone-800";
          if (ele.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={ele.id}>
              <button
                onClick={() => onSelectProject(ele.id)}
                className={cssClasses}
              >
                {ele.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SidePane;
