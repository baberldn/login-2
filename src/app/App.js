import React from 'react';
import '@fontsource/montserrat';
import './App.css';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex justify-between items-center w-[1400px] h-[800px] bg-white'>
   
        <div className='w-[600px] h-[600px] bg-white mt-[50px] ml-[100px]'>
          <div className='login-form'>
          <h2 className='text-left font-montserrat text-[80px] font-medium tracking-[6px] mb-4 text-[#333333]'>
          <div className='login'>
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
          </div>
          </h2>

            <form>
              <div className='mb-6 w-[595px]'>
                <input
                  type='email'
                  id='email'
                  className='w-full p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500'
                  placeholder='Username'
                  required
                />
              </div>

              <div className='mb-6 w-[595px]'>
                <input
                  type='password'
                  id='password'
                  className='w-full p-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500'
                  placeholder='Password'
                  required
                />
              </div>

              <button type='submit' className='w-[182px] h-[54px] rounded-lg bg-[#101A1CD6] text-white flex justify-center items-center cursor-pointer'>
                <p className='text-center text-[20px] font-semibold tracking-[2px]'>
                  LOGIN
                </p>
              </button>
            </form>
          </div>

      
          <div className='flex justify-center items-center w-[550px] mt-4'>
            <div className='flex-grow h-[1px] border-t border-[#101A1C]'></div>
            <span className='text-[20px] font-semibold mx-4 text-[#101A1C]'>OR</span>
            <div className='flex-grow h-[1px] border-t border-[#101A1C]'></div>
          </div>

      
          <div className='flex justify-start mt-4 ml-[130px]'>
            <img src="./images/image2.png" alt="Google" className='w-[30px] h-[30px] rounded-[10px] ml-[80px]' />
            <img src="./images/image3.png" alt="Facebook" className='w-[30px] h-[30px] rounded-[10px] ml-[80px]' />
          </div>

        
          <p className='text-center mt-10 text-[#101A1CA3] text-[20px] font-semibold'>
          Not yet registered, <span>Click here to sign up</span>
          </p>
        </div>

        <div className='w-[600px] h-[800px] bg-white rounded-l-[150px]'>
        <img src="./images/image.png" alt="Papağan" className='w-[800px] h-[800px] rounded-l-[200px] object-cover' />

        </div>
      </div>
    </div>
  );
};

export default App;
