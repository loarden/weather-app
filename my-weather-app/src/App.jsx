import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';

function App() {
  const [result, setResult] = useState('Budapest')
  const API_KEY = process.env.REACT_APP_API_KEY;

  function handleSelect(selected) {
    setResult(selected)
  }

  return (
    <div className="flex flex-col items-center">
      <Input
        onSelect={handleSelect}
      />
      {result.length !== 0 ?
        <Card
          apiKey = {API_KEY}
          city={result} 
          />
        : null}
    </div>
  );
}

export default App;
