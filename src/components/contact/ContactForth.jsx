import React from 'react'
import Checkbox from '../Form/Checkbox'
import FormButton from '../FormButton'
import CALISTHENICS_IMG from '../../media/calisthenics.jpg'


function ContactForth() {

  const back = () => {

    setTimeout(none, 300)
    document.querySelector('#forth-box').style.opacity= '0' 
}

const none = () => {
  document.querySelector('#third-box').classList.remove('box-none')
  document.querySelector('#third-box').classList.add('block')
  document.querySelector('#forth-box').classList.remove('block')
  document.querySelector('#forth-box').classList.add('box-none')
  setTimeout(opacity, 1)
}

const opacity = () => {
  document.querySelector('#third-box').style.opacity= '1'
}


// ------------------- NEXT ---------------- //

const next = () => {
  setTimeout(noneNext, 300)
  document.querySelector('#forth-box').style.opacity= '0' 
}

const noneNext = () => {
  document.querySelector('#fift-box').classList.remove('box-none')
  document.querySelector('#fift-box').classList.add('block')
  document.querySelector('#forth-box').classList.remove('block')
  document.querySelector('#forth-box').classList.add('box-none')
  setTimeout(opacityNext, 1)
}

const opacityNext = () => {
  document.querySelector('#fift-box').style.opacity= '1'
}


  return (
    <article id='forth-box' className='all-boxes box-none'>

    <h1 className='contact-box-title m30'>
    Movnat - en träningsform där man använder kroppens naturliga rörelsemönster. 
    Vad intresserar dig?
    </h1>

    <div className='checkbox-wrapper'>

        <Checkbox 
        id={Math.random()}

        lable={'Klättra'} 
        Lname={'klattra'} 
        paragraf={'Text om klättra'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Balansera'} 
        Lname={'balansera'} 
        paragraf={'Text om balalsera'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Springa i skog'} 
        Lname={'springaiskog'} 
        paragraf={'Text om springa i skog'}
        img={CALISTHENICS_IMG}
        
        />

<Checkbox 
        id={Math.random()}

        lable={'Krypa'} 
        Lname={'krypa'} 
        paragraf={'Text om krypa'}
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

<div className='contact-form-number'>3/4</div>


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

export default ContactForth