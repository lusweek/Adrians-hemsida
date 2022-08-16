import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Checkbox from './Checkbox';


function Form() {

    // TILL CHECKBOXARNA 

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





  


  return (
    <>
        
        <article className='checkbox-list-wrapper'>

{/* CHECKBOXARNA */}

{/* FÖRSTA SPALTEN */}
<div className='checkbox-list'>

  
<Checkbox lable={'Parkour'} Lname={'parkour'} />
<Checkbox lable={'Hinderbarna'} Lname={'hinderbarna'} />
<Checkbox lable={'Funktionell traning'} Lname={'funktionelltraning'} />
<Checkbox lable={'Calisthenics'} Lname={'parkour'} />

 

</div>

{/* ANDRA SPALTEN */}
<div className='checkbox-list second-checklist-column'>

    <Checkbox lable={'Så cool yo'} Lname={'måste passa i emailJS formuläret'} />

</div>



</article>


    </>
  )
}

export default Form