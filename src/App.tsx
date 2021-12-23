// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Functiones } from "./typescript/Functiones";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Contador } from './components/Contador';

import { ContadorConHook } from "./components/ContadorConHook";

 const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Functiones /> */}
      {/* <Contador /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;