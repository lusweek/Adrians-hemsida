import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import SkillModal from '../contact/SkillModal';

function Checkbox({ lable, Lname, paragraf, id, img }) {

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


  function handleIcon() {
    document.getElementById(id).style.opacity='0'
    setTimeout(flex, 1)
  }

  const flex = () => {
    document.getElementById(id).classList.remove('box-none')
    document.getElementById(id).classList.add('block')
    setTimeout(fade, 1)
  }

  const fade = () => {
    document.getElementById(id).style.opacity='1'
  }

  return (

    <>


    <div className='checkbox'>
    <AiOutlineQuestionCircle className='checkbox-icon' onClick={handleIcon} />
    <label className='pointer'>{lable}
    <input className="form-checkbox" onClick={handleThis} type="checkbox" name='OCR' />
    
    </label>

    <SkillModal 
    title={lable}
    paragraf={paragraf} 
    img={img}
    id={id}
    />
  </div>

  <input className='none' name={Lname} type="text" value={value} />

  </>
  )
}

export default Checkbox