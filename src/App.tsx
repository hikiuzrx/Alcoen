import { RouteNavLayout } from "./layouts/RootNavLayout";
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
import RIGS from "./pages/Services/RIGS";
import IMAE from "./pages/Services/IMAE";
import CRAML from "./pages/Services/CRAML";
import IRESP from "./pages/Services/IRESP";
import FAPI from "./pages/Services/FAPI";
import FCND from "./pages/Services/FCND";
import FES from "./pages/Services/FES";
import MADDP from "./pages/Services/MADDP";
import CND from "./pages/Services/CND";
import EATA from "./pages/Services/EATA";
import AT from "./pages/Services/AT";
import EAER from "./pages/Services/EAER";
import CREIE from "./pages/Services/CREIE";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteNavLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="a-propos" element={<Apropos/>}/>
      <Route path="contact" element={<Contact/>}/>
      
      <Route path="service" element={<ServicesLayout/>}>
      <Route index element={<Service/>}/>
      <Route path="RIG-service" element={<RIGS/>}/>
      <Route path="Inspection-marchandises-avant-expédition" element={<IMAE/>}/>
      <Route path="Contrôle-réglementaire-des-appareils-de-manutention-et-levage" element={<CRAML/>}/>
      <Route path="Contrôle-Non-Destructifs" element={<CND/>}  />
      <Route path="Expertise-et-audit-type-ATEX" element={<EATA/>} />
      <Route path="Inspection-Réglementaire-ESP" element={<IRESP/>}/>
      <Route path="Contrôle-réglementaire-des-équipement-&-installations-électriques" element={<CREIE/>} />
      <Route path="Assistance-technique" element ={<AT/>} />
      <Route path="Expertise-assurance-et-réassurance" element={<EAER/>} />
      <Route path="Mise-à-disposition-du-personnel" element={<MADDP/>} />
      <Route path="Formation-API-510-,-570,-,-579-,-653...etc." element={<FAPI/>} />
      <Route path="Formation-CND-LI-&-LII-renouvellement-certificat" element={<FCND/>}/>
      <Route path="Formation-et-sensibilisation" element={<FES/>} />

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
