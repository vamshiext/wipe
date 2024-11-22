import { Route, Routes } from "react-router"
import "./App.css"
import Home from "./pages/Home"
import Invoice from "./pages/Invoice"
import Upload from "./pages/Upload"
import Products from "./pages/Products"

export default function App() {
  return (
    <Routes>
     <Route   element={ <Home/>  }>

        <Route path="customers" element={ <Invoice /> }/>
        <Route path="products" element={ <Products /> }/>
        <Route path="/upload" element={<Upload />} />
        <Route path="/invoice" element={ <Invoice /> }/>
     </Route>
  </Routes>
  
  )
}
 

 