import { useEffect, useState } from 'react';
import classes from './foodsAdminPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { deleteById, getAll, search } from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';
import Search from '../../components/Search/Search';
import { toast } from 'react-toastify';

export default function FoodsAdminPage() {
  const [foods, setFoods] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadFoods = async () => {
      const foodsData = searchTerm ? await search(searchTerm) : await getAll();
      setFoods(foodsData);
    };

    loadFoods();
  }, [searchTerm]); // Only depends on searchTerm

  const FoodsNotFound = () => {
    if (foods.length > 0) return null;

    return searchTerm ? (
      <NotFound linkRoute="/admin/foods" linkText="Show All" />
    ) : (
      <NotFound linkRoute="/dashboard" linkText="Back to dashboard!" />
    );
  };

  const deleteFood = async (food) => {
    const confirmed = window.confirm(`Delete Food ${food.name}?`);
    if (!confirmed) return;

    await deleteById(food.id);
    toast.success(`"${food.name}" Has Been Removed!`);
    setFoods((prevFoods) => prevFoods.filter((f) => f.id !== food.id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <h1>Manage foods</h1>
        <Search
          searchRoute="/admin/foods/"
          defaultRoute="/admin/foods"
          margin="1rem 0"
          placeholder="Search Foods"
        />
        <Link to="/admin/addFood" className={classes.add_food}>
          Add Food +
        </Link>
        <FoodsNotFound />
        {foods.map((food) => (
          <div key={food.id} className={classes.list_item}>
            <img src={food.imageUrl} alt={food.name} />
            <Link to="" className="foodName">{food.name}</Link>
            <div className={classes.actions}>
              <Link to={`/admin/editFood/${food.id}`}>Edit</Link>
              <Link onClick={() => deleteFood(food)}>Delete</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
