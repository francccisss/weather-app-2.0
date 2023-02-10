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
        <Current>
          <CurrentHeading location={placeHolders.location} currentTemp={placeHolders.currentTemp}/>
        </Current>
        <Routes>
          {DISPLAY_ROUTE}
        </Routes>
        </MainContents>
    </div>
    </BrowserRouter>
  );
}

export default App;
