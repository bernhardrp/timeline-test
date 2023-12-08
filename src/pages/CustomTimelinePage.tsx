import GanttChart from '../components/GanttChart';

const tasks = [
  { category: 'Planned', name: 'Task 1', start: new Date('2023-11-13T08:00:00'), end: new Date('2023-11-13T12:00:00'), progress: 100 },
  { category: 'Actual', name: 'Task 1', start: new Date('2023-11-13T08:00:00'), end: new Date('2023-11-13T11:00:00'), progress: 90 },
  // Add more tasks as needed
];

const CustomTimelinePage = () => {
    return (
        <>
            <h1>Custom Timeline</h1>
            <GanttChart tasks={tasks} />
        </>
    )
}

export default CustomTimelinePage