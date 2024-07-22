import CabecaHeader from './components/Cabeca-header'
import Button from './components/botao/button';

//import PageForms from './pages/forms';

import './App.css';

function App() {

  const handleCarneClick = () => {
    console.log("Gerar Carnês");
  }

  const handleRifaClick = () => {
    console.log("Gerar Rifas")
  }

  return (
    <div className="App">
      <CabecaHeader />
        <div className="buttons-row">
          <Button
            title="GERADOR DE CARNÊS"
            onPress={handleCarneClick}
            showLogoCarne={true}
          />
          <Button
            title="GERADOR DE RIFAS"
            onPress={handleRifaClick}
            showLogoRifa={true}
          />  
        </div>
        <div>
        </div>
    </div>
  );
}

export default App;
