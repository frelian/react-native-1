// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Functiones } from "./typescript/Functiones";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { TiposBasicos } from "./typescript/TiposBasicos";
import { Contador } from './components/Contador';

 const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Functiones /> */}
      <Contador />
    </div>
  )
}

export default App;