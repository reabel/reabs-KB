import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import Ingredients from "./pages/Ingredients";
import NoPage from "./pages/NoPage";
/**
 * Layour gets rendered by default as the core component, default / home is home 
 * although it might be good to rename it dashboard or something similar
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path='recipe-add' element={<AddRecipe />} />
          <Route path='recipe' element={<Recipe />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
