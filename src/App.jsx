import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import { MyState } from "./context/data/MyState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./pages/allproducts/AllProducts";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteAdmin>
                <Dashboard />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteAdmin>
                <AddProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteAdmin>
                <UpdateProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </Router>
    </MyState>
  );
}

export default App;

// user..

export const ProtectedRoute = ({children})=>{
  const user = localStorage.getItem("user")
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

//admin..

export const ProtectedRouteAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'mbh@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}


