import Login from '@containers/Login'
import Customers from '@containers/Customers';
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '@utils/PrivateRoutes';
import Dashboard from '@containers/Dashboard';
import Home from '@containers/Home';
import CuttingInstructions from '@containers/CuttingInstructions';
import Users from '@containers/Users';
import '@assets/App.scss'
import Calendar from '@containers/Calendar';
import Producers from '@containers/Producers';
import WeightStation from '@containers/WeightStation';

function App() {

  return (
    <div className="container">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route 
            path="/home"
            element={
              <Dashboard component={<Home />} />
            }
          />
          <Route 
            path="/scheduler"
            element={
              <Dashboard component={<Calendar />} />
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
          <Route 
            path="/producers"
            element={
              <Dashboard component={<Producers />} />
            }
          />
          <Route 
            path="/weight-station"
            element={
              <Dashboard component={<WeightStation />} />
            }
          />
          <Route 
            path="/users"
            element={
              <Dashboard component={<Users />} />
            }
          />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
