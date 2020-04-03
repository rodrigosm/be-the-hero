//import React, { useState } from 'react';
import React from 'react';

import './global.css';

//import Header from './Header'; //Exemplo inicial
//import Logon from './pages/Logon'; //Este código foi substituído pela rota.
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

//Exemplo para exibir um componente
//<Logon />

/* Desta forma: O componente vai obter o texto através do props.title (propos.NOME-DA-PROPRIEDADE)
      <Header title="Semana OmniStack 11.0"/>
      */



      /* Desta forma: O componente vai obter o texto através do props.children - obtém tudo entre as tags do componente */
/*
    <Header> 
      Semana OmniStack 11
    </Header>
      */



/*
const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }


  //Deve ficar dentro do return

   <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>

*/
export default App;
