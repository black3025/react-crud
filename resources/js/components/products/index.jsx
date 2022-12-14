import axios from 'axios'
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const navigate = useNavigate()
  const newProduct =()=>{
    navigate("product/new")
  }

  useEffect(()=>{
    getProducts()
  })

  const getProducts = async()=>{
    await axios.get("/api/get_all_product")
      .then(({data})=>{
        console.log('data',data.products)
      })
  }

  return (
    <div className='container'>
        <div className="products_list">
          <div className="titlebar">
            <div className="titlebar_item">
                <h1>Products</h1>
            </div>
            <div className="titlebar_item">
                <div className="btn" onClick={()=>newProduct()}>
                  Add product
                </div>
            </div>
          </div>
          <div className="table">
              <div className="list_header">
                  <p>Image</p>
                  <p>Products</p>
                  <p>Type</p>
                  <p>Inventory</p>
                  <p>Actions</p>  
              </div>
              <div className="list_items">
                <img src="" height="40px" />
                <a href="">Product name</a>
                <a href="">Category</a>
                <p>50</p>
                <div>
                  <button className="btn-icon success">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button className="btn-icon danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
        </div>
        </div>
    </div>
  )
}

export default index
