import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { Forecast } from './components/daily-hourly-components/Forecast';

function App() {
  return (
    
    <div className="App h-screen flex flex-col">
      <NavBar/>
      <MainContents>
        <Current/>
        {/* route forecast and map component */}
        <Forecast/>
        </MainContents>
    </div>
  );
}

export default App;
