import React from 'react'
import './qvote.css'

function Qvote({text, toText}) {
  return (
    <section className='qvote-section'>
        <p className='qvote tiny black'>{text}
        <h1 className='qvote mini to-qvote black'>{toText}</h1>
        </p>
        
    </section>
  )
}

export default Qvote