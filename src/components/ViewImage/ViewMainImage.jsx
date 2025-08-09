import React, { useState } from 'react'

function ViewMainImage({data}) {
    const base = "/src/assets/stock/";
    const [mainImage, setMainImage] = useState(data.MainImage)

    let handleChange = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setMainImage(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    return (
        <div className="inputBox">
            <label htmlFor="mainImage">Main Image</label>
            <input type="file" className='inputs' name="mainImage" id='mainImage' accept='.jpg,.jpeg,.png,.webp' onChange={(e) => { handleChange(e) }} />
            <img src={mainImage === data.MainImage ? base+mainImage : mainImage} alt="" className='mainImage'/>
        </div>
    )
}

export default ViewMainImage