import { useParams } from 'react-router-dom'
// import './EditProduct.css'
import Data from '../../Data/Data';
import { useState } from 'react';
import category from '../../Data/Category';
import ViewMainImage from '../../components/ViewImage/ViewMainImage';
import ViewAllImages from '../../components/ViewImage/ViewAllImages';

function AddProduct({ setIsModelOpen }) {
  const params = useParams()
  const id = params.id;

  // Agar id available hai toh use Data se load karenge, nahi toh blank form
  const defaultData = id ? Data[id] : {
    Title: '',
    Description: '',
    Price: '',
    Discount: '',
    Quantity: '',
    Gender: 'man',
    Category: category[0]
  };

  const base = "/src/assets/stock/";
  const [input, setInput] = useState({
    title: defaultData.Title,
    description: defaultData.Description,
    price: defaultData.Price,
    discount: defaultData.Discount,
    quantity: defaultData.Quantity,
    gender: defaultData.Gender,
    category: defaultData.Category
  });

  const onClose = () => {
    setIsModelOpen(false)
  }

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div id="editProductContainer">
      <div id="editProductBox">
        <form>
          <ViewMainImage data={defaultData}/>
          <ViewAllImages data={defaultData}/>
          {/* Input fields */}
          <div className="inputBox">
            <label htmlFor="title">Title</label>
            <input type="text" className='inputs' name='title' onChange={handleChange} value={input.title} />
          </div>
          <div className="inputBox">
                        <label htmlFor="description">Description</label>
                        <input type="text" className='inputs' name='description' onChange={(e) => { handleChange(e) }} value={input.description} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="price">Price</label>
                        <input type="text" className='inputs' name='price' onChange={(e) => { handleChange(e) }} value={input.price} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="discount">Discount</label>
                        <input type="text" className='inputs' name='discount' onChange={(e) => { handleChange(e) }} value={input.discount} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" className='inputs' name='quantity' onChange={(e) => { handleChange(e) }} value={input.quantity} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className='inputs' value={input.gender} onChange={(e) => { handleChange(e) }}>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className='inputs' value={input.category} onChange={(e) => { handleChange(e) }}>
                            {
                                category.map((v, i) => {
                                    return (
                                        <option value={v} key={i}>{v}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

          <button
            style={{
              backgroundColor: '#6B7280',
              color: 'white',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              borderRadius: '0.375rem',
              marginRight: '0.5rem',
              border: 'none',
              cursor: 'pointer',
            }}
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
