import { Forecast } from "./daily-hourly-components/Forecast";
import { Map } from "./map-components/Map";

export const ROUTES=[
    {path:"/", pageName:"home", element:<Forecast/>},
    {path:"/map", pageName:"map", element:<Map/>}
]
