import React, { useState } from 'react';
import CreateModal from './CreateModal.tsx';
import Task from './Task.tsx';
import { Droppable } from 'react-beautiful-dnd';
import DoneContainer from './Done.tsx';
import InProgressContainer from './Inprogress.tsx';
import TodoContainer from './Todo.tsx';

const TaskContainer: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);

  return (
    <>
      {createModal && <CreateModal setCreateModal={setCreateModal} />}
      <button
        onClick={() => {
          setCreateModal(!createModal);
        }}
        className="ml-8 mt-3 mb-3 border px-4 py-1 bg-blue-500 rounded-md shadow hover:bg-blue-600 text-white"
      >
        Create
      </button>

      <div className="ml-8">
        <div className="flex">
          <TodoContainer />
          <InProgressContainer />
          <DoneContainer />
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
