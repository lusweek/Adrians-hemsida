import React from 'react'
import FormButton from '../FormButton'

function ContactSecond() {
  return (
    <article id='second-box' className='second-box all-boxes box-none'>

    <h1 className='contact-box-title m30'>
      Vad intresserar dig?<br />
      Vad vill du utväcklas i?
    </h1>

    <div className=''>

    </div>


<div className='contact-btn-wrapper'>
<FormButton 
        Text={'Förgående'} 
        width={"40%"} 
        margin={'15px'}
    />

<FormButton 
        Text={'Nästa'} 
        width={"40%"} 
        margin={'15px'}

    />

</div>
   
    
</article>
  )
}

export default ContactSecond