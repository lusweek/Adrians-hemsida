import React from 'react'

function Button({ Text, width, bottom, handleButton, position, minWidth, margin, id }) {



  return (
    <>
   <button
   preventDef
   onClick={handleButton}
   style={{width: width,
    minWidth: minWidth,
      bottom: bottom,
      position: position,
      margin: margin,
      }}
    id={id} className='button form-button '>{Text}</button>
    </>
  )
}

export default Button