import React from 'react'
import FormButton from '../FormButton'

function ContactFirst() {

    const next = () => {
      console.log('click');

        setTimeout(none, 300)
        document.querySelector('#first-box').style.opacity= '0' 
    }

    const none = () => {
      document.querySelector('#second-box').classList.remove('box-none')
      document.querySelector('#second-box').classList.add('block')
      document.querySelector('#first-box').classList.add('box-none')
      setTimeout(opacity, 1)
    }

    const opacity = () => {
      document.querySelector('#second-box').style.opacity= '1'
    }

  return (
    <article id='first-box' className='first-box all-boxes'>

        <h1 className='contact-box-title'>
        Första träningen gratis<br />
        Du har allt att vinna
        </h1>


          <FormButton 
              Text={'Se alternativ'} 
              width={"80%"} 
              bottom={'75px'}
              next={next}
              position={'absolute'}
          />
          
    </article>
  )
}

export default ContactFirst