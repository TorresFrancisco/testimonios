import './App.css';
import { Testimonio } from './components/Testimonio.js';
// import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          name='Shawn Wang'
          country='Singapur'
          image='Shawn'
          position='Ingeniero de Software'
          business='Amazon'
          testimony='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
        <Testimonio
          name='Sarah Chima'
          country='Nigeria'
          image='Sarah'
          position='Ingeniera de Software'
          business='ChatDesk'
          testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
        <Testimonio
          name='Emma Bostian'
          country='Suecia'
          image='Emma'
          position='Ingeniera de Software'
          business='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;
