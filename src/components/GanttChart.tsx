// GanttChart.tsx

import React from 'react';
import './GanttChart.css';

interface Task {
  name: string;
  start: Date;
  end: Date;
}

interface GanttChartProps {
  tasks: Task[];
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks }) => {

  const thirtyMinutes = 30 * 60 * 1000;
  // Find the earliest and latest task start and end times
  const earliestStartTime = new Date(Math.min(...tasks.map(task => task.start.getTime())));
  var latestEndTime = new Date(Math.max(...tasks.map(task => task.end.getTime())));
  const minLatestEndTime = new Date( earliestStartTime.getTime() + (20 * thirtyMinutes));

  if(latestEndTime < minLatestEndTime){
    latestEndTime = minLatestEndTime;
  }

  const timeSlots: Date[] = [];
  for (let time = earliestStartTime.getTime(); time <= latestEndTime.getTime(); time += 30 * 60 * 1000) {
    timeSlots.push(new Date(time));
  }

  return (
    <div className="gantt-chart hide-scrollbar">
      <div >
        <div style={{paddingLeft:'2vw'}}>
          {tasks.map((task, index) => {
            const width = ((task.end.getTime() - task.start.getTime()) / thirtyMinutes) * 4 + 'vw';
            const marginLeft = ((task.start.getTime() - earliestStartTime.getTime()) / thirtyMinutes) * 4 + 'vw';
            
            return (
              <>
                <div className="horizontal-scale" style={{position: 'absolute'}}>
                  {timeSlots.map(() => (
                    <div className="gantt-time-scale"/>
                  ))}
                </div>
                <div key={index} className="gantt-task" style={{ width, marginLeft }}>
                  {task.name}
                </div>
              </>
              );
            })}
        </div>
      </div>
      <div className="horizontal-scale">
        {timeSlots.map((timeSlot, index) => (
          <div key={index} className="gantt-time-slot">
            {formatTime(timeSlot)}
          </div>
        ))}
      </div>
    </div>
  );
};

const formatTime = (time: Date): string => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default GanttChart;
