import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { ROUTES } from './components/routes';
import { useEffect } from 'react';

function App() {


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
        <Current/>
        <Routes>
          {DISPLAY_ROUTE}
        </Routes>
        </MainContents>
    </div>
    </BrowserRouter>
  );
}

export default App;
