import React from 'react'


interface IContentLayout {
    children: React.ReactNode
}

function ContentLayout( {children} :IContentLayout  ) {
  return (
    <div className='w-4/5 h-screen'>
      {children}
    </div>
  )
}

export default ContentLayout
