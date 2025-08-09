
import "./ProductManagement.css"
import { GoPlus } from 'react-icons/go'
import './ProductManagement.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Data from '../../Data/Data'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import EditProduct from '../EditProduct/EditProduct'
import AddProduct from '../Add/AddProduct'
import Modal from '../../components/ProductCard/Modal/Modal'

function ProductManagement() {
  const base = "/src/assets/stock/"
  const [data, setData] = useState(Data)
  const [isModelOpen, setIsModelOpen] = useState(false)

  let handelDelete = (id) => {
    setData(data.filter((v, i) => v.id !== id))
  }

  return (
    <div id="productManagementContainer">
      <div id="productAddBtnBox">
        <button 
          className='text-blue-500 hover:underline mt-1 ml-2'
          onClick={() => setIsModelOpen(true)}
        >
        <GoPlus/>  Add
        </button>
      </div>

     <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
  <AddProduct setIsModelOpen={setIsModelOpen} className="addpr" />
</Modal>


      <div id="productManagementBox">
        {data.map((product, index) => {
          return (
            <ProductCard
              mainImage={base + product.MainImage}
              title={product.Title.slice(0, 120) + "..."}
              price={product.Price}
              key={index}
              editAndDeleteBtn={
                <>
                  <NavLink to={`/edit/${product.id}`}>
                    <button className='productEditBtn'>Edit</button>
                  </NavLink>
                  <button className='productDeleteBtn' onClick={() => { handelDelete(product.id) }}>Delete</button>
                </>
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductManagement
