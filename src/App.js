import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { Forecast } from './components/daily-hourly-components/Forecast';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Map } from './components/map-components/Map';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App h-screen flex flex-col">
      <NavBar/>
      <MainContents>
        <Current/>
        {/* route forecast and map component */}
        <Routes>
          <Route path='/' element={<Forecast/>}/>
          <Route path='/map' element={<Map/>}/>
        </Routes>
        </MainContents>
    </div>
    </BrowserRouter>
  );
}

export default App;
