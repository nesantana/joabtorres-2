import { useState } from 'react';
import './App.css';

function App() {
  const [cep, setCep] = useState('')
  const [valorBuscado, setValorBuscado] = useState({})

  
  

  const buscarApi = () => {
    if (cep.length === 8 || (cep.length === 9 && cep.includes('-'))) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
         setValorBuscado(data)
        }).catch(e => console.log(e))
      

      
    }else{
      alert('Opss, parece que seu cep está inválido. Corrija e tente novamente')
    }
    
   
   

    
  }

   return(
    
    <div className="App">
      <header>
        <h1>Pega CEP</h1>
        <input
          placeholder='Digite aqui seu CEP'
          value={cep}
          type='number'
          onChange={(evento) => setCep(evento.target.value)}
        />
        <button onClick={buscarApi}>Buscar</button>
      </header>
    
       {valorBuscado?.cep}
       <br></br>
       {valorBuscado?.localidade}
       <br></br>
       {valorBuscado?.bairro}
       <br></br>
       {valorBuscado?.logradouro}
       <br></br>
       {valorBuscado?.complemento}

    </div>
  );
}

export default App;
