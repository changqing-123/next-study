import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function template({children}:IProps) {
  return (
    <div>
      <h2>setting-template</h2>
      {children}
    </div>
  )
}
