import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
    return (
      <div className="App">
        <h1>Hello Dojo!</h1> 
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climg Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>

      </div>
    );    
}
export default App;
