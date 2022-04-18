import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import Services from './Pages/Home/Services/Services';
import Checkout from './Pages/Checkout/Checkout';
import Checking from './Pages/Checkout/Cheking/Checking';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import RequireAuth from './Pages/Login/RequiredAuth/RequriedAuth';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        {/* <Route path="/service/:serviceId" element={<ServicesDetail></ServicesDetail>}></Route> */}
        <Route path='/register' element={<Register></Register>}></Route>


        <Route path='/checking/:checkId' element={

          <RequireAuth>
            <Checking></Checking>
          </RequireAuth>

        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer ></Footer>

    </div>
  );
}

export default App;
