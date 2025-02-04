import React from 'react';

export default function Title({ title, fontSize, margin }) {
  return <h1 style={{ fontSize:'22px',fontWeight:'bolder', marginTop:'10px', marginBottom:'10px', marginLeft:'10px', color: 'white' }}>{title}</h1>;
}
