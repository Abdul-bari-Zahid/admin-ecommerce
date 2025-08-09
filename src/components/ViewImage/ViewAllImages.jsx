import React, { useState } from 'react'

function ViewAllImages({ data }) {
    const base = "/src/assets/stock/";
    const [images, setImages] = useState(data.images || [])

    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        const readers = [];

        files.forEach((file) => {
            const reader = new FileReader();
            readers.push(
                new Promise((resolve) => {
                    reader.onload = (event) => {
                        resolve(event.target.result);
                    };
                    reader.readAsDataURL(file);
                })
            );
        });

        Promise.all(readers).then((results) => {
            setImages(results); // array of base64 image strings
        });
    };

    return (
        <div className="inputBox">
            <label htmlFor="images">Images</label>
            <input type="file" id='images' className='inputs' name='images' multiple accept='.jpg,.jpeg,.png,.webp' onChange={(e) => { handleChange(e) }} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {(Array.isArray(images) ? images : [images]).map((img, index) => (
                    <img
                        key={index}
                        src={img.startsWith('data:') ? img : base + img}
                        alt={`img-${index}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ViewAllImages