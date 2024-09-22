import React from 'react'
import { twMerge } from 'tailwind-merge'
export default function CustomButton({children, type= 'primary' || 'secondary', className=''}) {
  return (
    <button className={twMerge(`px-4 py-2 whitespace-nowrap rounded text-primary hover:scale-105 font-bold ${type === 'primary' ? 'border hover:bg-[#f5f5f0]' : 'bg-secondary text-white hover:bg-[#7ac18e]'} ${className}`)}>{children}</button>
  )
}
