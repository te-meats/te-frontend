import Login from '@containers/Login'
import Customers from '@containers/Customers';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '@utils/PrivateRoutes';
import Dashboard from '@containers/Dashboard';
import Home from '@containers/Home';
import CuttingInstructions from '@containers/CuttingInstructions';

function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route 
            path="/home"
            element={
              <Dashboard component={<Home />} />
            }
          />
          <Route 
            path="/cutting-instructions"
            element={
              <Dashboard component={<CuttingInstructions />} />
            }
          />
          <Route 
            path="/customers"
            element={
              <Dashboard component={<Customers />} />
            }
          />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
