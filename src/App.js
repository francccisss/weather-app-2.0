import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';

function App() {
  return (
    <div className="App h-full">
      <NavBar/>
      
      <MainContents/>
    </div>
  );
}

export default App;
