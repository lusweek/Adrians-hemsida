import React from 'react'
import { useState, useRef, useEffect } from 'react';

function Checkbox({ lable, Lname, paragraf, id, img }) {

const [emailText, setemailText] = useState('')
const [value, setValue] = useState('')

useEffect(() => {

}, [emailText])

function handleThis() {
    if(!emailText){
        setemailText(Lname)
        setValue('- ' + lable)

    } else if (emailText === lable) {
        setemailText('')
        setValue('')
    }
  }

  return (

    <>
      <label for={id} className='checkbox'>
      <input id={id} className="form-checkbox" onClick={handleThis} type="checkbox" />
      <label for={id} className='pointer'>{lable}
      
      </label>

    </label>

    <input className='none' name={emailText} type="text" value={Lname} />
  </>
  )
}

export default Checkbox