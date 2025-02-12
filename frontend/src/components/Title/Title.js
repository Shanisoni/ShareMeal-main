import { FamilyRestroom } from '@mui/icons-material';
import React from 'react';

export default function Title({ title }) {
  const titleStyle = {
    fontSize: '27px',
    // fontWeight: 'bolder',
    marginTop: '14px',
    FamilyRestroom: 'Arial, sans-serif',
    marginBottom: '10px',
    // marginLeft: '-190px',
    color: 'rgba(24, 81, 185, 0.94)',
    padding: '10px 20px',
    // border: '3px solid rgba(13, 85, 240, 0.64)', // Simple border
    borderRadius: '8px',
    display: 'inline-block',
  };

  return <h1 style={titleStyle}>{title}</h1>;
}
