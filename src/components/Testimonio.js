// import React from 'react';
import '../css/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/${props.image}.png`)}
        alt='Foto de Emma' />
      <div className='contenido-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className='cargo-testimonio'>
          {props.position} en <strong>{props.business}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

// export default Testimonio;