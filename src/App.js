import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeaderClass from "./components/headerClass";
import FooterClass from "./components/footerClass";
import ErrorChecker from "./components/ErrorChecker";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header"/>*/}
        <HeaderClass overskrift= "HeaderClass is here with component" isLog={true} signup = "signup"/>
        <FooterClass footerskrift= "footerClass is here with state" />
        <Header overskrift ="header function is here with component" isLog={true} signup = "signup"/>
        <Footer footerskrift = "footer function is here with state"/>
        <ErrorChecker/>
    </div>
  );
}

export default App;
