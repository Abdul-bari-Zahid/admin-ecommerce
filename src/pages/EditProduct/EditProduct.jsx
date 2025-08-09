import { useParams } from 'react-router-dom'
import './EditProduct.css'
import Data from '../../Data/Data';
import { useState } from 'react';
import category from '../../Data/Category';
import ViewMainImage from '../../components/ViewImage/ViewMainImage';
import ViewAllImages from '../../components/ViewImage/ViewAllImages';

function EditProduct({ setIsModelOpen}) {
    const params = useParams()
    const onClose = () =>{
 
setIsModelOpen(false)
  }
    const id = params.id;
    const data = Data[id];
    const base = "/src/assets/stock/";
    const [input, setInput] = useState({ title: data.Title, description: data.Description, price: data.Price, discount: data.Discount, quantity: data.Quantity, gender: data.Gender, category: data.Category })
    let handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }))
        console.log(URL.createObjectURL(e.target.files[0].name))
    }
    return (
        <div id="editProductContainer">
            <div id="editProductBox">
                <form action="">
                    <ViewMainImage data={data}/>
                    <ViewAllImages data={data}/>
                    <div className="inputBox">
                        <label htmlFor="title">Title</label>
                        <input type="text" className='inputs' name='title' onChange={(e) => { handleChange(e) }} value={input.title} />
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
    backgroundColor: '#6B7280', // bg-gray-500
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
  onClick={() => setIsModelOpen(false)}
>
  Cancel
</button>
<button
  style={{
    backgroundColor: '#3B82F6', // bg-blue-500
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
  }}
  onClick={onClose}
>
  Save Address
</button>

                    {/* <button className='saveBtn'>Save</button> */}
                </form>
            </div>
        </div>
    )
}

export default EditProduct