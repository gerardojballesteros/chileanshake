import React from 'react'
import logo from './img/Logo.svg'
import './navbar.sass'

export const Navbar = () => {
    return (
        <>
           <div className="logo">
              <div className="wrap-logo">
                <div className="img-logo animate__animated animate__shakeX ">
                    <img src={ logo } alt=""/>
                </div>
                <div className="txt-logo">
                    <p>Te mostramos los ultimos sismos en Chile en tiempo real ;)</p>
                </div>
              </div>
            </div> 
        </>
    )
}
