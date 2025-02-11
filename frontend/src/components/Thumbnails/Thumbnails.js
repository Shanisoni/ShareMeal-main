import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // For Favorite Toggle
import classes from "./thumbnails.module.css";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id} className={classes.card}>
          <Link to={`/food/${food.id}`}>
            {/* Food Image */}
            <div className={classes.imageContainer}>
              <img className={classes.image} src={food.imageUrl} alt={food.name} />
              <span className={classes.favorite}>
                {food.favorite ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
            </div>

            {/* Food Details */}
            <div className={classes.content}>
              <h3 className={classes.name}>{food.name}</h3>

              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin} className={classes.tag}>
                      <FaLocationDot /> {origin}
                    </span>
                  ))}
                </div>
              </div>

              <div className={classes.details}>
                <span className={classes.tag}>City: {food.tags}</span>
                <span className={classes.expiry}>⏳ {food.cookTime} Hours</span>
              </div>

              <div className={classes.priceContainer}>
                <h5 className={classes.price}>₹{food.price}</h5>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
