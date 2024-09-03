import deepEqual from 'deep-equal'
import React, { memo } from 'react'

const Toolbar = memo(() => {
    return (
        <div className='w-full h-full'>
            
        </div>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default Toolbar