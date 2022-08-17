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
  document.querySelector('#forth-box').classList.remove('box-none')
  document.querySelector('#forth-box').classList.add('block')
  document.querySelector('#third-box').classList.remove('block')
  document.querySelector('#third-box').classList.add('box-none')
  setTimeout(opacityNext, 1)
}

const opacityNext = () => {
  document.querySelector('#forth-box').style.opacity= '1'
}


  return (
    <article id='third-box' className='third-box all-boxes box-none'>

    <h1 className='contact-box-title m30'>
      Avancerade kroppsviktsövningar<br />
      Vad intresserar dig?
    </h1>

    <div className='checkbox-wrapper'>

        <Checkbox 
        id={Math.random()}

        lable={'Handstående'} 
        Lname={'handstående'} 
        paragraf={'Text om handstående'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Muscle up'} 
        Lname={'muscleup'} 
        paragraf={'Text om Muscle up'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Front-lever'} 
        Lname={'frontlever'} 
        paragraf={'Text om Front-lever'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Planche'} 
        Lname={'planche'} 
        paragraf={'Text om planche'}
        img={CALISTHENICS_IMG}
        
        />

      

    </div>


<div className='contact-btn-wrapper'>

<FormButton 
        Text={'Förgående'} 
        width={"40%"} 
        margin={'15px'}
        handleButton={back}
    />

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