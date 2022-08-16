import React from 'react'
import { useState, useRef, useEffect } from 'react';

function Checkbox({ lable, Lname }) {

const [emailText, setemailText] = useState('')
const [value, setValue] = useState('')

function handleThis() {
    if(!emailText){
        setemailText(lable)
        setValue('- ' + lable)
        console.log(lable);
    } else if (emailText === lable) {
        setemailText('')
        setValue('')
    }
  }



  return (

    <>

    <div className='checkbox'>
    <label className='checkbox'>{lable}
    <input className="form-checkbox" onClick={handleThis} type="checkbox" name='OCR' />
    
    </label>
  </div>

  <input className='none' name={Lname} type="text" value={value} />

  </>
  )
}

export default Checkbox