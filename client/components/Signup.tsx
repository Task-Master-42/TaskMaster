import React, {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate()

  const signup = async () => {



    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: email, password: password})
      })
      if (!response.ok) {
        console.log('error signing up')
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log('Error:', error);
    }

  }

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className='mr-8'>
        <img width='500' src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' />
      </div>
      <div className='flex flex-col justify-center items-center mr-24'>
        <h1 className='font-semibold text-3xl mb-1'>Create an account</h1>
        <p className='text-sm text-slate-600 mb-8'>Please enter your details</p>
        <input onChange={(e) => setEmail(e.target.value)} className='border-b-2 mb-5 p-1' type='text' placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} className='border-b-2 mb-5 p-1' type='password' placeholder='Password' />
        <button onClick={signup} className='bg-slate-900 text-white px-6 py-2 rounded-full'>Sign up</button>
        <p>Already have an account? <a className='cursor-pointer underline' onClick={() => navigate('/')}>Log in</a></p>
      </div>
      </div>
    </>
  )
}

export default Login
