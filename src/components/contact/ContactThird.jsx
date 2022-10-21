import React from 'react'
import Checkbox from '../Form/Checkbox'
import FormButton from '../FormButton'
import CALISTHENICS_IMG from '../../media/calisthenics.jpg'


function ContactThird() {

  const back = () => {

    setTimeout(none, 300)
    document.querySelector('#third-box').style.opacity= '0' 
}

const none = () => {
  document.querySelector('#second-box').classList.remove('box-none')
  document.querySelector('#second-box').classList.add('block')
  document.querySelector('#third-box').classList.remove('block')
  document.querySelector('#third-box').classList.add('box-none')
  setTimeout(opacity, 1)
}

const opacity = () => {
  document.querySelector('#second-box').style.opacity= '1'
}


// ------------------- NEXT ---------------- //

const next = () => {
  setTimeout(noneNext, 300)
  document.querySelector('#third-box').style.opacity= '0' 
}

const noneNext = () => {
  document.querySelector('#fift-box').classList.remove('box-none')
  document.querySelector('#fift-box').classList.add('block')
  document.querySelector('#third-box').classList.remove('block')
  document.querySelector('#third-box').classList.add('box-none')
  setTimeout(opacityNext, 1)
}

const opacityNext = () => {
  document.querySelector('#fift-box').style.opacity= '1'
}


  return (
    <article id='third-box' className='third-box all-boxes box-none'>

    <h1 className='contact-box-title'>
      Vad mer vill du uppnå?
    </h1>

    <div className='checkbox-wrapper'>

        <Checkbox 
        id={Math.random()}

        lable={'Gå ner i vikt'} 
        Lname={'Tappa_Vikt'}  
        />

<Checkbox 
        id={Math.random()}

        lable={'Öka muskelmassa'} 
        Lname={'Mer_Muskelmassa'} 
        />

<Checkbox 
        id={Math.random()}

        lable={'Öka prestation i annan idrott'} 
        Lname={'Prestation_I_Annan_Idrott'} 
        />

<Checkbox 
        id={Math.random()}

        lable={'Klara vardagliga påfrästningar bättre'} 
        Lname={'Klara_Vardagliga_Utmaningar'} 
        />

      

    </div>


<div className='contact-btn-wrapper'>

<FormButton 
        Text={'Förgående'} 
        width={"40%"} 
        margin={'15px'}
        handleButton={back}
    />

<div className='contact-form-number'>2/3</div>


<FormButton 
        Text={'Nästa'} 
        width={"40%"} 
        margin={'15px'}
        handleButton={next}

    />

</div>
   
    
</article>
  )
}

export default ContactThird