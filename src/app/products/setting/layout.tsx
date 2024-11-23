import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function layout({children}:IProps) {
  return (
    <div className='bg-red-400 p-2 rounded-sm m-2'>
      <h2>setting-layout</h2>
      {children}
    </div>
  )
}
