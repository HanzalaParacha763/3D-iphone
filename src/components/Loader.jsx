import { Html } from '@react-three/drei'
// import { Audio } from 'react-loader-spinner'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-ful h-full flex justify-center items-cneter'>
        <div className='w-10vw h-10vh rounded-full'>
          {/* <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          /> */}
          <ClipLoader color="#ffffff" />
        </div>
      </div>
    </Html>
  )
}

export default Loader