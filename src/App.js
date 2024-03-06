import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const words = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [searchWord, setSearchWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const foundWord = words.find(
      entry => entry.word.toLowerCase() === searchWord.toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in dictionary');
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <input value={searchWord} onChange={e => setSearchWord(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h4>Definition:</h4>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default App;
