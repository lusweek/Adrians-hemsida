import React from 'react'
import Checkbox from '../Form/Checkbox'
import FormButton from '../FormButton'

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

const next = (event) => {

  event.preventDefault();

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
        />

<Checkbox 
        id={Math.random()}

        lable={'Balansera'} 
        Lname={'balansera'} 
        />

<Checkbox 
        id={Math.random()}

        lable={'Springa i skog'} 
        Lname={'springaiskog'} 
        />

<Checkbox 
        id={Math.random()}

        lable={'Krypa'} 
        Lname={'krypa'} 
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