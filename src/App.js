import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState()
  return (
    <div className="App">
      <List setInfo={setInfo} />
      {info && <Details info={info} />}
    </div>
  );
}

export default App;
