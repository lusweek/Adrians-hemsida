import React from 'react'

function Button({ Text, width, bottom, handleButton, position, minWidth, margin }) {



  return (
    <>
   <button
   onClick={handleButton}
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