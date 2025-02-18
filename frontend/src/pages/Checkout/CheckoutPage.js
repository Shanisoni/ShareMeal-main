import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createOrder } from '../../services/orderService';
import classes from './checkoutPage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';

export default function CheckoutPage() {  
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    if (!order.addressLatLng) {
      toast.warning('Please select your location on the map');
      return;
    }

    await createOrder({ ...order, name: data.name, address: data.address });
    navigate('/payment');
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.card}>
        <Title title="Checkout" fontSize="2rem" className={classes.checkoutTitle} />
          <div className={classes.inputs}>
            <Input
              defaultValue={user.name}
              label="Full Name"
              {...register('name')}
              error={errors.name}
            />
            <Input
              defaultValue={user.address}
              label="Delivery Address"
              {...register('address')}
              error={errors.address}
            />
          </div>
          <OrderItemsList order={order} />
        </div>

        <div className={classes.card}>
          <Title title="Choose Your Location" fontSize="2rem" />
          <Map
            location={order.addressLatLng}
            onChange={(latlng) => {
              setOrder({ ...order, addressLatLng: latlng });
            }}
          />
        </div>

        <div className={classes.buttonContainer}>
          <Button type="submit" text="Proceed to Payment" className={classes.paymentButton} />
        </div>
      </form>
    </div>
  );
}
