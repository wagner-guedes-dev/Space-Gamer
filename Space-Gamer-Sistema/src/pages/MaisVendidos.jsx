import React, { useState } from 'react';
import './MaisVendidos.css'

import estrela from '../images/estrela.png'
const MaisVendidos = () => {
  

  return (
    <div className='mais-vendidos'>
      <h1>Mais vendidos</h1>
      <ul>
        <li className='product'>
            <div >
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbecue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
            </div>
        </li>
        <li className='product'>
            <div >
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbecue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
            </div>
        </li>
        <li className='product'>
            <div >
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbecue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
            </div>
        </li>
        <li className='product'>
            <div >
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbecue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
            </div>
        </li>
      </ul>

    </div>
  );
};

export default MaisVendidos;
