import './App.css';
import Button from './components/Button';
import Qvote from './components/Qvote';

function App() {
  return (
    <>

{/* NAVBAREN */}

    <nav>
      <h1 id='company-name'>Adrians företag</h1>

  {/* HAMBURGAREN  */}
      <svg id='hamburger-meny' width="30" height="17" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H19M1 1H19M1 13H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/* KRYSSET */}
{/* d="M1.42894 14L15.4289 1M1.42894 1.00002L15.4289 14"  */}
    </nav>


{/* FÖRSTA SECTIONEN  */}
   <section id='first-section' className='dark'>

    <div id='big-logo'></div>

    <h1 className='qvote large'>“We don't stop playing because we grow old,<br />we grow old because we stop playing”
    <h1 className='qvote tiny to-qvote'>//George Bernard Shaw</h1>
    </h1>
    
    
    <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918087 0.918084C1.20837 0.627064 1.55322 0.39617 1.93288 0.23863C2.31253 0.0810899 2.71954 0 3.13059 0C3.54163 0 3.94864 0.0810899 4.3283 0.23863C4.70795 0.39617 5.0528 0.627064 5.34309 0.918084L40.6306 36.2118L75.9181 0.918084C76.2086 0.627535 76.5536 0.397058 76.9332 0.239813C77.3128 0.082569 77.7197 0.00163615 78.1306 0.00163615C78.5415 0.00163615 78.9484 0.082569 79.328 0.239813C79.7076 0.397058 80.0525 0.627535 80.3431 0.918084C80.6336 1.20863 80.8641 1.55357 81.0214 1.93319C81.1786 2.31281 81.2595 2.71969 81.2595 3.13058C81.2595 3.54148 81.1786 3.94836 81.0214 4.32798C80.8641 4.7076 80.6336 5.05254 80.3431 5.34309L42.8431 42.8431C42.5528 43.1341 42.2079 43.365 41.8283 43.5225C41.4486 43.6801 41.0416 43.7612 40.6306 43.7612C40.2195 43.7612 39.8125 43.6801 39.4329 43.5225C39.0532 43.365 38.7084 43.1341 38.4181 42.8431L0.918087 5.34309C0.627066 5.0528 0.396173 4.70795 0.238633 4.3283C0.0810928 3.94864 0 3.54163 0 3.13058C0 2.71954 0.0810928 2.31253 0.238633 1.93287C0.396173 1.55322 0.627066 1.20837 0.918087 0.918084Z" fill="white"/>
    </svg>


   </section>

{/* OFFER SECTION */}

<section id='offer-section'>

<div id='offer-text-div'>
  <h1 className='bold-title'>Första träningen gratis!</h1>

  <p className='p20'>20 min samtal</p>
  <p className='p18'>30 min träning</p>

  <p>Adrian bjuder på första träningspasseet! Här erbjuds du ____ och ni går igenom _____</p>

  <Button />
</div>

</section>

<Qvote text={`"Don't limit the motion, move the limit"`} />

<section className='dark-theme section-center'>

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

</section>


<Qvote text={`“Change happens through movement”`} toText={`//Joseph Pilates`} />


{/* BOXES SECTION */}

<section className='dark-theme section-center'>

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

</section>


{/* ERBJUDANDEN */}

<section className='section-center section-padding'>

<h1 className='bold-title'>Erbjudanden</h1>

<p className='paragraf'>Mina PT-kompetenser gäller främst kroppsviktsträning, movnat och parkour. 
<br/><br/>
Jag kan hjälpa dig bemästra allt från simpla kroppsviktsövningar som pullups och armhävningar till avancerade tekniker som handstående-pushups och one arm pullups. 
<br/><br/>
Eller så tar vi oss in i skogen där du får lära dig den naturrika träningsformen movnat.
<br/><br/>
Eller så lär dig jag parkourens tekniker. 
</p>

<article className='box-wrapper more-space'>

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
      Vi kan även ha dialog angående träningsvarnor
      </p>
    </div>

</article>

<Button />

<div className='line'></div>

<div className='more-h-div'>
  <p className='offer-text-p'>Vill du köpa fler timmar?</p>
  <svg className='arrow-down' width="20" viewBox="0 0 82 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918087 0.918084C1.20837 0.627064 1.55322 0.39617 1.93288 0.23863C2.31253 0.0810899 2.71954 0 3.13059 0C3.54163 0 3.94864 0.0810899 4.3283 0.23863C4.70795 0.39617 5.0528 0.627064 5.34309 0.918084L40.6306 36.2118L75.9181 0.918084C76.2086 0.627535 76.5536 0.397058 76.9332 0.239813C77.3128 0.082569 77.7197 0.00163615 78.1306 0.00163615C78.5415 0.00163615 78.9484 0.082569 79.328 0.239813C79.7076 0.397058 80.0525 0.627535 80.3431 0.918084C80.6336 1.20863 80.8641 1.55357 81.0214 1.93319C81.1786 2.31281 81.2595 2.71969 81.2595 3.13058C81.2595 3.54148 81.1786 3.94836 81.0214 4.32798C80.8641 4.7076 80.6336 5.05254 80.3431 5.34309L42.8431 42.8431C42.5528 43.1341 42.2079 43.365 41.8283 43.5225C41.4486 43.6801 41.0416 43.7612 40.6306 43.7612C40.2195 43.7612 39.8125 43.6801 39.4329 43.5225C39.0532 43.365 38.7084 43.1341 38.4181 42.8431L0.918087 5.34309C0.627066 5.0528 0.396173 4.70795 0.238633 4.3283C0.0810928 3.94864 0 3.54163 0 3.13058C0 2.71954 0.0810928 2.31253 0.238633 1.93287C0.396173 1.55322 0.627066 1.20837 0.918087 0.918084Z" fill="black"/>
    </svg>
</div>

{/* 
PIL UPPÅT
d="M13.5183 7.03752L7.51833 1.03752L1.51833 7.03752" */}

<article>
  {/* FLER TIMMAR HÄR  */}
</article>

</section>


{/* CONTACT SECTION */}


<section className='contact-section dark-theme section-padding'>

  <h1 className='bold-title'>Kontakta mig</h1>

  <article id='contact-info-article'>

  <div className='info-with-space'>
  <p>Telefon:</p>
  <a href="tel:0707898707">0707 89 87 07</a>
  </div>

  <div className='info-with-space'>
  <p>Email:</p>
  <a href="mailto:soderberg.skog@gmail.com">soderberg.skog@gmail.com</a>
  </div>

  </article>

  <article id='form-article'>

  </article>


</section>

   </>
  );
}

export default App;
