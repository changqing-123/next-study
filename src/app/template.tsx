"use client"
import React from 'react';

interface IProps {
  children: React.ReactNode
}

export default function template({children}:IProps) {
 
  return (
    <div className='w-300 h-100 bg-green-200 rounded-sm text-black p-2'>
      <h1>app-template</h1>
      {children}
    </div>
  )
}
