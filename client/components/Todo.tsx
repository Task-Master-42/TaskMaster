import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task.tsx';

interface TodoContainerProps {
  tasks: string[];
}

//Receive the array of tasks info then create task components based on the arrays
const TodoContainer: React.FC<TodoContainerProps> = ({ tasks }) => {
  return (
    <Droppable droppableId="todo">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="todo"
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

export default TodoContainer;
