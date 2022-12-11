import React from 'react'

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img 
                className='w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                alt='bg-img' />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Create Account</h2>
                    <div className='flex flex-col py-2'>
                        <label>USERNAME</label>
                        <input 
                        className='border p-2'
                        type='username'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>YOUR E-MAIL</label>
                        <input 
                        className='border p-2'
                        type='e-mail'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>CREATE PASSWORD</label>
                        <input 
                        className='border p-2'
                        type='password'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>CONFIRM PASSWORD</label>
                        <input 
                        className='border p-2'
                        type='password'/>
                    </div>
                    <p className='flex items-center py-2'><input className='mr-2' type='checkbox' /> I Agree To The Terms & Conditions</p>
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Register</button>
                    <div className='flex justify-between'>
                        <p>Sing in</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login