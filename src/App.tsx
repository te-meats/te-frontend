import Login from '@containers/Login'
import Customers from '@containers/Customers';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '@utils/PrivateRoutes';

function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/customers" element={<Customers />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
