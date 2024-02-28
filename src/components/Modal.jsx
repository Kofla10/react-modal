import React from 'react'

import '../css/Modal.scss'
import logo from '../img/mercado.png'

const Modal = ({open, onClose}) => {
    console.log(open)
    if(!open) return null //si open es false, no se ejecuta el return
    return (
        <section className="contenedor"
                 onClick={onClose}
                 >

            <div className="sub-contenido"
                 onClick={ (e) => {
                    e.stopPropagation(); //lo que hace es que no tomo el evento del oncli del contenedor
                 }
                  }
            >

                <div className="contenido">

                    <div className='icon'>
                        <img src={logo} alt="" />
                    </div>

                    <div className="mensaje">
                        <div className="title">
                            <h3>
                                Pago realiado con éxito
                            </h3>
                            <div className="text">
                                gracioas po su prefereido
                            </div>
                        </div>
                    </div>
                </div>

                <div className="actions">
                    
                    <button className="btn-descargar">
                        Descargar
                    </button>
                    <button className="btn-volver" onClick={onClose}>
                        Volver
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Modal
