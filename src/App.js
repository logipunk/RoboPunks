import { useState } from 'react';
import './App.css';
import MainMint from './MainMint'
import NavBar from './NavBar'
import About from './About'
import Footer from './Footer'

function App() {

  const [accounts, setAccounts] = useState([]);//any visual element that change (button, ) useState updates it 

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
        <About accounts={accounts} setAccounts={setAccounts} />
        <Footer accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>

  );

}

export default App;
