export function initTasks() {
    const currentDate = new Date()
    const tasks = [
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 12, 0, 0),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 15, 0, 0),
        name: "Planned",
        id: "ProjectSample",
        progress: 36,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1,12, 0, 0),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 12, 30, 0),
        name: "Deboarding",
        id: "Task 0",
        progress: 100,
        type: "task",
        project: "ProjectSample",
        displayOrder: 2,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 12, 30, 0),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 13, 0, 0),
        name: "Cleaning",
        id: "Task 1",
        progress: 100,
        dependencies: ["Task 0"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 3,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 13, 0, 0),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 14, 0, 0),
        name: "Tanking",
        id: "Task 2",
        progress: 10,
        dependencies: ["Task 1"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 4,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 14, 0, 0),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 15, 0, 0),
        name: "Inspection",
        id: "Task 3",
        progress: 0,
        dependencies: ["Task 2"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 5,
      },
    ]
    return tasks
  }
  
  export function getStartEndDateForProject(tasks: any, projectId: any) {
    const projectTasks = tasks.filter((t: any) => t.project === projectId)
    let start = projectTasks[0].start
    let end = projectTasks[0].end
  
    for (let i = 0; i < projectTasks.length; i++) {
      const task = projectTasks[i]
      if (start.getTime() > task.start.getTime()) {
        start = task.start
      }
      if (end.getTime() < task.end.getTime()) {
        end = task.end
      }
    }
    return [start, end]
  }
  