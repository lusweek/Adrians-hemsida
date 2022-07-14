import React, { useEffect, useRef } from 'react'
import './burger.css'

function Burger({ menuOpen }) {

    useEffect(() => {
        console.log(menuOpen);

        if (menuOpen == false) {
            const toggle = document.querySelector('#toggle');
            const line = document.querySelector('#line-away');
                toggle.classList.remove('active')
                line.classList.remove('none')
        }

    }, [menuOpen])

    const anotherBurgerRef = useRef();

    const handleToggle = () => {
    const toggle = document.querySelector('#toggle');
    const line = document.querySelector('#line-away');
        toggle.classList.toggle('active')
        line.classList.toggle('none')
    }

  return (
    <div ref={anotherBurgerRef} onClick={handleToggle} id='toggle'>
        <div id='line-away'></div>
    </div>

  )
}

export default Burger