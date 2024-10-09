
import './App.css';

import Counter from './components/counter'
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>
        <Movies/>
      </header>
    </div>
  );
}

export default App;
