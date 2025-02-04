import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import StarRating from '../StarRating/StarRating';
import classes from './thumbnails.module.css';
import { FaLocationDot } from "react-icons/fa6";
export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={``}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not
                }`}
              >
                
              </span>
              {/* <div className={classes.stars}>
                <StarRating stars={food.stars} />
              </div> */}
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map(origin => (
                    <span key={origin}><FaLocationDot />  {origin}</span>
                    
                  ))}
                </div>
                <h5>City : {food.tags}</h5>
                
                
              </div>
              <div className={classes.price}>
              <div className={classes.cook_time}>
                  Expiry Time : {food.cookTime} Hours
                </div>
                <h5 className='price'>{food.price} </h5>
                
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
