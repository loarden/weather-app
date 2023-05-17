import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Input />
      <Card city='Budapest'/>
    </div>
  );
}

export default App;
