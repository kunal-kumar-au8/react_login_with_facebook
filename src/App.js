import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Auth</h1>
      <Facebook/>
        <p className="App-intro">
          To get Started, authantication with Facebook.
        </p>
      </header>
    </div>
  );
}

export default App;
