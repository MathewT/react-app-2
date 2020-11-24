import './App.css';
import Dog from './Dog/Dog';

function App() {
  return (
    <div className="App">
      <h3>hello, React world of dogs.</h3>
      <Dog name="Max" age="6" />
      <Dog name="Kirby" age="8">I am a sweet dog.</Dog>
      <Dog name="Lola" age="6" />
    </div>
  );
}

export default App;
