import {Outlet } from "react-router-dom"
import ServiceHeader from "../components/ServiceHeader"
import { useLocation } from "react-router-dom"
export default function ServicesLayout(){
     const location = useLocation()
     if(location.pathname === '/service'){
          return(<Outlet/>)
     }else{
          return (<>
          <ServiceHeader/>
          <Outlet/>
          </>)
     }
}