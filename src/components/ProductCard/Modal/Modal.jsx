import React from 'react'

const Modal = ({isModelOpen, setIsModelOpen, children}) => {
    if(!isModelOpen) return null;
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(31, 41, 55, 0.9)', // bg-gray-800 bg-opacity-90
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50
        }}>
            <div style={{
                backgroundColor: '#ffffff', // bg-white
                borderRadius: '0.5rem', // rounded-lg
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                padding: '1.5rem', // p-6
                width: '100%',
                maxWidth: '48rem',
                maxHeight:'40rem', 
                position:"scroll"// max-w-md
            }}>
                <button 
                    style={{
                        position: 'absolute',
                        top: '1rem', // top-4
                        right: '1rem', // right-4
                        color: '#d1d5db', // text-gray-300
                        fontSize: '1.875rem', // text-3xl
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }} 
                    onClick={() => setIsModelOpen(false)}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal