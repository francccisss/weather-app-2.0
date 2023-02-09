import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { Forecast } from './components/daily-hourly-components/Forecast';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Map } from './components/map-components/Map';
import { ROUTES } from './components/routes';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App h-screen flex flex-col">
      <NavBar/>
      <MainContents>
        <Current/>
        <Routes>
          {ROUTES.map(route=>{
            return <Route key={route.pageName} path={route.path} element={route.element} />
          })}
        </Routes>
        </MainContents>
    </div>
    </BrowserRouter>
  );
}

export default App;
