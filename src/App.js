import './App.css';
import { NavBar } from './components/navbar-components/NavBar';
import { MainContents } from './components/main-contents-component/MainContents';
import { Current } from './components/current-components/Current';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { ROUTES } from './components/routes';
import { CurrentHeading } from './components/current-components/CurrentHeading';
import { useEffect, useState } from 'react';

function App() {
  
  const [searchQuery, setSearchQuery] = useState("Dubai");
  const [currentLocation, setCurrentLocation] = useState({});
  const placeHolders = {
    location: "Dubai, Uae",
    currentTemp: 30,
    minMax: [27,32]
  }


  async function getLocationKey(){
    try {
    const fetchLocationKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&q=${searchQuery}`)
    const locationKey = await fetchLocationKey.json()
    // since accuweather's search api returns an array of city by rank we'll be retreiving only the first element
    return locationKey[0]

    } catch (error) {
       throw error
    }
  }

  useEffect(()=>{
    getLocationKey().then((key)=>{
      setCurrentLocation(key)
    })
   
  },[searchQuery])

  useEffect(()=>{
    console.log(currentLocation)
  },[currentLocation])

  const DISPLAY_ROUTE = ROUTES.map(route=>{
          return <Route key={route.pageName} path={route.path} element={route.element} /> 
  })

  return (
    <BrowserRouter>
    <div className="App h-screen flex flex-col">
      <NavBar handleQuery={setSearchQuery}/>
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
