import React from 'react';

export default function Title({ title }) {
  const titleStyle = {
    fontSize: '27px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '14px',
    marginBottom: '10px',
    whiteSpace: 'nowrap', // Prevents text wrapping
    color: 'rgba(24, 81, 185, 0.94)',
    padding: '10px 20px',
    borderRadius: '8px',
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    maxWidth: '100%',

    // Responsive styles
    '@media (max-width: 768px)': {
      fontSize: '22px',
      padding: '8px 15px',
    },

    '@media (max-width: 480px)': {
      fontSize: '18px',
      padding: '6px 12px',
    },
  };

  return <h1 style={titleStyle}>{title}</h1>;
}



