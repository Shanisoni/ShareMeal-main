import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cart/CartPage';
import FoodPage from './pages/Food/FoodPage';
import HomePage from './pages/Home/HomePage';
import HomePage0 from './pages/Home/HomePage0';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPage from './pages/Payment/PaymentPage';
import OrderTrackPage from './pages/OrderTrack/OrderTrackPage';
import ProfilePage from './pages/Profile/ProfilePage';
import OrdersPage from './pages/Orders/OrdersPage';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './components/AdminRoute/AdminRoute';
import FoodsAdminPage from './pages/FoodsAdmin/FoodsAdminPage';
import FoodEditPage from './pages/FoodEdit/FoodEditPage';
import UsersPage from './pages/UsersPage/UsersPage';
import UserEditPage from './pages/UserEdit/UserEditPage';
import FeatureSection from './components/HomeComponents/FeatureSection';
import ContactPage from './pages/Contact/contact';  // Import Contact Page


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage0 />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<FeatureSection />} />
      <Route path="/contact" element={<ContactPage />} />  {/* Contact Page Added */}

      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <CheckoutPage />
          </AuthRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      />
      <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrackPage />
          </AuthRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />
      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrdersPage />
          </AuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path="/admin/foods/:searchTerm?"
        element={
          <AdminRoute>
            <FoodsAdminPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/addFood"
        element={
          <AdminRoute>
            <FoodEditPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/editFood/:foodId"
        element={
          <AdminRoute>
            <FoodEditPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users/:searchTerm?"
        element={
          <AdminRoute>
            <UsersPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/editUser/:userId"
        element={
          <AdminRoute>
            <UserEditPage />
          </AdminRoute>
        }
      />
    </Routes>
  );
}
