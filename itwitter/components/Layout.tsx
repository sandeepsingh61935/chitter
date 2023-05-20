import React from 'react'

interface LayoutProps { 
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-black'>
        <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout