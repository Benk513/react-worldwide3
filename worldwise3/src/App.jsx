import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountriesList from './components/CountriesList'
import City from './components/City'
import Form from './components/Form'



function App() {

  


  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage/>}/> 
        <Route path="app" element={<AppLayout/>}>
           
          <Route index element={<Navigate replace to ="cities"/>} /> 
          <Route path='cities' element={<CityList/>} />
          <Route path='cities/:id' element={<City/>} />
          
          <Route path='countries' element={<CountriesList />} />
          
          <Route path='form' element={<Form/>}/>

        </Route>
        <Route path="login" element={<Login/>}/> 
        <Route path="product" element={<Product/>}/> 
        <Route path="pricing" element={<Pricing/>}/> 
        <Route path="*" element={<PageNotFound/>}/> 

      </Routes>

    </BrowserRouter>
  )
}

export default App
