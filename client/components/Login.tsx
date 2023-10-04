import React, {FC} from 'react';

const Login: React.FC = () => {

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className='mr-8'>
        <img width='500' src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' />
      </div>
      <div className='flex flex-col justify-center items-center mr-24'>
        <h1 className='font-semibold text-3xl mb-1'>Welcome back!</h1>
        <p className='text-sm text-slate-600 mb-8'>Please enter your details</p>
        <input className='border-b-2 mb-5 p-1' type='text' placeholder='Email' />
        <input className='border-b-2 mb-5 p-1' type='password' placeholder='Password' />
        <button className='bg-slate-900 text-white px-6 py-2 rounded-full'>Log In</button>
      </div>
      </div>
    </>
  )
}

export default Login


