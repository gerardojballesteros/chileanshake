import React, { useState, useEffect } from 'react'
import './card.sass'
import brujula from './img/brujula.svg'
import cinta from './img/cinta-metrica.svg'
import profundidad from './img/profundidad.png'
import megafono from './img/megafono.svg'
import terremoto from './img/terremoto2.svg'
import calendario from './img/calendario.png'


export const Card = () => {

    const [sismo, setSismo] = useState([]);

    useEffect(() => {
        Api();
    }, []);

    const Api = async() => {

        const url = 'https://api.gael.cl/general/public/sismos';
        const resp = await fetch( url );
        const data  = await resp.json();
        

        const respData = data.map( consulta => {

            return {
                Fecha: consulta.Fecha,
                Latitud: consulta.Latitud,
                Longitud: consulta.Longitud,
                Profundidad: consulta.Profundidad,
                Magnitud: consulta.Magnitud,
                Agencia: consulta.Agencia,
                RefGeografica: consulta.RefGeografica,
                FechaUpdate: consulta.FechaUpdate

            }
        })

        setSismo(respData);
        }

    return (
        <>
          
          <div className="container">
                
              <div className="wrap-container" >
              {sismo.map( ({ Fecha, Latitud, Longitud, Profundidad, Magnitud, Agencia, RefGeografica, FechaUpdate }) => {

                    return (
                    <div className="card" key={ Fecha } >
                        <div className="wrap-card">
                            <div className="status">
                                <p>Piola</p>
                            </div>
                            <div className="content-card">
                                <div className="country">
                                    <h1 className="animate__animated animate__pulse animate__infinite">{ RefGeografica }</h1>
                                </div>
                                <ul>
                                    <li>
                                        <img src={ brujula } alt=""/>
                                        <p>{ Latitud }</p>
                                    </li>
                                    <li>
                                        <img src={ cinta } alt=""/>
                                        <p>{ Longitud }</p>
                                    </li>
                                    <li>
                                        <img src={ profundidad } alt=""/>
                                        <p>{ Profundidad } Km</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src={ terremoto } alt=""/>
                                        <p>{ Magnitud }/Mw</p>
                                    </li>
                                    <li>
                                        <img src={ calendario } alt=""/>
                                        <p id="fecha">{ Fecha } Hrs</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src={ megafono } alt=""/>
                                        <p id="mega">Geophysics, University of Chile (CHILE).</p>
                                    </li>
                                </ul>
                                <div className="update">
                                    <p>Última vez actualizado { FechaUpdate } Hrs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                </div>
                
          </div>
            
        </>
    )
}


