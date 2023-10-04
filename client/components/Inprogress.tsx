import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task.tsx';
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface InProgressContainerProps {
  tasks: string[];
}

const InProgressContainer: React.FC<InProgressContainerProps> = ({ tasks }) => {

  return (
    <Droppable droppableId="inprogress">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="inprogress"
          className="bg-purple-500 h-[32rem] w-64 rounded-md mr-4"
        >
          <h1 className="text-slate-200 text-sm m-3"><span><AiOutlineLoading3Quarters /></span>IN PROGRESS</h1>
          {tasks.map((task, index) => (
            <Task key={task} taskId={task} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default InProgressContainer;
