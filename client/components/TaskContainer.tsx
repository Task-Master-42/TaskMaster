import React, { useState } from 'react';
import CreateModal from './CreateModal.tsx';
import Task from './Task.tsx'
import { Droppable } from 'react-beautiful-dnd';

const TaskContainer: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);




  return (
    <>
   {createModal && <CreateModal setCreateModal={setCreateModal}/>}
    <button onClick={() => {setCreateModal(!createModal)}} className='ml-8 mt-3 mb-3 border px-4 py-1 bg-blue-500 rounded-md shadow hover:bg-blue-600 text-white'>Create</button>
    <div className='ml-8'>
      <div className='flex'>
        <div id='todo' className='bg-gray-200 h-[32rem] w-64 rounded-md mr-4'>
          <h1 className='text-slate-500 text-sm m-3'>TO DO</h1>

        </div>
        <Droppable droppableId="Progress">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} id='progress' className='bg-gray-200 h-[32rem] w-64 rounded-md mr-4'>
            <h1 className='text-slate-500 text-sm m-3'>IN PROGRESS</h1>
            <Task />
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="Done">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} id='done' className='bg-gray-200 h-[32rem] w-64 rounded-md mr-4'>
            <h1 className='text-slate-500 text-sm m-3'>DONE</h1>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
    </>
  )
}

export default TaskContainer;