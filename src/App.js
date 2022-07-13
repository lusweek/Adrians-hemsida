import { useState, useRef, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Qvote from './components/Qvote';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr'
import emailjs from '@emailjs/browser';
import MessageSent from './components/message sent/MessageSent';


function App() {

  // ------------------- FORM TRACKING ------------------- // 

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('')

  // ------------- MORE HOWERS FUNCITON START ------------------- //

  const [isClosed, setIsClosed] = useState(true)
  function handleExtraHours() {
  const extraH = document.querySelector('#extra-h')

    if (isClosed === true) {
      extraH.style.height='500px'
      handleHrrow()
      setIsClosed(false)
    } else if(!isClosed) {
      extraH.style.height='0px'
      handleHrrow()
      setIsClosed(true)
    }  
  }

  const arrowUp = 'M80.3414 42.8431C80.0512 43.1341 79.7063 43.365 79.3267 43.5225C78.947 43.6801 78.54 43.7612 78.1289 43.7612C77.7179 43.7612 77.3109 43.6801 76.9312 43.5225C76.5516 43.365 76.2067 43.1341 75.9164 42.8431L40.6289 7.54933L5.34145 42.8431C5.0509 43.1336 4.70596 43.3641 4.32634 43.5214C3.94672 43.6786 3.53984 43.7595 3.12894 43.7595C2.71805 43.7595 2.31117 43.6786 1.93155 43.5214C1.55193 43.3641 1.20699 43.1336 0.916443 42.8431C0.625893 42.5525 0.395416 42.2076 0.238174 41.828C0.0809326 41.4484 0 41.0415 0 40.6306C0 40.2197 0.0809326 39.8128 0.238174 39.4332C0.395416 39.0536 0.625893 38.7086 0.916443 38.4181L38.4164 0.918083C38.7067 0.627064 39.0516 0.396172 39.4312 0.238632C39.8109 0.0810928 40.2179 0 40.6289 0C41.04 0 41.447 0.0810928 41.8267 0.238632C42.2063 0.396172 42.5512 0.627064 42.8414 0.918083L80.3414 38.4181C80.6325 38.7084 80.8634 39.0532 81.0209 39.4329C81.1784 39.8125 81.2595 40.2195 81.2595 40.6306C81.2595 41.0416 81.1784 41.4486 81.0209 41.8283C80.8634 42.208 80.6325 42.5528 80.3414 42.8431Z'
  const arrowDown = 'M0.918087 0.918084C1.20837 0.627064 1.55322 0.39617 1.93288 0.23863C2.31253 0.0810899 2.71954 0 3.13059 0C3.54163 0 3.94864 0.0810899 4.3283 0.23863C4.70795 0.39617 5.0528 0.627064 5.34309 0.918084L40.6306 36.2118L75.9181 0.918084C76.2086 0.627535 76.5536 0.397058 76.9332 0.239813C77.3128 0.082569 77.7197 0.00163615 78.1306 0.00163615C78.5415 0.00163615 78.9484 0.082569 79.328 0.239813C79.7076 0.397058 80.0525 0.627535 80.3431 0.918084C80.6336 1.20863 80.8641 1.55357 81.0214 1.93319C81.1786 2.31281 81.2595 2.71969 81.2595 3.13058C81.2595 3.54148 81.1786 3.94836 81.0214 4.32798C80.8641 4.7076 80.6336 5.05254 80.3431 5.34309L42.8431 42.8431C42.5528 43.1341 42.2079 43.365 41.8283 43.5225C41.4486 43.6801 41.0416 43.7612 40.6306 43.7612C40.2195 43.7612 39.8125 43.6801 39.4329 43.5225C39.0532 43.365 38.7084 43.1341 38.4181 42.8431L0.918087 5.34309C0.627066 5.0528 0.396173 4.70795 0.238633 4.3283C0.0810928 3.94864 0 3.54163 0 3.13058C0 2.71954 0.0810928 2.31253 0.238633 1.93287C0.396173 1.55322 0.627066 1.20837 0.918087 0.918084Z'

  const [arrowD, setArrowD] = useState(arrowDown)
  function handleHrrow() {
    if (isClosed === true) {
      setArrowD(arrowUp)
    } else if(!isClosed){
      setArrowD(arrowDown)
    } 
  }


  // --------------------- EMAIL -------------------- //


  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    openLoader()

    // SERVICE_ID = 'service_inf48rp';
    // TEMPLATE_ID = 'template_19tzibd';
    // PUBLIC_KEY = 'ZGdhs2ZT5cVWZRNGA';

    emailjs.sendForm('service_inf48rp', 'template_19tzibd', form.current, 'ZGdhs2ZT5cVWZRNGA')
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

  /*

parkour
movnat
handstående
mucsleUp
roligareTräning
helsosammaVarnor
OCR
smidighet
tränaUtomhus
funktionellTräning
varieradTräning
  
  */

  const [kroppsvikt, setKroppsvikt] = useState('')
  const [parkour, setParkour] = useState('')
  const [movnat, setMovnat] = useState('')
  const [handstående, setHandstående] = useState('')
  const [mucsleUp, setMucsleUp] = useState('')
  const [roligareTräning, setRoligareTräning] = useState('')
  const [helsosammaVarnor, setHelsosammaVarnor] = useState('')
  const [OCR, setOCR] = useState('')
  const [smidighet, setSmidighet] = useState('')
  const [tränaUtomhus, setTränaUtomhus] = useState('')
  const [funktionellTräning, setFunktionellTräning] = useState('')
  const [varieradTräning, setVarieradTräning] = useState('')
  const [akrobatik, setAkrobatik] = useState('')
  const [planche, setPlanche] = useState('')

  
  function handleVarieradTräning() {
    if(!varieradTräning){
      setVarieradTräning('- Varierad träning')
    } else if (varieradTräning === '- Varierad träning') {
      setVarieradTräning('')
    }
  }

  function handleFunktionellTräning() {
    if(!funktionellTräning){
      setFunktionellTräning('- Funktionell träning')
    } else if (funktionellTräning === '- Funktionell träning') {
      setFunktionellTräning('')
    }
  }
  
  function handleTränaUtomhus() {
    if(!tränaUtomhus){
      setTränaUtomhus('- Träna utomhus')
    } else if (tränaUtomhus === '- Träna utomhus') {
      setTränaUtomhus('')
    }
  }
  
  function handleSmidighet() {
    if(!smidighet){
      setSmidighet('- Smidighet')
    } else if (smidighet === '- Smidighet') {
      setSmidighet('')
    }
  }

  function handleOCR() {
    if(!OCR){
      setOCR('- OCR / Hinderbarna')
    } else if (OCR === '- OCR / Hinderbarna') {
      setOCR('')
    }
  }

  function handleHelsosammaVarnor() {
    if(!helsosammaVarnor){
      setHelsosammaVarnor('- Helsosamma varnor')
    } else if (helsosammaVarnor === '- Helsosamma varnor') {
      setHelsosammaVarnor('')
    }
  }

  function handleRoligareTräning() {
    if(!roligareTräning){
      setRoligareTräning('- Roligare träning')
    } else if (roligareTräning === '- Roligare träning') {
      setRoligareTräning('')
    }
  }

  function handleMucsleUp() {
    if(!mucsleUp){
      setMucsleUp('- MucsleUp')
    } else if (mucsleUp === '- MucsleUp') {
      setMucsleUp('')
    }
  }

  function handleHandstående() {
    if(!handstående){
      setHandstående('- Handstående')
    } else if (handstående === '- Handstående') {
      setHandstående('')
    }
  }

  function handleMovenat() {
    if(!movnat){
      setMovnat('- Movnat')
    } else if (movnat === '- Movnat') {
      setMovnat('')
    }
  }

  function handleParkour() {
    if(!parkour){
      setParkour('- Parkour')
    } else if (parkour === '- Parkour') {
      setParkour('')
    }
  }

  function handleKroppsvikt() {
    if(!kroppsvikt){
      setKroppsvikt('- Kroppsviktsträning')
    } else if (kroppsvikt === '- Kroppsviktsträning') {
      setKroppsvikt('')
    }
  }

  function handlePlanche() {
    if(!planche){
      setPlanche('- Planche')
    } else if (planche === '- Planche') {
      setPlanche('')
    }
  }

  function handleAkrobatik() {
    if(!akrobatik){
      setAkrobatik('- Akrobatik')
    } else if (akrobatik === '- Akrobatik') {
      setAkrobatik('')
    }
  }


  // ---------------------- HAMBURGAREN ---------------------- //
  
  

  const [svgD, setSvgD] = useState('M1 7H19M1 1H19M1 13H19')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () =>{
    if (menuOpen === false) {
      openMenu()
    } else if (menuOpen === true) {
      closeMenu()
    }
  }

  function openMenu() {
    setMenuOpen(true)
    setSvgD('M1.5 13L14.5 1M1.5 1L14.5 13')
    const menu = document.querySelector("#burger-menu")
    menu.style.width="380px"
  }

  function closeMenu() {
    setMenuOpen(false)
    setSvgD('M1 7H19M1 1H19M1 13H19')
    const menu = document.querySelector("#burger-menu")
    menu.style.width="0px"
  }

  const burgerRef = useRef();
  const anotherBurgerRef = useRef();
  const menu = useRef()


  useEffect(() => {
    
    const check = (e) => {
      console.log(e);

      if (e.path[0] !== burgerRef.current &&
          e.path[0] !== anotherBurgerRef.current &&
          e.path[0] !== menu.current &&
          e.path[1] !== menu.current &&
          e.path[2] !== menu.current &&
          e.path[3] !== menu.current &&
          e.path[4] !== menu.current &&
          e.path[5] !== menu.current &&
          e.path[6] !== menu.current &&
          e.path[7] !== menu.current &&
          e.path[8] !== menu.current ) {
      closeMenu()
      }
    }

    document.body.addEventListener('click', check)

    return () => document.body.removeEventListener('click', check)

  }, [])

 

  // ----------------------------------------------------------------------------------------------------------//

  return (
    <>

{/* NAVBAREN */}



    <nav>
      <h1 id='company-name'>Adrians företag</h1>

  {/* HAMBURGAREN  */}



      <svg ref={burgerRef} onClick={handleMenu} id='hamburger-meny' width="30" height="30" viewBox="0 0 20 14" fill="none" cursor="pointer" xmlns="http://www.w3.org/2000/svg">
        <path ref={anotherBurgerRef} d={svgD} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <section ref={menu} id='burger-menu'>
    <div id='menu-logo'></div>
        <a onClick={handleMenu} href="#principer"> <h1 className='small-title light burger-title'>Principer</h1></a>
        <a onClick={handleMenu} href="#box-section"><h1 className='small-title light burger-title'>Kroppsviktsträning</h1></a>
        <a onClick={handleMenu} href="#offer"><h1 className='small-title light burger-title'>Erbjudanden</h1></a>
        <a onClick={handleMenu} href="#contact-section"><h1 className='small-title light burger-title'>Kontakt</h1></a>
       
      </section>

    </nav>

    


{/* FÖRSTA SECTIONEN  */}
   <section id='first-section' className='dark'>

    <div id='big-logo'></div>

    <h1 className='qvote large'>“We don't stop playing because we grow old,<br />we grow old because we stop playing”
    <h1 className='qvote tiny to-qvote'>//George Bernard Shaw</h1>
    </h1>
    
    <a href="#offer-section">
      <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918087 0.918084C1.20837 0.627064 1.55322 0.39617 1.93288 0.23863C2.31253 0.0810899 2.71954 0 3.13059 0C3.54163 0 3.94864 0.0810899 4.3283 0.23863C4.70795 0.39617 5.0528 0.627064 5.34309 0.918084L40.6306 36.2118L75.9181 0.918084C76.2086 0.627535 76.5536 0.397058 76.9332 0.239813C77.3128 0.082569 77.7197 0.00163615 78.1306 0.00163615C78.5415 0.00163615 78.9484 0.082569 79.328 0.239813C79.7076 0.397058 80.0525 0.627535 80.3431 0.918084C80.6336 1.20863 80.8641 1.55357 81.0214 1.93319C81.1786 2.31281 81.2595 2.71969 81.2595 3.13058C81.2595 3.54148 81.1786 3.94836 81.0214 4.32798C80.8641 4.7076 80.6336 5.05254 80.3431 5.34309L42.8431 42.8431C42.5528 43.1341 42.2079 43.365 41.8283 43.5225C41.4486 43.6801 41.0416 43.7612 40.6306 43.7612C40.2195 43.7612 39.8125 43.6801 39.4329 43.5225C39.0532 43.365 38.7084 43.1341 38.4181 42.8431L0.918087 5.34309C0.627066 5.0528 0.396173 4.70795 0.238633 4.3283C0.0810928 3.94864 0 3.54163 0 3.13058C0 2.71954 0.0810928 2.31253 0.238633 1.93287C0.396173 1.55322 0.627066 1.20837 0.918087 0.918084Z" fill="white"/>
      </svg>
    </a>
   


   </section>

{/* OFFER SECTION */}

<section id='offer-section' className='section-padding'>

<div id='offer-text-div'>
  <h1 className='bold-title'>Första träningen gratis!</h1>

  <p className='p20'>20 min samtal</p>
  <p className='p20'>30 min träning</p>

  <p className='paragraf'>Träning måste vara roligt för att den ska bli effektiv. Jag kan hjälpa dig skapa en träningsrutin som gör träningen roligare och mer effektiv. Vi tar ett 20 min samtal innan kör vi ett 30 min pt pass.  </p>

  <Button />
</div>

</section>

<Qvote text={`"Don't limit the motion, move the limit"`} />


{/* TRE VIKTIGA PRINCIPER */}

<section id='principer' className='dark-theme section-center'>

  <h1 className='bold-title more-margin'>Tre viktiga principer</h1>

<div className='p-next-each-other-div'>
  <h1 className='small-title'>LEK = EFFEKTIV TRÄNING</h1>
  <p className='thin-paragraf principle-p'>Har man kul när man tränar kommer man vilja fortsätta träna, vill man fortsätta träna blir träningen effektiv.</p>
</div>


<div className='p-next-each-other-div'>
  <h1 className='small-title'>VANOR AVGÖR RESULTATET </h1>
  <p className='thin-paragraf principle-p'>Dina vanor är det som avgör om du uppnår dina träningsmål eller ej. Mitt mål är att hjälpa dig få in den form av rörelse du vill ha i vardagen på ett naturligt vis, träning ska inte kännas påtvingat.</p>
</div>


<div className='p-next-each-other-div'>
  <h1 className='small-title'>VARIERAD RÖRELSE</h1>
  <p className='thin-paragraf principle-p'>Förbättrar man rörelsen på ett område förbättras det på andra områden också; tränar man pullups blir man även bättre på att göra armhävningar. Därför tror jag på att en bred variation av rörelse är den bästa träningsformen.</p>
</div>

<Button />

</section>


<Qvote text={`“Change happens through movement”`} toText={`//Joseph Pilates`} />


{/* BOXES SECTION */}

<section id='box-section' className='dark-theme section-center'>

<h1 className='bold-title more-margin'>Bemästra konsten att träna kroppsvikt</h1>

<article className='box-wrapper'>

<div className='box'>
  <h1 className='small-title'>Erfarenhet</h1>
  <p className='thin-paragraf'>Med sammanlagt 10 års coaching-erfarenhet inom parkour, calisthenics, movnat och individuell träning kan jag hjälpa dig bemästra konsten att träna kroppsviktsträning. </p>
</div>

<div className='box'>
  <h1 className='small-title'>Kroppsviktsträning</h1>
  <p className='thin-paragraf'>De senaste 6 åren har jag haft ett brett fokus på träning inom calisthenics. <br /><br />Jag kan hjälpa dig bygga simpla eller avancerade träningspass med fokus på kroppsviktsträning samt lära dig både simpla och avancerade kroppsvikts-träningsformer.</p>
</div>

<div className='box'>
  <h1 className='small-title'>Movnat</h1>
  <p className='thin-paragraf'>Movnat är en träningsmetod som går ut på att använda kroppens naturliga rörelsemönster, springa, hoppa, klättra, krypa, balansera, lyfta, bära och fånga. Movnat utövas oftast i naturen men kan även utövas inomhus. Denna träningsform kan även appliceras i ditt träningsprogram.</p>
</div>

<div className='box'>
  <h1 className='small-title'>Övrigt</h1>
  <p className='thin-paragraf'>I övrigt har jag 13 års erfarenhet inom parkour, SM silver i calisthenics samt en sjätte placering i nordiska mästerskapen i calisthenics.</p>
</div>

</article>

<Button />


</section>


{/* ERBJUDANDEN */}

<section id='offer' className='section-center section-padding light-background'>

<h1 className='bold-title'>Erbjudanden</h1>

<p className='paragraf'>Mina PT-kompetenser gäller främst kroppsviktsträning, movnat och parkour. 
<br/><br/>
Jag kan hjälpa dig bemästra allt från simpla kroppsviktsövningar som pullups och armhävningar till avancerade tekniker som handstående-pushups och one arm pullups. 
<br/><br/>
Eller så tar vi oss in i skogen där du får lära dig den naturrika träningsformen movnat.
<br/><br/>
Eller så lär dig jag parkourens tekniker. 
</p>

<article className='box-wrapper'>

    <div className='offer-box'>
      <h1 className='small-title'>Baspaket</h1>
      <p className='tiny'>1 timme<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>850 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>Mellan</h1>
      <p className='tiny'>3 timmar<br/>3 veckors online-feedback<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>2495 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>Premium</h1>
      <p className='tiny'>8 timmar<br/>8 veckors online-feedback<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>6400 kr</h1>
    </div>

</article>

<article className='offer-text-article'>

    <div className='offer-text-div'>
      <h1 className='small-title'>Individuellt träningsprogram</h1>
      <p className='offer-text-p'>Det individuella träningsprogrammet innebär att vi bygger ett träningsprogram anpassat efter dina mål och behov. 
      <br/><br/>
      Desto fler timmar vi har tillsammans, desto mer avancerat träningsprogram får du. Träningsprogrammet får du på papper eller som digitalt dokument. 
      <br/><br/>
      Du får även en individanpassad strategi för att förbättra dina träningsvarnor.
      </p>
    </div>

    <div className='offer-text-div'>
      <h1 className='small-title'>Online feedback</h1>
      <p className='offer-text-p'> Kroppsviktsträning är generellt sett tacksamt för kroppen men vill man undvika slitskador och maximera styrka ska man ha rätt form.  - För varje timme du köper får du en veckoperiod där du kan skicka videos till mig där jag kan se om din form är bra eller om den kan förbättras. 
      <br/><br/>
      .Exempelvis så kan du skicka video på när du gör pullups för att få tips på förbättringar. 
      <br/><br/>
      Vi kan även ha dialog angående dina träningsvarnor
      </p>
    </div>

</article>

<Button />

<div className='line'></div>

<div onClick={handleExtraHours} className='more-h-div'>
  <p className='offer-text-p margin-sides'>Vill du köpa fler timmar?</p>
  <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d={arrowD} fill="black"/>
    </svg>
</div>

{/* EXTRA TIMMAR */}

<article id='extra-h' className='section-center'>
  
  <article className='offer-text-article'>


  <div className='offer-box'>
      <h1 className='small-title'>1 timme</h1>
      <p className='tiny'>1 timme<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>6400 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>3 timmar</h1>
      <p className='tiny'>3 timmar<br/>3 veckors online-feedback<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>2495 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>5 timmar</h1>
      <p className='tiny'>8 timmar<br/>8 veckors online-feedback<br/>Individanpassat träningsprogram</p>
      <h1 className='price'>Vilket pris? </h1>
    </div>

  </article>


  <p className='paragraf'>Kontakta mig vid köp av fler timmar</p>


</article>

</section>


{/* CONTACT SECTION */}

<MessageSent text={text} success={success} />

<section id='contact-section' className='contact-section section-center dark-theme section-padding'>

  <h1 className='bold-title letter-spacing'>Kom igång med roligare träning</h1>

  <article id='form-article'>

    <h1 className='small-title'>Vad intresserar dig?</h1>

    <form ref={form} onSubmit={sendEmail}>

      <article className='checkbox-list-wrapper'>

{/* FÖRSTA SPALTEN */}
        <div className='checkbox-list'>

          <div className='checkbox'>
            <label className='checkbox'>Kroppsviktsträning
            <input className="form-checkbox" onClick={handleKroppsvikt} type="checkbox" name='Kroppsviktsträning' />
            </label>
            
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Movnat
            <input className="form-checkbox" onClick={handleMovenat} type="checkbox" name='Movenat' />
          </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Mucsle up
              <input className="form-checkbox" onClick={handleMucsleUp} type="checkbox" name='MucsleUp' />
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Helsosamma varnor
            <input className="form-checkbox" onClick={handleHelsosammaVarnor} type="checkbox" name='HelsosammaVarnor' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Smidighet
            <input className="form-checkbox" onClick={handleSmidighet} type="checkbox" name='Smidighet' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Akrobatik
            <input className="form-checkbox" onClick={handleAkrobatik} type="checkbox" name='Akrobatik' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Funktionell träning
            <input className="form-checkbox" onClick={handleFunktionellTräning} type="checkbox" name='FunktionellTräning' />
            
            </label>
          </div>

        </div>

{/* ANDRA SPALTEN */}
        <div className='checkbox-list second-checklist-column'>

          <div className='checkbox'>
            <label className='checkbox'>Parkour
            <input className="form-checkbox" onClick={handleParkour} type="checkbox" name='Parkour' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Handstående
            <input className="form-checkbox" onClick={handleHandstående} type="checkbox" name='Handstående' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Roligare träning
            <input className="form-checkbox" onClick={handleRoligareTräning} type="checkbox" name='RoligareTräning' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>OCR / hinderbarna
            <input className="form-checkbox" onClick={handleOCR} type="checkbox" name='OCR' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Planche
            <input className="form-checkbox" onClick={handlePlanche} type="checkbox" name='Planche' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Träna utomhus
            <input className="form-checkbox" onClick={handleTränaUtomhus} type="checkbox" name='TränaUtomhus' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Varierad träning
            <input className="form-checkbox" onClick={handleVarieradTräning} type="checkbox" name='VarieradTräning' />
            
            </label>
          </div>

        </div>

      </article>

      

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

      <input className='none' name='kroppsvikt' type="text" value={kroppsvikt} />
      <input className='none' name='parkour' type="text" value={parkour} />
      <input className='none' name='movnat' type="text" value={movnat} />
      <input className='none' name='handstaende' type="text" value={handstående} />
      <input className='none' name='mucsleUp' type="text" value={mucsleUp} />
      <input className='none' name='roligareTraning' type="text" value={roligareTräning} />
      <input className='none' name='helsosammaVarnor' type="text" value={helsosammaVarnor} />
      <input className='none' name='hinderbarna' type="text" value={OCR} />
      <input className='none' name='smidighet' type="text" value={smidighet} />
      <input className='none' name='akrobatik' type="text" value={akrobatik} />
      <input className='none' name='tranaUtomhus' type="text" value={tränaUtomhus} />
      <input className='none' name='funktionelltraning' type="text" value={funktionellTräning} />
      <input className='none' name='varieradTraning' type="text" value={varieradTräning} />
      <input className='none' name='planche' type="text" value={planche} />


      
      <input 
      className='button form-btn' 
      value="Skicka"
      type="submit"
      />

    </form>

  </article>


  <article id='contact-info-article'>

    <div className='info-with-space'>
    <p>Telefon:</p>
    <a href="tel:0707898707">0707 89 87 07</a>
    </div>

    <div className='info-with-space'>
    <p>Email:</p>
    <a href="mailto:soderberg.skog@gmail.com">soderberg.skog@gmail.com</a>
    </div>
  
    <div className='icons'>
      <a href="" target={'_blank'}><BsFacebook className='icon'/></a>
      <a href="" target={'_blank'}><GrInstagram className='icon'/></a> 
    </div>

  </article>

</section>

   </>
  );
}

export default App;
