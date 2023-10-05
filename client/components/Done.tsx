import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task.tsx';
import { MdDoneOutline } from "react-icons/Md"

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
          className="bg-purple-600 h-[32rem] w-64 rounded-md mr-4"
        >
          <h1 className="text-slate-200 text-sm m-3"><MdDoneOutline />DONE</h1>
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