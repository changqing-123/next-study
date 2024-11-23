'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface IProps {
  children: React.ReactNode
}

const linkData = [
  {name: 'Category', path:'/products/category'},
  {name: 'Setting', path:'/products/setting'},
]

export default function layout({children}:IProps) {
  const pathName = usePathname();
  const [count, setCount] = useState(0);
  
  const increase = () => setCount(preVal=>preVal + 1);
  return (
    <div className='bg-yellow-100 p-3'>
      <h2>product-layout</h2>
      {linkData.map((item)=><Link
      className={`${pathName === item.path?'text-purple-600' :'text-black'} text-xl mr-2`}
      href={item.path}
      >
        {item.name}
      </Link>)}
      <div>
        <button
          className="bg-black text-white rounded-md p-1 m-1 text-sm"
          onClick={increase}
          >
            count++
          </button>
          count: {count}
      </div>
      {children}
    </div>
  )
}
