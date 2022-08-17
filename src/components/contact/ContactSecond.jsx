import React from 'react'
import Checkbox from '../Form/Checkbox'
import FormButton from '../FormButton'
import CALISTHENICS_IMG from '../../media/calisthenics.jpg'
import SMIDIGHET_IMG from '../../media/Smidighet.jpg'


function ContactSecond() {
  return (
    <article id='second-box' className='second-box all-boxes box-none'>

    <h1 className='contact-box-title m30'>
      Vad intresserar dig?<br />
      Vad vill du utväcklas i?
    </h1>

    <div className='checkbox-wrapper'>
        <Checkbox 
        lable={'Calisthenics'} 
        Lname={'chalisthenics'} 
        
        paragraf={'Text Calisthenics'}

        img={CALISTHENICS_IMG}
        id={'modal-1'}
        />

        <Checkbox 
        lable={'Smidighet'} 
        Lname={'smidighet'} 
        
        paragraf={'text för Smidighet'}

        img={SMIDIGHET_IMG}
        id={'modal-2'}
        />

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