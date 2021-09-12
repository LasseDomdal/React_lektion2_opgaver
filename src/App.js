import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header"/>*/}
              <Header header={{ overskrift: "Header is here"}} />
                <Footer footer={{ footerskrift: "footer is here"}}/>
    </div>
  );
}

export default App;
