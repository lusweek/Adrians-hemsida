import React from 'react'
import FormButton from '../FormButton'

function ContactFirst() {

    const next = () => {

        setTimeout(none, 300)
        document.querySelector('#first-box').style.opacity= '0' 
    }

    const none = () => {
      document.querySelector('#second-box').classList.remove('box-none')
      document.querySelector('#second-box').classList.add('block')
      document.querySelector('#first-box').classList.add('box-none')
      document.querySelector('#first-box').classList.remove('block')
      setTimeout(opacity, 1)
    }

    const opacity = () => {
      document.querySelector('#second-box').style.opacity= '1'
    }

  return (
    <article id='first-box' className='first-box all-boxes'>

        <h1 className='contact-box-title h140'>
        Första passet är helt kostnadsfritt <br />
        Inga förbindelser - du har allt att vinna
        </h1>


          <FormButton 
              Text={'Ta första steget'} 
              width={"80%"} 
              bottom={'75px'}
              handleButton={next}
              position={'absolute'}
          />
          
    </article>
  )
}

export default ContactFirst