import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { initTasks } from "./Helper2";
import "gantt-task-react/dist/index.css";

type TaskListTableProps = {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;   
  onExpanderClick: (task: Task) => void;
};

const TaskListTable = ({
  tasks,
  rowWidth,
  rowHeight,
  onExpanderClick,
}: TaskListTableProps) => {
  return (
    <div style={{ border: "1px solid #dfe1e5" }}>
      {tasks.map((item, i) => {
        const isProject = item.type === "project";
        return (
          <div
            key={item.id}
            style={{
              height: rowHeight,
              width: rowWidth,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: isProject ? "pointer" : "auto",
              fontFamily: "sans-serif",
              background: i % 2 === 0 ? "#ffffff" : "#f4f5f7",
              padding: 10,
              paddingLeft: isProject ? 10 : 40
            }}
          >
            <p
              onClick={() => onExpanderClick(item)}
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0
              }}
            >
              {isProject ? "> " : ""}
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};


const GanttTaskReact2Page = () => {
  const [view, _setView] = React.useState<ViewMode>(ViewMode.Hour);
  const [tasks, setTasks] = React.useState<any[]>(initTasks());
  const [isChecked, _setIsChecked] = React.useState(true);
  let columnWidth = 105;

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <div className="Wrapper">
      <h3>Gantt Task React 2</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "295px" : ""}
        columnWidth={columnWidth}
        rowHeight={40}
        TaskListHeader={({ headerHeight }) => (
          <div
            style={{
              height: headerHeight,
              fontFamily: "sans-serif",
              fontWeight: "bold",
              paddingLeft: 10,
              margin: 0,
              marginBottom: -1,
              display: "flex",
              alignItems: "center"
            }}
          >
            Jobs
          </div>
        )}
        TaskListTable={(props) => (
          <TaskListTable {...props}/>
        )}
      />
    </div>
  );
};

export default GanttTaskReact2Page;
