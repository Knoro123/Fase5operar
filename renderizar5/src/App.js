import logo from './logo.svg';
import './App.css';

 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>DISEÑOS DE SITIOS WEB</code> 
        </p>
        <a
          className="App-link"
          href="http://127.0.0.1:5501/page1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          PAGINA WEB PRINCIPAL
        </a>
      </header>
    </div>
  );
}

export default App;
