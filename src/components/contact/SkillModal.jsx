import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

function SkillModal({ paragraf, id, img, title }) {

    const closeModal = () => {
        document.getElementById(id).style.opacity="0"
        setTimeout(none, 300)
    } 

    const none = () => {
        document.getElementById(id).classList.add('box-none')
        document.getElementById(id).classList.remove('block')
    }

  return (
    <section id={id} className='skill-modal box-none'>
        <MdOutlineClose onClick={closeModal} className='close-icon' />

        <h1 className='contact-box-title m70'>{title}</h1>

        <div className='modal-img-text-wrapper'>
            <img className='skill-modal-img' src={img} alt="image on a common calisthenics move - the muscle up." />
            <p className='hero-paragraf skill-modal-paragraf'>{paragraf}</p>
        </div>

    </section>
  )
}

export default SkillModal