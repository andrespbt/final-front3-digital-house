import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = ({themeClass}) => {
    
    
    
  return (
    <main className={`app__main ${themeClass}`}>
        <Outlet themeClass={themeClass} />
    </main>
  )
}
