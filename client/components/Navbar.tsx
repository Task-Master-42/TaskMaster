import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
     <div className='flex p-4 border-b-2 shadow bg-indigo-500'>
      <div className='ml-12 mr-auto font-semibold text-slate-200'>TaskMaster</div>
      <ul className='flex mr-12'>
        <li className='mr-5 text-slate-200'>Home</li>
        <li className='mr-5 text-slate-200'>Dashboard</li>
        <li className='mr-5 text-slate-200'>Logout</li>
      </ul>
     </div>
    </>
  )
}

export default Navbar;