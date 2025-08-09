import './ProductCard.css'

function ProductCard({mainImage, title, price, editAndDeleteBtn}) {
  return (
    <div id="productCardContainer">
        <img src={mainImage} alt="" className='productMainImage'/>
        <div className="titleAndPrice">
            <p>{title}</p>
            <p>Rs. {price}</p>
        </div>
        <div className="editAndDeleteBtn">
          {
            editAndDeleteBtn
          }
        </div>
    </div>
  )
}

export default ProductCard