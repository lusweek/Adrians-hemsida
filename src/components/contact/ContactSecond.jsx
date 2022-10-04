import React from 'react'
import Checkbox from '../Form/Checkbox'
import FormButton from '../FormButton'
import CALISTHENICS_IMG from '../../media/calisthenics.jpg'
import SMIDIGHET_IMG from '../../media/Smidighet.jpg'


function ContactSecond() {

// ------------------- BACK ---------------- //

  const back = () => {

    setTimeout(none, 300)
    document.querySelector('#second-box').style.opacity= '0' 
}

const none = () => {
  document.querySelector('#first-box').classList.remove('box-none')
  document.querySelector('#first-box').classList.add('block')
  document.querySelector('#second-box').classList.remove('block')
  document.querySelector('#second-box').classList.add('box-none')
  setTimeout(opacity, 1)
}

const opacity = () => {
  document.querySelector('#first-box').style.opacity= '1'
}


// ------------------- NEXT ---------------- //

const next = () => {
  setTimeout(noneNext, 300)
  document.querySelector('#second-box').style.opacity= '0' 
}

const noneNext = () => {
  document.querySelector('#third-box').classList.remove('box-none')
  document.querySelector('#third-box').classList.add('block')
  document.querySelector('#second-box').classList.remove('block')
  document.querySelector('#second-box').classList.add('box-none')
  setTimeout(opacityNext, 1)
}

const opacityNext = () => {
  document.querySelector('#third-box').style.opacity= '1'
}


  return (
    <article id='second-box' className='all-boxes box-none'>

    <h1 className='contact-box-title'>
      Hur vill du utvecklas?
    </h1>

    <div className='checkbox-wrapper'>
        <Checkbox 
        id={Math.random()}

        lable={'Bli Starkare'} 
        Lname={"blistarkare"} 
        paragraf={'Att träna med kroppen som vikt. Vanliga övningar är armhävningar, pullups och squats. Fördelen med att träna kroppsvikt är att man kan göra det vart som hällst och det är snällt för kroppen.'}
        img={CALISTHENICS_IMG}
        
        />

        <Checkbox 
        id={Math.random()}

        lable={'Bli smidigare'} 
        Lname={"smidighet"} 
        paragraf={'text för Smidighet'}
        img={SMIDIGHET_IMG}

        />

        <Checkbox 
        id={Math.random()}

        lable={'Bli uthålligare'} 
        Lname={'parkour'} 
        paragraf={'text för Parkour'}
        img={SMIDIGHET_IMG}
 
        />

        <Checkbox 
        id={Math.random()}

        lable={'Bli friskare'} 
        Lname={'aktobatik'} 
        paragraf={'text för Akrobatik'}
        img={SMIDIGHET_IMG}
 
        />

    </div>


<div className='contact-btn-wrapper'>

<FormButton 
        Text={'Förgående'} 
        width={"40%"} 
        margin={'15px'}
        handleButton={back}
    />

    <div className='contact-form-number'>1/3</div>

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

export default ContactSecond