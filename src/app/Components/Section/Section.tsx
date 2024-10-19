import React from 'react';

function Section() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div
    className='grid gap-4 sm:grid-cols-2 text-center mb-10 w-full bg-slate-100'
    >
        <div>
          <img className='rounded sm:m-5 mt-10  ' src='https://i.pinimg.com/564x/2e/86/11/2e8611fe75864aab0bafc6f4a5269562.jpg'></img>
        </div>
          <div>
          <p
          className='text-4xl font-bold font-serif m-5'
          >The Card That's
          <br/> Always Got The
          <br/> Right Currency.</p>
          <p>Save as you spend and withdraw over <br/> 50 currencies at the live rate <br/> automatically.</p>
          <br/>
          <button
          className='bg-teal-200 cursor-pointer rounded-full w-fit text-black  px-4 py-2'
          >Order Your Card</button>
          <button className=" bg-white border border-black rounded-full w-fit text-black  px-4 py-2">
          Learn More
        </button>
          </div>
        </div>
        <div className='grid grid-rows-2 gap-4 w-full h-screen bg-teal-200'>
        <div>
          <p
          className='text-left sm:m-28 m-5 sm:text-7xl text-3xl font-black text-green-800'
          >TRUSTED BY BUSI- <br/>NESSES SMALL AND <br/> LARGE</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-4 text-center sm:text-left'>
        <div>
          <img className='rounded' src='https://i.pinimg.com/564x/7a/0b/1a/7a0b1a5eb7b5275e84ec6e434b360742.jpg'></img>
        </div>
        <div>
          <p
          className='sm:text-left text-center text-green-700'
          >Go globle with the international<br/> business account.
            Pay employees,<br/> get paid and manage your cash flow<br/> in multiple currencies.
          </p>
          <br/>
          <button
          className='bg-green-800 cursor-pointer rounded-full mb-3 sm:mb-0 w-fit text-white  px-4 py-2'
          >Open A Business Account</button>
          <button className=" bg-white border border-black rounded-full w-fit text-black  px-4 py-2">
          Learn More
        </button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Section