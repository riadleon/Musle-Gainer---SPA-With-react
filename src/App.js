
import './App.css';
import Blog from './components/Blog/Blog';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gym></Gym>
      <Blog></Blog>
    </div>
  );
}

export default App;
