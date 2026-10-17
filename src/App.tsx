import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import { RouteNavLayout } from "./layouts/RootNavLayout";
import ServicesLayout from "./layouts/ServicesLayout";
import { Home } from "./pages/Home";
import { Secteur } from "./pages/Secteur";
import { Contact } from "./pages/Contact";
import { sendEmail } from "./pages/contactAction";
import { Service } from './pages/Service'
import { Apropos } from "./pages/Apropos";
import { NotFound, RouteError } from "./pages/NotFound";
import { services } from "./data/services";

// Each service page is loaded on demand
const pages: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  RIGS: lazy(() => import("./pages/Services/RIGS")),
  IMAE: lazy(() => import("./pages/Services/IMAE")),
  CRAML: lazy(() => import("./pages/Services/CRAML")),
  IRESP: lazy(() => import("./pages/Services/IRESP")),
  FAPI: lazy(() => import("./pages/Services/FAPI")),
  FCND: lazy(() => import("./pages/Services/FCND")),
  FES: lazy(() => import("./pages/Services/FES")),
  MADDP: lazy(() => import("./pages/Services/MADDP")),
  CND: lazy(() => import("./pages/Services/CND")),
  EATA: lazy(() => import("./pages/Services/EATA")),
  AT: lazy(() => import("./pages/Services/AT")),
  EAER: lazy(() => import("./pages/Services/EAER")),
  CREIE: lazy(() => import("./pages/Services/CREIE")),
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteNavLayout/>} errorElement={<RouteError/>}>
      <Route index element={<Home/>}/>
      <Route path="a-propos" element={<Apropos/>}/>
      <Route path="contact" element={<Contact/>} action={sendEmail} />

      <Route path="service" element={<ServicesLayout/>}>
        <Route index element={<Service/>}/>
        {services.map(({ slug, code, legacyPath }) => {
          const Page = pages[code];
          return [
            <Route
              key={slug}
              path={slug}
              element={<Suspense fallback={null}><Page/></Suspense>}
            />,
            // old accented URLs keep working
            <Route key={`legacy-${slug}`} path={legacyPath} element={<Navigate to={`/service/${slug}`} replace/>} />,
          ];
        })}
      </Route>
      <Route path="secteur" element={<Secteur/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
