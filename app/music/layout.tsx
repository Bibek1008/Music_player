import React, { ReactNode } from 'react'

const Layout = ({children,sidebar,songs,player}:{children:ReactNode,sidebar:ReactNode,songs:ReactNode,player:ReactNode}) => {
  return (
    <div className='flex'>
      {sidebar}
      <div className='flex-1 p-6'>
        
        {songs}
        {player}
      </div>
      {children}
    </div>
  )
}

export default Layout