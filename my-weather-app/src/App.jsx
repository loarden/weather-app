import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';

function App() {
  const [result, setResult] = useState({
    lat: 51.52, 
    lon: -0.11
  })

  return (
    <div className="flex flex-col items-center">
      <Input />
      <Card city={result}/>
    </div>
  );
}

export default App;
