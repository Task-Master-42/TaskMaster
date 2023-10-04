import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task.tsx';

interface DoneContainerProps {
  tasks: string[];
}

const DoneContainer: React.FC<DoneContainerProps> = ({ tasks }) => {
  return (
    <Droppable droppableId="done">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="done"
          className="bg-gray-200 h-[32rem] w-64 rounded-md mr-4"
        >
          <h1 className="text-slate-500 text-sm m-3">TO DO</h1>
          {tasks.map((task, index) => (
            <Task key={task} taskId={task} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};


export default DoneContainer;