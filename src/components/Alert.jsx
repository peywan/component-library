import React from 'react';

const Alert = ({ color, icon, children }) => {
    const backgroundColors = {
        success: '#d4edda',
        warning: '#fff3cd',
        error: '#f8d7da'
    };

    const textColor = {
        success: '#155724',
        warning: '#856404',
        error: '#721c24'
    };

    return (
        <div style={{
            backgroundColor: backgroundColors[color] || '#f8f9fa',
            color: textColor[color] || '#383d41',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            {icon && React.createElement(icon)}
            {children}
        </div>
    );
};

export default Alert;
