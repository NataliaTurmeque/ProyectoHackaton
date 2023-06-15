import './App.css'
import Loguito from '../src/assets/Logoremo.png'
import Loguito1 from '../src/assets/Logo2.png'
import Loguito2 from '../src/assets/Logo3.png';


function General() {

  return (
   
    <div>
      
      <nav>
<div class="logo"><img className="logo1"src={Loguito}></img>
<img className="logo2"src={Loguito1}></img>
<img className="logo3"src={Loguito2}></img></div>
</nav>
<div className="barnav">
<a href='#general'><h1>elemntos</h1></a>

<div className='titleNav1'>Ubicación</div>
<div className='titleNav1'>Tiempo</div>
<div className='titleNav1'>Conclusiones</div>
</div>
<div className='items'>
<div className="contenido">
<h1 className='title1'>Bienvenido al SIViGILA</h1>
<p>El Sistema de Salud Pública SIVIGILA tiene como responsabilidad el 
  proceso de observación y análisis objetivo, sistemático y constante de los eventos en salud, el cual sustenta la orientación, planificación, ejecución, seguimiento y evaluación de la práctica de la salud pública.</p>
</div>
  </div>
  </div>
  )
}

export default General

  