import {React, useState} from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import Icon from './Icon'


function MessageSent({text, success}) {

  return (
    <div className='loader-modal'>
       <div className='modal-loader-wrapper modal-loader-wrapper-animation'>
            <div className='done-text-div'>
                <h1 className='done-text'>{text}</h1>
                <Icon success={success}/>
            </div>
       </div>
    </div>
  )
}

export default MessageSent