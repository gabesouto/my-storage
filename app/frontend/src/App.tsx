import { Routes, Route, Navigate } from 'react-router-dom';
import SingIn from './pages/login/login.page';
import Signup from './pages/ signup/signup.page';
import ProductsPage from './pages/products/products.page';

const App = () => {

const isAuthenticated = localStorage.getItem("isAuthenticated")


 return (
    <div className='h-screen'>
       <Routes>

          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<Signup />} />
          
          {
            isAuthenticated &&  <Route path="/products" element={<ProductsPage />} />
          }

       <Route path={"*"} element={ <Navigate replace to={ "/signin" }/> }/>
     
       </Routes>
    </div>
 );
};

export default App