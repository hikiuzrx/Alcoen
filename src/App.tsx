import { RouteNavLayout } from "./layouts/RouteNavLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { Secteur } from "./pages/Secteur";
import { Contact } from "./pages/Contact";
import { Service } from './pages/Service'
import { Apropos } from "./pages/Apropos";
import ServicesLayout from "./layouts/ServicesLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteNavLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="a-propos" element={<Apropos/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="services" element={<ServicesLayout/>}>
      <Route index element={<Service/>}/>
      </Route>
      <Route path="secteur" element={<Secteur/>}/>
    </Route>
  )

)
function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
