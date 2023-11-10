import "gantt-task-react/dist/index.css";

import { Gantt, Task, ViewMode } from "gantt-task-react";
import { useState } from "react";
import { getStartEndDateForProject, initTasks } from "./Helper.tsx";

function App() {
  const [tasks, setTasks] = useState<any>(initTasks());
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 115;

  const handleTaskChange = (task: any) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map((t: any) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t: any) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t: any) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: any) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t: any) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: any) => {
    setTasks(tasks.map((t: any) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: any) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: any, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: any) => {
    setTasks(tasks.map((t: any) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div>
      <h3>Gantt Task React</h3>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Hour}
        // onDateChange={handleTaskChange}
        // onDelete={handleTaskDelete}
        // onProgressChange={handleProgressChange}
        // onDoubleClick={handleDblClick}
        // onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
    </div>
  );
}

export default App;
