import MessageCard from './components/MessageCard';
import Students from './components/Students';
import CounterCard from './components/CounterCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <MessageCard name="Zack Mutombo" />
      <Students name="Mutombo" />
      <CounterCard />
    </div>
  );
}

export default App;
