import React from 'react';
import { Link } from 'react-router-dom';

const Rutas = () => {
  return (
    <div>
      <Link to="/general">
        <div className="boton">General</div>
      </Link>
      <Link to="/ubicacion">
        <div className="boton">Ubicación</div>
      </Link>
      <Link to="/tiempo">
        <div className="boton">Tiempo</div>
      </Link>
      <Link to="/enfermedades">
        <div className="boton">Enfermedades</div>
      </Link>
    </div>
  );
}

export default Rutas;