import React, { ReactNode } from 'react'

const Layout = ({children,sidebar}:{children:ReactNode,sidebar:ReactNode}) => {
  return (
    <div className='flex'>
      {sidebar}
      <div></div>
      {children}
    </div>
  )
}

export default Layout