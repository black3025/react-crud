import React from 'react'
import {Routes, Route} from 'react-router-dom'

import IndexProduct from '../components/products/index'
import NewProduct from '../components/products/new'
import NotFound from '../components/NotFound'

const router = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<IndexProduct/>} />
            <Route exact path='/product/new' element={<NewProduct/>} />
            <Route exact path='/*' element={<NotFound/>} />
        </Routes>

    </div>
  )
}

export default router
