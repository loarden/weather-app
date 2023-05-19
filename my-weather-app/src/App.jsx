import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';

function App() {
  const [result, setResult] = useState({
    lat: 47.5, 
    lon: 19.08
  })

  return (
    <div className="flex flex-col items-center">
      <Input />
      <Card city={result}/>
    </div>
  );
}

export default App;
