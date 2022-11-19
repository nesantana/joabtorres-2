import { useState } from 'react';
import './App.css';

function App() {
  const [cep, setCep] = useState('')
  const [valorBuscado, setValorBuscado] = useState({})

  const buscarApi = () => {
    if (cep.length === 8 || (cep.length === 9 && cep.includes('-'))) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(data => data.json())
      .then(data => setValorBuscado(data))

      return
    }

    alert('Opss, parece que seu CEP não é assim. Corrija e tente novamente')
  }

  return (
    <div className="App">
      <header>
        <input
          placeholder='Digite aqui seu CEP'
          value={cep}
          onChange={(evento) => setCep(evento.target.value)}
        />
        <button onClick={buscarApi}>Buscar</button>
      </header>
      { valorBuscado.cep }
    </div>
  );
}

export default App;
