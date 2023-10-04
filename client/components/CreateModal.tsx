import React from 'react';
import {useState} from 'react'

interface Props {
  setCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateModal: React.FC<Props> = ({ setCreateModal }) => {
  const [task, setTask] = useState<string>('')

  const sendTodo = async () => {

    try {
      const result = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({task})
      });
      if (!result.ok) {
        throw new Error('failed to create task')
      }
      const data = await result.json()

    } catch (error) {
      console.log('Error:', error);
    }

  }


  return (

    <>
    <div className='absolute inset-0 flex justify-center items-center z-10'>
      <div className='bg-white p-8 rounded-md'>
        <h1 className='text-slate-600 mb-3'>Create new task</h1>
        <input onChange={(e) => setTask(e.target.value)} className='border rounded-md px-2 py-1' type='text' placeholder='finish this project...' />
        <div className='mt-3'>
        <button onClick={sendTodo} className='border rounded-md px-1 py-1 border-blue-500 bg-blue-500 hover:bg-blue-600 text-white mr-1'>Create</button>
        <button onClick={() => setCreateModal(false)} className='border border-blue-500 rounded-md px-1 py-1 bg-white hover:bg-gray-300 hover:border-gray-300 text-blue-500 hover:text-white'>Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateModal;