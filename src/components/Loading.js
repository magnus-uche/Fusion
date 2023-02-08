import React from 'react';
import { FadeLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className='loader'>
    <FadeLoader 
    color="#476a2e" 
    height={12}
    margin={2}
    radius={2}
    speedMultiplier={1}
    />
    </div>
  )
}

export default Loading;