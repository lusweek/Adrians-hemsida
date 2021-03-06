import { useState, useRef, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Qvote from './components/Qvote';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr'
import emailjs from '@emailjs/browser';
import MessageSent from './components/message sent/MessageSent';
import Burger from './components/burger/Burger';


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

      const wWidth = window.innerWidth
      console.log(wWidth);

      if (wWidth >= 1400) {
        extraH.style.height='500px'
      } else if (wWidth < 1400 && wWidth > 894) {
        extraH.style.height='852px'
      } else if ( wWidth < 894 ) {
        extraH.style.height='1362px'
      }

      
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
handst??ende
mucsleUp
roligareTr??ning
helsosammaVarnor
OCR
smidighet
tr??naUtomhus
funktionellTr??ning
varieradTr??ning
  
  */

  const [kroppsvikt, setKroppsvikt] = useState('')
  const [parkour, setParkour] = useState('')
  const [movnat, setMovnat] = useState('')
  const [handst??ende, setHandst??ende] = useState('')
  const [mucsleUp, setMucsleUp] = useState('')
  const [roligareTr??ning, setRoligareTr??ning] = useState('')
  const [helsosammaVarnor, setHelsosammaVarnor] = useState('')
  const [OCR, setOCR] = useState('')
  const [smidighet, setSmidighet] = useState('')
  const [tr??naUtomhus, setTr??naUtomhus] = useState('')
  const [funktionellTr??ning, setFunktionellTr??ning] = useState('')
  const [varieradTr??ning, setVarieradTr??ning] = useState('')
  const [akrobatik, setAkrobatik] = useState('')
  const [planche, setPlanche] = useState('')

  
  function handleVarieradTr??ning() {
    if(!varieradTr??ning){
      setVarieradTr??ning('- Varierad tr??ning')
    } else if (varieradTr??ning === '- Varierad tr??ning') {
      setVarieradTr??ning('')
    }
  }

  function handleFunktionellTr??ning() {
    if(!funktionellTr??ning){
      setFunktionellTr??ning('- Funktionell tr??ning')
    } else if (funktionellTr??ning === '- Funktionell tr??ning') {
      setFunktionellTr??ning('')
    }
  }
  
  function handleTr??naUtomhus() {
    if(!tr??naUtomhus){
      setTr??naUtomhus('- Tr??na utomhus')
    } else if (tr??naUtomhus === '- Tr??na utomhus') {
      setTr??naUtomhus('')
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

  function handleRoligareTr??ning() {
    if(!roligareTr??ning){
      setRoligareTr??ning('- Roligare tr??ning')
    } else if (roligareTr??ning === '- Roligare tr??ning') {
      setRoligareTr??ning('')
    }
  }

  function handleMucsleUp() {
    if(!mucsleUp){
      setMucsleUp('- MucsleUp')
    } else if (mucsleUp === '- MucsleUp') {
      setMucsleUp('')
    }
  }

  function handleHandst??ende() {
    if(!handst??ende){
      setHandst??ende('- Handst??ende')
    } else if (handst??ende === '- Handst??ende') {
      setHandst??ende('')
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
      setKroppsvikt('- Kroppsviktstr??ning')
    } else if (kroppsvikt === '- Kroppsviktstr??ning') {
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
    const menu = document.querySelector("#burger-menu")
    menu.style.width="380px"
  }

  function closeMenu() {
    setMenuOpen(false)
    const menu = document.querySelector("#burger-menu")
    menu.style.width="0px"
  }

  const burgerRef = useRef();
  const menu = useRef()
  const anotherBurgerRef = useRef();



   useEffect(() => {
    
    const check = (e) => {
      console.log(e);

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
          ){
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



    <nav >
      <h1 id='company-name'>Adrians f??retag</h1>

  {/* HAMBURGAREN  */}

      <div id='burger-div-wrapper' ref={burgerRef} onClick={handleMenu}>
      <Burger menuOpen={menuOpen} />
      </div>


      <section ref={menu} id='burger-menu'>
    <div id='menu-logo'></div>
        <a onClick={handleMenu} href="#principer"> <h1 className='small-title light burger-title'>Principer</h1></a>
        <a onClick={handleMenu} href="#box-section"><h1 className='small-title light burger-title'>Kroppsviktstr??ning</h1></a>
        <a onClick={handleMenu} href="#offer"><h1 className='small-title light burger-title'>Erbjudanden</h1></a>
        <a onClick={handleMenu} href="#contact-section"><h1 className='small-title light burger-title'>Kontakt</h1></a>
       
      </section>

    </nav>



{/* F??RSTA SECTIONEN  */}
   <section id='first-section' className='dark'>

    <div id='big-logo'></div>

    <h1 className='qvote large'>???We don't stop playing because we grow old,<br />we grow old because we stop playing???
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
  <h1 className='bold-title'>F??rsta tr??ningen gratis!</h1>

  <p className='p20'>20 min samtal</p>
  <p className='p20'>30 min tr??ning</p>

  <p className='paragraf'>Tr??ning m??ste vara roligt f??r att den ska bli effektiv. Jag kan hj??lpa dig skapa en tr??ningsrutin som g??r tr??ningen roligare och mer effektiv. Vi tar ett 20 min samtal innan k??r vi ett 30 min pt pass.  </p>

  <Button />
</div>

</section>

<Qvote text={`"Don't limit the motion, move the limit"`} />


{/* TRE VIKTIGA PRINCIPER */}

<section id='principer' className='dark-theme section-center'>

  <h1 className='bold-title more-margin'>Tre viktiga principer</h1>

<div className='p-next-each-other-div'>
  <h1 className='small-title'>LEK = EFFEKTIV TR??NING</h1>
  <p className='thin-paragraf principle-p'>Har man kul n??r man tr??nar kommer man vilja forts??tta tr??na, vill man forts??tta tr??na blir tr??ningen effektiv.</p>
</div>


<div className='p-next-each-other-div'>
  <h1 className='small-title'>VANOR AVG??R RESULTATET </h1>
  <p className='thin-paragraf principle-p'>Dina vanor ??r det som avg??r om du uppn??r dina tr??ningsm??l eller ej. Mitt m??l ??r att hj??lpa dig f?? in den form av r??relse du vill ha i vardagen p?? ett naturligt vis, tr??ning ska inte k??nnas p??tvingat.</p>
</div>


<div className='p-next-each-other-div'>
  <h1 className='small-title'>VARIERAD R??RELSE</h1>
  <p className='thin-paragraf principle-p'>F??rb??ttrar man r??relsen p?? ett omr??de f??rb??ttras det p?? andra omr??den ocks??; tr??nar man pullups blir man ??ven b??ttre p?? att g??ra armh??vningar. D??rf??r tror jag p?? att en bred variation av r??relse ??r den b??sta tr??ningsformen.</p>
</div>

<Button />

</section>


<Qvote text={`???Change happens through movement???`} toText={`//Joseph Pilates`} />


{/* BOXES SECTION */}

<section id='box-section' className='dark-theme section-center'>

<h1 className='bold-title more-margin'>Bem??stra konsten att tr??na kroppsvikt</h1>

<article className='box-wrapper'>

<div className='box'>
  <h1 className='small-title'>Kroppsviktstr??ning</h1>
  <p className='thin-paragraf'>De senaste 6 ??ren har jag haft ett brett fokus p?? tr??ning inom calisthenics. <br /><br />Jag kan hj??lpa dig bygga simpla eller avancerade tr??ningspass med fokus p?? kroppsviktstr??ning samt l??ra dig b??de simpla och avancerade kroppsvikts-tr??ningsformer.</p>
</div>

<div className='box'>
  <h1 className='small-title'>Movnat</h1>
  <p className='thin-paragraf'>Movnat ??r en tr??ningsmetod som g??r ut p?? att anv??nda kroppens naturliga r??relsem??nster, springa, hoppa, kl??ttra, krypa, balansera, lyfta, b??ra och f??nga. Movnat ut??vas oftast i naturen men kan ??ven ut??vas inomhus. Denna tr??ningsform kan ??ven appliceras i ditt tr??ningsprogram.</p>
</div>

<div className='box'>
  <h1 className='small-title'>Min erfarenhet</h1>
  <p className='thin-paragraf'>Med sammanlagt 10 ??rs coaching-erfarenhet inom parkour, calisthenics, movnat och individuell tr??ning kan jag hj??lpa dig bem??stra konsten att tr??na kroppsviktstr??ning. </p>
</div>

<div className='box'>
  <h1 className='small-title'>Annat om mig</h1>
  <p className='thin-paragraf'>I ??vrigt har jag 13 ??rs erfarenhet inom parkour, SM silver i calisthenics samt en sj??tte placering i nordiska m??sterskapen i calisthenics.</p>
</div>

</article>

<Button />


</section>


{/* ERBJUDANDEN */}

<section id='offer' className='section-center section-padding light-background'>

<h1 className='bold-title'>Erbjudanden</h1>

<p className='paragraf'>Mina PT-kompetenser g??ller fr??mst kroppsviktstr??ning, movnat och parkour. 
<br/><br/>
Jag kan hj??lpa dig bem??stra allt fr??n simpla kroppsvikts??vningar som pullups och armh??vningar till avancerade tekniker som handst??ende-pushups och one arm pullups. 
<br/><br/>
Eller s?? tar vi oss in i skogen d??r du f??r l??ra dig den naturrika tr??ningsformen movnat.
<br/><br/>
Eller s?? l??r dig jag parkourens tekniker. 
</p>

<article className='box-wrapper'>

    <div className='offer-box'>
      <h1 className='small-title'>Baspaket</h1>
      <p className='tiny'>1 timme<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>850 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>Mellan</h1>
      <p className='tiny'>3 timmar<br/>3 veckors online-feedback<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>2495 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>Premium</h1>
      <p className='tiny'>8 timmar<br/>8 veckors online-feedback<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>6400 kr</h1>
    </div>

</article>

<article className='offer-text-article'>

    <div className='offer-text-div'>
      <h1 className='small-title'>Individuellt tr??ningsprogram</h1>
      <p className='offer-text-p'>Det individuella tr??ningsprogrammet inneb??r att vi bygger ett tr??ningsprogram anpassat efter dina m??l och behov. 
      <br/><br/>
      Desto fler timmar vi har tillsammans, desto mer avancerat tr??ningsprogram f??r du. Tr??ningsprogrammet f??r du p?? papper eller som digitalt dokument. 
      <br/><br/>
      Du f??r ??ven en individanpassad strategi f??r att f??rb??ttra dina tr??ningsvarnor.
      </p>
    </div>

    <div className='offer-text-div'>
      <h1 className='small-title'>Online feedback</h1>
      <p className='offer-text-p'> Kroppsviktstr??ning ??r generellt sett tacksamt f??r kroppen men vill man undvika slitskador och maximera styrka ska man ha r??tt form.  - F??r varje timme du k??per f??r du en veckoperiod d??r du kan skicka videos till mig d??r jag kan se om din form ??r bra eller om den kan f??rb??ttras. 
      <br/><br/>
      .Exempelvis s?? kan du skicka video p?? n??r du g??r pullups f??r att f?? tips p?? f??rb??ttringar. 
      <br/><br/>
      Vi kan ??ven ha dialog ang??ende dina tr??ningsvarnor
      </p>
    </div>

</article>

<Button />

<div className='line'></div>

<div onClick={handleExtraHours} className='more-h-div'>
  <p className='offer-text-p margin-sides'>Vill du k??pa fler timmar?</p>
  <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d={arrowD} fill="black"/>
    </svg>
</div>

{/* EXTRA TIMMAR */}

<article id='extra-h' className='section-center'>
  
  <article className='offer-text-article'>


  <div className='offer-box'>
      <h1 className='small-title'>1 timme</h1>
      <p className='tiny'>1 timme<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>6400 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>3 timmar</h1>
      <p className='tiny'>3 timmar<br/>3 veckors online-feedback<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>2495 kr</h1>
    </div>

    <div className='offer-box'>
      <h1 className='small-title'>5 timmar</h1>
      <p className='tiny'>8 timmar<br/>8 veckors online-feedback<br/>Individanpassat tr??ningsprogram</p>
      <h1 className='price'>Vilket pris? </h1>
    </div>

  </article>


  <p className='paragraf'>Kontakta mig vid k??p av fler timmar</p>


</article>

</section>


{/* CONTACT SECTION */}

<MessageSent text={text} success={success} />

<section id='contact-section' className='contact-section section-center dark-theme section-padding'>

  <h1 className='bold-title letter-spacing'>Kom ig??ng med roligare tr??ning</h1>

  <article id='form-article'>

    <h1 className='small-title'>Vad intresserar dig?</h1>

    <form ref={form} onSubmit={sendEmail}>

      <article className='checkbox-list-wrapper'>

{/* F??RSTA SPALTEN */}
        <div className='checkbox-list'>

          <div className='checkbox'>
            <label className='checkbox'>Kroppsviktstr??ning
            <input className="form-checkbox" onClick={handleKroppsvikt} type="checkbox" name='Kroppsviktstr??ning' />
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
            <label className='checkbox'>Funktionell tr??ning
            <input className="form-checkbox" onClick={handleFunktionellTr??ning} type="checkbox" name='FunktionellTr??ning' />
            
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
            <label className='checkbox'>Handst??ende
            <input className="form-checkbox" onClick={handleHandst??ende} type="checkbox" name='Handst??ende' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Roligare tr??ning
            <input className="form-checkbox" onClick={handleRoligareTr??ning} type="checkbox" name='RoligareTr??ning' />
            
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
            <label className='checkbox'>Tr??na utomhus
            <input className="form-checkbox" onClick={handleTr??naUtomhus} type="checkbox" name='Tr??naUtomhus' />
            
            </label>
          </div>

          <div className='checkbox'>
            <label className='checkbox'>Varierad tr??ning
            <input className="form-checkbox" onClick={handleVarieradTr??ning} type="checkbox" name='VarieradTr??ning' />
            
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
      <input className='none' name='handstaende' type="text" value={handst??ende} />
      <input className='none' name='mucsleUp' type="text" value={mucsleUp} />
      <input className='none' name='roligareTraning' type="text" value={roligareTr??ning} />
      <input className='none' name='helsosammaVarnor' type="text" value={helsosammaVarnor} />
      <input className='none' name='hinderbarna' type="text" value={OCR} />
      <input className='none' name='smidighet' type="text" value={smidighet} />
      <input className='none' name='akrobatik' type="text" value={akrobatik} />
      <input className='none' name='tranaUtomhus' type="text" value={tr??naUtomhus} />
      <input className='none' name='funktionelltraning' type="text" value={funktionellTr??ning} />
      <input className='none' name='varieradTraning' type="text" value={varieradTr??ning} />
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
