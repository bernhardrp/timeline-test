import "gantt-task-react/dist/index.css";

import { Gantt, ViewMode } from "gantt-task-react";
import { useState } from "react";
import { initTasks } from "./Helper.tsx";

function App() {
  const [tasks, setTasks] = useState<any>(initTasks());
  const [isChecked, _setIsChecked] = useState(true);
  let columnWidth = 115;

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
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
    </div>
  );
}

export default App;
