import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';

function App() {
  const [result, setResult] = useState('Budapest')

  function handleSelect(selected) {
    setResult(selected)
  }

  useEffect(() => {
    console.log(result)
  },[result])

  return (
    <div className="flex flex-col items-center">
      <Input
        onSelect={handleSelect}
      />
      {result.length !== 0 ?
        <Card city={result} />
        : null}
    </div>
  );
}

export default App;
