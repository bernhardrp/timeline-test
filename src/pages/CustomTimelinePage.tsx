import GanttChart from '../components/GanttChart';

const tasks = [
  { name: 'Task 1', start: new Date('2023-11-13T08:00:00'), end: new Date('2023-11-13T12:00:00') },
  { name: 'Task 2', start: new Date('2023-11-13T12:00:00'), end: new Date('2023-11-13T13:00:00') },
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