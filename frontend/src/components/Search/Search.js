import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';
import { BiSearchAlt } from "react-icons/bi";


Search.defaultProps = {
  searchRoute: '/search/',
  defaultRoute: '/',
  placeholder: 'Search your city !',
};

export default function Search({
  searchRoute,
  defaultRoute,
  margin,
  placeholder,
}) {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? '');
  }, [searchTerm]);

  const search = async () => {
    term ? navigate(searchRoute + term) : navigate(defaultRoute);
  };
  return (
    <div className={classes.container} style={{ margin }}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
      />
      <button onClick={search}><BiSearchAlt size={30} /></button>
    </div>
  );
}
