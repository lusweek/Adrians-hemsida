import { useState, useRef, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Qvote from './components/Qvote';
import { BsFacebook, BsCheck2Square } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr'
import MessageSent from './components/message sent/MessageSent';
import Burger from './components/burger/Burger';
import Form from './components/Form/Form';
import Checkbox from './components/Form/Checkbox';
import PROFILE_PIC from './media/PT.jpg'
import ContactFirst from './components/contact/ContactFirst';
import ContactSecond from './components/contact/ContactSecond';
import ContactThird from './components/contact/ContactThird';
import ContactForth from './components/contact/ContactForth';
import ContactFift from './components/contact/ContactFift';
import FormButton from './components/FormButton'
import emailjs from '@emailjs/browser';
import LOGO_1 from './media/logo-1-white.png'
import LOGO_FOOTER from './media/logo-3.png'
import { BiBold } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'

function App() {

  const [isClosed, setIsClosed] = useState(true)
  function handleExtraHours() {
    const extraH = document.querySelector('#extra-h')

    if (isClosed === true) {

      const wWidth = window.innerWidth

      if (wWidth >= 1400) {
        extraH.style.height = '500px'
      } else if (wWidth < 1400 && wWidth > 894) {
        extraH.style.height = '852px'
      } else if (wWidth < 894) {
        extraH.style.height = '1362px'
      }


      handleHrrow()
      setIsClosed(false)
    } else if (!isClosed) {
      extraH.style.height = '0px'
      handleHrrow()
      setIsClosed(true)
    }
  }

  const [priserIsClosed, setPriserIsClosed] = useState(true)
  function handlePriser() {

    const priserSection = document.querySelector('#offer')

    const setAuto = () => priserSection.style.height = 'auto'
    const set1000 = () => priserSection.style.height = '1000px'
    const set0 = () => priserSection.style.height = '0px'

    if (priserIsClosed === true) {

      const wWidth = window.innerWidth

      priserSection.style.padding = '100px 0px'
      setTimeout(set1000, 400)
      setTimeout(setAuto, 600)

      handlePriserArrow()
      setPriserIsClosed(false)

    } else if (!priserIsClosed) {
      priserSection.style.height = '1000px'
      setTimeout(set0, 200)
      priserSection.style.padding = '0px'
      handlePriserArrow()
      setPriserIsClosed(true)
    }

  }

  const arrowUp = 'M80.3414 42.8431C80.0512 43.1341 79.7063 43.365 79.3267 43.5225C78.947 43.6801 78.54 43.7612 78.1289 43.7612C77.7179 43.7612 77.3109 43.6801 76.9312 43.5225C76.5516 43.365 76.2067 43.1341 75.9164 42.8431L40.6289 7.54933L5.34145 42.8431C5.0509 43.1336 4.70596 43.3641 4.32634 43.5214C3.94672 43.6786 3.53984 43.7595 3.12894 43.7595C2.71805 43.7595 2.31117 43.6786 1.93155 43.5214C1.55193 43.3641 1.20699 43.1336 0.916443 42.8431C0.625893 42.5525 0.395416 42.2076 0.238174 41.828C0.0809326 41.4484 0 41.0415 0 40.6306C0 40.2197 0.0809326 39.8128 0.238174 39.4332C0.395416 39.0536 0.625893 38.7086 0.916443 38.4181L38.4164 0.918083C38.7067 0.627064 39.0516 0.396172 39.4312 0.238632C39.8109 0.0810928 40.2179 0 40.6289 0C41.04 0 41.447 0.0810928 41.8267 0.238632C42.2063 0.396172 42.5512 0.627064 42.8414 0.918083L80.3414 38.4181C80.6325 38.7084 80.8634 39.0532 81.0209 39.4329C81.1784 39.8125 81.2595 40.2195 81.2595 40.6306C81.2595 41.0416 81.1784 41.4486 81.0209 41.8283C80.8634 42.208 80.6325 42.5528 80.3414 42.8431Z'
  const arrowDown = 'M0.918087 0.918084C1.20837 0.627064 1.55322 0.39617 1.93288 0.23863C2.31253 0.0810899 2.71954 0 3.13059 0C3.54163 0 3.94864 0.0810899 4.3283 0.23863C4.70795 0.39617 5.0528 0.627064 5.34309 0.918084L40.6306 36.2118L75.9181 0.918084C76.2086 0.627535 76.5536 0.397058 76.9332 0.239813C77.3128 0.082569 77.7197 0.00163615 78.1306 0.00163615C78.5415 0.00163615 78.9484 0.082569 79.328 0.239813C79.7076 0.397058 80.0525 0.627535 80.3431 0.918084C80.6336 1.20863 80.8641 1.55357 81.0214 1.93319C81.1786 2.31281 81.2595 2.71969 81.2595 3.13058C81.2595 3.54148 81.1786 3.94836 81.0214 4.32798C80.8641 4.7076 80.6336 5.05254 80.3431 5.34309L42.8431 42.8431C42.5528 43.1341 42.2079 43.365 41.8283 43.5225C41.4486 43.6801 41.0416 43.7612 40.6306 43.7612C40.2195 43.7612 39.8125 43.6801 39.4329 43.5225C39.0532 43.365 38.7084 43.1341 38.4181 42.8431L0.918087 5.34309C0.627066 5.0528 0.396173 4.70795 0.238633 4.3283C0.0810928 3.94864 0 3.54163 0 3.13058C0 2.71954 0.0810928 2.31253 0.238633 1.93287C0.396173 1.55322 0.627066 1.20837 0.918087 0.918084Z'

  const [arrowD, setArrowD] = useState(arrowDown)
  function handleHrrow() {
    if (isClosed === true) {
      setArrowD(arrowUp)
    } else if (!isClosed) {
      setArrowD(arrowDown)
    }
  }

  const [priserArrowD, setPriserArrowD] = useState(arrowDown)
  function handlePriserArrow() {
    if (priserIsClosed === true) {
      setPriserArrowD(arrowUp)
    } else if (!priserIsClosed) {
      setPriserArrowD(arrowDown)
    }
  }


  // ---------------------- HAMBURGAREN ---------------------- //



  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    if (menuOpen === false) {
      openMenu()
    } else if (menuOpen === true) {
      closeMenu()
    }
  }

  function openMenu() {
    setMenuOpen(true)
    const menu = document.querySelector("#burger-menu")
    menu.style.width = "300px"
  }

  function closeMenu() {
    setMenuOpen(false)
    const menu = document.querySelector("#burger-menu")
    menu.style.width = "0px"
  }

  const burgerRef = useRef();
  const menu = useRef()
  const anotherBurgerRef = useRef();



  useEffect(() => {

    const check = (e) => {


      if (
        e.path[0] !== burgerRef.current &&
        e.path[0].id !== 'toggle' &&
        e.path[0] !== menu.current &&
        e.path[1] !== menu.current &&
        e.path[2] !== menu.current &&
        e.path[3] !== menu.current &&
        e.path[4] !== menu.current &&
        e.path[5] !== menu.current &&
        e.path[6] !== menu.current &&
        e.path[7] !== menu.current &&
        e.path[8] !== menu.current
      ) {
        closeMenu()
      }
    }
    document.body.addEventListener('click', check)
    return () => document.body.removeEventListener('click', check)
  }, [])


  // MAIL START

  // --------------------- EMAIL -------------------- //

  // ------------------- FORM TRACKING ------------------- // 

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('')

  const form = useRef();

  //  Får ej att fungera
  let sendMessageSuccess = false

  const sendEmail = (e) => {
    e.preventDefault();
    openLoader()

    // SERVICE_ID = 'service_inf48rp';
    // TEMPLATE_ID = 'template_19tzibd';
    // PUBLIC_KEY = 'ZGdhs2ZT5cVWZRNGA';

    emailjs.sendForm('service_inf48rp', 'template_19tzibd', form.current, 'NHoAII_wNiMrUrvQX')
      .then((result) => {
        handleMessage(result.text)
        clearText()
      }, (error) => {
        handleMessage(error.text)
      });
  };



  function clearText() {
    document.querySelector('#input-name').value = ''
    document.querySelector('#input-email').value = ''
    document.querySelector('#input-message').value = ''
  }

  // Send animation



  function openLoader() {
    document.querySelector('.loader-modal').style.display = 'flex';
  }

  function closeLoader() {
    document.querySelector('.loader-modal').style.opacity = '0';
    setTimeout(close, 500)
  }

  function close() {
    document.querySelector('.loader-modal').style.display = 'none';
    document.querySelector('.loader-modal').style.opacity = '1';
    document.querySelector('.done-text').style.opacity = '0';
    loader.classList.add("modal-loader-wrapper-animation");
    loader.classList.remove("modal-loader-new-animation");
    document.querySelector('.done-text').style.color = 'green';
    loader.classList.remove("message-fail-animation");
  }


  let loader = document.querySelector('.modal-loader-wrapper');

  function handleMessage(result) {

    if (result === 'OK') {
      sendMessageSuccess = true
      animation()
      console.log('message sent! : ', result);
    } else {
      sendMessageSuccess = false
      console.log('Something went wrong: ', result);
      messageNotSent()
    }

  }


  function animation() {

    document.querySelector('.done-text').innerHTML = 'Meddelande skickat'

    let loader = document.querySelector('.modal-loader-wrapper');

    document.querySelector('.done-text').style.color = 'green'
    loader.classList.remove("modal-loader-wrapper-animation")
    loader.classList.remove("message-fail-animation")
    loader.classList.add("modal-loader-new-animation")
    setTimeout(() => addText(), 250)
  }

  function addText() {
    document.querySelector('.done-text-div').style.opacity = '1'
    document.querySelector('.done-text').style.opacity = '1'
    setTimeout(closeLoader, 1900)
  }

  function addTextFail() {
    document.querySelector('.done-text-div').style.opacity = '1'
    document.querySelector('.done-text').style.opacity = '1'
    setTimeout(closeLoader, 2300)
  }

  function messageNotSent() {

    document.querySelector('.done-text').innerHTML = 'Något gick fel, prova igen'

    let loader = document.querySelector('.modal-loader-wrapper');

    document.querySelector('.done-text').style.color = 'red'
    loader.classList.remove("modal-loader-wrapper-animation")
    loader.classList.add("message-fail-animation")
    setTimeout(() => addTextFail(), 250)
  }


  // ---------------------- EMAIL END ---------------------- //


  const formCheck = useRef();

  const sendEmailCheck = (e) => {
    e.preventDefault();
    openLoader()

    console.log('form.current: ', form.current);

    emailjs.sendForm('service_inf48rp', 'template_19tzibd', formCheck.current, 'NHoAII_wNiMrUrvQX')
      .then((result) => {
        console.log(result.text);
        handleMessage(result.text)
        clearText()
      }, (error) => {
        console.log(error.text);
        handleMessage(error.text)
      });
  };

  return (
    <>

      {/* NAVBAREN */}



      <nav >
        <img id='company-name' src={LOGO_1} alt="Logga movement freedom" />

        {/* HAMBURGAREN  */}

        <div id='burger-div-wrapper' ref={burgerRef} onClick={handleMenu}>
          <Burger menuOpen={menuOpen} />
        </div>


        <section ref={menu} id='burger-menu'>
          <a onClick={handleMenu} href="#offer-section"> <h1 className='small-title light burger-title'>Erbjudande</h1></a>
          <a onClick={handleMenu} href="#about-section"><h1 className='small-title light burger-title'>Om Adrian</h1></a>
          <a onClick={handleMenu} href="#meta-contact-wrapper"><h1 className='small-title light burger-title'>Utbud</h1></a>
          <a onClick={handleMenu} href="#priser-section"><h1 className='small-title light burger-title'>Priser</h1></a>
          <a onClick={handleMenu} href="#contact-info-article"><h1 className='small-title light burger-title'>Kontakt</h1></a>

        </section>

      </nav>



      {/* FÖRSTA SECTIONEN  */}
      <section id='first-section' className='dark'>
        <div className='dark-bg dark-gb-first-section'></div>

        <h1 className='title'>Personlig träning med brett fokus på rörelsemönster<br />Adrian Skog</h1>

        <p className='hero-paragraf'>
          Har du drömt om att kuna göra akrobatiska rörelser som hjulning och handstående? <br />
          Eller vill du bli smidigare för att kunna leka med dina barn eller barnbarn?
        </p>


        <Button />

      </section>

      <Qvote text={`"Don't limit the motion, move the limit"`} />

      {/* OFFER SECTION */}

      <section id='offer-section'>


        <div id='offer-text-wrapper'>
          <h1 className='title light-text'>Första träningen gratis<br />Du har allt att vinna</h1>

          <div className='offer-check-wrapper'>
            <p className='p20 a-center title light-text'>50 min som inkluderar samtal om dig och dina mål samt träning </p>
          </div>


          <p className='hero-paragraf light-text bold300'>


            Det finns ingen one zise fits all när det kommer till pt, därför tycker
            jag att det är viktigt att vi lär känna varandra lite innan du förbinder dig till någonting.
            <br /><br />
            Syftet med passet är dels att jag skall veta mer om dig, din bakgrund och dina mål samt att du skall veta om jag är
            rätt Pt för dig.

          </p>

          <Button />
        </div>

      </section>

      <Qvote text={`“Change happens through movement”`} toText={`~ Joseph Pilates`} />

      {/* TRE VIKTIGA PRINCIPER */}

      <section id='principer' className='section-center'>

        <div className='dark-bg'></div>

        <h1 className='title more-margin i2'>Tre viktiga principer</h1>

        <div id='principles-text-wrapper'>

          <div className='p-next-each-other-div'>
            <h1 className='small-title cusive'>VANOR AVGÖR RESULTATET </h1>
            <p className='thin-paragraf principle-p'>Dina vanor är det som avgör om du uppnår dina träningsmål eller ej. Mitt mål är att hjälpa dig få in den form av rörelse du vill ha i vardagen på ett naturligt vis, träning ska inte kännas påtvingat.</p>
          </div>

          <div className='p-next-each-other-div'>
            <h1 className='small-title cusive'>LEK = EFFEKTIV TRÄNING</h1>
            <p className='thin-paragraf principle-p'>Har man kul när man tränar kommer man vilja fortsätta träna, vill man fortsätta träna blir träningen effektiv.</p>
          </div>

          <div className='p-next-each-other-div'>
            <h1 className='small-title cusive'>VARIERAD RÖRELSE</h1>
            <p className='thin-paragraf principle-p'>Förbättrar man rörelsen på ett område förbättras det på andra områden också; tränar man pullups blir man även bättre på att göra armhävningar. Därför tror jag på att en bred variation av rörelse är den bästa träningsformen.</p>
          </div>

        </div>



        <Button />

      </section>

      <Qvote text={`"Movement is a medicine for creating change in a person's physical, emotional, and mental states"`} toText={`~ Carol Welch`} />

      {/* CONTACT SECTION */}
      <section id='meta-contact-wrapper'>
        <article className='form-box'>
          <form ref={formCheck} onSubmit={sendEmailCheck}>
            {/* <ContactFirst />
            <ContactSecond />
            <ContactThird /> */}
            <ContactFift />
          </form> 
        </article>
      </section>


      {/* ABOUT SECTION */}

      <section id='about-section'>

        <h1 className='title'>Jag är Adrian</h1>

        {/* <img id='profile-img' src={PROFILE_PIC} alt="Image of Adrian smiling, blurry trees in the background" /> */}

        <p className='hero-paragraf bold300 t-align-s'>
          Jag brinner för rörelse och i 12 år har jag hjälpt folk att bli smidigare och starkare. Det började 2010 med att jag lärde ut parkour i en förening. Sen blev det flera föreningar, workshops, event och kurser. Detta lede sedan till att jag utforskade fler och fler träningsformer och andra sätt att uttrycka sig genom rörelse och idag har jag hjälpt hundratals människor förbättra sina fysiska förmågor. Under de senaste 10 åren har jag utforskat olika träningsformer, kampsporter, dansstilar mm. Min främsta expertis är inom naturlig rörelse och calisthenics
          som jag ser som en grund för att sedan kunna lära sig och utvecklas inom andra idrotter, dans, fysiskt krävande jobb etc.
          Förutom många år av erfarenhet innom träning och coachning så är jag certifierad tränare genom Movnat, frisks & Svettis och gymnastikförbundet. Jag har ett silver och ett brons i SM i Power Calisthenics och en 6e placering i Nordiska mästerskapet.
          <br /><br />
          Min filosophi och mina methoder  har till stor del influerats av Steven Low och hans arbete inom kroppsviktsträning, Katy Bowman och hennes arbete innom biomekanik och James Clear och hans arbete om vanor.
          <br /><br />
          Naturlig rörelse, eller funktionell träning som vissa skulle kalla det, handlar om ett se helheten och bygga från grunden. Det innebär att utgå ifrån kroppens naturliga rörelsemönster som att  krypa, balansera, springa, klättra, lyfta, bära, kasta, fånga, hoppa, landa mm och först bygga kvalite. När vi har kvalité i en rörelse så kan vi öka kvantiteten och  intensiteten för att bygga uthållighet och styrka.
          <br /><br />
          <span className='t-align-c'>Bemästra din kroppsvikt och rör dig fritt!</span>
        </p>

      </section>



      {/* PRISER */}
      <div id='priser-section' className='section-center light-background section-padding'>
        <div onClick={handlePriser} className='more-h-div '>
          <p className='offer-text-p margin-sides'>Priser</p>
          <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d={priserArrowD} fill="black" />
          </svg>
        </div>
      </div>


      <section id='offer' className='section-center section-padding no-padding-top light-background'>

        <h1 className='bold-title'>Erbjudanden</h1>

        <p className='paragraf'>
          <b>Vid alla köp ingår ett individuellt anpassat träningsprogram.</b>
          <br /> <br />
          Detta träningsprogram skräddarsyr vi tillsammans kontinuerligt över tid, kvalitén på träningsprogrammet ökar desto mer tid vi har med varandra.
        </p>

        <article className='table-article'>

          <table className='priser-table'>
            <tr>
              <th>PT - coaching</th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>1 timme</td>
              <td>850 kr</td>
            </tr>
            <tr>
              <td>3 timmar</td>
              <td>2400 kr</td>
            </tr>
            <tr>
              <td>5 timmar</td>
              <td>3700 kr</td>
            </tr>
            <tr>
              <td>8 timmar</td>
              <td>5500 kr</td>
            </tr>
          </table>

          <table className='priser-table'>
            <tr>
              <th>Online - coaching</th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>1 månad</td>
              <td>499 kr</td>
            </tr>
            <tr>
              <td>2 månader</td>
              <td>899 kr</td>
            </tr>
            <tr>
              <td>3 månader</td>
              <td>1200 kr</td>
            </tr>
            <tr>
              <td>4 månader</td>
              <td>1400 kr</td>
            </tr>
          </table>


        </article>

        <article className='box-wrapper'>

          <h1 className='title dark-text'>Paketerbjudanden</h1>

          <div className='box-container'>
            <div className='offer-box'>
              <h1 className='small-title'>Baspaket</h1>
              <p className='tiny'>1 timme träning <br /> 1 månads online coaching<br />Individanpassat träningsprogram</p>
              <h1 className='price'>1150 kr</h1>
            </div>

            <div className='offer-box'>
              <h1 className='small-title'>Mellan</h1>
              <p className='tiny'>3 timmar<br />2 månaders online coaching<br />Individanpassat träningsprogram</p>
              <h1 className='price'>2999 kr</h1>
            </div>

            <div className='offer-box'>
              <h1 className='small-title'>Premium</h1>
              <p className='tiny'>8 timmar<br />3 månaders online coaching<br />Individanpassat träningsprogram</p>
              <h1 className='price'>5999 kr</h1>
            </div>
          </div>



        </article>



        <article className='offer-text-article'>

          <div className='offer-text-div'>
            <h1 className='small-title'>Individuellt träningsprogram</h1>
            <p className='offer-text-p'>Det individuella träningsprogrammet innebär att vi bygger ett träningsprogram anpassat efter dina mål och behov.
              <br /><br />
              Du får även en individanpassad strategi för att förbättra dina träningsvarnor.
            </p>
          </div>

          <div className='offer-text-div'>
            <h1 className='small-title'>Online coaching</h1>
            <p className='offer-text-p'>
              <ul>
                <li>Kontenuelig uppföljning</li>
                <li>Videofeedback på övningar</li>
                <li>Obegränsad coaching via chatt</li>
                <li>Tillgång till instruktionsmaterial</li>
                <li>Rådgiving av vanestrategier</li>
                <li>Alltid svar inom 24 timmar</li>
              </ul>
              <br /><br />

            </p>
          </div>

        </article>

        <Button />
      </section>

      {/* ---------------------- CONTAKTINFORMATION --------------------- */}

      <article className='footer-section section-padding' id='contact-info-article'>

        {/* FORM START  */}

        <article className='' id='form-article'>

          <h1 className='title m30'>Kontakt</h1>

          <form ref={form} onSubmit={sendEmail}>



            <MessageSent sendMessageSuccess={sendMessageSuccess} />


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
              placeholder='Skriv meddelande'
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              name="message"
            >
            </textarea>

            <input
              id='footer-form-button'
              className='button form-button'
              value="Skicka"
              type="submit"
            />




          </form >

        </article >


        {/* FORM END  */}



        < div className='info-with-space' >
          <p>Telefon:</p>
          <a className='footer-info' href="tel:0707898707">0707 89 87 07</a>
        </div >

        <div className='info-with-space'>
          <p>Email:</p>
          <a className='footer-info' href="mailto:soderberg.skog@gmail.com">soderberg.skog@gmail.com</a>
        </div>

        <div className='icons'>
          <a href="https://www.facebook.com/adrian.skog" target={'_blank'}><BsFacebook className='icon' /></a>
          <a href="https://www.instagram.com/luffaregb/" target={'_blank'}><GrInstagram className='icon' /></a>
        </div>

        <img id='footer-logo' src={LOGO_FOOTER} alt="" />

      </article >


    </>
  );
}

export default App;
