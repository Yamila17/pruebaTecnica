import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LayoutDrug from '../layout/LayoutDrug'
import DrugInformation from '../pages/DrugInformation'
import LayoutHome from '../layout/LayoutHome'
import Home from '../pages/Home'

const RouterProvider = () => {
    
  return (
    <Routes>
        
    <Route path="/" element={<LayoutHome />}>
      <Route index element={<Home />} />
    </Route>

    <Route path="/drug" element={<LayoutDrug />}>
    <Route path=":applicationNumber" element={<DrugInformation />} />
    </Route>

  </Routes>
  )
}

export default RouterProvider
