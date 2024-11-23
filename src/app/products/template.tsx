"use client"
import React, { useState } from 'react';

interface IProps {
  children: React.ReactNode
}

export default function template({children}:IProps) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((preVal)=>preVal + 1)
  }
  return (
    <div className='w-300 h-100 bg-purple-200 rounded-sm text-black p-2'>
      <h1>product-template</h1>
      <button
      className='bg-black text-white rounded-md p-1 text-sm mr-2'
      onClick={increase}
      >
        count++
      </button>
      count: {count}
      {children}
    </div>
  )
}