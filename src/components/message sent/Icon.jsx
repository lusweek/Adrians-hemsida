import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'


function Icon({ sendMessageSuccess }) {

  console.log('sendMessageSuccess i Icon: ', sendMessageSuccess);

  

  return sendMessageSuccess ? (
   <>
    <BsCheck2Circle className='check-icon' />
   </>
  ) : (
    <>
    <BiErrorCircle className='check-icon fail'/>
    </>
  )
}

export default Icon