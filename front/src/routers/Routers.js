import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Acceuil from "../pages/Acceuil";
import Delivery from "../pages/Delivery";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SignUp from "../pages/SignUp";
import Produit from "../pages/Produit";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import { UpdateProducts } from "../components/admin/UpdateProducts";
import { AddProducts } from "../components/admin/AddProducts";
import { AllProducts } from "../components/admin/AllProducts";
import { Users } from "../components/admin/Users";
import { AllCommande } from "../components/admin/AllCommande";
import Dashboard from "../components/admin/Dashboard";
import { AllPaiement } from "../components/admin/AllPaiement";
import {
  AuthAdmin_layout,
  AuthClient_layout,
  Authentified_layout,
} from "../components/Layout";
import Devis from "../pages/Devis";

const Routers = () => {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Produit />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>

      {/* Routes protégées  Utilisateurs*/}
      <Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/devis" element={<Devis />} />
      </Route>

      {/* Routes protégées  Admin*/}
      <Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/all-products" element={<AllProducts />} />
        <Route path="/dashboard/add-products" element={<AddProducts />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route
          path="/dashboard/update-products/:id"
          element={<UpdateProducts />}
        />
        <Route path="/dashboard/all-commande" element={<AllCommande />} />
        <Route path="/dashboard/all-paiement" element={<AllPaiement />} />
      </Route>
    </Routes>
  );
};

export default Routers;
