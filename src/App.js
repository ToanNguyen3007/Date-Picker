import './App.css';
import DateContainer from './components/DateContaier';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='date-container'>
        <DateContainer/>
        </div>
    </div>
  );
}

export default App;
