import React, { useState, useRef } from 'react'
import Checkbox from '../Form/Checkbox'
import MessageSent from '../message sent/MessageSent'

import Form from '../Form/Form'
import FormButton from '../FormButton'
import CALISTHENICS_IMG from '../../media/calisthenics.jpg'
import emailjs from '@emailjs/browser';



function ContactFift() {

 

  const back = (event) => {

    event.preventDefault();

    setTimeout(none, 300)
    document.querySelector('#fift-box').style.opacity= '1' 
}

const none = () => {
  document.querySelector('#third-box').classList.remove('box-none')
  document.querySelector('#third-box').classList.add('block')
  document.querySelector('#fift-box').classList.remove('block')
  document.querySelector('#fift-box').classList.add('box-none')
  setTimeout(opacity, 1)
}

const opacity = () => {
  document.querySelector('#third-box').style.opacity= '1'
}


// -------------------- SKICKA ------------------ //

  const skicka = () => {

  }

  
  // --------------------- EMAIL -------------------- //

   // ------------------- FORM TRACKING ------------------- // 

   const [title, setTitle] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [textArea, setTextArea] = useState('')

  const form = useRef();  



  const sendEmail = (e) => {
    e.preventDefault();
    openLoader()

    console.log(form.current);

    emailjs.sendForm('service_inf48rp', 'template_19tzibd', form.current, 'NHoAII_wNiMrUrvQX')
      .then((result) => {
          console.log(result.text);
          handleMessage(result.text)
          clearText()
      }, (error) => {
          console.log(error.text);
          handleMessage(error.text)
      });
  };

  function clearText() {
      document.querySelector('#input-name').value=''
      document.querySelector('#input-email').value=''
      document.querySelector('#input-message').value=''
  }

  // Send animation

  const [text, setText] = useState('')
  const [success, setSucsess] = useState(true)

  function openLoader() {
    document.querySelector('.loader-modal').style.display = 'flex';
  }

  function closeLoader() {
    document.querySelector('.loader-modal').style.opacity = '0';
    setTimeout(close, 500)
  }

  function close () {
    document.querySelector('.loader-modal').style.display = 'none';
    document.querySelector('.loader-modal').style.opacity = '1';
    document.querySelector('.done-text').style.opacity='0';
    loader.classList.add("modal-loader-wrapper-animation");
    loader.classList.remove("modal-loader-new-animation");
    document.querySelector('.done-text').style.color='green';
    loader.classList.remove("message-fail-animation");
  }


const loader = document.querySelector('.modal-loader-wrapper');

function handleMessage(result) {
  if (result === 'OK') {
    setSucsess(true)
    setText('message sent!')
    animation()
    console.log('message sent! : ', result);
  } else {
    setSucsess(false)
    setText('Something went wrong, try again!')
    console.log('Something went wrong: ', result);
    messageNotSent()
  }

}

  
  function animation () {
    loader.classList.remove("modal-loader-wrapper-animation")
    loader.classList.add("modal-loader-new-animation")
    setTimeout(() => addText(), 250)
  }

  function addText() {
  document.querySelector('.done-text-div').style.opacity='1'
  document.querySelector('.done-text').style.opacity='1'
  setTimeout(closeLoader, 1900)
  }

  function addTextFail() {
    document.querySelector('.done-text-div').style.opacity='1'
    document.querySelector('.done-text').style.opacity='1'
    setTimeout(closeLoader, 2300)
    }

  function messageNotSent() {
    document.querySelector('.done-text').style.color='red'
    loader.classList.remove("modal-loader-wrapper-animation")
    loader.classList.add("message-fail-animation")
    setTimeout(() => addTextFail(), 250)
  }


  // ---------------------- EMAIL END ---------------------- //

// För att lägga tillbaks 'nästa funktionen: lägg till 'box-none' klassen till artickeln. 
// Lägg även till opacity 0 till fift-box id't.
  return (
    <article id='fift-box' className='all-boxes'>

    <h1 className='contact-box-title m10'>Första träningen gratis</h1>
    <p className='form-paragraf paragraf light'>Jag kommer svara inom kort så vi kan starta en dialog och boka in ditt första pass.</p>



    <section id='contact-section' className='contact-section section-center'>

<article id='form-article'>

  {/* <form ref={form} onSubmit={sendEmail}> */}

<MessageSent text={text} success={success} />

    {/* MEDDELANDE FORM  */}    

    <div className='inputs'>
      <input 
    id='input-name'
    type="text"   
      required
      placeholder='Name*' 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      name="user_name"
      />
      <input 
    id='input-email'
    type="email"   
      required
      placeholder='Email*'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      name="user_email"
      />
    </div>
  
    <textarea
    id='input-message'
    required
    cols="30" 
    rows="10"
    placeholder='Valftit meddelande.. (Behövs ej)'
    value={textArea}
    onChange={(e) => setTextArea(e.target.value)}
    name="message"
    >
    </textarea>


    <div className='contact-btn-wrapper'>
  <FormButton 
    id={'back-btn-fift'}
    Text={'Förgående'} 
    width={"40%"} 
    margin={'15px'}
    handleButton={back}

  />

{/* <div className='contact-form-number'>3/3</div> */}

<input 
    id='form-button'
    className='button input-btn form-button' 
    value="Skicka"
    type="submit"
    />
  
</div>

   

  {/* </form> */}

</article>

<p className='form-paragraf paragraf light contact-form-low-text'>
Detta är en intresseanmälan, du förbinder dig inte till några skyldigheter genom detta formulär. 
<br/>
Du kommer inte få några automatiska mail-utskick utöver ett bekräftelsemail
</p>


</section>










   
    
</article>
  )
}

export default ContactFift