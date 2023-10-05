import React, { useState } from 'react';
import CreateModal from './CreateModal.tsx';
import Task from './Task.tsx';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import DoneContainer from './Done.tsx';
import InProgressContainer from './Inprogress.tsx';
import TodoContainer from './Todo.tsx';

const TaskContainer: React.FC = () => {
 const [createModal, setCreateModal] = useState<boolean>(false);
  //Run get all messages into array

  //Run through all the messages, setting them into an object with {Name: String, Description:string}, that is sorted into the 3 arrays based on column_id

  const [tasks, setTasks] = useState<{ [key: string]: string[] }>({
    todo: ['task1'],
    inprogress: [],
    done: [],
  });

  //Checks and reorganize drag and dropped tasks
   const onDragEnd = (result: DropResult) => {
     if (!result.destination) return; // Task dropped outside of droppable area

     //Where the dragged task began
     const source = result.source.droppableId;
     //Where the dragged task was dropped
     const destination = result.destination.droppableId;
     //The id of the where the destination was
     const taskId = result.draggableId;

     //Make sure that the task is actually in a different spot
     if (source === destination) return;
     //Deconstruct the tasks
     const updatedTasks = { ...tasks };
     //Update the tasks by checking for each task whose id doesnt match the task id by putting it in the correct array
     updatedTasks[source] = tasks[source].filter((id) => id !== taskId);
     updatedTasks[destination] = [...tasks[destination], taskId];
    //Updates the tasks stats
     setTasks(updatedTasks);
   };

  return (
    <>
      {createModal && <CreateModal setCreateModal={setCreateModal} />}
      <button
        onClick={() => {
          setCreateModal(!createModal);
        }}
        className="ml-8 mt-3 mb-3 border px-4 py-1 bg-rose-500 rounded-md shadow hover:bg-rose-600 text-white"
      >
        Create
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="ml-8">
          <div className="flex">
            <TodoContainer tasks={tasks.todo} />
            <InProgressContainer tasks={tasks.inprogress} />
            <DoneContainer tasks={tasks.done} />
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskContainer;
