import './styles/app.css';
import {Routes,Route} from 'react-router-dom';
import Audio from './pages/Audio';
import OnePage from './pages/One_page';
import Nosotros from './pages/Nosotros';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<OnePage/>}></Route>
        <Route path='Audio' element={<Audio/>}></Route>
        <Route path='Nosotros' element={<Nosotros/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

