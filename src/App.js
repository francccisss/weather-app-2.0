import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { ROUTES } from './components/routes';
import { useEffect } from 'react';
import { CurrentHeading } from './components/current-components/CurrentHeading';

function App() {

  const placeHolders = {
    location: "Dubai, Uae",
  currentTemp: 30,
  minMax: [27,32]
  }


  useEffect(()=>{
  },[])

  const DISPLAY_ROUTE = ROUTES.map(route=>{
          return <Route key={route.pageName} path={route.path} element={route.element} /> 
  })

  return (
    <BrowserRouter>
    <div className="App h-screen flex flex-col">
      <NavBar/>
      <MainContents>
        <div id="main-container" className='flex flex-1 px-20 h-4/5'>
        <Current>
          <CurrentHeading location={placeHolders.location} minMax={placeHolders.minMax} currentTemp={placeHolders.currentTemp}/>
        </Current>
        <Routes>
          {DISPLAY_ROUTE}
        </Routes>
        </div>
        </MainContents>
    </div>
    </BrowserRouter>
  );
}

export default App;
