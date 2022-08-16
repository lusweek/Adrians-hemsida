import React from 'react'

function Button({ Text, width, bottom, next, position, minWidth, margin }) {



  return (
    <>
   <button
   onClick={next}
   style={{width: width,
    minWidth: minWidth,
      bottom: bottom,
      position: position,
      margin: margin,
      }}
    id='form-button' className='button form-button '>{Text}</button>
    </>
  )
}

export default Button